function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1)  {
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

function firstrun(){
  document.getElementById('expandedImg').src = "https://trackworthy.com/wp-content/uploads/2016/12/01-2018-mercedes-amg-gt-r-fd-1.jpg"
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



  function change (){
    setTimeout(color, 2000)

  }
  function color(){
    document.getElementById("image1").setAttribute("style","-webkit-filter:grayscale(0)",);
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
    var expandVid = document.getElementById("vid");
    document.getElementById('expandedImg').style.display='none'
    document.getElementById('vid').style.display = 'block'
    // var imgText = document.getElementById("imgtext");
    expandVid.src ="https://www.youtube.com/embed/TxHEHWxMpWw";
    expandVid.parentElement.style.display = "block";
    // expandVid.parentElement.style.width = "67vw";
    // expandVid.parentElement.style.height = "auto";

    
  }

  function show() {
    let tamar = document.getElementById('morecars');
    tamar.style.display ='block'
  }
  function hide() {
    let tamar = document.getElementById('morecars');
    tamar.style.display ='none'
  }


  function show1() {
    let tamar = document.getElementById('morecars1');
    tamar.style.display ='block'
  }
  function hide1() {
    let tamar = document.getElementById('morecars1');
    tamar.style.display ='none'
  }