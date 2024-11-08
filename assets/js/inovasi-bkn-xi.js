// Animasi Typewriter
const phrases = [
  "#BerAKHLAK",
  "Berorientasi Pelayanan",
  "Akuntanbel",
  "Kompeten",
  "Harmonis",
  "Loyal",
  "Adaptif",
  "Kolaboratif",
];
let currentPhraseIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
  const phrase = phrases[currentPhraseIndex];
  let text = "";
  let i = 0;

  function typing() {
    if (i < phrase.length) {
      text += phrase.charAt(i);
      typewriterElement.innerText = text;
      i++;
      setTimeout(typing, 100);
    } else {
      setTimeout(() => {
        text = "";
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeWriter();
      }, 2000);
    }
  }

  typing();
}

typeWriter();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".bg-gray-100").forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
