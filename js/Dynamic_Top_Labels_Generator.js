const levelsToGenerate = [
    { name: "Extremscapes", top: 2, id: "813" },
    { name: "traumas buff buff", top: 1, id: "980" },
    { name: "si que hay webos", top: 3, id: "795" },
    { name: "webolactico plus", top: 4, id: "803" },
    { name: "The Art of el Bongue", top: 5, id: "588" },
    { name: "Nuke powder Extreme", top: 6, id: "145" },
    { name: "Figure circles extr", top: 7, id: "928" },
    { name: "Sonic Neon extreme", top: 8, id: "829" },
    { name: "old Stereo Madness", top: 9, id: "587" },
    { name: "Blind Faith", top: 10, id: "850" },
    { name: "666", top: 11, id: "832" }
];

for (log of levelsToGenerate) {
    console.log(`name: ${log.name}\ntop: ${log.top}\nid: ${log.id}\n`)
}

const container = document.querySelector(".levels_container");

levelsToGenerate.sort((a, b) => a.top - b.top);

for (let i in levelsToGenerate) {
    const level = levelsToGenerate[i];

    const levelDiv = document.createElement("div");
    levelDiv.className = "level";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.src = "img/Extreme_Demon_Face.png";

    imageDiv.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = `#${level.top} ${level.name}`;

    const levelID = document.createElement("h2");
    levelID.textContent = `ID: ${level.id}`;
    levelID.style.cursor = "pointer"; // Para mostrar que es clickeable

    // Al hacer clic, se copia la ID
    levelID.addEventListener("click", () => {
        navigator.clipboard.writeText(level.id)
            .then(() => {
                levelID.textContent = `ID copiada: ${level.id}`;
                setTimeout(() => {
                    levelID.textContent = `ID: ${level.id}`;
                }, 2000); // Volver al texto original después de 2 segundos
            })
            .catch(err => {
                console.error("Error al copiar", err);
            });
    });

    levelDiv.appendChild(imageDiv);
    levelDiv.appendChild(title);
    levelDiv.appendChild(levelID);

    container.appendChild(levelDiv);
}
