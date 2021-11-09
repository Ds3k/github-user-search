let input = document.querySelector('.search-input');
let searchButton = document.querySelector('.search-button');
let name = document.querySelector('#name');
let desktopImage = document.querySelector('.desktop-image');
let mobileImage = document.querySelector('.mobile-image');
let ref = document.querySelector('#ref');
let bio = document.querySelector('.bio');
let repo = document.querySelector('#repo');
let followers = document.querySelector('#followers');
let following = document.querySelector('#following');
let loc = document.querySelector('#location');
let twitter = document.querySelector('#twitter');
let website = document.querySelector('#website');
let company = document.querySelector('#company');


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let result = input.value;
    fetch(`https://api.github.com/users/${result}`)
        .then(response => response.json())
        .then(data => {
            name.innerHTML = data.login;
            desktopImage.src = data.avatar_url;
            mobileImage.src = data.avatar_url;
            ref.innerHTML = data.login;
            ref.href = data.html_url;
            bio.innerHTML = data.bio;
            repo.innerHTML = data.public_repos;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;
            loc.innerHTML = data.location;
            twitter.innerHTML = data.twitter_username;
            website.innerHTML = data.blog;
            company.innerHTML = data.company;
            input.value = '';
            
        }).catch(err => {
            console.log('rejected', err);
        })
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.querySelector('.theme-name').innerHTML = 'DARK';
        document.querySelector('.theme-image').src = 'assets/icon-moon.svg';
    } else {
        setTheme('theme-dark');
        document.querySelector('.theme-name').innerHTML = 'LIGHT';
        document.querySelector('.theme-image').src = 'assets/icon-sun.svg';
    }
}
