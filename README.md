# Khalid Oni - Space Tourism website solution from Frontend Mentor

This is my solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

The Challenge on front-end Mentor specified that  upon completion of the project, users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information


## My process

### Built with
- HTML
  - Semantic HTML5 markup
  - BEM syntax
- CSS
  - SCSS/SASS
  - CSS custom properties
  - CSS Grid
  - Flexbox
  - Mobile-first workflow
- JS
  - Vanilla JS
  - Fetch method
  - Async/Await functions


### What I learned

- COMMENTS: 
  Commenting in code; before this project, I'd never commented on any of my previous codes, I learnt how useful comments could be while coding the project
```js
    // change currently selected option
  let currentOption = document.querySelector('.whiteBack')
  const opt = options[i].contains(event.target)
  if(opt){
    currentOption.classList.remove('whiteBack')
    option.classList.add('whiteBack')
  }
  else{
    option.classList.remove('whiteBack')
  }
```
- FETCH AND ASYNC/AWAIT: 
  Fetch data from a local json file;  I recently learnt Fetch alongside async/await and I was able use both of these to execute the project
```js
const destImg = document.querySelector('.dmain__img')
const destContainer = document.querySelector('.dmain__options')
const destName = document.querySelector('.dmain__title')

 const Destination = async()=>{
     let data = await fetch('data.json');
     let orgData = await data.json()
     let destination =await  orgData.destinations
  }
}
```
- DRY CODE/TAKING MULTIPLE DIFFERENT APPROACHES TO SOLVING A PROBLEM: 
  I experienced first hand what a DRY code looks like by doing the same thing using two different approaches; for the destination section I wrote a seperate HTML file for each option, which littered my code with lots of extra files, a problem that was solved for the crew and technology sections by using JS to manipulate the content of the page depending on the selected option
```js
        // MAKE OPTION CIRCLES DISPLAY SPECIFIC CONTENTS
        let options = document.querySelectorAll('.option')
        options.forEach((option, i)=>{
      
            // initially hide all other content apart from the default commander's info
            if(Bio.classList.contains('crewBio-0' ) ){
                option.classList.remove('open')
                Name.classList.add('show')
                pic.classList.add('show')
```

### Continued development

During the course of completing this project, I came to realize some weak points or areas where I need to look to improve on in future projects, some of th
- BETTER JS LOGIC: 
 I need to learn how to solve problems better with Javascript, I was stuck at some point during the project
- ERROR HANDLING: 
  I need to learn how to fetch data from API's and handle errors better as there was little to no error handling in the code, And on some pages of the project, the console displays some uncaught errors, which needlessly to say do not disrupt the code
- UNEQUAL IMAGES: 
  Working with pictures of unequal sizes and aspect ratio: the pictures provided for the crew section were of unequal sizes and that didnt reflect well in the transition from one page to another


## Author

- Twitter - [@onikhalidayo](https://www.twitter.com/onikhalidayo)
- Gmail - [onikhalidayo@gmail.com](mailto@onikhalidayo)
- Github - [Oni Khalid Ayòbámi](https://github.com/onikhalid)


