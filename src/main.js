import gsap from 'gsap'

// gsap.to(".box", {
//     x: 800,
//     duration: 1,
//     delay: 0.6
// })

// gsap.from(".box", {
//     x: 800,
//     duration: 1,
//     delay: 0.6
// })

gsap.fromTo(".box", {
    x: 0,
    duration: 1,
    delay: 0.6
}, {
    x: 400,
})
