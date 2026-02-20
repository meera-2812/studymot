// ---------- Name ----------
function startApp() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Enter your name 😡");
  localStorage.setItem("userName", name);
  renderWelcome();
}

function changeName() {
  localStorage.removeItem("userName");
  renderWelcome();
}

function renderWelcome() {
  const savedName = localStorage.getItem("userName");
  const title = document.getElementById("welcomeTitle");
  const msg = document.getElementById("welcomeMessage");
  if (!title || !msg) return;

  if (savedName) {
    title.textContent = `Welcome back, ${savedName} 😈`;
    msg.innerHTML = `<p>Time to study or face the roast 🔥</p>`;
  } else {
    title.textContent = "Enter your name";
    msg.innerHTML = "";
  }
}

// ---------- Timetable ----------
function addExam() {
  const subject = document.getElementById("subject").value.trim();
  const date = document.getElementById("examDate").value;
  if (!subject || !date) return alert("Fill subject + date 😡");

  const exams = JSON.parse(localStorage.getItem("exams") || "[]");
  exams.push({ subject, date });
  localStorage.setItem("exams", JSON.stringify(exams));

  document.getElementById("subject").value = "";
  document.getElementById("examDate").value = "";
  displayExams();
}

function deleteExam(index) {
  const exams = JSON.parse(localStorage.getItem("exams") || "[]");
  exams.splice(index, 1);
  localStorage.setItem("exams", JSON.stringify(exams));
  displayExams();
}

function displayExams() {
  const ul = document.getElementById("examList");
  if (!ul) return;
  ul.innerHTML = "";

  const exams = JSON.parse(localStorage.getItem("exams") || "[]");
  exams.sort((a, b) => new Date(a.date) - new Date(b.date));

  const now = new Date();
  exams.forEach((e, idx) => {
    const d = new Date(e.date);
    const diffDays = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
    const label =
      diffDays === 0 ? "Today" : (diffDays < 0 ? "Overdue 💀" : `${diffDays}d left`);

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${e.subject} — ${e.date} (${label})</span>
      <button class="secondary" onclick="deleteExam(${idx})"><span>Delete</span></button>
    `;
    ul.appendChild(li);
  });
}

// ---------- Countdown + Danger Mode ----------
let countdownInterval = null;

function startCountdown() {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const exams = JSON.parse(localStorage.getItem("exams") || "[]");
    const now = new Date();

    const future = exams
      .filter(e => new Date(e.date) > now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const panel = document.getElementById("countdownPanel");
    const timeLeftEl = document.getElementById("timeLeft");
    const dangerText = document.getElementById("dangerText");
    if (!panel || !timeLeftEl || !dangerText) return;

    if (future.length === 0) {
      timeLeftEl.textContent = "No upcoming exams 😎";
      panel.classList.remove("danger");
      dangerText.style.display = "none";
      return;
    }

    const next = future[0];
    const target = new Date(next.date);
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    timeLeftEl.textContent = `${next.subject}: ${days}d ${hours}h ${mins}m ${secs}s left`;

    if (diff < 48 * 60 * 60 * 1000) {
      panel.classList.add("danger");
      dangerText.style.display = "block";
    } else {
      panel.classList.remove("danger");
      dangerText.style.display = "none";
    }
  }, 1000);
}

// ---------- Roast + Memes (online/offline) ----------
const offlineRoasts = [
  "Stop scrolling. Your exam is loading… slowly 😭",
  "You said ‘tomorrow’. Tomorrow said ‘no’ 😈",
  "Books miss you. Not in a good way.",
  "Confidence without preparation is comedy 💀",
  "You opened the book and needed a break? From WHAT?",
  "Your syllabus called. It said: ‘we’re strangers.’"
];

const offlineMemes = [
  "memes/meme1.jpg",
  "memes/meme2.jpg",
  "memes/meme3.jpg"
];

function pickRoast() {
  const name = localStorage.getItem("userName") || "";
  const r = offlineRoasts[Math.floor(Math.random() * offlineRoasts.length)];
  return name ? `${name}, ${r}` : r;
}

function showOfflineMeme() {
  const img = offlineMemes[Math.floor(Math.random() * offlineMemes.length)];
  const el = document.getElementById("memeImg");
  if (el) el.src = img;
}

function roastMe() {
  const roastEl = document.getElementById("roastText");
  if (roastEl) roastEl.textContent = pickRoast();

  if (navigator.onLine) {
    fetch("https://meme-api.com/gimme")
      .then(r => r.json())
      .then(data => {
        const imgEl = document.getElementById("memeImg");
        if (imgEl) imgEl.src = data.url;
      })
      .catch(() => showOfflineMeme());
  } else {
    showOfflineMeme();
  }
}

// ---------- Notifications ----------
function sendRoastNotification() {
  const msg = pickRoast();
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Study Or Else 😈", { body: msg });
  } else {
    alert(msg);
  }
}

function enableRoastNotifications() {
  if (!("Notification" in window)) return alert("Browser doesn't support notifications 😭");

  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      sendRoastNotification();
      setInterval(sendRoastNotification, 30 * 60 * 1000);
    } else {
      alert("Notifications blocked 😔 Using popups instead.");
    }
  });
}

function testRoastNow() { sendRoastNotification(); }

document.addEventListener("visibilitychange", () => {
  if (document.hidden) sendRoastNotification();
});

// ---------- XP ----------
function levelFromXp(xp) {
  if (xp >= 200) return "Legendary Mugger";
  if (xp >= 150) return "Exam Warrior";
  if (xp >= 100) return "Academic Survivor";
  if (xp >= 50) return "Slightly Responsible";
  return "Professional Procrastinator";
}

function renderXp() {
  const xpEl = document.getElementById("xpDisplay");
  const lvlEl = document.getElementById("levelDisplay");
  if (!xpEl || !lvlEl) return;

  const xp = Number(localStorage.getItem("xp") || "0");
  xpEl.textContent = `XP: ${xp}`;
  lvlEl.textContent = `Level: ${levelFromXp(xp)}`;
}

function changeXp(delta) {
  let xp = Number(localStorage.getItem("xp") || "0");
  xp = xp + delta;
  if (xp < 0) xp = 0;
  localStorage.setItem("xp", String(xp));
  renderXp();
}

// ---------- Boot ----------
window.addEventListener("load", () => {
  renderWelcome();
  if (document.getElementById("examList")) displayExams();
  if (document.getElementById("countdownPanel")) startCountdown();
  renderXp();
});
