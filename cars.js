function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// function navbar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

function firstrun() {
  document.getElementById('expandedImg').src = "https://trackworthy.com/wp-content/uploads/2016/12/01-2018-mercedes-amg-gt-r-fd-1.jpg"
}
function firstrun1() {
  document.getElementById('expandedImg').src = "https://www.wsupercars.com/wallpapers/BMW/2019-BMW-i8-V3-1080.jpg"
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
var slideIndex = 1;
var t;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex = slideIndex + n;
  clearTimeout(t);
  showSlides(slideIndex);
  console.log(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n == undefined) {
    n = ++slideIndex;
  }

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  t = setTimeout(showSlides, 3000);
}



function color1() {
  document.getElementById('image1').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color2() {
  document.getElementById('image2').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color3() {
  document.getElementById('image3').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color4() {
  document.getElementById('image4').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color5() {
  document.getElementById('image5').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color6() {
  document.getElementById('image6').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color7() {
  document.getElementById('image7').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}

function color8() {
  document.getElementById('image8').setAttribute("style", "-webkit-filter:grayscale(0)", "   transition: all 0s ease-in-out;   ");
  console.log("is color changing")
}


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  document.getElementById('expandedImg').style.display = 'block'
  // document.getElementById('vid').style.display = 'none'
  // var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  // imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";


}

function myFunction1(iframes) {
  document.getElementById('expandedImg').style.display = 'none'
  document.getElementById('vid').style.display = 'block'
  // var imgText = document.getElementById("imgtext");
  expandVid.parentElement.style.display = "block";


}

function show() {
  let tamar = document.getElementById('morecars');
  tamar.style.display = 'block'
}

function hide() {
  let tamar = document.getElementById('morecars');
  tamar.style.display = 'none'
}


function show1() {
  let tamar = document.getElementById('morecars1');
  tamar.style.display = 'block'
}

function hide1() {
  let tamar = document.getElementById('morecars1');
  tamar.style.display = 'none'
}