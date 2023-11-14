import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

// example 1

window.addEventListener("load", run);
function run() {
  alert("Sayfa Yüklendi");
}

// example 2
const beniDeAl = document.querySelectorAll(".btn");

beniDeAl.forEach((div) => {
  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "#b9e3e9";
  });
});

// example 3

beniDeAl.forEach((div) => {
  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "#17A288";
  });
});

// example 4

const imgElements = document.querySelectorAll("img");

imgElements.forEach((Img) => {
  Img.addEventListener("mouseover", () => {
    Img.style.transform = "scale(1.2)";
  });

  Img.addEventListener("mouseout", () => {
    Img.style.transform = "scale(1)";
  });
});

//example 5

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    const baslik = document.querySelector("h1");
    baslik.style.color = "pink";
  }
});

// example 6

document.addEventListener("wheel", (event) => {
  const kaydirma = Math.sign(event.deltaY);
  window.scrollBy(0, kaydirma * 200);
});

// example 7
const paragraf = document.querySelector(".text-content");

paragraf.addEventListener("dblclick", () => {
  paragraf.style.backgroundColor = "pink";
});

// example 8

const nav = document.querySelector("nav");
const links = nav.getElementsByTagName("a");

nav.addEventListener("click", () => {
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "pink";
  }
});

// example 9

const ekran = document.querySelector(".text-content");

window.addEventListener("resize", () => {
  const windowwidth = window.innerWidth;
  if (windowwidth < 600) {
    ekran.style.color = "blue";
  } else {
    ekran.style.color = "";
  }
});

// example 10

const myLink = document.querySelector(".nav-link");

myLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href =
    "https://www.youtube.com/watch?v=Htrzfp-lrwQ&ab_channel=Tarkan-Topic";
});
