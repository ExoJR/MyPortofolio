'use strict';

// NAVBAR


const btnNavbar = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');


// add event to all nav link
for (let i = 0; i < btnNavbar.length; i++) {
    btnNavbar[i].addEventListener("click", function () {
  
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.remove("hide");
          btnNavbar[i].classList.remove("hide");
          pages[i].classList.add("active");
          btnNavbar[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.add("hide");
          btnNavbar[i].classList.add("hide");
          pages[i].classList.remove("active");
          btnNavbar[i].classList.remove("active");
        }
      }
  
    });
  }


  // Button project displayed


  document.addEventListener('DOMContentLoaded', function() {
    const figuresImgs = document.querySelectorAll('.figure-img');

    figuresImgs.forEach((fig) => {
        fig.addEventListener('click', () => {
            const btnsProject = fig.closest('.item-project').querySelectorAll('.button-6');
            const btnsDiv = fig.closest('.item-project').querySelector('.btn-project');
            const areButtonsVisible = btnsProject[0].style.display === 'block';
            const areDivVisible = btnsDiv.style.opacity === '1';

            btnsProject.forEach((btn) => {
                btn.style.display = areButtonsVisible ? 'none' : 'block';
            });

            btnsDiv.style.opacity = areDivVisible ? '0' : '1';
        });
    });
});


// Modal


const avatarModal = document.querySelectorAll('.content-testimonials');
const displayModal = document.querySelector('.modal-overlay')
const btnClose = document.querySelector('.close-modal')


const closeModal = ()=>{
  displayModal.classList.add('hidden');

};

const openModal = ()=>{
  displayModal.classList.remove('hidden');

};


btnClose.addEventListener('click',()=>{
  closeModal()
});


avatarModal.forEach((avatar)=>{
    avatar.addEventListener('click',()=>{

    const avatarTitle = avatar.querySelector('h4').textContent;
    const avatarParagraph = avatar.querySelector('p').textContent;
    const avatarPhoto = avatar.querySelector('img').src

    const modalContent = document.querySelector('.modal-content');
    let modalTitle = modalContent.querySelector('h4')
    let modalParagraph = modalContent.querySelector('p')
    let modalPhoto = modalContent.querySelector('img');


    modalTitle.textContent = avatarTitle;
    modalParagraph.textContent = avatarParagraph;
    modalPhoto.src = avatarPhoto;


     openModal()
    })
});

displayModal.addEventListener('click',(event)=>{
  if (event.target === displayModal) {
    closeModal();
    
  }
});


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !displayModal.classList.contains('hidden')) {
    closeModal();
  }
});




// efect scroll




window.addEventListener('scroll',(e)=>{
  let elemTarg = document.querySelector('.skills-items');
  let subElementTarg1 = elemTarg.querySelector('.skills1')
  let subElementTarg2 = elemTarg.querySelector('.skills2')
  let subElementTarg3 = elemTarg.querySelector('.skills3')
  let subElementTarg4 = elemTarg.querySelector('.skills4')
  let elemTargPosition = elemTarg.getBoundingClientRect()
  

  if(elemTargPosition.top < window.innerHeight - 155 && elemTargPosition.top > 0){
    subElementTarg1.classList.add('sk1')
    subElementTarg2.classList.add('sk2')
    subElementTarg3.classList.add('sk3')
    subElementTarg4.classList.add('sk4')
    subElementTarg1.style.background = 'var(--bg-second-main-2)'
    subElementTarg2.style.background = 'var(--bg-second-main-2)'
    subElementTarg3.style.background = 'var(--bg-second-main-2)'
    subElementTarg4.style.background = 'var(--bg-second-main-2)'
  }else{
    console.log("hidden");
}
});



// Show contact


const btnShowContact = document.querySelector('.btn-show-contact')
const contactInfo = document.getElementById('side-bar-content-info')
const sideBarHeight = document.getElementById('side-bar')

btnShowContact.addEventListener('click', ()=>{
  contactInfo.classList.toggle('active')

  if (contactInfo.classList.contains("active")) {
    btnShowContact.style.color = 'var(--color-3)'
    contactInfo.style.visibility = 'visible';
    contactInfo.style.opacity = '1';
    sideBarHeight.style.maxHeight = '530px'
} else {
    btnShowContact.style.color = 'white'
    contactInfo.style.visibility = 'hidden';
    contactInfo.style.opacity = '0'
    if (window.innerWidth <= 579) {
      sideBarHeight.style.maxHeight = '110px'; 
    } else {
      sideBarHeight.style.maxHeight = '180px';
    }
}
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 579) {
    sideBarHeight.style.maxHeight = '110px';
  } else if (window.innerWidth >= 1251){
    sideBarHeight.style.maxHeight = '771px';
    contactInfo.style.visibility = 'visible';
    contactInfo.style.opacity = '1';
  } else {
    sideBarHeight.style.maxHeight = '180px';
  }
});


