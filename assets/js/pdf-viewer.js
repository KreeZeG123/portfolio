const pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

function pdfViewer(pdfPath, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Conteneur "${containerId}" introuvable.`);
    return;
  }

  pdfjsLib
    .getDocument(pdfPath)
    .promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        container.innerHTML = ""; // Vider le conteneur
        container.appendChild(canvas);

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    })
    .catch((err) => {
      console.error(`Erreur avec le PDF "${pdfPath}":`, err);
      container.textContent = "Impossible de charger ce PDF.";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  pdfViewer(
    "assets/doc/terraQuest_conception/rapport_projet_terraQuest_m1acdi-2c.pdf",
    "pdf-viewer-1"
  );
  pdfViewer(
    "assets/doc/terraQuest_conception/presentation_commerciale_terraQuest_m1acdi-2c.pdf",
    "pdf-viewer-2"
  );

  new Swiper(".init-swiper", {
    loop: true,
    speed: 600,
    autoplay: { delay: 5000 },
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
});
