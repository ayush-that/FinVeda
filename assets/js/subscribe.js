const successNotif = document.getElementById('successnotification');
    const closeSuccess = document.getElementById('closeSuccessNotification');
    const successMessage = document.getElementById('successmsg');

    closeSuccess.addEventListener('click', () => {
        successNotif.style.display = 'none';
    })
    
    function showSuccess() {
        console.log('yee')
        successNotif.style.display = 'flex';
        setTimeout(() => {
            successNotif.style.display = 'none';
        }, 2000);     
      }


document.addEventListener('DOMContentLoaded', () => {
    const subscribeSubmit = document.getElementById('subscribe-btn');
    subscribeSubmit.addEventListener('click', (event) => {
        const emailInput = document.getElementById('news-email');
        console.log("ksdjfh");
        
            if (emailInput.value === '') {
                // Empty input
                return;
            }
            
            event.preventDefault();
            showSuccess();
            openModal();
        });
})