import { login, logout } from "./auth.js"

const adminData = localStorage.getItem("adminData")

if (!adminData) logout()

const adminObj = JSON.parse(adminData)

if (!adminObj.email || !adminObj.password) logout()

login(adminObj).catch(err => logout())