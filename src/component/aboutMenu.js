class AboutMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const menu = document.createElement("div");
    menu.innerHTML = `
      <div class="main_category block1 right-menu3">
        <a href="/about/values.html" class="margin1 hylink1" id="about" data-target="about_detail">values</a>
        <a href="/about/us.html" class="margin1 hylink1" id="archive" data-target="archive_detail">us</a>
      </div>
    `;

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "/src/chanu.css");
    shadow.appendChild(linkElement);

    shadow.appendChild(menu);

    const style = document.createElement("style");
    style.textContent = `
        .right-menu3 {
            position: fixed;
            right: ${window.menuWidth * 2}px;
            margin: 20px 0;
            width: ${window.menuWidth}px;
        }
        .active-link {
            text-decoration: underline !important;
        }

        @media (max-width: 768px) {
            .right-menu3 {
                position: fixed;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                top: ${12 + window.menuMobileHeight * 2}px;
                right: 12px;
                margin: 0;
                width: 80vw;
            }
            .right-menu3 .hylink1 {
                margin-left: 0;
            }
        }
    `;
    shadow.appendChild(style);

    const currentPath = window.location.pathname;

    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      if (currentPath.includes(link.getAttribute("href"))) {
        link.classList.add("active-link");
      }
    });
  }
}

customElements.define("about-menu", AboutMenu);
