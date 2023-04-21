function domContentLoaded(e) {

    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");

    text1.addEventListener("animationend", () => {
        text2.style.animationDelay = "0s";
    });

    // let name = prompt("What is your name?");
    // document.querySelector("name").textContent = name;
    document.querySelectorAll("year")?.forEach((e) => {
        e.textContent = new Date().getFullYear();
    });
}



document.addEventListener('DOMContentLoaded', domContentLoaded);