// console.log("Loaded instruction.js");

// // klik på knapper

// document.querySelector("#usaBtn").addEventListener("click", usaButtonClick);

// function usaButtonClick() {
//   console.log("usa button trykket på");
//   document.querySelector()
// }

// js/instruction.js
console.log("Loaded instruction.js");

document.addEventListener("DOMContentLoaded", () => {
  // Elementer der skal opdateres
  const headingEl = document.querySelector("#info-overskrift");
  const textEl = document.querySelector(".info-text .placeholder");
  const efficiencyEl = document.querySelector("#efficiency");
  const requirementEl = document.querySelector("#requirement");

  // SVG regioner
  const svgRegions = {
    usaBtn: document.querySelector("#atombombe"),
    sydamerikaBtn: document.querySelector("#borgerkrig"),
    afrikaBtn: document.querySelector("#safari"),
    europaBtn: document.querySelector("#virus"),
  };

  // Knapper
  const buttons = {
    usaBtn: document.querySelector("#usaBtn"),
    sydamerikaBtn: document.querySelector("#sydamerikaBtn"),
    afrikaBtn: document.querySelector("#afrikaBtn"),
    europaBtn: document.querySelector("#europaBtn"),
  };

  // Tekstindhold
  const content = {
    usaBtn: {
      title: "USA – Den Eksperimentelle Fredsbombe",
      text: "USA har igen valgt at teste den såkaldte 'Fredsbombe' – et projekt, der angiveligt forener nationer ved at opløse dem i samme øjeblik. Bomben drives af ren selvtillid og energidrik, og udløser et mildt radioaktivt glimt af optimisme over hele kontinentet. Ingen ved, om den eksploderer eller blot afspiller nationalsangen på lydstyrke 9000.",
      efficiency:
        "Effektivitet: Officielt målt til 120%, selv når den ikke virker. Den kaldes ‘følelsesmæssigt ustoppelig’.",
      requirement:
        "Krav: Solbriller (til lyset), patriotisk playlist og en kold sodavand til at se verden fordampe med stil.",
    },

    sydamerikaBtn: {
      title: "Sydamerika – Borgerkrigens Buffet",
      text: "En simpel knapstarter i regionen kan udløse den legendariske 'Borgerkrig Deluxe'. Hver by vælger selv deres farver, slogans og midlertidige konger. Kaoset spredes som en dans – bogstaveligt talt, da revolutionerne foregår i sambarytme. Historikere kalder det både smukt og juridisk uforståeligt.",
      efficiency:
        "Effektivitet: 87% chance for spontan nationalsang og 100% chance for forvirring blandt naboer.",
      requirement:
        "Krav: Trommer, glitter, og en officiel undskyldning klar til pressemødet bagefter.",
    },

    afrikaBtn: {
      title: "Afrika – Safari i Mutation",
      text: "Dyrelivet er blevet… kreativt. Løver har udviklet vinger, giraffer kan teleportere, og antiloper har opdaget heavy metal. Hele savannen kører nu 24/7 på kaotisk evolution. Forskerne kalder det ‘Darwin 2.0 – Revenge Edition’.",
      efficiency:
        "Effektivitet: Ubegrænset, men uforudsigelig. Safari-ture anbefales kun, hvis du har panserglas og god humor.",
      requirement:
        "Krav: Kikkert, bananer til forhandlinger og en manual i panikstyring.",
    },

    europaBtn: {
      title: "Europa – Virus af Vellyd",
      text: "En mystisk lydbåren virus har ramt Europa. Den spredes gennem elevator-musik og får ofrene til at synge ufrivillige ballader om eksistentiel angst og dårligt vejr. Grænserne synger i kor, og hele EU danser i takt med apokalypsens toner.",
      efficiency:
        "Effektivitet: 99% infektion gennem dårlig smag. Forskere advarer mod at nynne med.",
      requirement:
        "Krav: Ørepropper, ironisk distance og adgang til nød-karaoke.",
    },
  };

  // Funktion til at opdatere tekst + highlight
  function updateInfo(key) {
    const c = content[key];
    if (!c) return;

    headingEl.textContent = c.title;
    textEl.textContent = c.text;
    efficiencyEl.textContent = c.efficiency;
    requirementEl.textContent = c.requirement;

    // Fjern tidligere "active"-klasse fra knapper og SVG-regioner
    Object.values(buttons).forEach((btn) => btn.classList.remove("active"));
    Object.values(svgRegions).forEach((region) => {
      if (region) region.classList.remove("active-region");
    });

    // Tilføj "active" til trykket knap og tilhørende SVG-region
    const activeBtn = buttons[key];
    const activeRegion = svgRegions[key];
    if (activeBtn) activeBtn.classList.add("active");
    if (activeRegion) activeRegion.classList.add("active-region");
  }

  // Klik-lyttere
  Object.entries(buttons).forEach(([key, btn]) => {
    if (!btn) return;
    btn.addEventListener("click", () => updateInfo(key));
  });

  // Standard ved load
  updateInfo("usaBtn");
});
