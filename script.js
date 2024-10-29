// Intersection Observer to reveal content on scroll
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.content.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach(el => observer.observe(el));
});

// Toggle content reveal on click
function toggleContent(heading) {
    const content = heading.nextElementSibling;
    content.classList.toggle('show');
}
