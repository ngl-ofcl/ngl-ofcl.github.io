class NglLink extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const elem = document.createElement("div");
    elem.setAttribute("href", "/");
    elem.setAttribute("class", "margin1 hylink1");
    elem.innerHTML = `
        <div class="main_category block1 right-menu1">
            <a href="/" class="margin1 hylink1">
              ngl.<br />엔지엘
            </a>
        </div>
    `;

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "/src/chanu.css");
    shadow.appendChild(linkElement);

    const style = document.createElement("style");
    style.textContent = `
      .right-menu1 {
        position: fixed;
        right: 0;
        margin: 20px 0;
        width: ${window.menuWidth}px;
      }

      @media (max-width: 768px) {
        .right-menu1 {
          position: fixed;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          top: 12px;
          right: 12px;
          margin: 0;
          width: 50vw;
          max-height: 120px;
        }
      }

      .fade-in {
        opacity: 0.3;
        transition: opacity 0.01s ease-in;
      }

      .fade-in.visible {
        opacity: 1;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(elem);
    
    function updateInnerHtmlOnMobile() {
      const link = (this ? this.shadowRoot : shadow).querySelector('.right-menu1 a');
      
      if (link) {
        if (window.innerWidth <= 768) { // 모바일 조건
          link.innerHTML = 'ngl.<br />엔지엘';
        } else {
          link.innerHTML = 'ngl.<br />엔지엘';
        }
      }
    }

    window.addEventListener('resize', updateInnerHtmlOnMobile.bind(this));
    window.addEventListener('load', updateInnerHtmlOnMobile.bind(this));
    updateInnerHtmlOnMobile();

    elem.classList.add('fade-in');
    setTimeout(() => elem.classList.add('visible'), 1);
    setTimeout(() => updateInnerHtmlOnMobile(), 10);
  }
}

customElements.define("ngl-link", NglLink);
