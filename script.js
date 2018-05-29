'use strict';


$(document).ready(function() {

    const slide_images = [{
            image: 'images/iphone-call-declined.jpg',
            text: 'Unknown Number (Predictive Dialling Calls or Silent Calls Harassment)'
        },
        {
            image: 'images/Legal-Action.jpg',
            text: 'Debt Collection (Letters, Email, SMS Text Harassment)'
        },
        {
            image: 'images/Royal-Courts-of-Justice.jpg',
            text: 'Defence to  a Legal Claim (Judgment, Charging Order, AoE'
        },
        {
            image: 'images/Justice.jpg',
            text: 'Experience'
        },
        {
            image: 'images/Halsburys-Statutes-1unn4zh.jpg',
            text: 'Expertise'
        },
        {
            image: 'images/Birningham-Skyline.jpg',
            text: 'Innovation'
        },
        {
            image: 'images/sunsethome.jpg',
            text: '0800 007 6014 '
        },
        {
            image: 'images/Birmingham-canal.jpg',
            text: '3lc logo',
            logo: true,
            logo_addr: 'images/3lc-clear.png'
        }
    ];

    function initSlideshow() {

        let image_container = document.querySelector('.slide-container');

        for (var i = 0; i < slide_images.length; i++) {
            let slideBox = document.createElement('div'),
                slidetext = document.createElement('h2'),
                imgtag = document.createElement('img');

            // add classes to slidebox element
            slideBox.classList.add('slidebox', 'slide-box-' + (i + 1));

            imgtag.setAttribute('src', slide_images[i].image);
            imgtag.setAttribute('class', 'image-' + (i + 1));

            if (!slide_images[i].logo) {
                slidetext.innerHTML = slide_images[i].text;
            } else {
                let logo_img = document.createElement('img');
                logo_img.setAttribute('src', slide_images[i].logo_addr);

                //append logo to h2
                slidetext.appendChild(logo_img);
                slidetext.classList.add('justify-content-center', 'align-items-center');
            }

            //append our content to the slidebox
            slideBox.appendChild(imgtag);
            slideBox.appendChild(slidetext);


            // add slidebox to container
            image_container.insertBefore(slideBox, image_container.childNodes[0]);
            // image_container.appendChild(slideBox);
        }

        return true;
    }

    if (initSlideshow()) {

        function restartTimeline() {
            setTimeout(function() {
                tl.restart();
            }, 500)

        }

        let tl = new TimelineMax();

        tl.to('.slide-box-1', 2, {
            opacity: 0,
            delay: 3,
            left: '-100%',
            ease: Power1.easeIn,
            onComplete: function() {

            }
        });

        tl.to('.slide-box-2', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });

        tl.to('.slide-box-3', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });

        tl.to('.slide-box-4', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });
        tl.to('.slide-box-5', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });
        tl.to('.slide-box-6', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });
        tl.to('.slide-box-7', 2, {
            opacity: 0,
            // left: '-100%',
            delay: 3,
            ease: Power1.easeInOut,
            onComplete: function() {

            }
        });

        // tl.eventCallback('onComplete', restartTimeline);


    }



})