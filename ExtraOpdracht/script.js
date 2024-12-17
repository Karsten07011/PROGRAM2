const Kaarten = [
  "Schoppen",
  "Zwart",
  "Harten",
  "Rood",
  "Klaver",
  "Zwart",
  "Ruiten",
  "Rood",
];

const nummers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Boer", "Vrouw", "Koning", "Aas"];

const cardContainer = document.getElementById("card-container");
cardContainer.style.display = "grid";
cardContainer.style.gridTemplateColumns = "repeat(13, 1fr)";
cardContainer.style.gap = "10px";

const numberNames = {
  2: "twee",
  3: "drie",
  4: "vier",
  5: "vijf",
  6: "zes",
  7: "zeven",
  8: "acht",
  9: "negen",
  10: "tien",
};

const KaartenNamen = (kaart, nummer) => {
  const kaartLower = kaart.toLowerCase();
  const nummerLower = nummer.toString().toLowerCase();
  const nummerFormatted = isNaN(nummerLower)
    ? nummerLower
    : numberNames[nummerLower];
  return `${kaartLower}${nummerFormatted}`;
};

for (let i = 0; i < Kaarten.length; i += 2) {
  for (let j = 0; j < nummers.length; j++) {
    console.log(`${Kaarten[i]} ${nummers[j]} (${Kaarten[i + 1]})`);
    const cardName = KaartenNamen(Kaarten[i], nummers[j]);
    const img = document.createElement("img");
    img.src = `Img/${cardName}.png`;
    img.alt = cardName;
    cardContainer.appendChild(img);
  }
}
