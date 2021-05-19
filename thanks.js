// server worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// close lightbox
function closeLightBox(){
    document.getElementById("lightbox").style.display = "none";
} // closeLightBox

