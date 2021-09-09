const teamBtn = document.querySelector('.team-popup-wrap .popup .popup-header .btn-close');
const teamWrapper = document.querySelector('.team-popup-wrap')
const teamImages = document.querySelectorAll('.container .core-members-wrap .core-members img')
const teamWrapperImage = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top > img');
const teamWrapperPerson = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top .team-content > p');
const teamWrapperPosition = document.querySelector('.team-popup-wrap .popup .popup-content .popup-top .team-content > span');

let width = window.innerWidth>0 ? window.innerWidth : screen.width;
if(width<1199) addImageListener();

window.addEventListener('resize', e => {
    width = window.innerWidth>0 ? window.innerWidth : screen.width;
    width<=1199 ? addImageListener() : removeImageListener();
}) 

function addImageListener(){
    // open team-wrapper on image click
    teamImages.forEach(element => {
        person = element.nextElementSibling.children[0].textContent;
        position = element.nextElementSibling.children[1].textContent;
        element.addEventListener('click', imageEvent, true)
    });

    // close team-wrapper on close button click
    teamBtn.addEventListener('click', () => {
        teamWrapper.style.display = 'none';
    })
}

function removeImageListener(){
    teamImages.forEach(element => {
        person = element.nextElementSibling.children[0].textContent;
        position = element.nextElementSibling.children[1].textContent; 
        element.removeEventListener('click', imageEvent,true);
    })
}

function imageEvent(e){
    teamWrapper.style.display = 'block';
    const image = e.target.currentSrc;

    teamWrapperPerson.textContent = person;
    teamWrapperPosition.textContent = position;        
    teamWrapperImage.src = image;
}


