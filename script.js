function displayItem() {
    const el = document.getElementsByTagName("li");
    const div = document.querySelector("div");
    div.innerHTML = el.length;
}

// function displayItem() {
//     const el = document.getElementsByTagName("li");
//     const p = document.querySelector("p");
//     p.innerText = el[0].innerHTML;
// }