// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal');
//     closeModal(modal);
//   });
// });

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active');
//   modals.forEach(modal => {
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add('active');
//   overlay.classList.add('active');
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }

const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const gallery = document.querySelector('.gallery');
const overlay = document.getElementById('overlay');

gallery.addEventListener('click', onGalleryClick);
overlay.addEventListener('click', onOverlayClick);
closeModalButton.addEventListener('click', onCloseButtonClick);

function onGalleryClick(e) {
  if (e.target.dataset.modalTarget) {
    openModal(modal);
  }
}

function onCloseButtonClick() {
  closeModal(modal);
}

function onOverlayClick() {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
