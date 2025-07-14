// index.ts

function toggleSection(section: "home" | "project" | "skill"): void {
    const homepage = document.querySelector<HTMLElement>(".homepage")!;
    const projectpage = document.querySelector<HTMLElement>(".projectpage")!;
    const skillpage = document.querySelector<HTMLElement>(".skillpage")!;
    const footer = document.querySelector<HTMLElement>(".footer")!;
  
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
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".home")?.addEventListener("click", () => toggleSection("home"));
    document.querySelector(".project")?.addEventListener("click", () => toggleSection("project"));
    document.querySelector(".skill")?.addEventListener("click", () => toggleSection("skill"));
  });
  