
const isBanner = () =>{
  const banner = document.getElementById("banner");
  if(banner === null){
    return false;
  } else{
    return true;
  }
}

const setNavbar = () =>{
  if(!isBanner()){
    console.log(document.getElementById("myNavbar"));
    document.getElementById("myNavbar").classList.add("scroled");
    document.getElementById("logo_img").src = "/public/images/logo_black.png";
    document.getElementById("bell_img").src = "/public/images/bell_icon_black.png";
    document.getElementById("burger_img").src = "/public/images/burger_icon_black.png";
  }
}

window.onscroll = () => {
  if(isBanner()){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("myNavbar").classList.add("scroled");
      document.getElementById("logo_img").src = "/public/images/logo_black.png";
      document.getElementById("bell_img").src = "/public/images/bell_icon_black.png";
      document.getElementById("burger_img").src = "/public/images/burger_icon_black.png";
    } else {
      document.getElementById("myNavbar").classList.remove("scroled");
      document.getElementById("logo_img").src = "/public/images/logo.png";
      document.getElementById("bell_img").src = "/public/images/bell_icon.png";
      document.getElementById("burger_img").src = "/public/images/burger_icon.png";
    }
  }
}





// window.onscroll = function() {myFunction()};  
// function myFunction() {
//   if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {
//     document.getElementById("myNavbar").classList.add("scroled");
//     document.getElementById("logo_img").src = "/public/images/logo_black.png";
//     document.getElementById("bell_img").src = "/public/images/bell_icon_black.png";
//     document.getElementById("burger_img").src = "/public/images/burger_icon_black.png";
//   } else {
//     document.getElementById("myNavbar").classList.remove("scroled");
//     document.getElementById("logo_img").src = "/public/images/logo.png";
//     document.getElementById("bell_img").src = "/public/images/bell_icon.png";
//     document.getElementById("burger_img").src = "/public/images/burger_icon.png";
//   }
// }

function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("sidenav-bg").style.width = "100%";
    document.getElementById("sidenav-bg").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("sidenav-bg").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
  }