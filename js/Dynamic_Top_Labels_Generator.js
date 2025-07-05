const levelsToGenerate = [
    { name: "Extremescapes", top: 1 },
];

const container = document.querySelector(".levels_container");

levelsToGenerate.sort((a, b) => a.top - b.top);

for (let i in levelsToGenerate) {
  const level = levelsToGenerate[i];

  // Crear el contenedor principal
  const levelDiv = document.createElement("div");
  levelDiv.className = "level";

  // Contenedor de imagen
  const imageDiv = document.createElement("div");
  imageDiv.className = "image";

  const img = document.createElement("img");
  img.src = "/img/Extreme_Demon_Face.png";

  imageDiv.appendChild(img);

  const title = document.createElement("h1");
  title.textContent = `#${level.top} ${level.name}`;

  levelDiv.appendChild(imageDiv);
  levelDiv.appendChild(title);

  container.appendChild(levelDiv);
}
