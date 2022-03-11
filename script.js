import modal from './modal'; 

modal({
    modalSelector: '.popup',
    triggerSelector: '.popup-trigger',
    closeSelector: '.popup-close',
    timeSelector: '.popup',
    timeShowModal: 60000,
    scrollSelector: '.popup'
});