/**
 * SOLLOS INCORPORAÇÕES & EMPREENDIMENTOS IMOBILIÁRIOS
 * 40 ANOS (1986 - 2026)
 * Main Controller & Services Database
 */

// Banco de Dados Estruturado dos Serviços (com fusões aplicadas)
const SOLLOS_SERVICES = {
  'securitizacao': {
    index: '01',
    id: 'securitizacao',
    title: 'Securitização de Recebíveis Imobiliários',
    shortTitle: 'Securitização (CRI)',
    subtitle: 'Transformando ativos ilíquidos em instrumentos sofisticados do mercado de capitais',
    tag: 'Mercado de Capitais',
    image: './assets/images/securitizacao.jpg',
    lead: 'A securitização é um processo financeiro sofisticado que permite transformar ativos ilíquidos — como financiamentos imobiliários, contratos de locação ou carteiras de compra e venda — em títulos negociáveis no mercado de capitais.',
    description: 'Na Sollos, atuamos na estruturação completa de operações de securitização, com foco especial em Certificados de Recebíveis Imobiliários (CRI). Nossa expertise permite desenhar operações sob medida que antecipam o fluxo de caixa futuro para o empreendedor, proporcionando liquidez imediata para novos investimentos ou reestruturação patrimonial de passivos.',
    benefitsTitle: 'Principais Vantagens Estratégicas',
    benefits: [
      { title: 'Liquidez Imediata', desc: 'Transformação imediata de fluxos e vendas a prazo em recursos líquidos à vista.' },
      { title: 'Isenção Fiscal', desc: 'Benefícios fiscais atrativos para investidores pessoa física (no caso de emissão de CRI).' },
      { title: 'Estrutura Off-Balance', desc: 'Possibilidade contábil de desimobilização do ativo, otimizando os índices de endividamento da empresa.' },
      { title: 'Flexibilidade Operacional', desc: 'Desenho de covenants e prazos customizados conforme a dinâmica de caixa do seu negócio.' }
    ],
    ctaText: 'Estruturar Operação de CRI'
  },
  'build-to-suit': {
    index: '02',
    id: 'build-to-suit',
    title: 'Build to Suit (BTS)',
    shortTitle: 'Build to Suit (BTS)',
    subtitle: 'Construção personalizada sob medida para contratos atípicos de longo prazo',
    tag: 'Desenvolvimento Sob Medida',
    image: './assets/images/bts.jpg',
    lead: 'O modelo Build to Suit (BTS) é a modalidade imobiliária onde a construção ou reforma de um ativo corporativo ou industrial é realizada especificamente para atender às especificações técnicas de um locatário pré-determinado.',
    description: 'Ao invés de imobilizar capital na construção de sedes próprias, fábricas ou centros de distribuição, sua empresa foca integralmente no core business, enquanto a Sollos estrutura e viabiliza investidores para erguer o imóvel exato exigido pela sua operação, firmado através de contratos de locação atípicos e de longo prazo.',
    benefitsTitle: 'Benefícios Estratégicos',
    benefits: [
      { title: 'Customização Total', desc: 'Layout, localização geográfica e especificações de engenharia projetadas exclusivamente para sua operação.' },
      { title: 'Eficiência Financeira', desc: 'Preservação integral do capital de giro para investimentos e crescimento na atividade-fim.' },
      { title: 'Previsibilidade Absoluta', desc: 'Contratos estáveis de longo prazo (10 a 20 anos) garantindo segurança patrimonial e operacional.' },
      { title: 'Padrão Construtivo Superior', desc: 'Empreendimentos modernos com certificações de sustentabilidade e eficiência energética.' }
    ],
    ctaText: 'Iniciar Projeto BTS'
  },
  'fusoes-aquisicoes': {
    index: '03',
    id: 'fusoes-aquisicoes',
    title: 'Fusões e Aquisições (M&A)',
    shortTitle: 'Fusões & Aquisições (M&A)',
    subtitle: 'Expansão estratégica, consolidação de mercado e governança de alta performance',
    tag: 'Assessoria Estratégica',
    image: './assets/images/ma.jpg',
    lead: 'As operações de M&A (Mergers and Acquisitions) são fundamentais para empresas que buscam crescimento inorgânico, diversificação de portfólio imobiliário ou consolidação de liderança de mercado.',
    description: 'A Sollos atua na assessoria completa (buy-side e sell-side), identificando ativos e parceiros estratégicos no setor corporativo. Conduzimos desde o valuation inicial, passando pela modelagem econômico-financeira, estruturação jurídica da transação e negociação de termos contratuais, até o closing definitivo, sempre assegurando sigilo absoluto.',
    benefitsTitle: 'Nossa Atuação',
    benefits: [
      { title: 'Prospecção Qualificada', desc: 'Mapeamento confidencial de targets imobiliários ou investidores potenciais de primeira linha.' },
      { title: 'Modelagem & Valuation', desc: 'Avaliação técnica aprofundada para precificação justa e máxima geração de valor.' },
      { title: 'Negociação & Closing', desc: 'Condução assertiva de minutas, SPAs e governança para fechamento sem fricção jurídica.' },
      { title: 'Sigilo & Confidencialidade', desc: 'Processos com os mais rigorosos protocolos de confidencialidade e governança corporativa.' }
    ],
    ctaText: 'Solicitar Assessoria Sigilosa'
  },
  'due-diligence': {
    index: '04',
    id: 'due-diligence',
    title: 'Due Diligence & Auditoria Imobiliária',
    shortTitle: 'Due Diligence & Auditoria',
    subtitle: 'Segurança jurídica, conformidade regulatória e mitigação profunda de riscos',
    tag: 'Segurança Jurídica',
    image: './assets/images/due-diligence.jpg',
    lead: 'A Due Diligence e Auditoria Imobiliária é o pilar fundamental e inegociável para mitigar riscos patrimoniais em qualquer transação de investimento ou desenvolvimento imobiliário.',
    description: 'A equipe multidisciplinar da Sollos realiza uma investigação profunda e minuciosa sobre os aspectos legais, técnicos, ambientais e contábeis de um ativo ou empresa imobiliária. Nosso processo identifica passivos ocultos, irregularidades documentais ou restrições urbanísticas que possam comprometer a rentabilidade ou a segurança do investimento.',
    benefitsTitle: 'Escopo da Análise Multidisciplinar',
    benefits: [
      { title: 'Jurídico & Dominial', desc: 'Análise minuciosa de toda a cadeia vintenária, certidões negativas, processos judiciais e litígios pendentes.' },
      { title: 'Técnico & Construtivo', desc: 'Conformidade de habite-se, AVCB, regularidade construtiva, zoneamento urbanístico e potencial construtivo.' },
      { title: 'Ambiental & Sanitário', desc: 'Identificação de eventuais passivos de contaminação do solo, licenciamentos e restrições de APPs.' },
      { title: 'Relatório Conclusivo', desc: 'Parecer executivo analítico com matriz de riscos para tomada de decisão fundamentada pela diretoria.' }
    ],
    ctaText: 'Contratar Auditoria / Due Diligence'
  },
  'valuation': {
    index: '05',
    id: 'valuation',
    title: 'Valuation & Avaliação de Ativos',
    shortTitle: 'Valuation & Avaliação',
    subtitle: 'Precisão técnica no valor de mercado alinhada rigorosamente às normas ABNT e IVS',
    tag: 'Engenharia de Avaliações',
    image: './assets/images/valuation.jpg',
    lead: 'O serviço de Valuation e Avaliação Imobiliária da Sollos vai muito além da simples determinação empírica de preços.',
    description: 'Utilizamos metodologias consagradas de engenharia econômica — Fluxo de Caixa Descontado (DCF), Comparativo Direto de Dados de Mercado e Método Involutivo — rigorosamente alinhadas às normas da ABNT (NBR 14.653) e padrões internacionais (IVS). Seja para garantias bancárias, cisões, reavaliação a valor justo (Fair Value) ou transações, nossos laudos oferecem credibilidade irrefutável.',
    benefitsTitle: 'Aplicações dos Laudos Técnicos',
    benefits: [
      { title: 'Garantias Reais', desc: 'Laudos aceitos pelas maiores instituições financeiras do país para estruturação de crédito e debêntures.' },
      { title: 'Decisões de M&A e Desinvestimento', desc: 'Suporte analítico de alta precisão para compradores e vendedores de grandes portfólios.' },
      { title: 'Contábil & IFRS', desc: 'Testes de Impairment, alocação de preço de compra (PPA) e atualização de patrimônio líquido.' },
      { title: 'Rigor Normativo', desc: 'Assinatura por peritos e engenheiros habilitados com ART/RRT e critérios científicos auditáveis.' }
    ],
    ctaText: 'Solicitar Proposta de Valuation'
  },
  'sale-leaseback': {
    index: '06',
    id: 'sale-leaseback',
    title: 'Desmobilização de Ativos (Sale & Leaseback)',
    shortTitle: 'Sale & Leaseback',
    subtitle: 'Liquidez imediata, otimização de balanço e foco estratégico no core business',
    tag: 'Otimização de Capital',
    image: './assets/images/sale-leaseback.jpg',
    lead: 'A operação de Sale & Leaseback (Venda e Locação de Volta) é uma das ferramentas financeiras mais eficazes para empresas que possuem patrimônio imobilizado e demandam capital de giro.',
    description: 'A empresa vende seu imóvel operacional (sede administrativa, indústria ou centro logístico) para um investidor e, simultaneamente, firma um contrato de locação de longo prazo para continuar operando no mesmo local. Com a Sollos, sua empresa transforma "tijolo" em "caixa", mantendo a continuidade operacional e reinvestindo o capital liberado na atividade principal, onde o ROI é substancialmente superior.',
    benefitsTitle: 'Vantagens Financeiras Imediatas',
    benefits: [
      { title: 'Injeção Imediata de Caixa', desc: 'Liberação substancial de liquidez sem contratação de novas dívidas bancárias onerosas.' },
      { title: 'Benefício Fiscal Relevante', desc: 'O valor do aluguel é contabilizado como despesa operacional, dedutível na base do IRPJ e CSLL (Lucro Real).' },
      { title: 'Foco no Core Business', desc: 'Deixe a gestão de ativos imobiliários pesados e canalize recursos na expansão do seu negócio.' },
      { title: 'Segurança Operacional', desc: 'Contratos de longo prazo que garantem estabilidade de ocupação e preservam investimentos em benfeitorias.' }
    ],
    ctaText: 'Simular Operação Sale & Leaseback'
  },
  'desenvolvimento-varejo': {
    index: '07',
    id: 'desenvolvimento-varejo',
    title: 'Desenvolvimento de Varejo (Power Centers)',
    shortTitle: 'Power Centers & Varejo',
    subtitle: 'Complexos comerciais de conveniência, grandes âncoras e alta densidade de consumo',
    tag: 'Varejo Comercial',
    image: './assets/images/varejo.jpg',
    lead: 'Os Power Centers e Strip Malls representam a vanguarda e a evolução do varejo físico: complexos a céu aberto ancorados por marcas líderes de mercado.',
    description: 'Ancorados por grandes marcas (Big Box), redes supermercadistas ou home centers, com foco total na conveniência, facilidade de acesso viário, estacionamento amplo e baixo custo condominial. A Sollos atua desde a identificação do terreno (Land Banking) até a modelagem do tenant mix e comercialização de contratos atípicos.',
    benefitsTitle: 'Características do Modelo de Sucesso',
    benefits: [
      { title: 'Lojas Âncoras Estratégicas', desc: 'Grandes redes do varejo nacional que asseguram fluxo constante e previsibilidade de público.' },
      { title: 'Baixo Custo Operacional', desc: 'Operação simplificada a céu aberto com condomínio significativamente menor que shoppings tradicionais.' },
      { title: 'Acessibilidade & Visibilidade', desc: 'Posicionamento em rodovias, anéis viários ou avenidas com grande fluxo diário de veículos.' },
      { title: 'Alta Rentabilidade', desc: 'Retorno sobre o capital investido superior para desenvolvedores, fundos e investidores imobiliários.' }
    ],
    ctaText: 'Desenvolver Complexo de Varejo'
  }
};

/* ==========================================================================
   APP CONTROLLER
   ========================================================================== */
class SollosApp {
  constructor() {
    this.services = SOLLOS_SERVICES;
    this.init();
  }

  init() {
    this.initThemeToggle();
    this.initPreloader();
    this.initHeaderScroll();
    this.initMobileNav();
    this.initServiceModal();
    this.initContactForm();
    this.initSmoothNavScroll();
    this.checkInitialHash();
    this.initHeroVideoAutoplay();
  }

  /* -------------------------------------------------------------
     THEME TOGGLE ENGINE (DEFAULT LIGHT & DUAL THEME)
  ------------------------------------------------------------- */
  initThemeToggle() {
    // Inicia por padrão no tema claro (light) ou recupera do localStorage
    const savedTheme = localStorage.getItem('sollos-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sollos-theme', newTheme);
      });
    });
  }


  /* -------------------------------------------------------------
     PRELOADER COM CONTAGEM 1986 -> 2026
  ------------------------------------------------------------- */
  initPreloader() {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader) return;

    const counterEl = document.getElementById('preloaderYear');
    const barEl = document.getElementById('preloaderBar');

    let startYear = 1986;
    const targetYear = 2026;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updatePreloader = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentYear = Math.floor(startYear + (targetYear - startYear) * progress);
      if (counterEl) counterEl.textContent = currentYear;
      if (barEl) barEl.style.width = `${progress * 100}%`;

      if (progress < 1) {
        requestAnimationFrame(updatePreloader);
      } else {
        if (counterEl) counterEl.textContent = targetYear;
        setTimeout(() => {
          preloader.classList.add('loaded');
          // Dispara animações no hero
          document.body.classList.add('app-ready');
          this.triggerHeroAnimations();
        }, 300);
      }
    };

    requestAnimationFrame(updatePreloader);
  }

  triggerHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.querySelectorAll('.text-reveal-line').forEach((line, i) => {
        setTimeout(() => {
          line.classList.add('revealed');
        }, i * 180);
      });
    }
  }

  /* -------------------------------------------------------------
     HEADER SCROLL EFFECT
  ------------------------------------------------------------- */
  initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      if (window.pageYOffset > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------------
     MOBILE NAVIGATION
  ------------------------------------------------------------- */
  initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-menu');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Fecha ao clicar em um link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* -------------------------------------------------------------
     SERVICE MODAL ENGINE (GAVETA DE DETALHES DE ALTA DEFINIÇÃO)
  ------------------------------------------------------------- */
  initServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.service-modal-close');
    const dialog = modal.querySelector('.service-modal-dialog');

    // Fechar Modal
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (window.location.hash.startsWith('#servico-')) {
        history.replaceState(null, null, ' ');
      }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Abrir Modal ao Clicar em Cards
    document.querySelectorAll('[data-service-trigger]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceKey = trigger.dataset.serviceTrigger;
        this.openServiceModal(serviceKey);
      });
    });
  }

  openServiceModal(serviceKey) {
    const data = this.services[serviceKey];
    if (!data) return;

    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    // Popula dados dinâmicos
    const modalEyebrow = modal.querySelector('.service-modal-eyebrow');
    const modalTitle = modal.querySelector('.service-modal-title');
    const modalSubtitle = modal.querySelector('.service-modal-subtitle');
    const modalImg = modal.querySelector('.service-modal-img');
    const modalText = modal.querySelector('.service-modal-text');
    const modalBenefitsTitle = modal.querySelector('.service-modal-benefits-title');
    const modalBenefitsList = modal.querySelector('.service-modal-benefits-list');
    const modalCtaBtn = modal.querySelector('.service-modal-cta-btn');

    if (modalEyebrow) modalEyebrow.textContent = `${data.index} · ${data.tag}`;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
    }
    if (modalText) {
      modalText.innerHTML = `
        <p style="margin-bottom: 1.2rem; font-weight: 500; color: var(--text-primary); font-size: 1.15rem; line-height: 1.6;">${data.lead}</p>
        <p>${data.description}</p>
      `;
    }
    if (modalBenefitsTitle) modalBenefitsTitle.textContent = data.benefitsTitle;
    
    if (modalBenefitsList) {
      modalBenefitsList.innerHTML = data.benefits.map(b => `
        <li class="service-modal-benefit-item">
          <span class="service-benefit-bullet">✦</span>
          <div>
            <strong style="color: var(--text-primary); font-weight: 600;">${b.title}:</strong>
            <span>${b.desc}</span>
          </div>
        </li>
      `).join('');
    }


    if (modalCtaBtn) {
      modalCtaBtn.textContent = data.ctaText;
      modalCtaBtn.onclick = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const contactSection = document.getElementById('contato');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          const select = document.getElementById('formService');
          if (select) {
            select.value = serviceKey;
            select.focus();
          }
        }
      };
    }

    // Abre
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    history.replaceState(null, null, `#servico-${serviceKey}`);
  }

  checkInitialHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#servico-')) {
      const key = hash.replace('#servico-', '');
      if (this.services[key]) {
        setTimeout(() => this.openServiceModal(key), 600);
      }
    }
  }

  /* -------------------------------------------------------------
     FORMULÁRIO DE CONTATO COM MICROINTERAÇÕES
  ------------------------------------------------------------- */
  initContactForm() {
    const form = document.getElementById('sollosContactForm');
    if (!form) return;

    const feedback = form.querySelector('.form-feedback');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Floating label states
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
      input.addEventListener('focus', () => {
        input.closest('.form-group')?.classList.add('focused');
      });
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.closest('.form-group')?.classList.remove('focused');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg style="animation: spin 1s linear infinite; width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="3" stroke-dasharray="32" stroke-linecap="round"></circle></svg>
          Enviando...
        </span>
      `;
      submitBtn.disabled = true;

      // Simulação elegante de envio seguro
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `
            <strong>Mensagem enviada com sucesso!</strong><br>
            A equipe sênior da Sollos entrará em contato em breve para discutir as necessidades do seu projeto.
          `;
          feedback.style.display = 'block';
        }

        form.reset();
        setTimeout(() => {
          if (feedback) feedback.style.display = 'none';
        }, 8000);
      }, 1200);
    });
  }

  /* -------------------------------------------------------------
     SMOOTH NAVIGATION SCROLL
  ------------------------------------------------------------- */
  initSmoothNavScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('#servico-')) return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* -------------------------------------------------------------
     SAFE VIDEO AUTOPLAY ENGINE (HERO & SHOWCASE VÍDEOS)
  ------------------------------------------------------------- */
  initHeroVideoAutoplay() {
    const videos = document.querySelectorAll('video[muted]');
    videos.forEach(video => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const playOnInteraction = () => {
            video.play();
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('touchstart', playOnInteraction);
          };
          window.addEventListener('click', playOnInteraction, { once: true });
          window.addEventListener('touchstart', playOnInteraction, { once: true });
        });
      }
    });
  }
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
  window.sollosApp = new SollosApp();
});
