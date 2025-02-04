function toggleMenu() {
    document.querySelector(".header__nav-list").classList.toggle("active");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}
const body = document.getElementById("body");

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".header__menuIcon");
    menuIcon.addEventListener("click", toggleMenu);
});


document.getElementById("modal").addEventListener("click", () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeModal = document.querySelector(".modal-close");

    function openModal() {
        modalOverlay.classList.add("active");
        body.classList.add("active");
        body.style.overflow = "hidden";
    }

    function closeModalHandler() {
        modalOverlay.classList.remove("active");
        body.style.overflow = "auto";
    }

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModalHandler();
    });

    openModal();
});


document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".header").classList.add("hide");
    document.querySelector("main").classList.add("hide");
    document.querySelector("footer").classList.add("hide");
    body.style.overflow = "hidden";
    setTimeout(() => {
        document.querySelector(".pyramid-loader").classList.add("hide");
        document.querySelector(".header").classList.remove("hide");
        document.querySelector("main").classList.remove("hide");
        document.querySelector("footer").classList.remove("hide");
        body.style.overflow = "auto";
    }, 3000);
});