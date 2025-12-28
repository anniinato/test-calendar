const calendar = document.getElementById("calendar");
const today = new Date().getDate();
const month = new Date().getMonth(); // December = 11

// Example surprises for each day (can be text, images, or links)
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

for (let day = 1; day <= 24; day++) {
  const door = document.createElement("div");
  door.className = "door";
  door.textContent = day;

  if (month !== 11 || day > today) {
    door.classList.add("locked");
  } else {
    door.addEventListener("click", () => {
      alert(surprises[day] || "🎄 Hauskaa joulua!");
    });
  }

  calendar.appendChild(door);
}
