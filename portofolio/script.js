


const intro = document.querySelectorAll('.intro');
const leftWing = document.querySelectorAll('.leftWing');
const rightWing = document.querySelectorAll('.rightWing');
const wing = document.querySelectorAll('.leftWing');
const centerTransition = document.querySelectorAll('.centerTransition');
const centerPopup = document.querySelectorAll('.centerPopup');
const backTransition = document.querySelectorAll('.backTransition');
const welspan = document.querySelectorAll('.welspan');
const centerspan = document.querySelectorAll('.centerspan');
const lastspan = document.querySelectorAll('.lastspan');
const backdrop = document.querySelectorAll('.backdrop');


// document.addEventListener('click', function() {

//     leftWing.classList.toggle('activeLeftWing');
// });



// window.addEventListener('DOMContentLoaded', () => {
//     wing.forEach((w, index) => {
//         setTimeout(() => {
//             w.classList.add('activeLeftWing');
//         }, 1000);
//     });

//     wing.forEach((w, index) => {
//         setTimeout(() => {
//             w.classList.add('activeRightWing');
//         }, 1000);
//     });

// });

window.addEventListener('DOMContentLoaded', () => {
    // 1. wing
    leftWing.forEach((w, index) => {
                setTimeout(() => {
                    w.classList.add('activeLeftWing');
                }, 4600);
            });
    rightWing.forEach((w, index) => {
                setTimeout(() => {
                    w.classList.add('activeRightWing');
                }, 4600);
            });
    centerPopup.forEach((w, index) => {
                setTimeout(() => {
                    w.classList.add('glowEffect');
                }, 3600);
            });
    centerPopup.forEach((w, index) => {
                setTimeout(() => {
                    w.classList.add('scaleEffect');
                }, 5300);
            });
    centerPopup.forEach((w, index) => {
                setTimeout(() => {
                    w.classList.add('fadeEffect');
                }, 10500);
            });

    // 2. text transition
    centerTransition.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('centerTransitionActivated');
        }, 1500);
    });
    backTransition.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('backTransitionActivated');
        }, 2850);
    });
    
    // 3. text sliding
    welspan.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('welspanTrans');
        }, 2800);
    });
    lastspan.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('lastspanTrans');
        }, 2800);
    });
    centerspan.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('centerspanActivated');
        }, 2800);
    });

    // 4. intro end
    intro.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('introFinish');
        }, 11000);
    });
    
    backdrop.forEach((w, index) => {
        setTimeout(() => {
            w.classList.add('backdropFade');
        }, 12000);
    });
});


