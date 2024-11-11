    // FORMULAIRE D'AVIS SUR LA PAGE D'ACCUEIL

    document.querySelector(`.avis`).onsubmit = function() {
        const name = document.querySelector('#pseudo').value;
        alert(`Votre Commentaire a bien été envoyé au nom de ${name}. Merci pour votre avis`);
    };


    // FORMULAIRE D'AVIS SUR LA PAGE DE CONTACT

    document.querySelector(`#contactForm`).onsubmit = function() {
        alert(`Le formulaire a bien été envoyé.`);
    };






// function hello() {
//     let button =  document.getElementById("button-avis")
//     let pseudo = document.getElementById("pseudo");
//     let comment = document.getElementById("comment");
//     if (button.onclick && pseudo != "" && comment != "") {
//          alert ('Hello, world');
//     } else{
//         alert ("remplissez le formulaireavant d'envoyer");
//     }
//  }

/*function validateForm() {
    let x = document.forms["avisForm"]["avisButton"].value;
    if (x === true) {
        alert("Votre Commentaire a bien été envoyé. Merci pour votre avis");
    }
}*/
// document.querySelector("button-avis").onclick = hello();



//DATE COPYRIGHT FOOTE

new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();