document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const loginBtn = document.getElementById("login-btn");
    const toggleText = document.getElementById("toggle-text");
    const toggleForm = document.getElementById("toggle-form");

    let isLogin = true;

    // Toggle between Login and Sign-Up
    toggleForm.addEventListener("click", () => {
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Login";
            loginBtn.textContent = "Login";
            toggleText.innerHTML = `Don't have an account? <span id="toggle-form">Sign up</span>`;
        } else {
            formTitle.textContent = "Sign Up";
            loginBtn.textContent = "Sign Up";
            toggleText.innerHTML = `Already have an account? <span id="toggle-form">Login</span>`;
        }
    });

    // Handle Login or Sign-Up form submission
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (isLogin) {
            alert("Login successful!");
            window.location.href = "test_page.html"; // Redirect to quiz page
        } else {
            alert("Sign-Up successful! Now, please log in.");
            isLogin = true;
            formTitle.textContent = "Login";
            loginBtn.textContent = "Login";
            toggleText.innerHTML = `Don't have an account? <span id="toggle-form">Sign up</span>`;
        }
    });
});
