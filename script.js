let btn = document.getElementById('surpriseBtn');

let message = document.querySelector('.MsgContainer');


btn.addEventListener('click', () => {
  // 1. Show the message
    message.style.display = 'flex';

    // 2. Hide the button (optional, but looks cleaner)
    btn.style.display = 'none';

    document.body.style.backgroundImage = 'linear-gradient(30deg, #2d5e50, #725d38, #1c3347)';
    document.getElementsByTagName('h2')[0].style.color = '#b09b76';
    document.getElementsByTagName('p')[0].style.color = '#bbab91';
    document.getElementsByTagName('p').style.animation = 'shake 5s infinite';
    

  
 
    if(mainTitle) {
      mainTitle.style.display = 'none';
    }
});
