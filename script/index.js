let searchDiv = document.getElementById("search_result");
    async function searchVideo() {
        try {
            const video_query = document.getElementById("video").value;


            let responce = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video_query}&type=video&key=AIzaSyCgsyGlp11ZNXS9sRV2eBhqEkXZLUqITps&maxResults=20&part=snippet`);

            let data = await responce.json();
            console.log("Data : ", data);

            let videos = data.items;
            appendVideos(videos);

        }
        catch (err) {
            console.log("Error", err);
        }


    }
    // searchVideo();

    const appendVideos = (reslts) => {
        searchDiv.innerHTML = null;
        reslts.map(({snippet,  id: { videoId } } ) => {

            // console.log("snippet", snippet);
            let div = document.createElement("div");
            let title= document.createElement("h3");
            title.innerText = snippet.title;

            let thumbnail = document.createElement("img");
            thumbnail.src = snippet.thumbnails.medium.url;

            div.append(thumbnail,title);
            

            searchDiv.append(div);
        });
    }


