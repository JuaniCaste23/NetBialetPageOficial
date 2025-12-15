  // Mobile menu
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Parallax hero
  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
  });

/*Funcion externa*/
//funcion que permite un scroll suavizado entre secciones

const links = document.querySelectorAll('a[href^="#"]');
console.log(links);
    links.forEach((link) => {

        link.addEventListener('click', (e) => {
            
            const target = e.currentTarget.getAttribute('href');

            e.preventDefault();
            document.querySelector(target).scrollIntoView(
            {
                behavior: 'smooth'
            });

        });

    }); 
