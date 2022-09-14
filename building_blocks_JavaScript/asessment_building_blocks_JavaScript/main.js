const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image_names = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Looping through images */
for(let i=0;i<image_names.length;i++){
    let img = document.createElement("img");
    img.setAttribute("src", `images/${image_names[i]}`);
    img.addEventListener("click", function(e){displayedImage.src = e.target.src});
    thumbBar.appendChild(img);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function(){
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
