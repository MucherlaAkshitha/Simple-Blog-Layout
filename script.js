// Example: Show alert when clicking "Read More"
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("This would take you to the full blog post!");
    });
  });
});
