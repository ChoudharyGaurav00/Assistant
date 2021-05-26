youtubeArray = JSON.parse(localStorage.getItem("youtubeKeys"));

function handleYoutubeQueries(query) {
  let queries = query.split(' ');
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < youtubeArray.length; j++) {
      let tempKey = youtubeArray[j];
      if (queries[i] == tempKey.key) {
        window.open(tempKey.link);
        return;
      }
    }
  }
  console.log("sorry did not recognize that key");
}

function youtubeKeyUpdate(key, link) {
  let youtubeLinkflag = false;
  console.log(key)
  console.log("key update1");
  for (let i = 0; i < youtubeArray.length; i++) {
    console.log(youtubeArray[i]);
    if (youtubeArray[i].key == key) {
      console.log("key update");
      youtubeLinkflag = true;
      youtubeArray[i].link = link
      return youtubeLinkflag;
    }
  }
}