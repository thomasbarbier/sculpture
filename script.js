const sculptures = [
  {
    titre: "Arthus, le passeur d'hiver",
    description: "Taille directe sur frêne",
    image: "images/lepasseur.jpg",
    type: "Bois"
  },
  {
    titre: "Découverte",
    description: "Taille directe sur calcaire",
    image: "images/decouverte.jpg",
    type: "Pierre"
  },
  {
    titre: "L'homme blessé",
    description: "Taille directe sur abricotier",
    image: "images/lhommeblesse.jpg",
    type: "Bois"
  },
  {
    titre: "Impulsion",
    description: "Taille directe sur calcaire",
    image: "images/impulsion.jpg",
    type: "Pierre"
  },
  {
    titre: "Esquisse",
    description: "Assemblage métal",
    image: "images/esquisse.jpg",
    type: "Métal"
  },
  {
    titre: "Naissance",
    description: "Taille directe sur granite",
    image: "images/naissance.jpg",
    type: "Pierre"
  },
  {
    titre: "Mirage",
    description: "Taille directe sur frêne",
    image: "images/mirage.jpg",
    type: "Bois"
  },
  {
    titre: "L'âme perdue",
    description: "Taille directe sur calcaire",
    image: "images/lameperdue.jpg",
    type: "Pierre"
  },
  {
    titre: "Abysses",
    description: "Taille directe sur tilleul",
    image: "images/abysses.jpg",
    type: "Bois"
  }
];

const galerieContainer = document.getElementById("galerie-container");
const filtreContainer = document.getElementById("galerie-filtres");

// 🌟 1. Récupérer les types uniques
const types = ["Tous", ...new Set(sculptures.map(s => s.type))];

let filtreActif = "Tous";

// 🌟 2. Créer les boutons filtres
types.forEach(type => {
  const btn = document.createElement("button");
  btn.textContent = type;
  btn.className = "filtre-btn";

  if (type === "Tous") btn.classList.add("active");

  btn.addEventListener("click", () => {
    filtreActif = type;

    document.querySelectorAll(".filtre-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderGalerie();
  });

  filtreContainer.appendChild(btn);
});

// 🌟 3. Affichage galerie
function renderGalerie() {
  galerieContainer.innerHTML = "";

  const data = filtreActif === "Tous"
    ? sculptures
    : sculptures.filter(s => s.type === filtreActif);

  data.forEach((s) => {
    const item = document.createElement("div");
    item.className = "galerie-item";

    item.innerHTML = `
      <img src="${s.image}" alt="${s.titre}">
      <div class="description">
        <h3>${s.titre}</h3>
        <p>${s.description}</p>
      </div>
    `;

    item.addEventListener("click", () =>
      openLightbox(s.image, `${s.titre} - ${s.description}`)
    );

    galerieContainer.appendChild(item);
  });
}

// init
renderGalerie();

// 🌙 Lightbox (inchangé)
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