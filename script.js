let img = document.createElement("img");
let qr = document.querySelector(".qr-code");


qr.appendChild(img);
function generate(){
  



  
  
  
  
  
  
  
  
  
  

  
  
  
    let input = document.getElementById("input");
    
    if(input.value){
       input.style.borderColor = "#c7c7c7";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${input.value}`;
        
        setTimeout(show, 200);
  function show(){
  
  btndo.style.display="block"
  
  
  }
        

    }
    else{
        input.style.borderColor="red";
        return false;
    }
    input.value = "";


}


let btnDownload = document.querySelector('#mybutton');
let imgdwn = document.querySelector('img');

let btndo = document.getElementById("maindwnbtn");

btnDownload.addEventListener('click', () => {
    let imagePath = imgdwn.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    let gotstr = str.substring(str.lastIndexOf('=') + 1 );
    let format = ".jpg";
    return  gotstr.concat(format);
    
    
}
