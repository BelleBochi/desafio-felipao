let heroName = "mauricio";
let heroXP = 10000;

let heroLevel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (heroXP >= 10001) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[7]);
} else if (heroXP >= 9001 && heroXP <= 10000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[6]);
} else if (heroXP >= 8001 && heroXP <= 9000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[5]);
} else if (heroXP >= 7001 && heroXP <= 8000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[4]);
} else if (heroXP >= 6001 && heroXP <= 7000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[3]);
} else if (heroXP >= 2001 && heroXP <= 5000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[2]);
} else if (heroXP >= 1001 && heroXP <= 2000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[1]);
} else if (heroXP >= 1000) {
  console.log("O herói de nome " + heroName + " está no nível de " + heroLevel[0]);
}
