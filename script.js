65 % 'use strict';


$(document).ready(function() {
    /*

        first 3 - move down (bold text)

        next 4 - move to the right (shrink box)(bold text)

        logoslide - move down

    */
    const $responsiveClass = 'slide-text-styles';

    const slide_images = [{
            image: 'images/iphone-call-declined.jpg',
            text: '<strong>Unknown Number</strong> (Predictive Dialling Calls or Silent Calls) <strong>Harassment</strong>',
            defaultStyles: true,
            styles: {
                // top: '45%',
                width: '70%'
            }
        },
        {
            image: 'images/Legal-Action.jpg',
            text: '<strong>Debt Collection</strong> (Letters, Email, SMS Text) <strong>Harassment</strong>',
            defaultStyles: true,
            styles: {
                // top: '65%'
                width: '70%'
            }
        },
        {
            image: 'images/Royal-Courts-of-Justice.jpg',
            text: '<strong>Defence to a Legal Claim</strong> (Judgement, Charging Order, Attachment of Earnings)',
            defaultStyles: true,
            styles: {
                // top: '65%'
                width: '70%'
            }
        },
        {
            image: 'images/Justice.jpg',
            text: '<strong>Experience</strong>',
            defaultStyles: false,
            responsiveStyling: true,
            responsiveClass: $responsiveClass
        },
        {
            image: 'images/Halsburys-Statutes-1unn4zh.jpg',
            text: '<strong>Expertise</strong>',
            defaultStyles: false,
            responsiveStyling: true,
            responsiveClass: $responsiveClass
        },
        {
            image: 'images/Birningham-Skyline.jpg',
            text: '<strong>Innovation</strong>',
            defaultStyles: false,
            responsiveStyling: true,
            responsiveClass: $responsiveClass
        },
        {
            image: 'images/sunsethome.jpg',
            text: '<strong>0800 007 6014</strong>',
            defaultStyles: false,
            responsiveStyling: true,
            responsiveClass: $responsiveClass
        },
        {
            image: 'images/Birmingham-canal.jpg',
            text: '3lc logo',
            logo: true,
            logo_addr: 'images/3lc-clear.png',
            defaultStyles: true,
            styles: {
                top: '55%'
            }
        }
    ];

    function initSlideshow() {

        let image_container = document.querySelector('.slide-container');

        for (var i = 0; i < slide_images.length; i++) {
            let slideBox = document.createElement('div'),
                slidetext = document.createElement('h2'),
                imgtag = document.createElement('img');

            // add classes to slidebox element
            slideBox.classList.add('slidebox', 'slide-box-' + (i + 1), 'animated');

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

            if (slide_images[i].responsiveStyling) {
                slidetext.classList.add(slide_images[i].responsiveClass);
            }

            if (slide_images[i].defaultStyles) {
                for (var key in slide_images[i].styles) {
                    if (slide_images[i].styles.hasOwnProperty(key)) {
                        slidetext.style[key] = slide_images[i].styles[key];
                    }
                }
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

        let slide_class = '.slide-box-',
            counter = 1,
            addanimatedClass = 'fadeOut',
            removeanimatedClass = 'fadeIn',
            $time = 3500,
            totalSlides = slide_images.length;

        function startSlide() {
            if (counter > totalSlides) {
                counter = 1;
                resetSlide();
                return;
            }

            let slide_name = slide_class + counter,
                current_slide = document.querySelector(slide_name);

            console.log('current slide');
            console.log(current_slide);

            addanimatedClass = 'fadeOut';

            if (current_slide.classList.contains('fadeIn')) {
                current_slide.classList.remove('fadeIn');
            }

            current_slide.classList.add(addanimatedClass);

            console.log('interval');
            console.log(slide_class + counter);


            counter++;
        }

        function resetSlide() {
            clearInterval(slide_interval);
            let all_slidebox = document.querySelectorAll('.slidebox');

            console.log('reset slide');

            all_slidebox[7].classList.remove('fadeOut');
            all_slidebox[7].classList.add('fadeIn');



            setTimeout(function() {
                for (var i = 0; i < (all_slidebox.length - 1); i++) {
                    all_slidebox[i].classList.remove('fadeOut');
                }

                slide_interval = setInterval(startSlide, $time);
            }, 1500);

        }

        let slide_interval = setInterval(startSlide, $time);

        // function restartTimeline() {
        //     setTimeout(function() {
        //         tl.restart();
        //     }, 500)
        //
        // }
        //
        // let tl = new TimelineMax();
        //
        // tl.to('.slide-box-1', 2, {
        //     opacity: 0,
        //     delay: 3,
        //     left: '-100%',
        //     ease: Power1.easeIn,
        //     onComplete: function() {
        //
        //     }
        // });
        //
        // tl.to('.slide-box-2', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        //
        // tl.to('.slide-box-3', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        //
        // tl.to('.slide-box-4', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        // tl.to('.slide-box-5', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        // tl.to('.slide-box-6', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        // tl.to('.slide-box-7', 2, {
        //     opacity: 0,
        //     // left: '-100%',
        //     delay: 3,
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //
        //     }
        // });
        //
        // tl.eventCallback('onComplete', restartTimeline);


    }



})