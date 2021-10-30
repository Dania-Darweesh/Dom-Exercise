const show1 =document.getElementById("p1_show");
const text1=document.getElementById("p1_text"); 
const show2 =document.getElementById("p2_show");
const text2=document.getElementById("p2_text"); 
const show3 =document.getElementById("p3_show");
const text3=document.getElementById("p3_text"); 
const hide1=document.getElementById("hide1");
const hide2=document.getElementById("hide2");
const hide3=document.getElementById("hide3");
text1.style.display='none';
text2.style.display='none';
text3.style.display='none';

show1.addEventListener('click',function(){
    text1.style.display='block';
})
show2.addEventListener('click',function(){
    text2.style.display='block';
})
show3.addEventListener('click',function(){
    text3.style.display='block';
})
hide1.addEventListener('click',function(){
    text1.style.display='none';
})
hide2.addEventListener('click',function(){
    text2.style.display='none';
})
hide3.addEventListener('click',function(){
    text3.style.display='none';
})