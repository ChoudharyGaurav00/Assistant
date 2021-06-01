const btn = document.querySelector('#start')
btn.addEventListener('click', start_recognition)


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnYoutube').addEventListener('click', (ev) => {
        ev.preventDefault();
        const key = document.getElementById("youtubeKey").value.toLowerCase()
        const link = document.getElementById("youtubeLink").value
        youtubeObj = new youtubeLink(key, link)
        if (youtubeArray === null)
            youtubeArray = [youtubeObj]
        else {
            if (youtubeKeyUpdate(key, link))
                console.log("key update confirmation")
            else
                youtubeArray.push(youtubeObj);
        }
        localStorage.setItem("youtubeKeys", JSON.stringify(youtubeArray));
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('youtubeDeleteBtn').addEventListener('click', (ev) => {
        ev.preventDefault();
        const key = document.getElementById("youtubeDeletionKey").value.toLowerCase()
        // const link = document.getElementById("youtubeLink").value
        let flag = false
        console.log(key);
        console.log(youtubeArray);
        for (let i = 0; i < youtubeArray.length; i++) {
            // console.log(youtubeArray[i]);
            if (youtubeArray[i].key == key) {
                youtubeArray.splice(i, 1);
                flag = true;
                break;
            }
        }
        if (flag) {
            youtubeArray = JSON.stringify(youtubeArray)
            localStorage.setItem("youtubeKeys", youtubeArray)
            location.reload()
        }
    })
})