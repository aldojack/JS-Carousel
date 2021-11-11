# Javascript Carousel

## About
Inspired by recent learning to create a fully functioning JS carousel

## Features
- Shows 3 images
- Auto play on page loading
- Previous and Next buttons to navigate through carousel
- Previous and next buttons labeled with aria label to be more accessible friendly
- Title auto populates depending on slide
- Button to show which slide you are actively on
- Page button is dynamic and can quickly change slide page
- Keyframe animations for slides changing
## What I learnt
- Keyframes
- Aria Label
- For of loops

## Continued development
After this I want to continue my learning on some concepts that are still quite new to myself.  

- Aria(Accessible Rich Internet Applications) - Something I have seen in many code before now but had no idea the purpose ofthese attributes.  ARIA is adding in attributes to give more meaning to elements for people that have disabillities and use screen readers.  According to [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) developers should prefer using semantic HTML elements over Aria but this isn't always available so is still worth while in learning.  
```html
<button id="carousel-button-prev" class = "carousel-button" aria-lables="Previous slide"><</button>
```
- Keyframes - Keyframes rule specificies the animation code.  For best browser support we should always include 0% and 100% but you can have more such as 25$, 50% etc whatever suits the needs.  
```css
.carousel-item-visible{
    display: block;
    animation: fadeVisibility 1s; /*Calling the fadeVisibility and goes from 0 to 100 in 1 second*/
}

@keyframes fadeVisibility{ /*Current slide opacity starts at 0% to 100%*/
    0%{
        opacity: 0; 
    }
    100%{
        opacity: 1;
    }
}
```

- for of - Similar to *'for in'* however is more suitable when having to loop through a sequence in a particular order.  Whereas for in is more suited to iterating through when order is not important, less suitable for arrays.  

## Links

Source Code: [Github code](https://github.com/aldojack/JS-Carousel)

Live Page: [Github Pages](https://aldojack.github.io/JS-Carousel)

