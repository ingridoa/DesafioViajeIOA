document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

$(document).ready(function(){
    $("#buttonSend").click(function(){
  
   alert("¡Tu mensaje se ha enviado!");
 });
});


//Script para activacion de modal//

document.addEventListener('DOMContentLoaded', () => {
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');
  
    if (myModal) {
      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus();
      });
    }
  });