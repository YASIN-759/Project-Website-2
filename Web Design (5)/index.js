// let tl = gasp.timeline()
gsap.to(".textbox2 #beforepic",{
    left:20,
    delay:0.3,
    duration:1
})
gsap.to(".textbox2 #afterpic",{
    left:20,
    delay:0.5,
    duration:1
})
gsap.to(".text h1",{
    top:0,
    ease:Expo.easeInOut,
    duration:2,
    stagger:2.5
})
gsap.to(".text h1",{
    delay:2,
    top:"-100%",
    ease:Expo.easeInOut,
    stagger:2.5
})
gsap.to(".imagecontainer .dev h1", {
    ease:Expo.easeInOut,
    left:"5%",
    delay:6,
    duration:3,
    scale:1
})