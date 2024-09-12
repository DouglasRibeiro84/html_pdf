

date = new Date();
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();
                document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;


function downloadPdf() {
    const item = document.querySelector('.content');

    var opt = {
        margin:       [16, 30, 16, 30], // Ajuste das margens
        filename:     'PM.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(item).toPdf().get('pdf').then(function(pdf) {
        // Ajuste o tamanho da página e o layout
        const totalPages = pdf.internal.pageCount;
        for (let i = 1; i <= totalPages; i++) {
            pdf.addPage();
        }
        pdf.save('PM.pdf');
    });
}

