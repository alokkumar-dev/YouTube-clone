let {videoId} = JSON.parse(localStorage.getItem("youtube_clicked_video")) || [];


let video_div = document.querySelector(".selected_video");
let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`;

iframe.setAttribute("allowfullscreen", "true");
// iframe.setAttribute("allowautoplay", "true");
video_div.append(iframe);



// for recommended video write script start here....

async function recommendVideos(){
    try{
        let responce = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${"Technology"}&type=video&key=AIzaSyCgsyGlp11ZNXS9sRV2eBhqEkXZLUqITps&maxResults=20&part=snippet`);
        let data=await responce.json();

        showRecommVideo(data.items)
        console.log("data :",data.items);
    }
    catch(err){
        console.log("Error from catch :", err);
    }

}
recommendVideos();

var recommendedvideos =document.querySelector(".recommend_videos");

function showRecommVideo(video){

       video.map(({snippet,id:{videoId}}) =>{
           
        let mainDiv = document.createElement("div");
        let posterDiv = document.createElement("div");
        let descDiv = document.createElement("div");
        let poster = document.createElement("img");
        let title = document.createElement("h4");
        let channeltitle = document.createElement("h5");
        
        poster.src = snippet.thumbnails.medium.url;
        title.innerText = snippet.title;
        channeltitle.innerText = snippet.channelTitle;

        posterDiv.append(poster);
        descDiv.append(title,channeltitle)
        mainDiv.append(posterDiv,descDiv)
        recommendedvideos.append(mainDiv);
        })
    
}
// for recommended video write script end here....
