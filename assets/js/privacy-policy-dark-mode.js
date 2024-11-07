(function() {
    function addDarkModeToggle() {
        const navbar = document.querySelector('.navbar-nav');
        if (navbar) {
            const listItem = document.createElement('li');
            listItem.className = 'nav-item no-underline align-self-center';
            
            const button = document.createElement('button');
            button.id = 'dark-mode-toggle';
            button.innerHTML = '🌞';
            
            listItem.appendChild(button);
            navbar.appendChild(listItem);
            
            button.addEventListener('click', toggleDarkMode);
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateToggleButton(isDarkMode);
    }

    function updateToggleButton(isDarkMode) {
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (toggleButton) {
            toggleButton.textContent = isDarkMode ? '🌙' : '🌞';
        }
    }

    function initDarkMode() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (storedDarkMode || (prefersDarkMode && storedDarkMode !== 'false')) {
            document.body.classList.add('dark-mode');
        }

        updateToggleButton(document.body.classList.contains('dark-mode'));
    }

    document.addEventListener('DOMContentLoaded', function() {
        addDarkModeToggle();
        initDarkMode();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {
        if (localStorage.getItem('darkMode') === null) {
            document.body.classList.toggle('dark-mode', e.matches);
            updateToggleButton(e.matches);
        }
    });
})();