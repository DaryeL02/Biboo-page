console.log('Its working!');
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

let pos = 1;

function nextSong(){
    if(pos == 3){
      document.getElementById('myButton').innerText = document.getElementById(String(1)).alt;
      document.getElementById('button_link').href = document.getElementById('link_' + String(1)).href;
      pos = 1;
    }
    else{
      document.getElementById('myButton').innerText = document.getElementById(String(pos+1)).alt;
      document.getElementById('button_link').href = document.getElementById('link_' + String(pos+1)).href;
      pos++;
    }
    
}
function previousSong(){
  if(pos == 1){
    document.getElementById('myButton').innerText = document.getElementById(String(3)).alt;
    document.getElementById('button_link').href = document.getElementById('link_' + String(3)).href;
    pos = 3;
  }
  else{
    document.getElementById('myButton').innerText = document.getElementById(String(pos-1)).alt;
    document.getElementById('button_link').href = document.getElementById('link_' + String(pos-1)).href;
    pos--;
  }

}