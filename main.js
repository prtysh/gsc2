// gsap.to("img", {
//     scrollTrigger: {
//         trigger: 'img',
//         start: "top center"
//     },
//     x: 1000
// })


// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: 'img',
//         start: "top top"
//     }
// });

// tl.from("img", {
//     x: 200,
//     opacity: 0,
//     duration: 2
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 2
});