// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


window.addEventListener('load', function () {
    const line1Element = document.getElementById('typing-text');
    const line2Element = document.getElementById('typing-text2');
    const textToTypeLine1 = `Hi, It's me Fahim`;
    const textToTypeLine2 = `I am a Fresh Software Engineer.`;
    
    let charIndexLine1 = 0;
    let charIndexLine2 = 0;
    
    function typeTextLine1(callback) {
        if (charIndexLine1 < textToTypeLine1.length) {
          line1Element.textContent += textToTypeLine1.charAt(charIndexLine1);
          charIndexLine1++;
          setTimeout(() => typeTextLine1(callback), 100);
        } else {
          callback();
        }
      }
      
      function typeTextLine2() {
        if (charIndexLine2 < textToTypeLine2.length) {
          line2Element.textContent += textToTypeLine2.charAt(charIndexLine2);
          charIndexLine2++;
          setTimeout(typeTextLine2, 100);
        }
      }
      // Start the typing effect for the first line
      typeTextLine1(() => {
        // When the first line is finished, start typing the second line
        typeTextLine2();
      });
  });
  
  
  
  