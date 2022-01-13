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
    // difault video write script start here 

    async function defaultVideos() {
        try {
            const video_query = document.getElementById("video").value;


            let responce = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${"india"}&type=video&key=AIzaSyCgsyGlp11ZNXS9sRV2eBhqEkXZLUqITps&maxResults=20&part=snippet`);

            let data = await responce.json();
            console.log("Data : ", data);

            let videos = data.items;
            appendVideos(videos);

        }
        catch (err) {
            console.log("Error", err);
        }


    }
    defaultVideos();
    // difault video write script End here 
    // searchVideo();

    const appendVideos = (reslts) => {
        searchDiv.innerHTML = null;
        reslts.map(({snippet,  id: { videoId } } ) => {

            // console.log("snippet", snippet);
            let div = document.createElement("div");
            let imgDiv = document.createElement("div");
            let title= document.createElement("h4");
            title.innerText = snippet.title;

            let thumbnail = document.createElement("img");
            thumbnail.src = snippet.thumbnails.medium.url;

            let data_to_send = {
                snippet,
                videoId
            }
            div.onclick = () =>{
                showVideo(data_to_send);
            }

            imgDiv.append(thumbnail)
            div.append(imgDiv,title);
            searchDiv.append(div);
        });
    };
function showVideo(data){

    localStorage.setItem("youtube_clicked_video", JSON.stringify(data))
    window.location.href = "clicked_video.html";
}

// let userData = JSON.parse(localStorage.getItem("autheData")) || [];
// showname(userData)
// function showname(data){
//     var name = document.getElementById("signin");
//     data.map(({username})=>{
        
//         console.log(username);
//         name.innerText = username;
        
//     })

// }
