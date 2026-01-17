// Exemple de données de sculptures
const sculptures = [
  {
    titre: "Le passeur",
    description: "Taille direct sur frêne",
    image: "images/lepasseur.jpg"
  },
  {
    titre: "Découverte",
    description: "Taille direct sur calcaire",
    image: "images/decouverte.jpg"
  },

  {
    titre: "L'homme blessé",
    description: "Taille direct sur abricotier",
    image: "images/lhommeblesse.jpg"
  },
  {
    titre: "Main (titre à confirmer)",
    description: "Taille direct sur ?",
    image: "images/unamed_main.jpg"
  },
  {
    titre: "Titre à confirmer",
    description: "Taille direct sur ?",
    image: "images/unamed.jpg"
  }
];


const galerieContainer = document.getElementById("galerie-container");

sculptures.forEach((s) => {
  const item = document.createElement("div");
  item.className = "galerie-item";
  item.innerHTML = `
    <img src="${s.image}" alt="${s.titre}">
    <div class="description">
      <h3>${s.titre}</h3>
      <p>${s.description}</p>
    </div>
  `;
  
  // 🎯 Au clic, ouvrir la lightbox
  item.addEventListener("click", () => openLightbox(s.image, `${s.titre} - ${s.description}`));
  
  galerieContainer.appendChild(item);
});

// 🌙 Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

function openLightbox(src, caption) {
  lightbox.style.display = "block";
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
}

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});