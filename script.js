function toggleContent(heading) {
    const content = heading.nextElementSibling;
    content.style.display = content.style.display === "none" || !content.style.display ? "block" : "none";
}
