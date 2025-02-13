window.menuWidth = 130;
window.menuMobileHeight = 48;

function updateContainerPadding() {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".container").forEach((container) => {
        container.style.paddingRight = `${window.menuWidth * 3 + 40}px`;
        container.style.paddingTop = '0';
    });
    document.querySelectorAll(".container-archive").forEach((container) => {
        container.style.paddingRight = `${window.menuWidth * 4 + 40}px`;
        container.style.paddingTop = '0';
    });
    document.querySelectorAll(".photo-container").forEach((container) => {
        container.style.width = `calc(100vw - ${window.menuWidth * 4 + 40}px)`;
    });
  } else {
    document.querySelectorAll(".container").forEach((container) => {
      container.style.paddingRight = '0';
      container.style.paddingTop = `${window.menuMobileHeight * 3 + 12}px`;
    });
    document.querySelectorAll(".container-archive").forEach((container) => {
      container.style.paddingRight = '0';
      container.style.paddingTop = `${window.menuMobileHeight * 4 + 12}px`;
    });
    document.querySelectorAll(".photo-container").forEach((container) => {
        container.style.width = '100%';
    });
  }   
}

function startLoad() {
  let intervalCount = 0;
  const intervalId = setInterval(() => {
    updateContainerPadding();
    intervalCount++;
    if (intervalCount >= 50) {
      clearInterval(intervalId);
    }
  }, 200);
}

window.onload = function () {
  updateContainerPadding();
};

window.addEventListener('load', updateContainerPadding);
window.addEventListener('resize', updateContainerPadding);