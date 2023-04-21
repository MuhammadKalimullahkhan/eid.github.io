function domContentLoaded(e) {
    let name = prompt("What is your name?");
    document.querySelector("name").textContent = name;
    document.querySelectorAll("year")?.forEach((e) => {
        e.textContent = new Date().getFullYear();
    });
}



document.addEventListener('DOMContentLoaded', domContentLoaded);