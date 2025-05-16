const cards = document.querySelectorAll('.card');
const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

cards.forEach(card => {
  let pageNum = 1;
  let pdfDoc = null;
  let canvas = card.querySelector('.pdf-canvas');
  let ctx = canvas.getContext('2d');

  const renderPage = (num) => {
    pdfDoc.getPage(num).then(page => {
      const viewport = page.getViewport({ scale: 0.4 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      let renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      page.render(renderContext);
    });
  };

  card.addEventListener('mouseenter', async () => {
    const url = card.getAttribute('data-pdf');
    if (!pdfDoc) {
      pdfDoc = await pdfjsLib.getDocument(url).promise;
    }
    renderPage(pageNum);
    canvas.style.display = 'block';
    card.querySelector('span').style.display = 'none';
  });

  card.addEventListener('click', () => {
    if (pdfDoc && pageNum < pdfDoc.numPages) {
      pageNum++;
    } else {
      pageNum = 1;
    }
    renderPage(pageNum);
  });

  card.addEventListener('mouseleave', () => {
    canvas.style.display = 'none';
    card.querySelector('span').style.display = 'block';
    pageNum = 1;
  });
});
