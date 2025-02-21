function marcarTarea(div) {
    let check = div.querySelector('.check');
    let nametarea = div.querySelector('.nameTarea');

    div.addEventListener("click", () => {
        check.classList.toggle("marcado");
        nametarea.classList.toggle("tachado");
    });
}

export { marcarTarea }

