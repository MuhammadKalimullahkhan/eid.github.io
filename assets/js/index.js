let myURL = new URL(window.location.href);
function domContentLoaded(e) {
    let shareBtn = document.getElementById("waShare");

    document.querySelectorAll("year")?.forEach((e) => {
        e.textContent = new Date().getFullYear();
    });

    shareBtn.addEventListener("click", share)
    setName();
}
function setName() {
    let share = myURL.searchParams.get('share');
    if (share) {
        document.querySelector("name").textContent = share;
    }
    else {
        let name = prompt("What is your name?");
        document.querySelector("name").textContent = name;
    }

}
function share() {
    let name = prompt("Sender's Name");
    this.setAttribute("data-action", "share/whatsapp/share");
    this.setAttribute("href", 'https://api.whatsapp.com/send?text=' + window.location.href + "?share=" + name);
}

document.addEventListener('DOMContentLoaded', domContentLoaded);