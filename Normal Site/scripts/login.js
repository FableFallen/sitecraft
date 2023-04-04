document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "123" && password === "123") {
            window.location.href = "index.html";
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
