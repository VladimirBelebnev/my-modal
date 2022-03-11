import modal from './modal'; 

modal({
    modalSelector: '.popup',
    modalSelectorDisplay: '(default: block)'
    triggerSelector: '.popup-trigger',
    closeSelector: '.popup-close',
    timeSelector: '.popup',
    timeShowModal: (default: 60000),
    scrollSelector: '.popup'
});
