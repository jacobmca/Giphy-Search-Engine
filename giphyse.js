let button = document.querySelector("#getData")

button.addEventListener("click",()=>{
  sendApiRequest()
})

async function sendApiRequest() {
  let userInput = document.querySelector("#input").value
  let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=sPLXKaBbPyMOvEToJ0uclrTaOxIKOj2z&q=${userInput}')
  console.log(response);
  let gifs = await response.json()
  console.log(gifs)
  useApiData(gifs)
};

function useApiData(gifs){
  document.querySelector("#wrapper").innerHTML = `<img src = "${gifs.data[2].images.original.url}">`
}
