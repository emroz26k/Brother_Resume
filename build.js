const fs = require("fs");

fs.mkdirSync("public/css", { recursive: true });
fs.mkdirSync("public/js", { recursive: true });

fs.copyFileSync("src/css/style.css", "public/css/style.css");
fs.copyFileSync("src/js/script.js", "public/js/script.js");

console.log("CSS and JS copied successfully.");