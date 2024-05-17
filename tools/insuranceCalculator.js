function calculateInsurance() {
    // Retrieve input values
    var Sumassured = parseFloat(document.getElementById('Sumassured').value);
    var Policyterm = parseFloat(document.getElementById('Policyterm').value);
    var Annualpremium = parseFloat(document.getElementById('Annualpremium').value);
    var ReversionaryBonus = parseFloat(document.getElementById('ReversionaryBonus').value);
    var TerminalBonus = parseFloat(document.getElementById('TerminalBonus').value);
    var surrendered = document.getElementById('surrendered').checked;
    var death = document.getElementById('death').checked;



    // Calculate Insurance
    let ReversionaryBonusAmt =(ReversionaryBonus/100)* Sumassured* Policyterm;
    let TerminalBonusAmt =(TerminalBonus/100)* Sumassured;
    let TotalBonus;
    let maturityAmt;
    let TotalPremium=Annualpremium* Policyterm;
    let netGain;


    if(surrendered)
        {
            TotalBonus = ReversionaryBonusAmt;
            TerminalBonusAmt=0;
            maturityAmt=Sumassured+TotalBonus;
            netGain=maturityAmt-TotalPremium;
        }
        else
        {
            TotalBonus = ReversionaryBonusAmt+TerminalBonusAmt;
            maturityAmt=Sumassured+ TotalBonus;
            netGain=maturityAmt-TotalPremium;
        }
    // Display results
    document.getElementById('ReversionaryBonusAmt').textContent = 'INR ' + ReversionaryBonusAmt.toFixed(2);
    document.getElementById('TerminalBonusAmt').textContent = 'INR ' + TerminalBonusAmt.toFixed(2);
    document.getElementById('TotalBonus').textContent = 'INR ' + TotalBonus.toFixed(2);
    document.getElementById('TotalPremium').textContent = 'INR ' + TotalPremium.toFixed(2);
    document.getElementById('netGain').textContent = 'INR ' + netGain.toFixed(2);
}