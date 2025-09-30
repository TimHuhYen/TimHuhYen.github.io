  //INTRO EFFECTS
  window.addEventListener("scroll", () => {
    const yOffset = window.scrollY;
    document.querySelector(".sky").style.backgroundPosition =
      `center ${0 - yOffset * 0.1}px`;
  });
  
  window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    if (!intro) return;
  
    intro.classList.add('show');
  
    const startWords = () => intro.classList.add('animate');
    if (getComputedStyle(intro).transitionDuration !== '0s') {
      intro.addEventListener('transitionend', startWords, { once:true });
    } else {
      startWords();
    }
  
    const BOB_MS = 2600;
    const EXIT_MS = 900;
  
    const startExit = () => {
      intro.classList.add('fly');
      setTimeout(() => intro.remove(), EXIT_MS + 250);
    };
  
    const t = setTimeout(startExit, BOB_MS);
    ['click','keydown','scroll','touchstart'].forEach(ev =>
      window.addEventListener(ev, () => { clearTimeout(t); startExit(); }, { once:true })
    );
  });




// Kean title effect

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.title-effect .wrd-effect').forEach(span => {
      span.addEventListener('animationend', (e) => {
        // ensure we're reacting only to the 'drop' animation ending
        if (e.animationName === 'drop') {
          span.classList.add('landed');
        }
      });
    });
  });
