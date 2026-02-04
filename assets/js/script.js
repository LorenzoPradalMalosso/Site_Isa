// ===== CONTADORES =====
const dates = [
  { label: "Desde 17/05/2025", date: new Date(2025, 4, 17, 0, 0, 0) },
  { label: "Desde 06/12/2025", date: new Date(2025, 11, 6, 0, 0, 0) },
  { label: "Desde 14/12/2025", date: new Date(2025, 11, 14, 0, 0, 0) },
];

function updateCounters() {
  const container = document.getElementById("counters");
  container.innerHTML = "";
  const now = new Date();

  dates.forEach((d) => {
    let diff = Math.floor((now - d.date) / 1000);

    const days = Math.floor(diff / 86400);
    diff %= 86400;

    const hours = Math.floor(diff / 3600);
    diff %= 3600;

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    container.innerHTML += `
      <div>
        <strong>${d.label}</strong><br>
        <span>${days}</span>d
        <span>${hours.toString().padStart(2, "0")}</span>h
        <span>${minutes.toString().padStart(2, "0")}</span>m
        <span>${seconds.toString().padStart(2, "0")}</span>s
      </div>
    `;
  });
}

updateCounters();
setInterval(updateCounters, 1000);

// ===== CARROSSEL =====
let index = 1;
const totalFotos = 30;

function show() {
  document.getElementById("carouselImg").src = `fotos/foto${index}.jpg`;
}
function next() {
  index = index >= totalFotos ? 1 : index + 1;
  show();
}
function prev() {
  index = index <= 1 ? totalFotos : index - 1;
  show();
}

// ===== MÚSICAS =====
const videos = [
  "https://www.youtube.com/embed/VIDEO1",
  "https://www.youtube.com/embed/VIDEO2",
  "https://www.youtube.com/embed/VIDEO3",
  "https://www.youtube.com/embed/VIDEO4",
];

let currentVideo = 0;

const frame = document.getElementById("videoFrame");
const indicator = document.getElementById("videoIndex");

function showVideo() {
  frame.src = videos[currentVideo];
  indicator.textContent = currentVideo + 1;
}

function nextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  showVideo();
}

function prevVideo() {
  currentVideo = (currentVideo - 1 + videos.length) % videos.length;
  showVideo();
}

// ===== MENSAGEM FUTURA =====
const futureMessages = document.querySelectorAll(".future-message");

function updateMessages() {
  const now = new Date();

  futureMessages.forEach((msg, index) => {
    const openDate = new Date(msg.dataset.open + "T00:00:00");

    if (now >= openDate) {
      msg.classList.remove("locked");
      msg.innerHTML = `
        <p>💌 Mensagem especial ${index + 1}</p>
        <p>Escreva aqui o texto que você quiser ❤️</p>
      `;
    } else {
      const diff = openDate - now;
      const days = Math.ceil(diff / 86400000);

      msg.innerHTML = `
        <span>🔒</span>
        <p>Mensagem trancada</p>
        <p>Abre em <strong>${days}</strong> dias</p>
      `;
    }
  });
}

updateMessages();
setInterval(updateMessages, 60000);
