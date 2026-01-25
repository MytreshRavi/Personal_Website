// Skill bar animation
document.querySelectorAll(".bar div").forEach(bar => {
  setTimeout(() => {
    bar.style.width = bar.dataset.level + "%";
  }, 500);
});

// AI-style animated background
const canvas = document.getElementById("ai-bg");
const ctx = canvas.getContext("2d");
let w, h;
const dots = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 120; i++) {
  dots.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.5,
    dy: Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#38bdf8";
  dots.forEach(d => {
    d.x += d.dx;
    d.y += d.dy;
    if (d.x > w || d.y > h) {
      d.x = 0;
      d.y = Math.random() * h;
    }
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();
