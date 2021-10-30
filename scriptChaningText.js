//////// Exercise one ////////

var helloDiv= document.getElementById("mydiv");
helloDiv.addEventListener( 'mouseover', function(){
    helloDiv.innerHTML="Can i help you ?";
    
});
helloDiv.addEventListener('mouseout' , function(){
    helloDiv.innerHTML="Hello World ";
}) ;
 


/////// Exercise two ////////
   
    const box = document.getElementById('mydiv2');
    //let counter = 0;
    
    box.style.background = 'blue';
    
    box.addEventListener('click', () => {
        //counter++;
        changeColor();
    });
    
    function changeColor() {
        //if (counter === 1)
        if (box.style.background === 'blue')
            box.style.background = 'red';
        else if (box.style.background === 'red')
            box.style.background = 'green';
        else if (box.style.background === 'green')
            box.style.background = 'blue';
        //else counter=0;
        
    }

    // remember there is tow way of solution , other one define counter more better 
    
    
    




