const teamBtn = document.querySelector('.team-popup-wrap .popup .popup-header .btn-close');
const teamWrapper = document.querySelector('.team-popup-wrap')
const teamImages = document.querySelectorAll('.container .core-members-wrap .core-members img')
console.log(teamImages);

// open team-wrapper on image click
teamImages.forEach(element => {
    element.addEventListener('click', () => {
        teamWrapper.style.display = 'block';
    })
});

// close team-wrapper on close button click
teamBtn.addEventListener('click', () => {
    teamWrapper.style.display = 'none'
})

