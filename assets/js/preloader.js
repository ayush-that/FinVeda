function hidePreloader() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
}

setTimeout(hidePreloader, 3000);