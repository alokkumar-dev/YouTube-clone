let {videoId} = JSON.parse(localStorage.getItem("youtube_clicked_video")) || [];


let video_div = document.querySelector(".selected_video");
let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`;

iframe.setAttribute("allowfullscreen", "true");
// iframe.setAttribute("allowautoplay", "true");
video_div.append(iframe);
