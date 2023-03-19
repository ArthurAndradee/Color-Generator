const textChange = document.getElementById("textChange")
const overridetext = document.getElementById("overridetext")
const backgroundColorText = document.getElementById("background-color")

function changeBackground () {

  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  backgroundColorText.innerHTML = "Código hex #" + randomColor;
  backgroundColorText.style.padding = "5px"

}
    
function overcharge () {
  override = window.setInterval(function(){
    changeBackground()
  }, 100)

  textChange.className = ""
  textChange.style.display = "none"
  textChange.innerHTML = ""

  overridetext.className = "btn btn-outline-dark btn-lg px-5"
  overridetext.style.display = "block"
  overridetext.innerHTML = "Terminar eplipesia"

}

function stopOvercharge() {
  clearInterval(override)

  document.body.style.backgroundColor = "white"
  backgroundColorText.style.padding = "0px"
  backgroundColorText.innerHTML = ""

  overridetext.className = ""
  overridetext.style.display = "none"
  overridetext.innerHTML = ""

  const textChange = document.getElementById("textChange")
  textChange.className = "btn btn-outline-dark btn-lg px-5"
  textChange.style.display = "block"
  textChange.innerHTML = "Modo epilepsia"
}