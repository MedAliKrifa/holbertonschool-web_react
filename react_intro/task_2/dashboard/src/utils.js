export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}