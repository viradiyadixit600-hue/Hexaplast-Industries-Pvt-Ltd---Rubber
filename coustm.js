const machinesBtn = document.getElementById("machinesBtn");
const machinesMenu = document.getElementById("machinesMenu");

// Toggle only by button click
machinesBtn.addEventListener("click", function(e){
  e.preventDefault();

  machinesMenu.classList.toggle("show");
});



// exibison

function openLightbox(card){
  const imgSrc = card.querySelector("img").src;
  document.getElementById("lightboxImg").src = imgSrc;
  document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}





// our tecnolog popup
function openPopup(el){
  document.getElementById("popupImg").src = el.dataset.img;
  document.getElementById("popupTitle").innerText = el.dataset.title;
  document.getElementById("popupText").innerText = el.dataset.text;
  document.getElementById("popup").style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

function outsideClose(e){
  if(e.target.id === "popup"){
    closePopup();
  }
}


