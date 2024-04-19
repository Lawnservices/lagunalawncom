document.addEventListener('DOMContentLoaded', function(){
const lagunes = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 160) {
      lagunes.style.backgroundColor = '#333';  
       
    } else {
       lagunes.style.backgroundColor = '#003349';  
        
    }
});


 

 
    
 


 


});