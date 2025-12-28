const calendar = document.getElementById("calendar");
const doorContent = document.getElementById("door-content");
const doorTitle = document.getElementById("door-title");
const doorText = document.getElementById("door-text");
const closeButton = document.getElementById("close-button");

// Finnish time calculation
function getFinnishDate() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  // Finland is UTC+2 (UTC+3 if daylight saving, but December is UTC+2)
  return new Date(utc + 2 * 3600000);
}

const todayDate = getFinnishDate();
const year = todayDate.getFullYear();
const month = 11; // December
const today = todayDate.getDate();

// Surprises for each day
const surprises = {
  1: "🎅 Hei! Ensimmäinen luukku on auki!",
  2: "🍫 Suklaata päivän herkuksi!",
  3: "🎵 Kuuntele joululaulu!",
  4: "❄️ Ulkona sataa lunta!",
  5: "🎁 Pieni yllätys odottaa!",
  6: "🕯 Sytytä adventtikynttilä!",
  7: "☕ Nauti kuuma kaakao!",
  8: "🎄 Koristele joulukuusi!",
  9: "🎨 Piirrä joulukortti!",
  10: "🍪 Leivo pipareita!",
  11: "🎶 Laula joululauluja!",
  12: "🧦 Valmistele joulusukat!",
  13: "🖼 Katso jouluelokuva!",
  14: "📝 Kirjoita joulutervehdys!",
  15: "🍎 Tee jouluomenahillo!",
  16: "🎁 Tee lahjalista!",
  17: "❄️ Lähde ulos lumileikkeihin!",
  18: "📖 Lue joulutarina!",
  19: "🎵 Soita joulusävel!",
  20: "🕯 Järjestä kynttilävalaistus!",
  21: "🎄 Tee joulukoristeita!",
  22: "🍫 Valmista joulusuklaat!",
  23: "🎁 Pakkaa lahjat!",
  24: "🎉 Hyvää joulua! 🎄"
};

// Generate doors
for (let day = 1; day <= 24; day++) {
  const door = document.createElement("div");
  door.className = "door";
  door.textContent = day;

  // Only allow opening for today or past
  if (day > today) {
    door.classList.add("locked");
  } else {
    door.addEventListener("click", () => {
      doorTitle.textContent = `Luukku ${day}`;
      doorText.textContent = surprises[day] || "🎄 Hauskaa joulua!";
      doorContent.style.display = "block";
      doorContent.scrollIntoView({ behavior: "smooth" });
    });
  }

  calendar.appendChild(door);
}

// Close button
closeButton.addEventListener("click", () => {
  doorContent.style.display = "none";
});
