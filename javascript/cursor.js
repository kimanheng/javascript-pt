var cursorfollow = document.getElementById("cursor-follow");
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
    cursorfollow.style.left = e.clientX + "px",
    cursorfollow.style.top = e.clientY + "px";
});

