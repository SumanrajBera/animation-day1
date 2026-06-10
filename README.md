# Animation - day 1
- Starting point: From where our animation starts.
- Ending point: Where our animation ends
- Duration: In how much time our animation completes
- Easing 
- Path of the animation

## Web animation
- Types: CSS animation and JS animation
- JS animation flaws: Lots of code, manual optimization and complex.
- Solution to this was animation library

## GSAP basic syntax
```
gsap.method("element", {properties});
```

## What are the methods in GSAP?
- to: This is used for taking the animation from start to end state (Starts from by default position).
- from: This is used for going from ending state to default/starting state.
- fromTo: This takes to property brackets one for from and one for to. (We define the duration and delay in the second bracket because two happens here and we want animation in the second one)
- set
  
## Selecting elements in gsap
```
gsap.to(".box") -> For single
gsap.to([".box", ".box2"]) -> For multiple elements
```

## Properties in GSAP for animation
- Properties basicallyall the CSS properties and some special ones (exclusive from GSAP)
```
Note: GSAP by default for length based properties makes use of px. And to provide another unit make it a string
```
- Duration property: Its the time to complete our animation
```
Note: By default time based properties uses ms. So we need to do some calculation for making it in seconds.
```
- Delay property: Its time our animation pauses for before starting