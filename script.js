// ====== Multilingual content ======
const translations = {
  en: {
    homeTitle: "Connect to Success",
    homeDesc: "We transform challenges into opportunities with Management, Finance, and Technology services.",
    servicesTitle: "Our Services",
    slide1: "Strategic Management",
    slide2: "Financial Consulting",
    slide3: "Training & Development",
    aboutTitle: "About GTECS",
    aboutDesc: "Founded in 2023, GTECS provides integrated solutions in Management, Technology, and Services.",
    teamTitle: "Our Team",
    teamDesc: "Led by Paulo Jaime Comé, our team is dedicated to innovation and excellence.",
    contactTitle: "Contact Us",
    nameLabel: "Name:",
    emailLabel: "Email:",
    messageLabel: "Message:",
    sendBtn: "Send",
    formSuccess: "Message sent successfully!",
    formError: "Please fill in all fields."
  },
  pt: {
    homeTitle: "Conecta-se ao Sucesso",
    homeDesc: "Transformamos desafios em oportunidades com serviços de Gestão, Finanças e Tecnologia.",
    servicesTitle: "Nossos Serviços",
    slide1: "Gestão Estratégica",
    slide2: "Consultoria Financeira",
    slide3: "Treinamento & Desenvolvimento",
    aboutTitle: "Sobre a GTECS",
    aboutDesc: "Fundada em 2023, a GTECS fornece soluções integradas em Gestão, Tecnologia e Serviços.",
    teamTitle: "Nossa Equipa",
    teamDesc: "Liderada por Paulo Jaime Comé, nossa equipa é dedicada à inovação e excelência.",
    contactTitle: "Contacte-nos",
    nameLabel: "Nome:",
    emailLabel: "Email:",
    messageLabel: "Mensagem:",
    sendBtn: "Enviar",
    formSuccess: "Mensagem enviada com sucesso!",
    formError: "Por favor preencha todos os campos."
  }
};

let currentLang = "en";

// ====== Load language ======
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById("homeTitle").textContent = t.homeTitle;
  document.getElementById("homeDesc").textContent = t.homeDesc;
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
  document.getElementById("slide1").textContent = t.slide1;
  document.getElementById("slide2").textContent = t.slide2;
  document.getElementById("slide3").textContent = t.slide3;

  document.getElementById("aboutTitle").textContent = t.aboutTitle;
  document.getElementById("aboutDesc").textContent = t.aboutDesc;
  document.getElementById("teamTitle").textContent = t.teamTitle;
  document.getElementById("teamDesc").textContent = t.teamDesc;

  document.getElementById("contactTitle").textContent = t.contactTitle;
  document.getElementById("nameLabel").textContent = t.nameLabel;
  document.getElementById("emailLabel").textContent = t.emailLabel;
  document.getElementById("messageLabel").textContent = t.messageLabel;
  document.getElementById("sendBtn").textContent = t.sendBtn;
}

// ====== Section Navigation ======
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    if(target === "home") initSlider();
    if(target === "contact") initForm();
  });
});

// ====== Slider ======
let slideIndex = 0;
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if(!slides.length) return;
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = 0;
  slides[slideIndex].classList.add("active");

  next.onclick = () => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  };
  prev.onclick = () => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
  };
}

// ====== Form ======
function initForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");
  if(!form) return;

  form.onsubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const t = translations[currentLang];
    if(!name || !email || !message) {
      msg.textContent = t.formError;
      msg.style.color = "red";
    } else {
      msg.textContent = t.formSuccess;
      msg.style.color = "green";
      form.reset();
    }
  };
}

// ====== Language buttons ======
document.getElementById("enBtn").addEventListener("click", () => setLanguage("en"));
document.getElementById("ptBtn").addEventListener("click", () => setLanguage("pt"));

// ====== Initialize ======
document.getElementById("home").classList.add("active");
setLanguage(currentLang);
initSlider();
