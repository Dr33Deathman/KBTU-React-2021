
export function isAuthorized() {
    return localStorage.getItem("authorized") === "true";
}

export function unAuthorize() {
    localStorage.setItem("authorized", "false");
}

export function Authorize(login, password) {
    if (login === "Kamran" && password === "123") {
        localStorage.setItem("authorized", "true");
        return true;
    } else {
        localStorage.setItem("authorized", "false");
        return false;
    }
}