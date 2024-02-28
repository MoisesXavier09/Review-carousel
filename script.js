const arrows = document.querySelectorAll(".arrows span");
const photo = document.querySelector("img");
const nameP = document.querySelector("h2");
const work = document.querySelector(".work");
const about = document.querySelector("p");
const btnSurprie = document.querySelector("button");
const equipe = [
  {
    name: "Ana Silva",
    work: "Desenvolvedora Front-end",
    about:
      "Ana é uma desenvolvedora front-end experiente com paixão por criar interfaces de usuário intuitivas e elegantes. Ela tem um forte conhecimento de HTML, CSS e JavaScript.",
    photo:
      "https://plus.unsplash.com/premium_photo-1671282928655-5ffc9cf95728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww",
  },
  {
    name: "João Oliveira",
    work: "Desenvolvedor Back-end",
    about:
      "João é um desenvolvedor back-end experiente com habilidades em diversas linguagens de programação, como Python, Java e Node.js. Ele é apaixonado por construir APIs robustas e escaláveis.",
    photo:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Maria Costa",
    work: "Designer UX/UI",
    about:
      "Maria é uma designer UX/UI talentosa com um olho para a estética e a usabilidade. Ela tem experiência em criar designs de interface de usuário intuitivos e atraentes para websites e aplicativos.",
    photo:
      "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFufGVufDB8fDB8fHww",
  },
  {
    name: "Pedro Souza",
    work: "Gerente de Projetos",
    about:
      "Pedro é um gerente de projetos experiente com habilidades em planejamento, organização e execução de projetos. Ele é apaixonado por ajudar equipes a alcançar seus objetivos.",
    photo:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Mariana Santos",
    work: "Especialista em Marketing",
    about:
      "Mariana é uma especialista em marketing experiente com habilidades em marketing digital, branding e comunicação. Ela é apaixonada por ajudar empresas a crescer e alcançar seus objetivos de marketing.",
    photo:
      "https://plus.unsplash.com/premium_photo-1688375301014-d47ef7e989ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWFufGVufDB8fDB8fHww",
  },
];

let sequence = 0;

function changeContentCard(s) {
  photo.src = equipe[s].photo;
  nameP.textContent = equipe[s].name;
  work.textContent = equipe[s].work;
  about.textContent = equipe[s].about;
}

btnSurprie.addEventListener("click", () => {
  changeContentCard(Math.round(Math.random() * 4));
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", ({ target }) => {
    switch (target.classList[0]) {
      case "left":
        if (sequence === 0) {
          sequence = equipe.length - 1;
        } else if (sequence <= -5) {
          sequence = equipe.length - 1;
        } else {
          sequence -= 1;
        }
        changeContentCard(sequence);
        break;
      case "right":
        if (sequence === 0) {
          sequence = 1;
        } else if (sequence === 4) {
          sequence = 0;
        } else {
          sequence += 1;
        }
        changeContentCard(sequence);
        break;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  changeContentCard(0);
});
