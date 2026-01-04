const categories = [
  {
    title: "LOS MEJORES MADRUGADORES",
    winners: ["Gcelsuport", "Kizashi_saya", "Dg_tropiks"]
  },
    {
    title: "LOS MEJORES VIPS",
    winners: ["Patata_malevola", "Kizashi_saya", "Kazuokanta", "Treykler"]
  },
  {
    title: "REYES DE RACHA",
    winners: ["Gcelsuport", "Treykler", "Mikroasan", "Dg_tropiks", "seeeebas_suarezowo"]
  },
  {
    title: "EL MÁS GRACIOSO",
    winners: ["Leddy1309"]
  },
  {
    title: "EL MÁS CREATIVO",
    winners: ["CreativeArts_"]
  },
  {
    title: "EL MÁS BESTIA (BROMITA xd)",
    winners: ["Bestia1790"]
  },
  {
    title: "LOS MÁS FIELES",
    winners: ["GatoSS13", "djcombo20", "Patata_malevola", "ruly0987"]
  },
  {
    title: "EL MÁS SABOTEADOR",
    winners: ["tidus6662"]
  },
  {
    title: "BUILDS PECULIARES",
    winners: ["jgemcarmesi"]
  },
  {
    title: "LA MÁS BONITA",
    winners: ["cherryxerxes"]
  },
  {
    title: "EL MEJOR GAAAA",
    winners: ["bruuttuusss"]
  },
  {
    title: "LAS MEJORES BIENVENIDAS",
    winners: ["Alejandraokkotsu", "Rojomaster_55", "black_pyros_", "bruuttuusss", "ONEFAZ69", "novato1k0"]
  },
  {
    title: "EL MÁS ANÓNIMO",
    winners: ["dj****20"]
  },
  {
    title: "EL MEJOR RAIDER",
    winners: ["Kizashi_saya"]
  },
  {
    title: "EL MÁS ASUSTADOR",
    winners: ["donidonytrabieso"]
  },
  {
    title: "EL MEJOR SACRIFICIO",
    winners: ["Okemi20"]
  },
  {
    title: "EL MÁS LIGADOR",
    winners: ["Edahi3o"]
  },
  {
    title: "BEST MODS",
    winners: ["Gcelsuport", "Rickzero24"]
  }
  // 👉 aquí agregas las 20 categorías
];

let step = "intro"; // intro | title | winners | end
let index = 0;

const mainImage = document.getElementById("mainImage");
const title = document.getElementById("categoryTitle");
const winnersDiv = document.getElementById("winners");
const nextBtn = document.getElementById("nextBtn");

document.body.addEventListener("click", () => {
  if (step === "intro") {
    mainImage.style.display = "none";
    showCategory();
  }
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (step === "title") {
    showWinners();
  } else if (step === "winners") {
    nextCategory();
  }
});

function showCategory() {
  step = "title";
  title.textContent = categories[index].title;
  title.classList.add("show");
  nextBtn.classList.add("show");
}

function showWinners() {
  step = "winners";
  nextBtn.classList.remove("show");
  winnersDiv.innerHTML = "";

  categories[index].winners.forEach((name, i) => {
    const div = document.createElement("div");
    div.className = "winner";
    div.style.animationDelay = `${i * 0.3}s`;
    div.textContent = name;
    winnersDiv.appendChild(div);
  });

  setTimeout(() => {
    nextBtn.classList.add("show");
  }, categories[index].winners.length * 300 + 500);
}

function nextCategory() {
  // Ocultar inmediatamente
  title.classList.remove("show");
  title.textContent = ""; // 🔴 CLAVE
  winnersDiv.innerHTML = "";

  index++;

  if (index >= categories.length) {
    endScreen();
  } else {
    // Mostrar la siguiente categoría sin delay perceptible
    setTimeout(showCategory, 100);
  }
}


function endScreen() {
  step = "end";
  title.style.display = "none";
  winnersDiv.style.display = "none";
  nextBtn.style.display = "none";
  mainImage.src = "final.png";
  mainImage.style.display = "block";
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dy: Math.random() * 0.5 + 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,150,200,0.7)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.dy;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
