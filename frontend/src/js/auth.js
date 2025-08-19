async function loginUser(email, password) {
    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(data.token) {
        alert("Login successful");
        setToken(data.token);
        window.location.href = "/src/pages";
    } else {
        alert("Login failed");
    }
}

async function registerUser(email, password) {
    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if(data.success) {
        alert("Registration successful");
        window.location.href = "/src/pages/login.html";
    } else {
        alert("Registration failed");
    }
}

