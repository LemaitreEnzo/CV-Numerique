function toggleMenu() {
    document.querySelector(".header__nav-list").classList.toggle("active");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".header__menuIcon");
    menuIcon.addEventListener("click", toggleMenu);
});


document.getElementById("modal").addEventListener("click", () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeModal = document.querySelector(".modal-close");
    const body = document.getElementById("body");

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


