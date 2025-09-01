const images = document.querySelectorAll("img");
const container = document.getElementById("container");

const speed = [0.15, 0.2, 0.25, 0.3, 0.3]; // speed of each image

const handleScroll = () => {
  for (let i=0; i < images.length; i++) {
    images[i].style.transform = `translateX(${window.scrollX * speed[i]}px)`
    console.log(`Speed of image ${i} is ${speed[i]}`);
  }
}

window.addEventListener("scroll", handleScroll);