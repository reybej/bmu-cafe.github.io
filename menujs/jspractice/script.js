const menuContainer = document.getElementById("main-container")

//loop

for(i = 0; i<13; i++ ){
    const box = document.createElement("div");
    box.classList.add("boxes");
    box.textContent = i;

    menuContainer.appendChild(box)

}