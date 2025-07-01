document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des infos du formulaire
    const nom = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("telephone").value.trim();

    // Ton numéro WhatsApp business ici (sans + ni tirets)
    const numeroWhatsApp = "2250161798929"; // ← change ce numéro par le tien

    // Création du message (avec encodage URL %0A = saut de ligne)
    const message = `Bonjour, je souhaite tester RAPHA 👨‍⚕️%0A🧑 Nom : ${nom}%0A📧 Email : ${email}%0A📱 WhatsApp : ${tel}`;

    // Lien vers WhatsApp avec message prérempli
    const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;

    // Redirige l’utilisateur vers WhatsApp
    window.open(lienWhatsApp, "_blank");

    // Optionnel : message sur la page HTML
    document.getElementById("confirmation-message").innerText = "✅ Message prêt à être envoyé dans WhatsApp !";
  });
