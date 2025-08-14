// Get elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const status = document.getElementById("status");
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("password");

// Check login status and update UI
function checkLogin() {
    const userId = localStorage.getItem("userId");
    if (userId) {
        status.textContent = `Logged in as: ${userId}`;
        loginBtn.disabled = true;
        userIdInput.disabled = true;
        passwordInput.disabled = true;
    } else {
        status.textContent = "Not logged in";
        loginBtn.disabled = false;
        userIdInput.disabled = false;
        passwordInput.disabled = false;
    }
}

// Login button click
loginBtn.addEventListener("click", () => {
    const userId = userIdInput.value.trim();
    const password = passwordInput.value.trim();

    if (!userId || !password) {
        alert("Please enter both User ID and Password");
        return;
    }

    // Store userId in localStorage
    localStorage.setItem("userId", userId);

    // Clear input fields
    userIdInput.value = "";
    passwordInput.value = "";

    checkLogin();
});

// Logout button click
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userId");
    checkLogin();
});

// Initial check when page loads
checkLogin();
