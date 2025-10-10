// Button to change background color randomly
document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#f9f9f9", "#ffe0b2", "#c8e6c9", "#bbdefb", "#f48fb1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
