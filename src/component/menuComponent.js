class MenuComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const menu = document.createElement("div");
    menu.innerHTML = `
      <div class="main_category block1 right-menu2">
        <a
          href="/about/index.html"
          class="margin1 hylink1"
          id="about"
          data-target="about_detail"
        >
          about
        </a>
        <a
          href="/archive/index.html"
          class="margin1 hylink1"
          id="archive"
          data-target="archive_detail"
        >
          archive
        </a>
        <a
          href="/contact/index.html"
          class="margin1 hylink1"
          id="contact"
          data-target="contact_detail"
        >
          contact
        </a>
      </div>
    `;

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "/src/chanu.css");
    shadow.appendChild(linkElement);

    shadow.appendChild(menu);

    const style = document.createElement("style");
    style.textContent = `
      .right-menu2 {
        position: fixed;
        right: ${window.menuWidth}px;
        margin: 20px 0;
        width: ${window.menuWidth}px;
      }
      .active-link {
        text-decoration: underline !important;
      }

      @media (max-width: 768px) {
        .right-menu2 {
          position: fixed;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          top: ${18 + (window.menuMobileHeight)}px;
          right: 12px;
          margin: 0;
          width: 80vw;
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

customElements.define("menu-component", MenuComponent);
