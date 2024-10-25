let images = document.getElementsByTagName('img');
let img_hover = document.getElementById('img-hover');
console.log(images)
console.log(img_hover)

let final = Array.from(images)
console.log(final)

final.map((m) => {
    m.addEventListener("mouseover", () => {
        m.style.cursor = "pointer"
        img_hover.innerHTML = `
            <div class="img_container">
                <img src="${m.src}" alt="hover image"></img>
            </div>
        `
    });
});

// final.map((m)=>{
//     m.addEventListener("mouseleave", (e) => {
//         img_hover.innerHTML = ""
//     });
// })   

