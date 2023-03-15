function changeBackground () {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  const backgroundColorText = document.getElementById("background-color")
  backgroundColorText.innerHTML = "Código hex #" + randomColor;
  backgroundColorText.style.padding = "5px"
    }
    
function overcharge () {   
        var overCharge = window.setInterval(function(){
            changeBackground()
        }, 100)
        
        overCharge
    }