function openModal(htmlCode) {
    closeModal()

    const newModal = document.createElement("div")
    newModal.id = "modal"

    newModal.innerHTML =
        <div class="modal-box">
            ${htmlCode}
            <button class="modal-close">❌</button>
        </div>


    newModal.setAttribute("style", `
        position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100 %;
    background: rgba(0, 0, 0, 0.514);
    display: flex;
    align - items: center;
    justify - content: center;`
    )

    const modalBox = newModal.querySelector(".modal-box")
    modalBox.setAttribute("style", `
        height: fit - content;
    width: 100 %;
    max - width: 480px;
    padding: 20px;
    border - radius: 15px;
    background: white;
    position: relative;`
    )

    document.body.append(newModal)

    const btnClose = document.querySelector(".modal-close")

    btnClose.setAttribute("style", `
        background: none;
    min - width: 0;
    height: 28px;
    padding: 0;
    border: none;
    width: 28px;
    position: absolute;
    right: 6px;
    top: 6px;`
    )

    btnClose.addEventListener("click", closeModal)
}

function closeModal() {
    const exModal = document.querySelector("#modal")

    if (exModal) {
        const btnClose = document.querySelector(".modal-close")
        btnClose.removeEventListener("click", closeModal)
        exModal.remove()
    }
}

export { openModal }