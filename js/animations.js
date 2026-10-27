/**
 * SOLLOS 40 ANOS - ANIMATION & INTERACTION ENGINE
 * Implementa:
 * - Custom Cursor & Mouse Follower
 * - Magnetic Buttons (Física de atração magnética)
 * - 3D Hover & Specular Sheen (Perspective tilt)
 * - Parallax (Scroll & Mouse Coordinates)
 * - Text Reveal + Character Reveal
 * - Blur Reveal & Intersection Observer
 * - Animated Counters
 */

class SollosAnimationEngine {
  constructor() {
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.cursorPos = { x: this.mouse.x, y: this.mouse.y };
    this.followerPos = { x: this.mouse.x, y: this.mouse.y };
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    this.init();
  }

  init() {
    this.initCursor();
    this.initMagneticButtons();
    this.init3DTilt();
    this.initParallax();
    this.initScrollReveals();
    this.initCharacterReveal();
    this.initCounters();
    this.initListeners();
  }

  initListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      // Mouse Spotlight
      const spotlight = document.querySelector('.mouse-spotlight');
      if (spotlight) {
        spotlight.style.transform = `translate(calc(${this.mouse.x}px - 50%), calc(${this.mouse.y}px - 50%))`;
      }
    }, { passive: true });

    // Reruns parallax on scroll
    window.addEventListener('scroll', () => {
      this.handleScrollParallax();
    }, { passive: true });
  }

  /* -------------------------------------------------------------
     1. CURSOR PERSONALIZADO & MOUSE FOLLOWER
  ------------------------------------------------------------- */
  initCursor() {
    if (this.isTouch) return;

    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    if (!cursor || !follower) return;

    const render = () => {
      // Lerp (Linear Interpolation) para movimento suave
      this.cursorPos.x += (this.mouse.x - this.cursorPos.x) * 0.9;
      this.cursorPos.y += (this.mouse.y - this.cursorPos.y) * 0.9;
      
      this.followerPos.x += (this.mouse.x - this.followerPos.x) * 0.18;
      this.followerPos.y += (this.mouse.y - this.followerPos.y) * 0.18;

      cursor.style.transform = `translate(${this.cursorPos.x}px, ${this.cursorPos.y}px) translate(-50%, -50%)`;
      follower.style.transform = `translate(${this.followerPos.x}px, ${this.followerPos.y}px) translate(-50%, -50%)`;

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Hover em links e botões normais
    document.querySelectorAll('a, button, .btn-magnetic, .nav-link, input, select, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('hovered'));
      el.addEventListener('mouseleave', () => follower.classList.remove('hovered'));
    });

    // Hover em cards de serviços
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => follower.classList.add('hovered-card'));
      card.addEventListener('mouseleave', () => follower.classList.remove('hovered-card'));
    });
  }

  /* -------------------------------------------------------------
     2. MAGNETIC BUTTONS (ATRAÇÃO MAGNÉTICA)
  ------------------------------------------------------------- */
  initMagneticButtons() {
    if (this.isTouch) return;

    const magneticElements = document.querySelectorAll('.magnetic-btn-wrap, .btn-magnetic');
    
    magneticElements.forEach(wrap => {
      const target = wrap.classList.contains('btn-magnetic') ? wrap : wrap.querySelector('.btn-magnetic');
      if (!target) return;

      const strength = wrap.dataset.magneticStrength ? parseFloat(wrap.dataset.magneticStrength) : 0.35;

      wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      wrap.addEventListener('mouseleave', () => {
        target.style.transform = 'translate(0px, 0px)';
        target.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => {
          target.style.transition = '';
        }, 500);
      });
    });
  }

  /* -------------------------------------------------------------
     3. 3D HOVER EFFECT & SPECULAR SHEEN (TILT)
  ------------------------------------------------------------- */
  init3DTilt() {
    if (this.isTouch) return;

    const cards = document.querySelectorAll('.service-card, .pillar-card, .hero-3d-card');

    cards.forEach(card => {
      // Cria a camada de reflexo especular se não existir
      let sheen = card.querySelector('.tilt-card-sheen');
      if (!sheen) {
        sheen = document.createElement('div');
        sheen.className = 'tilt-card-sheen';
        card.appendChild(sheen);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Rotação sutil (-10deg a +10deg)
        const rotateX = ((centerY - y) / centerY) * 9;
        const rotateY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        // Atualiza ponto de luz
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${percentX}%`);
        card.style.setProperty('--mouse-y', `${percentY}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => {
          card.style.transition = '';
        }, 600);
      });
    });
  }

  /* -------------------------------------------------------------
     4. PARALLAX (SCROLL & MOUSE)
  ------------------------------------------------------------- */
  initParallax() {
    // Parallax do Mouse em elementos destacados
    if (!this.isTouch) {
      window.addEventListener('mousemove', (e) => {
        const mouseXPercent = (e.clientX / window.innerWidth) - 0.5;
        const mouseYPercent = (e.clientY / window.innerHeight) - 0.5;

        document.querySelectorAll('[data-parallax-mouse]').forEach(el => {
          const depth = parseFloat(el.dataset.parallaxMouse || 20);
          const moveX = mouseXPercent * depth;
          const moveY = mouseYPercent * depth;
          el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
      }, { passive: true });
    }

    this.handleScrollParallax();
  }

  handleScrollParallax() {
    const scrollY = window.pageYOffset;

    // Vídeo de fundo com velocidade reduzida
    const heroVideo = document.querySelector('.hero-video-bg');
    if (heroVideo && scrollY < window.innerHeight) {
      heroVideo.style.transform = `scale(1.05) translateY(${scrollY * 0.28}px)`;
    }

    // Texto gigante de fundo
    const bgText = document.querySelector('.expertise-bg-text');
    if (bgText) {
      const parentRect = bgText.parentElement.getBoundingClientRect();
      if (parentRect.top < window.innerHeight && parentRect.bottom > 0) {
        const offset = (window.innerHeight - parentRect.top) * 0.12;
        bgText.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
      }
    }
  }

  /* -------------------------------------------------------------
     5. SCROLL REVEALS (FADE, BLUR & IMAGE MASK)
  ------------------------------------------------------------- */
  initScrollReveals() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Dispara contadores se o elemento contiver contadores
          if (entry.target.classList.contains('count-trigger')) {
            this.animateElementCounters(entry.target);
          }
          // Uma vez revelado, pode continuar observando se for contínuo ou liberar
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-init, .reveal-stagger, .blur-reveal, .image-mask-wrap, .text-reveal-line, .count-trigger').forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* -------------------------------------------------------------
     6. TEXT REVEAL & CHARACTER REVEAL
  ------------------------------------------------------------- */
  initCharacterReveal() {
    const targets = document.querySelectorAll('.char-reveal');

    targets.forEach(target => {
      const text = target.textContent.trim();
      target.textContent = '';
      target.setAttribute('aria-label', text);

      // Divide em palavras e caracteres mantendo acessibilidade
      const words = text.split(' ');
      words.forEach((word, wordIndex) => {
        const wordWrap = document.createElement('span');
        wordWrap.className = 'char-reveal-wrap';
        wordWrap.style.whiteSpace = 'nowrap';
        wordWrap.style.marginRight = '0.28em';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'char-item';
          charSpan.textContent = word[i];
          wordWrap.appendChild(charSpan);
        }

        target.appendChild(wordWrap);
      });

      // Observer para disparar animação de caracteres em cascata
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const chars = target.querySelectorAll('.char-item');
            chars.forEach((char, index) => {
              setTimeout(() => {
                char.classList.add('char-visible');
              }, 40 + (index * 22)); // Stagger rítmico
            });
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(target);
    });
  }

  /* -------------------------------------------------------------
     7. CONTADORES NUMÉRICOS ANIMADOS
  ------------------------------------------------------------- */
  initCounters() {
    // Configura os elementos que possuem data-counter
    document.querySelectorAll('[data-counter]').forEach(el => {
      el.textContent = '0';
    });
  }

  animateElementCounters(parent) {
    const counters = parent.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.counter, 10);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      const start = parseInt(counter.dataset.start || '0', 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(start + (target - start) * ease);

        counter.textContent = `${prefix}${currentVal.toLocaleString('pt-BR')}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `${prefix}${target.toLocaleString('pt-BR')}${suffix}`;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.sollosAnimations = new SollosAnimationEngine();
});
