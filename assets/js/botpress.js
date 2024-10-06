<button id="chatWithArthsathi">Chat with Arthsathi</button>;

document
  .getElementById("chatWithArthsathi")
  .addEventListener("click", function () {
    var script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    document.head.appendChild(script1);

    var script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/5e160793-5606-4412-ba4c-337e416f14fe/webchat/config.js";
    script2.defer = true;
    document.head.appendChild(script2);
  });
