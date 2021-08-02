const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//Title
const title = document.querySelector('title');
title.textContent = "Great Idea!";

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Nav bar
const navBar = document.querySelectorAll('a');
const navOne = navBar[0];
const navTwo = navBar[1];
const navThree = navBar[2];
const navFour = navBar[3];
const navFive = navBar[4];
const navSix = navBar[5];

navOne.textContent = siteContent["nav"]["nav-item-1"];
navTwo.textContent = siteContent["nav"]["nav-item-2"];
navThree.textContent = siteContent["nav"]["nav-item-3"];
navFour.textContent = siteContent["nav"]["nav-item-4"];
navFive.textContent = siteContent["nav"]["nav-item-5"];
navSix.textContent = siteContent["nav"]["nav-item-6"];

//Main Site Header
const ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent["cta"]["h1"];

//Get Started Button
const getStarted = document.querySelector('button');
getStarted.textContent = siteContent["cta"]["button"];

//Code Image
const codeImage = document.getElementById('cta-img');
codeImage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content h4 headers and paragraphs
const textBoxes = document.getElementsByClassName('text-content');
//Features
const featuresBox = textBoxes[0];
const featuresTitle = featuresBox.querySelector('h4');
const featuresParagraph = featuresBox.querySelector('p');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
featuresParagraph.textContent = siteContent["main-content"]["features-content"];
//About
const aboutBox = textBoxes[1];
const aboutTitle = aboutBox.querySelector('h4');
const aboutParagraph = aboutBox.querySelector('p');
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
aboutParagraph.textContent = siteContent["main-content"]["about-content"];
//Services
const servicesBox = textBoxes[2];
const servicesTitle = servicesBox.querySelector('h4');
const servicesParagraph = servicesBox.querySelector('p');
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
servicesParagraph.textContent = siteContent["main-content"]["services-content"];
//Product
const productBox = textBoxes[3];
const productTitle = productBox.querySelector('h4');
const productParagraph = productBox.querySelector('p');
productTitle.textContent = siteContent["main-content"]["product-h4"];
productParagraph.textContent = siteContent["main-content"]["product-content"];
//Vision
const visionBox = textBoxes[4];
const visionTitle = visionBox.querySelector('h4');
const visionParagraph = visionBox.querySelector('p');
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
visionParagraph.textContent = siteContent["main-content"]["vision-content"];