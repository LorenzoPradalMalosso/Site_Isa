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
let photoIndex = 1;
const totalPhotos = 77;

const photoImg = document.getElementById("carouselImg");
const photoIndicator = document.getElementById("photoIndex");

function showPhoto() {
  photoImg.classList.add("fade");

  setTimeout(() => {
    photoImg.src = `/assets/img/foto${photoIndex}.jpg`;
    photoIndicator.textContent = photoIndex;

    photoImg.classList.remove("fade");
  }, 40);

  setTimeout(() => {
    photoImg.classList.remove("fade");
  }, 200);
}

function nextPhoto() {
  photoIndex = photoIndex >= totalPhotos ? 1 : photoIndex + 1;
  showPhoto();
}

function prevPhoto() {
  photoIndex = photoIndex <= 1 ? totalPhotos : photoIndex - 1;
  showPhoto();
}

function nextPhoto() {
  photoIndex = photoIndex >= totalPhotos ? 1 : photoIndex + 1;
  showPhoto();
}

function prevPhoto() {
  photoIndex = photoIndex <= 1 ? totalPhotos : photoIndex - 1;
  showPhoto();
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

const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");

// abrir zoom
photoImg.addEventListener("click", () => {
  zoomImg.src = photoImg.src;
  zoomModal.classList.add("active");
});

// fechar ao clicar fora
zoomModal.addEventListener("click", (e) => {
  if (e.target === zoomModal) {
    closeZoom();
  }
});

function closeZoom() {
  zoomModal.classList.remove("active");
}
