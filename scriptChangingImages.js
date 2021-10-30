const option=document.getElementById("Imageslist");
const image=document.querySelector(".img");
option.onchange=()=>{
    if(option.value==="norway"){
      image.src="img/norway.png"
    }
    else if (option.value==="germany"){
        image.src="img/germany.png";
    }
    else image.src="img/jordan.png";

}

  
