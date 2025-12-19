function getZodiac(date) {
  const d = new Date(date);
  const m = d.getMonth() + 1;
  const day = d.getDate();

  if ((m == 3 && day >= 21) || (m == 4 && day <= 19)) return "Aries";
  if ((m == 4 && day >= 20) || (m == 5 && day <= 20)) return "Taurus";
  if ((m == 5 && day >= 21) || (m == 6 && day <= 20)) return "Gemini";
  if ((m == 6 && day >= 21) || (m == 7 && day <= 22)) return "Cancer";
  if ((m == 7 && day >= 23) || (m == 8 && day <= 22)) return "Leo";
  if ((m == 8 && day >= 23) || (m == 9 && day <= 22)) return "Virgo";
  if ((m == 9 && day >= 23) || (m == 10 && day <= 22)) return "Libra";
  if ((m == 10 && day >= 23) || (m == 11 && day <= 21)) return "Scorpio";
  if ((m == 11 && day >= 22) || (m == 12 && day <= 21)) return "Sagittarius";
  if ((m == 12 && day >= 22) || (m == 1 && day <= 19)) return "Capricorn";
  if ((m == 1 && day >= 20) || (m == 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

function submitQuiz() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  if (!name || !dob) {
    alert("Please fill all fields.");
    return;
  }

  const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  let chaos = 0;
  let emotionalWeight = 0;

  const answers = new FormData(document.getElementById("quiz"));

  for (let [_, value] of answers.entries()) {
    if (traits[value] !== undefined) traits[value] += 1;
    if (value === "FUEL") chaos += 1;
    if (value === "SUPPORT") emotionalWeight += 1;
    if (value === "CONNECT") emotionalWeight += 0.5;
  }

  const node = {
    id: name,
    zodiac: getZodiac(dob),
    traits,
    chaos,
    emotionalWeight
  };

  const nodes = JSON.parse(localStorage.getItem("nodes")) || [];
  nodes.push(node);
  localStorage.setItem("nodes", JSON.stringify(nodes));

  window.location.href = "graph.html";
}
