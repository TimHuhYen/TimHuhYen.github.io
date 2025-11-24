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


  
// Set the date/time of the hackathon
const eventDate = new Date("April 18, 2026 08:00:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output to HTML
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  // When event passes
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "The hackathon has started!";
  }
}, 1000);
