// Prepare the menu data
var menuData = {
    menuItems: [
        { label: 'Home', link: '#' },
        { label: 'Dashboard', link: '#' },
        { label: 'Sign in', link: '#' },
        { label: 'Log in', link: '#' },
        { label: 'Log out', link: '#' }
    ]
};

// Compile the Handlebars template
var template = Handlebars.compile(document.getElementById('top-menu-template').innerHTML);

// Render the menu using the template and data
document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuContainer.innerHTML = template(menuData);
    }
});
