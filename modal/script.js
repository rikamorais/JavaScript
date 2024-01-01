function abrirModal(carregarModal) {
    const modal = document.getElementById(carregarModal);
    modal.style.display = "initial";
    document.body.style.overflow = 'hidden';
}

function fecharModal(fecharModal) {
    const modalFechar = document.getElementById(fecharModal);
    modalFechar.style.display = 'none';
    document.body.style.overflow = "hidden";
}