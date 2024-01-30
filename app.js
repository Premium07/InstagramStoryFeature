let arr = [
  {dp: "images/prem.png", image: "images/river.jpg"},

  { dp: "images/pic1.avif", image: "images/pic2.avif" },

  { dp: "images/pic3.avif", image: "images/pic4.avif" },

  { dp: "images/pic5.avif", image: "images/pic6.avif" },

  { dp: "images/pic7.avif", image: "images/pic8.avif" },

  { dp: "images/pic9.avif", image: "images/pic10.avif" },
];

let clutter = "";
arr.forEach(function (elem, index) {
  clutter += ` <div class="story">
    <img id ="${index}" src="${elem.dp}" alt="">
</div>`;    
});

document.querySelector("#stories").innerHTML = clutter;
var grow = 0
document.querySelector("#stories").addEventListener("click", function (e) {
    document.querySelector("#fullpreview").style.display = "initial";
    document.querySelector("#fullpreview").style.backgroundImage = `url(${arr[e.target.id].image})`;
   setTimeout(function(){
    document.querySelector("#fullpreview").style.display = "none";
   }, 3000)

const interval = function(){
  if(grow <= 100) {
    setInterval(function(){
        document.querySelector("#growth").style.width = `${grow++}%`;
       }, 30)
   }else{
    grow = 0;
   }

}
  interval();

  document.querySelector("#cross").addEventListener("click", function(){
    document.querySelector("#fullpreview").style.display = "none";
    clearInterval(interval);
  })

});

// const heart = document.querySelector(".icons .heart")
// heart.addEventListener("click", function(){
//   heart.style.backgroundColor = "red";
//   heart.style.overflow = "hidden";
// })