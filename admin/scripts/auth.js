function login(userData) {
    return fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
        .then((data) => data.json())
        .then((result) => {
            localStorage.setItem("adminData", JSON.stringify(result))
        })
}

function logout() {
    localStorage.clear()
    location.pathname = "/admin/login.html"
}

export { login, logout }