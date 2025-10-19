// Danh sách lời chúc mặc định
const defaultWishes = [
  "Chúc bạn luôn xinh đẹp, mạnh khỏe và tràn đầy yêu thương!",
  "Chúc bạn một ngày 20/10 thật nhiều niềm vui và bất ngờ đáng nhớ.",
  "Mong mọi điều tốt đẹp tới với bạn hôm nay và mãi về sau.",
  "Chúc em luôn tỏa sáng như một bông hoa rực rỡ.",
  "Gửi tới bạn những lời chúc ấm áp nhất nhân ngày 20/10!",
];

// Elements
const randomWishEl = document.getElementById("randomWish");
const newWishBtn = document.getElementById("newWishBtn");

// Random rotator
let currentIndex = -1;
function showRandomWish() {
  let idx;
  do {
    idx = Math.floor(Math.random() * defaultWishes.length);
  } while (idx === currentIndex);
  currentIndex = idx;
  randomWishEl.classList.add("fade-out");
  setTimeout(() => {
    randomWishEl.textContent = defaultWishes[idx];
    randomWishEl.classList.remove("fade-out");
    randomWishEl.classList.add("fade-in");
    setTimeout(() => randomWishEl.classList.remove("fade-in"), 400);
  }, 360);
}

newWishBtn.addEventListener("click", showRandomWish);

// petals generator
function createPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  const startX = Math.random() * 100; // vw
  const size = 10 + Math.random() * 18; // px
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  const delay = Math.random() * -20; // start offset
  const duration = 8 + Math.random() * 8; // s
  p.style.left = `${startX}vw`;
  p.style.top = `-10vh`;
  p.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);
  p.style.transform = `rotate(${Math.random() * 360}deg)`;
  p.style.animation = `fall ${duration}s linear ${delay}s forwards`;
  // horizontal drift
  p.style.setProperty("--drift", `${(Math.random() - 0.5) * 30}px`);
  document.getElementById("petals").appendChild(p);
  // remove after animation
  setTimeout(() => p.remove(), (duration + Math.abs(delay)) * 1000 + 1000);
}

function startPetals() {
  // create initial batch
  for (let i = 0; i < 12; i++) setTimeout(createPetal, i * 300);
  // keep generating
  setInterval(() => {
    createPetal();
  }, 900);
}

// (No modal or custom wishes behavior — feature removed)

// init
document.addEventListener("DOMContentLoaded", () => {
  showRandomWish();
  startPetals();
});
