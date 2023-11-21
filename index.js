import { WallpaperData } from "./data.js"

const generateBtn = document.getElementById("generate")
const downloadBtn = document.getElementById('downloadFile')
const wallpaper = document.getElementById('wallpaper')

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * WallpaperData.length)
    return WallpaperData[randomNumber]
}
function render(){
    const wallpaperObject = generateRandomNumber()
        wallpaper.innerHTML = `
        <img src="./images/${wallpaperObject.images}" class="wall">
        `
        
        downloadBtn.innerHTML = `
        <a href="./images/${wallpaperObject.images}" download="ImageWIz" id="download">
            <button>Download</button>
        </a>
        `  
}

generateBtn.addEventListener('click', function(){
    render()
})