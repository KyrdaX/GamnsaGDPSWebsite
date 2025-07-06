const levelsToGenerate = [
    { name: "Extremescapes", top: 1, id: "813" },
];

const container = document.querySelector(".levels_container");

levelsToGenerate.sort((a, b) => a.top - b.top);

for (let i in levelsToGenerate) {
    const level = levelsToGenerate[i];

    const levelDiv = document.createElement("div");
    levelDiv.className = "level";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.src = "/GamnsaGDPSWebsite/img/Extreme_Demon_Face.png";

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
