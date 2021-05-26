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