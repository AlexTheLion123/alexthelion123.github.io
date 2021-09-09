const teamBtn = document.querySelector('.team-popup-wrap .popup .popup-header .btn-close');
const teamWrapper = document.querySelector('.team-popup-wrap')
const teamImages = document.querySelectorAll('.container .core-members-wrap .core-members img')
const teamWrapperImage = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top > img');
const teamWrapperPerson = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top .team-content > p');
const teamWrapperPosition = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top .team-content > span');


// open team-wrapper on image click
teamImages.forEach(element => {
    element.addEventListener('click', e => {
        teamWrapper.style.display = 'block';
        const image = e.target.currentSrc;
        const person = element.nextElementSibling.children[0].textContent;
        const position = element.nextElementSibling.children[1].textContent;        


        teamWrapperPerson.textContent = person;
        teamWrapperPosition.textContent = position;        
        teamWrapperImage.src = image;
    })
});

// close team-wrapper on close button click
teamBtn.addEventListener('click', () => {
    teamWrapper.style.display = 'none';
})

