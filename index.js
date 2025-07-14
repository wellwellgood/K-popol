// index.ts
function toggleSection(section) {
    var homepage = document.querySelector(".homepage");
    var projectpage = document.querySelector(".projectpage");
    var skillpage = document.querySelector(".skillpage");
    var footer = document.querySelector(".footer");
    homepage.style.display = "none";
    projectpage.style.display = "none";
    skillpage.style.display = "none";
    footer.style.display = "none";
    switch (section) {
        case "home":
            homepage.style.display = "block";
            footer.style.display = "block";
            break;
        case "project":
            projectpage.style.display = "block";
            break;
        case "skill":
            skillpage.style.display = "block";
            break;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    (_a = document.querySelector(".home")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return toggleSection("home"); });
    (_b = document.querySelector(".project")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return toggleSection("project"); });
    (_c = document.querySelector(".skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return toggleSection("skill"); });
});
