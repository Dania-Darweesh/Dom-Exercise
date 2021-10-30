
const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");
const divText = document.getElementById("divText");
const italic = document.getElementById("italic");
const bold = document.getElementById("bold");
const underline = document.getElementById("underline");

fontFamily.onchange =()=> {
    if (fontFamily.value === 'Oxygen')
        divText.style.fontFamily = 'Oxygen';
    else if (fontFamily.value === 'Sevillana')
        divText.style.fontFamily = 'Sevillana';
    else{ divText.style.fontFamily = 'normal';}
}

fontSize.onchange =()=> {
    if (fontSize.value === '20px')
        divText.style.fontSize = '20px';
    else if (fontSize.value === '30px')
        divText.style.fontSize = '30px';
    else{ divText.style.fontSize = '15px';}
}

bold.onclick =()=> {
    if (bold.checked) {
        divText.style.fontWeight = 'bold';
    }
    else{ divText.style.fontWeight = 'normal';}
}
italic.onclick =()=> {
    if (italic.checked) {
        divText.style.fontStyle = 'italic';
    }
    else{ divText.style.fontStyle = 'normal';}
}

underline.onclick =()=> {
    if (underline.checked) {
        divText.style.textDecoration = 'underline';
    }
    else{ divText.style.textDecoration = 'normal';}
}


