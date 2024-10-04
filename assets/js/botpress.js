<button id="chatWithArthsathi">Chat with Arthsathi</button>;

document
  .getElementById("chatWithArthsathi")
  .addEventListener("click", function () {
    var script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    document.head.appendChild(script1);

    var script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2024/10/03/17/20241003171827-927X92KD.js";
    script2.defer = true;
    document.head.appendChild(script2);
  });
