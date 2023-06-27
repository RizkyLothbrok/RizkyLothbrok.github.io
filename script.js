const toggleButtons = document.querySelectorAll('.toggle-video');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const video = this.nextElementSibling;
        video.style.display = (video.style.display === 'none') ? 'block' : 'none';

        const buttonText = this.textContent;
        this.textContent = (buttonText === 'Show Video') ? 'Hide Video' : 'Show Video';
    });
});
