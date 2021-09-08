# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Challenges](#challenges)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./component.png)


### Links

- Solution URL: [Solution](https://github.com/dstrickl7/Bootstrap-Practice/tree/master/interactive-pricing-component)
- Live Site URL: [Pricing Component](https://dstrickl7.github.io/Bootstrap-Practice/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap 5
- SCSS
- Javascript


### What I learned

I wanted an easy project to practice learning Bootstrap and, let me tell you, I definitely bit off more than I could chew with this one. I did not find styling as simple using pre-defined classes as it is when you're doing everything yourself. I struggled with fighting my urge to just use SCSS or CSS when I should search for the appropriate Bootstrap class. Because of the amount of time I spent trying to find the correct class and what classes I needed in order to style things how I wanted them, this project took me much longer than I anticipated. 

- Styling the slider was more complicated than expected. I learned I had to use webkit and -moz to style it.
- ~~In order to achieve a lot of the styling, I needed to customize Bootstrap's SASS files.~~

Once you get a better grasp on the classes and grid system, it's easier to handle than I originally thought.


### Challenges
- The slider: Just about every aspect of the slider challenged me from the styling to the logic. The slider (HTML range) used uneven steps and that tripped me up at first. I made a 10-1000 range with a 10 step. This made the lower values very difficult to find and skewed the slider. After some googling and perusing of Stack Overflow, I noticed most people were using JQuery to accomplish uneven steps. Since I'm using vanilla Javascript, I had to work out how on my own (which surprising, was far easier than I expected).
- Styling larger screens: With CSS, I usually only need some minor tweaks to go from mobile to large screen layouts. ~~However, with Bootstrap, I didn't use the grid layout and I think that took away from the responsiveness Bootstrap is known for. Instead of going back and rewriting my code using the grid and columns, I decided to just use media queries.~~ I found that trying to adjust the SCSS from scratch was very impractical and caused many layout issues. It was far better and easier to add the rows and columns and adjust my layout using Bootstrap classes.

### Continued development
- Use the grid system for more complex layouts
- Learn how to customize Bootstraps SCSS files


### Useful resources

- [MDN Docs](https://www.example.com) - This is my go to resource for syntax and trying to understand new concepts
- [Bootstrap Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - I was all over the documentation pages like the Fire Nation on the Avatar


## Author

Danielle S.
- Frontend Mentor - [@dstrickl7](https://www.frontendmentor.io/profile/dstrickl7)
- Website - [Curly Coder](https://www.curlycoder.com)
- Github - [dstrickl7](https://github.com/dstrickl7)


## Acknowledgments

-Kevin Lewis' post for styling sliders [Post](https://dev.to/_phzn/styling-range-sliders-with-css-4lgl)
