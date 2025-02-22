class ToggleTheme{
    _parentElement = document.getElementById('theme-toggle');

    toggle(){
        this._parentElement.addEventListener('click', function(){
            const themeLink = document.getElementById('theme-link');
            const currentTheme = themeLink.getAttribute('href');
            const newTheme = ( currentTheme === 'src/light-theme.css' ) || ( currentTheme === '/index.c79d6d80.css' ) ? '/index.a8529a97.css' : '/index.c79d6d80.css';
            themeLink.setAttribute('href', newTheme);
        
            // // Update button text
            const btn = document.querySelector('#toggle_write')
            const buttonText = newTheme === '/index.c79d6d80.css' ? 'Dark Mode' : 'Light Mode';
            btn.textContent = buttonText;
        });
    }
    
}

export default new ToggleTheme();