let searchDiv = document.getElementById("search_result");
    async function searchVideo() {
        try{
            const video_query = document.getElementById("video").value;
          

            let responce = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video_query}&type=video&key=AIzaSyCgsyGlp11ZNXS9sRV2eBhqEkXZLUqITps&maxResults=20`);
            
            let data = await responce.json();
            console.log("Data : ", data);

            let videos = data.items;
            appendVideos(videos);

        }
        catch(err){
            console.log("Error", err);
        }
        
        
    }
    // searchVideo();

  const appendVideos = (reslts) =>{
    searchDiv.innerHTML = null;
    reslts.map((items)=>{

       let {
           id : {videoId},
        } = items;
       console.log("Video Id", videoId);

       let iframe = document.createElement("iframe");
       iframe.src = `https://www.youtube.com/embed/${videoId}`;
       iframe.setAttribute("allowfullscreen", "true");

       searchDiv.append(iframe);
    });
  }





  
 // my api key AIzaSyCgsyGlp11ZNXS9sRV2eBhqEkXZLUqITps  