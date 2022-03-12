# my-modal
This script makes using modals as simple and fast as possible. You need to enter several necessary values and the magic will happen.The script can be used for different modal windows, configuring each window separately. It includes such necessary things as: fixing a bug with jumping content due to the disappearance of the scroll, popping up a modal window after a certain time (by default it is 60 seconds), as well as popping up a modal window when the end of the page is reached.

### HTML structure:
    
    <button class="popup-trigger"></button>

    <div class="popup" data-modal>
        <div class="popup__dialog">
            <div class="popup__content">
                <button class="popup-close">&times;</button>
                
            </div>
        </div>
    </div>
    
Ideal HTML code structure (сlass names can be changed). The style.css file has ready-made classes for this structure.

**Attention, if you use several different modal windows on your page, you must add the [data-modal] (as in the example above) attribute so that no bugs arise**

### JS settings

    <script>
        modal({
            modalSelector: '.popup',
            triggerSelector: '.popup-trigger',
            closeSelector: '.popup-close',
            modalSelectorDisplay: '(default: block)',
            timeSelector: '.popup',
            timeSelectorDisplay: '(default: block)',
            timeShowModal: (default: 60000),
            scrollSelector: '.popup',
            scrollSelectorDisplay: '(default: block)',
        });
    </script>
   
1. modalSelector – modal window selector (in the example above, this ***'.popup'***).
2. triggerSelector – the button to open modal window (in the example above, this ***'.popup-trigger'***).
3. closeSelector – the button to closes modal window (in the example above, this ***'.popup-close'***).
4. modalSelectorDisplay – the display value that the modal window should have (for example: display-block, flex, etc.). Default value – ***display: block***.
5. timeSelector – an optional attribute that fits the same modal window selector to make it appear after a certain amount of time (default is 60 seconds) (for example, ***'.popup'***).
6. timeSelectorDisplay – the display value that a modal should have that pops up after a certain amount of time (for example: display-block, flex, etc.). Default value – ***display: block***.
7. timeShowModal – time after which the modal window will appear (default is 60 seconds). ***Time is written in milliseconds*** (1 second = 1000 milliseconds). No quotes, dots, etc.
8. scrollSelector – an optional attribute that matches the same modal selector to open if the user has scrolled to the bottom of the page (for example, ***'.popup'***).
9. scrollSelectorDisplay – the display value that the modal should have to opens if the user has scrolled to the bottom of the page (for example: display-block, flex, etc.). Default value – ***display: block***.
   
**modalSelector,triggerSelector and closeSelector are required attribute!**

    
