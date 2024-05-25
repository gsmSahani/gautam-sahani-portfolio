document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'gautam sahani updated resume 05242024.pdf';
    link.download = 'gautam-sahani-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});