const btn = document.querySelector('#start')
btn.addEventListener('click', start_recognition)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnYoutube').addEventListener('click', (ev) => {
        ev.preventDefault();
        const key=document.getElementById("youtubeKey").value.toLowerCase()
        const link=document.getElementById("youtubeLink").value
        youtubeObj = new youtubeLink(key,link)
        if(youtubeArray===null)
            youtubeArray=[youtubeObj]
        else
            youtubeArray.push(youtubeObj);
        localStorage.setItem( "youtubeKeys",JSON.stringify(youtubeArray));
      })
})