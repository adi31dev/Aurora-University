/* =========================================================
   AURORA UNIVERSITY - script.js
   Concepts: variables, arrays, objects, loops, functions,
   conditions, DOM, events, timers, Date, regex validation,
   array methods (filter/map/sort/reduce), URLSearchParams
   ========================================================= */

// ================== DATA ==================
const courses = [
  { id: "btech-cse", name: "B.Tech Computer Science",  level: "ug",      dept: "engineering", years: 4, fee: 180000, seats: 120, minMarks: 60, icon: "💻", desc: "Algorithms, systems, AI and software engineering with live projects." },
  { id: "btech-ai",  name: "B.Tech AI & Machine Learning", level: "ug",  dept: "engineering", years: 4, fee: 195000, seats: 60,  minMarks: 65, icon: "🤖", desc: "Deep learning, computer vision and robotics from year one." },
  { id: "btech-ece", name: "B.Tech Electronics",       level: "ug",      dept: "engineering", years: 4, fee: 165000, seats: 90,  minMarks: 55, icon: "📡", desc: "Embedded systems, IoT and communication technologies." },
  { id: "bca",       name: "BCA",                      level: "ug",      dept: "computing",   years: 3, fee: 90000,  seats: 100, minMarks: 50, icon: "🖥️", desc: "Programming, web development and databases for future developers." },
  { id: "bba",       name: "BBA",                      level: "ug",      dept: "management",  years: 3, fee: 110000, seats: 120, minMarks: 50, icon: "📊", desc: "Business fundamentals, marketing, finance and entrepreneurship." },
  { id: "bdes",      name: "B.Des User Experience",    level: "ug",      dept: "design",      years: 4, fee: 150000, seats: 40,  minMarks: 50, icon: "🎨", desc: "UI/UX, product design and visual storytelling in studio classes." },
  { id: "mba",       name: "MBA",                      level: "pg",      dept: "management",  years: 2, fee: 220000, seats: 90,  minMarks: 55, icon: "💼", desc: "Leadership, analytics and strategy with industry mentors." },
  { id: "mca",       name: "MCA",                      level: "pg",      dept: "computing",   years: 2, fee: 120000, seats: 60,  minMarks: 55, icon: "⚙️", desc: "Advanced software development, cloud and full-stack engineering." },
  { id: "mtech-ds",  name: "M.Tech Data Science",      level: "pg",      dept: "engineering", years: 2, fee: 160000, seats: 30,  minMarks: 60, icon: "📈", desc: "Big data, statistics and applied machine learning research." },
  { id: "dip-cyber", name: "Diploma in Cyber Security", level: "diploma", dept: "computing",  years: 1, fee: 60000,  seats: 50,  minMarks: 45, icon: "🔐", desc: "Ethical hacking, network defence and digital forensics." }
];

const announcements = [
  "Admissions 2027 are open - apply before the deadline",
  "Aurora Fest 2026 registrations are live",
  "New B.Tech AI & ML lab inaugurated",
  "Scholarships up to 50% for toppers",
  "Campus placement drive: 40+ companies this month"
];

const quizQuestions = [
  { q: "What sounds like the most fun?", opts: [
      { t: "Building a robot or a gadget",      s: { engineering: 2 } },
      { t: "Writing code for an app or game",   s: { computing: 2 } },
      { t: "Starting my own business",          s: { management: 2 } },
      { t: "Designing posters or app screens",  s: { design: 2 } } ] },
  { q: "Your best school subject?", opts: [
      { t: "Physics / Maths",                   s: { engineering: 2, computing: 1 } },
      { t: "Computer Science",                  s: { computing: 2, engineering: 1 } },
      { t: "Economics / Business",              s: { management: 2 } },
      { t: "Art / Drawing",                     s: { design: 2 } } ] },
  { q: "In a group project, you are the...", opts: [
      { t: "Problem solver",                    s: { engineering: 1, computing: 1 } },
      { t: "Leader and organiser",              s: { management: 2 } },
      { t: "Creative idea person",              s: { design: 2 } },
      { t: "Technical expert",                  s: { computing: 2 } } ] },
  { q: "Where do you see yourself in 5 years?", opts: [
      { t: "Working at a top tech company",     s: { computing: 2, engineering: 1 } },
      { t: "Running a company or startup",      s: { management: 2 } },
      { t: "Designing products people love",    s: { design: 2 } },
      { t: "Building real machines and systems", s: { engineering: 2 } } ] }
];
const deptNames = { engineering: "Engineering", computing: "Computing", management: "Management", design: "Design" };
const deptIcons = { engineering: "⚙️", computing: "💻", management: "📊", design: "🎨" };

const facilities = [
  { id: "library", icon: "📚", name: "Central Library", desc: "A 4-storey library with 2 lakh books, e-journals and silent study pods.", chips: ["2,00,000 books", "Open till midnight", "Digital archive"] },
  { id: "labs",    icon: "🔬", name: "Smart Labs",       desc: "Modern labs for AI, robotics, electronics and cyber security with latest hardware.", chips: ["50+ labs", "GPU cluster", "Robotics arena"] },
  { id: "hostel",  icon: "🏠", name: "Hostels",          desc: "Safe, Wi-Fi enabled hostels with mess, gym and 24x7 security.", chips: ["3,000 beds", "Wi-Fi", "24x7 security"] },
  { id: "sports",  icon: "🏏", name: "Sports Complex",   desc: "Cricket ground, football turf, indoor courts, swimming pool and a gym.", chips: ["Olympic pool", "Indoor courts", "Turf"] },
  { id: "food",    icon: "🍛", name: "Food Court",       desc: "Multi-cuisine food court and cafes serving fresh, affordable meals.", chips: ["8 outlets", "Veg and non-veg", "Cafe"] }
];

// annually repeating events (m = month 1-12, d = day)
const events = [
  { m: 11, d: 14, name: "Aurora Hackathon",     info: "24-hour coding marathon, cash prizes for top teams." },
  { m: 11, d: 20, name: "Aurora Fest",          info: "Music, dance, food stalls and a celebrity night." },
  { m: 12, d: 10, name: "Convocation Day",      info: "Degree distribution for the graduating batch." },
  { m: 12, d: 25, name: "Winter Break Begins",  info: "Campus closes for the winter vacation." },
  { m: 1,  d: 15, name: "Admissions Open Day",  info: "Meet faculty, tour the campus and ask questions." },
  { m: 2,  d: 5,  name: "Tech Expo",            info: "Students showcase their best projects to companies." },
  { m: 3,  d: 12, name: "Sports Meet",          info: "Inter-department sports championship." },
  { m: 3,  d: 31, name: "Admissions Deadline",  info: "Last date to submit applications for 2027." },
  { m: 8,  d: 15, name: "Independence Day",     info: "Flag hoisting and cultural programme." },
  { m: 9,  d: 5,  name: "Teachers' Day",        info: "Students celebrate and honour their teachers." }
];

const gradePoints = { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5 };

const years = [2021, 2022, 2023, 2024, 2025, 2026];
const packages = { avg: [4.8, 5.6, 6.4, 7.2, 7.9, 8.5], high: [18, 22, 28, 36, 42, 48] };
const recruiters = ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Deloitte", "Accenture", "Adobe", "Flipkart", "Zomato", "Paytm"];

const deptResults = [
  { dept: "engineering", placed: 96, avg: 9.2, top: "Microsoft" },
  { dept: "computing",   placed: 95, avg: 8.8, top: "Google" },
  { dept: "management",  placed: 92, avg: 8.1, top: "Deloitte" },
  { dept: "design",      placed: 88, avg: 7.0, top: "Adobe" }
];

const stories = [
  { icon: "🧑‍💻", text: "The hackathons and projects at Aurora prepared me for my job at a top tech company.", by: "Rahul S. - B.Tech CSE, 48 LPA" },
  { icon: "👩‍💼", text: "My MBA mentors helped me crack consulting interviews with confidence.",                  by: "Neha K. - MBA, 22 LPA" },
  { icon: "🧑‍🎨", text: "The design studio gave me a real portfolio. I joined my dream product company.",         by: "Aman V. - B.Des, 18 LPA" }
];

const directory = [
  { name: "Admissions Office",   head: "Dr. R. Sharma",  email: "admissions@aurora.demo", phone: "1800-555-0199" },
  { name: "Engineering Dept",    head: "Dr. A. Verma",   email: "engineering@aurora.demo", phone: "011-5550-101" },
  { name: "Computing Dept",      head: "Dr. S. Iyer",    email: "computing@aurora.demo",  phone: "011-5550-102" },
  { name: "Management School",   head: "Dr. P. Kapoor",  email: "mba@aurora.demo",        phone: "011-5550-103" },
  { name: "Design School",       head: "Prof. M. Rao",   email: "design@aurora.demo",     phone: "011-5550-104" },
  { name: "Placement Cell",      head: "Mr. K. Singh",   email: "placements@aurora.demo", phone: "011-5550-105" },
  { name: "Hostel Office",       head: "Mrs. L. Gupta",  email: "hostel@aurora.demo",     phone: "011-5550-106" }
];

const faqs = [
  { q: "What is the last date to apply?", a: "Applications for 2027 close on 31 March. Check the live countdown on the home page." },
  { q: "Is there an entrance exam?",      a: "Most programs admit on merit. MBA and M.Tech also consider entrance scores." },
  { q: "Are scholarships available?",     a: "Yes, merit scholarships up to 50% plus extra for girl students and sports achievers." },
  { q: "Is hostel facility available?",   a: "Yes. Separate hostels for boys and girls with mess and Wi-Fi." }
];

// ================== HELPERS ==================
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const pad = (n) => String(n).padStart(2, "0");
const levelName = { ug: "Undergraduate", pg: "Postgraduate", diploma: "Diploma" };

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}

function courseCard(c) {
  return `
    <article class="course">
      <div class="course-top">${c.icon}<span class="badge">${c.level}</span></div>
      <div class="course-body">
        <h3>${c.name}</h3>
        <div class="meta"><span>⏱ ${c.years} yr${c.years > 1 ? "s" : ""}</span><span>🪑 ${c.seats} seats</span></div>
        <p>${c.desc}</p>
        <div class="course-foot">
          <span class="fee">${inr(c.fee)}<small> /yr</small></span>
          <button class="link-btn" data-view="${c.id}">Details</button>
        </div>
      </div>
    </article>`;
}

// ================== COMMON ==================
$("#year").textContent = new Date().getFullYear();
$("#today").textContent = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

const themeBtn = $("#themeToggle");
function applyTheme(dark) { document.body.classList.toggle("dark", dark); themeBtn.textContent = dark ? "☀️" : "🌙"; }
applyTheme(localStorage.getItem("auTheme") === "dark");
themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);
  localStorage.setItem("auTheme", dark ? "dark" : "light");
});

$("#menuBtn").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
window.addEventListener("scroll", () => $("#toTop").classList.toggle("show", scrollY > 450));
$("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

function runCounter(el) {
  const target = Number(el.dataset.target);
  const step = Math.max(1, Math.ceil(target / 60));
  let n = 0;
  const t = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(t); } el.textContent = n; }, 25);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("visible");
    en.target.querySelectorAll(".counter").forEach(runCounter);
    observer.unobserve(en.target);
  });
}, { threshold: 0.15 });
$$(".reveal, .stats").forEach(el => observer.observe(el));

// shared: FAQ accordion
function buildFaq() {
  faqs.forEach(f => { $("#faqList").innerHTML += `<div class="faq"><button class="faq-q">${f.q}</button><div class="faq-a">${f.a}</div></div>`; });
  $("#faqList").addEventListener("click", e => {
    if (!e.target.classList.contains("faq-q")) return;
    const box = e.target.parentElement, was = box.classList.contains("open");
    $$(".faq").forEach(f => f.classList.remove("open"));
    if (!was) box.classList.add("open");
  });
}

// shared: fill a <select> with all courses
function fillCourseSelect(sel) {
  sel.innerHTML = courses.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

// ================== HOME ==================
if ($("#countdown")) {
  // next March 31 (admission deadline)
  const now = new Date();
  let deadline = new Date(now.getFullYear(), 2, 31, 23, 59, 59);
  if (deadline < now) deadline = new Date(now.getFullYear() + 1, 2, 31, 23, 59, 59);
  $("#cdNote").textContent = "Deadline: " + deadline.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  function tick() {
    const diff = deadline - new Date();
    const s = Math.floor(diff / 1000);
    $("#cdD").textContent = pad(Math.floor(s / 86400));
    $("#cdH").textContent = pad(Math.floor((s % 86400) / 3600));
    $("#cdM").textContent = pad(Math.floor((s % 3600) / 60));
    $("#cdS").textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);

  // announcement ticker (list repeated for endless loop)
  let html = "";
  for (let i = 0; i < 2; i++) announcements.forEach(a => html += `<span>${a}</span>`);
  $("#annTrack").innerHTML = html;

  // featured courses
  ["btech-ai", "mba", "bdes"].forEach(id => { $("#featured").innerHTML += courseCard(courses.find(c => c.id === id)); });
}

// ================== COURSES ==================
if ($("#courseGrid")) {
  let level = "all";

  function renderCourses() {
    const text = $("#cSearch").value.toLowerCase().trim();
    const dept = $("#cDept").value;
    const list = courses.filter(c =>
      (level === "all" || c.level === level) &&
      (dept === "all" || c.dept === dept) &&
      (c.name.toLowerCase().includes(text) || c.desc.toLowerCase().includes(text)));
    $("#courseGrid").innerHTML = list.map(courseCard).join("");
    $("#cCount").textContent = `Showing ${list.length} of ${courses.length} courses`;
    $("#cNone").hidden = list.length > 0;
  }
  $("#levelFilters").addEventListener("click", e => {
    if (!e.target.dataset.level) return;
    $$("#levelFilters .chip-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    level = e.target.dataset.level;
    renderCourses();
  });
  $("#cSearch").addEventListener("input", renderCourses);
  $("#cDept").addEventListener("change", renderCourses);
  renderCourses();

  // quiz
  $("#quizBox").innerHTML = quizQuestions.map((q, i) => `
    <div class="q"><p>${i + 1}. ${q.q}</p>
      ${q.opts.map((o, j) => `<label class="opt"><input type="radio" name="q${i}" value="${j}"> ${o.t}</label>`).join("")}
    </div>`).join("") + `<button class="btn btn-gold" id="quizBtn" type="button">Show my match 🎯</button>`;

  $("#quizBtn").addEventListener("click", () => {
    const score = { engineering: 0, computing: 0, management: 0, design: 0 };
    for (let i = 0; i < quizQuestions.length; i++) {
      const picked = document.querySelector(`input[name="q${i}"]:checked`);
      if (!picked) { toast("Please answer all the questions 🙂"); return; }
      const s = quizQuestions[i].opts[Number(picked.value)].s;
      for (const key in s) score[key] += s[key];
    }
    const best = Object.keys(score).reduce((a, b) => score[a] >= score[b] ? a : b);
    const matches = courses.filter(c => c.dept === best);
    const box = $("#quizResult");
    box.innerHTML = `
      <div class="big">${deptIcons[best]}</div>
      <h3>You're a perfect fit for ${deptNames[best]}!</h3>
      <p class="muted">Recommended courses for you:</p>
      <ul>${matches.map(c => `<li>${c.icon} <a href="admissions.html?course=${c.id}#apply">${c.name}</a> - ${c.years} yrs</li>`).join("")}</ul>`;
    box.classList.remove("hidden");
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  });

}

// course details modal (works on home + courses pages)
if ($("#courseModal")) {
  document.addEventListener("click", e => {
    const id = e.target.dataset.view;
    if (id) {
      const c = courses.find(x => x.id === id);
      $("#courseModalBody").innerHTML = `
        <h2>${c.icon} ${c.name}</h2>
        <p>${c.desc}</p>
        <div class="mgrid">
          <div><b>${levelName[c.level]}</b><span>Level</span></div>
          <div><b>${c.years} year${c.years > 1 ? "s" : ""}</b><span>Duration</span></div>
          <div><b>${inr(c.fee)}</b><span>Fee per year</span></div>
          <div><b>${inr(c.fee * c.years)}</b><span>Total program fee</span></div>
          <div><b>${c.minMarks}%</b><span>Minimum marks</span></div>
          <div><b>${c.seats}</b><span>Seats</span></div>
        </div>
        <a class="btn btn-gold" href="admissions.html?course=${c.id}#apply">Apply for this course</a>
        <button class="btn btn-outline" id="closeModal" type="button">Close</button>`;
      $("#courseModal").classList.remove("hidden");
    }
    if (e.target.id === "closeModal" || e.target.id === "courseModal") $("#courseModal").classList.add("hidden");
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") $("#courseModal").classList.add("hidden"); });
}
// home page has no modal markup, so send "Details" clicks to the courses page
if (!$("#courseModal")) {
  document.addEventListener("click", e => { if (e.target.dataset.view) location.href = "courses.html"; });
}

// ================== ADMISSIONS ==================
if ($("#fcCourse")) {
  fillCourseSelect($("#fcCourse"));
  fillCourseSelect($("#aCourse"));
  const wanted = new URLSearchParams(location.search).get("course");
  if (wanted && courses.some(c => c.id === wanted)) { $("#fcCourse").value = wanted; $("#aCourse").value = wanted; }

  // merit scholarship slabs
  function slab(marks) {
    if (marks >= 95) return 50;
    if (marks >= 90) return 30;
    if (marks >= 85) return 20;
    if (marks >= 75) return 10;
    return 0;
  }

  $("#fcBtn").addEventListener("click", () => {
    const c = courses.find(x => x.id === $("#fcCourse").value);
    const marks = parseFloat($("#fcMarks").value);
    const out = $("#fcResult");
    if (isNaN(marks) || marks < 0 || marks > 100) { out.innerHTML = `<p class="tag-bad">Please enter valid marks between 0 and 100.</p>`; return; }

    let pct = slab(marks);
    if ($("#fcGirl").checked) pct += 5;
    if ($("#fcSports").checked) pct += 5;
    pct = Math.min(pct, 60);                                   // cap at 60%

    const tuition = c.fee, discount = tuition * pct / 100;
    const hostel = $("#fcHostel").checked ? 90000 : 0;
    const perYear = tuition - discount + hostel;
    const eligible = marks >= c.minMarks;

    out.innerHTML = `
      <div class="fc-box">
        <p>${eligible ? `<span class="tag-ok">✔ Eligible</span>` : `<span class="tag-bad">✘ Minimum ${c.minMarks}% required</span>`} for <b>${c.name}</b></p>
        <div class="fc-line"><span>Tuition / year</span><b>${inr(tuition)}</b></div>
        <div class="fc-line"><span>Scholarship (${pct}%)</span><b>-${inr(discount)}</b></div>
        <div class="fc-line"><span>Hostel / year</span><b>${inr(hostel)}</b></div>
        <div class="fc-line"><span>Payable per year</span><b>${inr(perYear)}</b></div>
        <div class="fc-line total"><span>Total for ${c.years} yr${c.years > 1 ? "s" : ""}</span><span>${inr(perYear * c.years)}</span></div>
      </div>`;
  });

  // application form
  $("#aWhy").addEventListener("input", () => { $("#aCount").textContent = `(${$("#aWhy").value.length}/250)`; });
  const setErr = (id, msg) => { $("#" + id).textContent = msg; return msg === ""; };

  $("#applyForm").addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    ok = setErr("aNameE", /^[A-Za-z][A-Za-z .]{2,}$/.test($("#aName").value.trim()) ? "" : "Enter your full name (letters only).") && ok;

    let dobMsg = "";
    const dobStr = $("#aDob").value;
    if (!dobStr) dobMsg = "Please select your date of birth.";
    else {
      const dob = new Date(dobStr), now = new Date();
      let age = now.getFullYear() - dob.getFullYear();
      if (now < new Date(now.getFullYear(), dob.getMonth(), dob.getDate())) age--;
      if (age < 16) dobMsg = "You must be at least 16 years old to apply.";
      else if (age > 60) dobMsg = "Please enter a valid date of birth.";
    }
    ok = setErr("aDobE", dobMsg) && ok;
    ok = setErr("aEmailE", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#aEmail").value.trim()) ? "" : "Enter a valid email address.") && ok;
    ok = setErr("aPhoneE", /^[6-9]\d{9}$/.test($("#aPhone").value.trim()) ? "" : "Enter a valid 10-digit mobile number.") && ok;

    const course = courses.find(c => c.id === $("#aCourse").value);
    const marks = parseFloat($("#aMarks").value);
    let mMsg = "";
    if (isNaN(marks) || marks < 0 || marks > 100) mMsg = "Enter marks between 0 and 100.";
    else if (marks < course.minMarks) mMsg = `${course.name} needs at least ${course.minMarks}%.`;
    ok = setErr("aMarksE", mMsg) && ok;
    ok = setErr("aCourseE", "") && ok;
    ok = setErr("aWhyE", $("#aWhy").value.trim().length >= 20 ? "" : "Please write at least 20 characters.") && ok;
    ok = setErr("aTermsE", $("#aTerms").checked ? "" : "Please confirm the details.") && ok;
    if (!ok) return;

    const appId = "AU" + (new Date().getFullYear() + 1) + "-" + Math.floor(1000 + Math.random() * 9000);
    $("#applyMsg").textContent = `Thank you ${$("#aName").value.trim().split(" ")[0]}! Your application for ${course.name} is received. Application ID: ${appId}. We will contact you at ${$("#aEmail").value.trim()}.`;
    $("#applyModal").classList.remove("hidden");
  });
}

// ================== CAMPUS ==================
if ($("#facTabs")) {
  function showFac(id) {
    const f = facilities.find(x => x.id === id);
    $$("#facTabs .chip-btn").forEach(b => b.classList.toggle("active", b.dataset.id === id));
    $("#facPanel").innerHTML = `
      <div class="fac-icon">${f.icon}</div>
      <div><h3>${f.name}</h3><p class="muted">${f.desc}</p><div class="chips">${f.chips.map(c => `<span>${c}</span>`).join("")}</div></div>`;
  }
  facilities.forEach(f => { $("#facTabs").innerHTML += `<button class="chip-btn" data-id="${f.id}">${f.icon} ${f.name}</button>`; });
  $("#facTabs").addEventListener("click", e => { if (e.target.dataset.id) showFac(e.target.dataset.id); });
  showFac("library");

  // ----- calendar -----
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const today = new Date();
  let vy = today.getFullYear(), vm = today.getMonth();

  function renderCalendar() {
    $("#calTitle").textContent = monthNames[vm] + " " + vy;
    const firstDay = new Date(vy, vm, 1).getDay();
    const daysInMonth = new Date(vy, vm + 1, 0).getDate();
    let html = ["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < firstDay; i++) html += `<div class="day blank"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const ev = events.find(e => e.m === vm + 1 && e.d === d);
      const isToday = d === today.getDate() && vm === today.getMonth() && vy === today.getFullYear();
      html += `<div class="day${ev ? " event" : ""}${isToday ? " today" : ""}" data-d="${d}"${ev ? ` title="${ev.name}"` : ""}>${d}</div>`;
    }
    $("#calGrid").innerHTML = html;
    $("#calDetail").textContent = "Click a highlighted date to see the event.";
  }
  $("#calPrev").addEventListener("click", () => { vm--; if (vm < 0) { vm = 11; vy--; } renderCalendar(); });
  $("#calNext").addEventListener("click", () => { vm++; if (vm > 11) { vm = 0; vy++; } renderCalendar(); });
  $("#calGrid").addEventListener("click", e => {
    if (!e.target.classList.contains("event")) return;
    const d = Number(e.target.dataset.d);
    const ev = events.find(x => x.m === vm + 1 && x.d === d);
    $$("#calGrid .day").forEach(x => x.classList.remove("sel"));
    e.target.classList.add("sel");
    $("#calDetail").innerHTML = `<b>${ev.name}</b> - ${d} ${monthNames[vm]}<br>${ev.info}`;
  });
  renderCalendar();

  // upcoming events: find the next date of each event, sort, take 4
  const upcoming = events.map(e => {
    let date = new Date(today.getFullYear(), e.m - 1, e.d);
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) date = new Date(today.getFullYear() + 1, e.m - 1, e.d);
    return { ...e, date, days: Math.round((date - today) / 86400000) };
  }).sort((a, b) => a.date - b.date).slice(0, 4);

  $("#upcoming").innerHTML = upcoming.map(u => `
    <div class="up-item">
      <div class="up-date"><b>${u.d}</b><span>${monthNames[u.m - 1].slice(0, 3)}</span></div>
      <div><b>${u.name}</b><p>${u.days <= 0 ? "Today!" : "In " + u.days + " day" + (u.days > 1 ? "s" : "")} · ${u.info}</p></div>
    </div>`).join("");

  // ----- SGPA calculator -----
  function addRow(name = "", credits = 4, grade = "A") {
    const row = document.createElement("div");
    row.className = "gpa-row";
    row.innerHTML = `
      <input type="text" class="g-name" placeholder="Subject name" value="${name}">
      <input type="number" class="g-cr" min="1" max="10" value="${credits}" aria-label="Credits">
      <select class="g-gr" aria-label="Grade">${Object.keys(gradePoints).map(g => `<option${g === grade ? " selected" : ""}>${g}</option>`).join("")}</select>
      <button class="x" type="button" title="Remove subject">🗑️</button>`;
    $("#gpaRows").appendChild(row);
  }
  addRow("Mathematics", 4, "A+"); addRow("Programming", 4, "O"); addRow("Physics", 3, "B+");
  $("#addSubject").addEventListener("click", () => addRow());
  $("#gpaRows").addEventListener("click", e => { if (e.target.classList.contains("x")) e.target.parentElement.remove(); });
  $("#calcGpa").addEventListener("click", () => {
    let totalCr = 0, totalPts = 0;
    $$(".gpa-row").forEach(r => {
      const cr = Number(r.querySelector(".g-cr").value) || 0;
      totalCr += cr;
      totalPts += cr * gradePoints[r.querySelector(".g-gr").value];
    });
    if (totalCr === 0) { $("#gpaOut").textContent = "Add at least one subject."; return; }
    const sgpa = totalPts / totalCr;
    const remark = sgpa >= 9 ? "Outstanding! 🌟" : sgpa >= 8 ? "Excellent 👏" : sgpa >= 7 ? "Very good 👍" : sgpa >= 6 ? "Good, keep going 💪" : "Let's work harder 📚";
    $("#gpaOut").innerHTML = `Your SGPA<b>${sgpa.toFixed(2)}</b>${remark} (${totalCr} credits)`;
  });
}

// ================== PLACEMENTS ==================
if ($("#chart")) {
  function drawChart(metric) {
    const data = packages[metric];
    const max = Math.max(...data);
    $("#chart").innerHTML = data.map((v, i) => `
      <div class="bar-col"><div class="bar" style="height:0" data-h="${(v / max) * 88}%"><b>${v}</b></div><span>${years[i]}</span></div>`).join("");
    setTimeout(() => $$("#chart .bar").forEach(b => b.style.height = b.dataset.h), 60);   // animate growth
  }
  $$("[data-metric]").forEach(btn => btn.addEventListener("click", () => {
    $$("[data-metric]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    drawChart(btn.dataset.metric);
  }));
  drawChart("avg");

  let rec = "";
  for (let i = 0; i < 2; i++) recruiters.forEach(r => rec += `<span>${r}</span>`);
  $("#recruiters").innerHTML = rec;

  // dept results table with filter
  Object.keys(deptNames).forEach(k => { $("#pDept").innerHTML += `<option value="${k}">${deptNames[k]}</option>`; });
  function showTable() {
    const f = $("#pDept").value;
    const rows = deptResults.filter(r => f === "all" || r.dept === f);
    $("#placeTable").innerHTML = `<tr><th>Department</th><th>Placed</th><th>Avg package</th><th>Top recruiter</th></tr>` +
      rows.map(r => `<tr><td><b>${deptIcons[r.dept]} ${deptNames[r.dept]}</b></td>
        <td><div class="pbar"><div style="width:${r.placed}%"></div></div>${r.placed}%</td>
        <td>${r.avg} LPA</td><td>${r.top}</td></tr>`).join("");
  }
  $("#pDept").addEventListener("change", showTable);
  showTable();

  // stories slider
  let si = 0;
  stories.forEach((_, i) => { $("#stDots").innerHTML += `<button data-i="${i}" aria-label="Story ${i + 1}"></button>`; });
  function showStory(i) {
    si = i;
    const box = $("#stText");
    box.classList.add("fade");
    setTimeout(() => {
      $("#stAvatar").textContent = stories[i].icon;
      box.textContent = `“${stories[i].text}”`;
      $("#stBy").textContent = stories[i].by;
      box.classList.remove("fade");
    }, 280);
    $$("#stDots button").forEach((b, idx) => b.classList.toggle("on", idx === i));
  }
  $("#stDots").addEventListener("click", e => { if (e.target.dataset.i) showStory(Number(e.target.dataset.i)); });
  showStory(0);
  setInterval(() => showStory((si + 1) % stories.length), 5000);
}

// ================== CONTACT ==================
if ($("#contactForm")) {
  buildFaq();
  $("#dept").innerHTML = `<option value="">-- Select department --</option>` + directory.map(d => `<option>${d.name}</option>`).join("");

  function showDirectory() {
    const t = $("#dirSearch").value.toLowerCase().trim();
    const list = directory.filter(d => (d.name + d.head).toLowerCase().includes(t));
    $("#dirList").innerHTML = list.length
      ? list.map(d => `<div class="dir"><b>${d.name}</b><p>👤 ${d.head}</p><p>📞 ${d.phone} · ✉️ ${d.email}</p></div>`).join("")
      : `<p class="muted">No matching department.</p>`;
  }
  $("#dirSearch").addEventListener("input", showDirectory);
  showDirectory();

  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#name").value.trim(), email = $("#email").value.trim(), dept = $("#dept").value, msg = $("#message").value.trim();
    let ok = true;
    ["nameError", "emailError", "deptError", "messageError", "formSuccess"].forEach(id => $("#" + id).textContent = "");
    if (name.length < 2) { $("#nameError").textContent = "Please enter your name."; ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { $("#emailError").textContent = "Please enter a valid email."; ok = false; }
    if (dept === "") { $("#deptError").textContent = "Please choose a department."; ok = false; }
    if (msg.length < 10) { $("#messageError").textContent = "Message must be at least 10 characters."; ok = false; }
    if (ok) { $("#formSuccess").textContent = `Thanks ${name}! The ${dept} will reply to ${email} soon. ✅`; e.target.reset(); }
  });
}
