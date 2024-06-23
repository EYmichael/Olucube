
function createSlideshow(className) {
  let index = 0;
  function showSlides() {
    let slides = document.getElementsByClassName(className);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {index = 1}
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  showSlides();
}

createSlideshow("pome");
createSlideshow("citrus");
createSlideshow("tropical");
createSlideshow("stone");
createSlideshow("vege");
createSlideshow("sal");
