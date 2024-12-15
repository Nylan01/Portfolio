// Ajoute un écouteur d'événement pour détecter le défilement de la page
document.addEventListener("scroll", () => {
    // Sélectionne toutes les sections ayant la classe "section"
    const sections = document.querySelectorAll(".section");

    // Calcule la position actuelle du défilement avec un décalage pour le centrer
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Parcourt chaque section pour vérifier laquelle est actuellement visible
    sections.forEach((section) => {
        // Obtient la position du haut de la section par rapport au document
        const sectionTop = section.offsetTop;

        // Obtient la hauteur de la section
        const sectionHeight = section.offsetHeight;

        // Vérifie si la position actuelle du défilement est dans les limites de la section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight*2) {
            // Si la section visible est la première (classe "one")
            if (section.classList.contains("one")) {
                document.body.style.background = "#08090D"; // Change le fond du site à #08090D
            }
            // Si la section visible est la deuxième (classe "two")
            else if (section.classList.contains("two")) {
                document.body.style.background = "#000000"; // Change le fond du site à #000000
            }
            // Si la section visible est la troisième (classe "three")
            else if (section.classList.contains("three")) {
                document.body.style.background = "#08090D"; // Change le fond du site à #08090D
            }
        }
    });
});
