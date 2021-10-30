const songTextInput=document.getElementById("songTextInput");
const addButton=document.getElementById("addButton");
const playlist=document.getElementById("playlist");


addButton.addEventListener('click',function(){
    const song = document.createElement('li');
    song.setAttribute('id','song');
    song.appendChild(document.createTextNode(songTextInput.value));
    playlist.appendChild(song);
    //// delete song 
    const delete_song = document.createElement('button');
    delete_song.setAttribute('id','delet')
    delete_song.textContent = 'Remove';
    song.appendChild(delete_song);
    //// clear input text
    songTextInput.value=null;
    /////
    const delete_buttons = document.querySelectorAll('button');
    delete_buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        })
   })


})
