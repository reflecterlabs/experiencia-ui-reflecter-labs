export type Locale = "es" | "en" | "pt" | "zh";

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  zh: "简体中文",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  image?: string;
}

export const dictionaries = {
  es: {
    common: {
      readMore: "Leer más",
      viewAll: "Ver todo",
      backHome: "Volver al inicio",
      lastUpdated: "Última actualización",
      sendMessage: "Enviar mensaje",
      messageSent: "Mensaje enviado",
      sendAnother: "Enviar otro mensaje",
      bookCall: "Reserva una llamada",
      hostEvent: "Grinta Protocol",
      supportedBy: "Apoyado por",
      calendarLink: "https://calendar.app.google/4NF4hz9LoGGok2gdA",
      nav: {
        home: "Inicio",
        community: "Comunidad",
        education: "Educación",
        education_courses: "Academia",
        education_coursesDesc: "Formación en blockchain e inteligencia artificial",
        education_webinars: "Webinars",
        education_webinarsDesc: "Sesiones en vivo y grabadas",
        solutions: {
          title: "Soluciones",
          cdp: {
            title: "CDP",
            desc: "Plataforma unificada de datos de clientes",
          },
          rwa: {
            title: "RWA",
            desc: "Tokenización de activos del mundo real",
          },
          tokenizacion: {
            title: "Tokenización",
            desc: "Activos digitales y economía programable",
          },
          fintech: {
            title: "Fintech y Pagos",
            desc: "Infraestructura financiera de nueva generación",
          },
          defi: {
            title: "DeFi",
            desc: "Finanzas descentralizadas sin intermediarios",
          },
          trading: {
            title: "Trading",
            desc: "Ejecución algorítmica y estrategias on-chain",
          },
          agentes: {
            title: "Agentes Autónomos",
            desc: "IA soberana operando en blockchain",
          },
          page: {
            title: "En desarrollo",
            subtitle: "Estamos construyendo esta solución. Pronto más información.",
          },
        },
        research: {
          title: "Investigación",
          laboratory: "Laboratorio",
          laboratoryDesc: "Innovación y desarrollo tecnológico",
          kbGraphs: "KB Graphs",
          kbGraphsDesc: "Visualización de Base de Conocimiento",
          blog: "Blog",
          blogDesc: "Últimos artículos y análisis",
        },
      },
    },
    grintaPopup: {
      title: "Grinta Protocol",
      description: "Es un protocolo DeFI repaldado por sintéticos de Bitcoin que pueden reaccionar a shocks exógenos del mercado en tiempo real, garantizando la solvencia y la estabilidad algorítmica con una latencia mínima permitiendo crear infraestructuras financieras verdaderamente autónomas.",
      waitlistTitle: "Únete a la lista de espera",
      waitlistPlaceholder: "tu@email.com",
      button: "Unirse ahora",
      success: "¡Gracias! Te hemos añadido a la lista de espera.",
    },
    hero: {
      subtitle: "Soluciones de Software, Productos Blockchain, Inteligencia Artificial y Agentes Autónomos",
      title1: "LABORATORIO",
      title2: "TECNOLÓGICO",
      description: "Somos la disrupción de la centralización y el temor de los ecosistemas burocráticos.",
      grintaButton: "Conocer Grinta Protocol",
      featuredIn: "Destacado en",
      shanghaiBanner: "Grinta Protocol fue seleccionado para estar presente en el <span class='text-primary font-bold group-hover/link:underline'>Loop House de Shanghai</span> y en el <span class='text-primary font-bold group-hover/link:underline'>muShanghai en China.</span> Conocé el producto y se sponsor oficial."
    },
    features: {
      heading: "LOS PRINCIPIOS QUE GUÍAN CADA LÍNEA DE CÓDIGO QUE ESCRIBIMOS Y CADA DECISIÓN QUE TOMAMOS",
      codeIsLaw: "EL CÓDIGO ES LEY",
      codeIsLawDesc: "Es la verdad absoluta. Sin excusas, sin término medio. La lógica y la ejecución son lo que importa y forman parte de nuestra cultura empresarial.",
      noStatusQuo: "NO STATUS QUO",
      noStatusQuoDesc: "No aceptamos las cosas tal y como son solo porque siempre han sido así. Cuestionamos todo y buscamos mejores caminos.",
      capitalism: "CAPITALISMO",
      capitalismDesc: "Creemos en los incentivos, los mercados abiertos y el valor genuinamente generado. La meritocracia funciona cuando las reglas son claras.",
    },
    roadmap: {
      heading: "HOJA DE RUTA",
      q1Title: "Conformación de Sociedad",
      q1Desc: "Acuerdo pre-societario, alta de sociedad y publicación en boletín oficial.",
      q1Status: "Completada",
      q2Title: "Alianzas Estratégicas",
      q2Desc: "Acuerdos de alianzas estratégicas para impulsar la descentralización y el ecosistema web3 en Latinoamérica, integrando Grinta Protocol como infraestructura base.",
      q2Status: "En curso",
      q3Title: "Inversión en poder de cómputo",
      q3Desc: "Inyección de capital en la ampliación de poder de cómputo para el desarrollo eficiente en el laboratorio tecnológico.",
      q4Title: "Consolidación de Productos Solicitados",
      q4Desc: "Pre-validación y validación del mercado para la capitalización de cada producto en específico.",
    },
    cta: {
      heading: "Agenda una llamada con nuestro equipo",
      description: "Conversemos sobre tu proyecto. Nuestro equipo de expertos está listo para ayudarte a construir soluciones blockchain a medida.",
      button: "Reservar llamada",
    },
    impact: {
      heading: "RESPONSABILIDAD SOCIAL Y PROPÓSITO",
      title: "MÁS QUE ECONOMÍA, SOMOS IMPACTO",
      subtitle: "Nuestra visión siempre ha estado alineada con el planeta. Destinamos el 10% de nuestra facturación anual a proyectos que transforman el mañana.",
      items: [
        {
          title: "Reforestación Global",
          description: "Plantación masiva de árboles en zonas críticamente deforestadas para restaurar pulmones naturales."
        },
        {
          title: "Agua es Vida",
          description: "Infraestructura para llevar agua potable a comunidades que carecen de este recurso vital."
        },
        {
          title: "Centros de Datos Aeroespaciales",
          description: "Lanzamiento de infraestructura en el espacio para procesar IA de forma sostenible y soberana."
        },
        {
          title: "Seguridad Post-Cuántica",
          description: "Desarrollo de criptografía avanzada para garantizar la privacidad humana en el futuro digital."
        },
        {
          title: "Computación Termodinámica",
          description: "Hardware radicalmente más eficiente que las GPUs, reduciendo drásticamente la huella de carbono digital."
        }
      ]
    },
    founders: {
      heading: "EL EQUIPO DETRÁS DE LA VISIÓN",
    },
    blog: {
      heading: "Blog",
      homeHeading: "ÚLTIMAS PUBLICACIONES",
      homeSubtitle: "Exploramos las fronteras de la tecnología blockchain. Conoce nuestras últimas publicaciones, análisis y novedades del ecosistema.",
      readMore: "Leer artículo",
      goToBlog: "Ir al blog completo",
      minRead: "min de lectura",
      comingSoon: "Contenido del artículo próximamente.",
      noPostFound: "Artículo no encontrado.",
    },
    footer: {
      tagline: "Construyendo el futuro de la tecnología blockchain, un producto a la vez.",
      company: "Empresa",
      chains: "Cadenas",
      legal: "Legal",
      aboutUs: "Sobre Nosotros",
      useCases: "Casos de Uso",
      contact: "Contacto",
      blog: "Blog",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      cookiePolicy: "Política de Cookies",
      viewAllChains: "Ver Todas las Cadenas",
      rights: "Todos los derechos reservados.",
      location: "Córdoba, ARGENTINA",
    },
    about: {
      title: "Sobre Nosotros",
      intro: "Reflecter Labs es un laboratorio de tecnología con sede en Córdoba, Argentina, especializado en infraestructura blockchain y sistemas agénticos. Diseñamos y desarrollamos el futuro de la autonomía digital mediante MOLTX y soluciones multi-chain para el ecosistema Web3.",
      intro2: "Nuestro equipo combina ingeniería de vanguardia, criptografía y orquestación de agentes IA para crear herramientas que impulsen la soberanía digital y la automatización inteligente a nivel global.",
      mission: "Misión",
      missionDesc: "Acelerar la transición hacia un mundo agéntico construyendo infraestructura robusta, segura y autónoma para que agentes y humanos interactúen en la blockchain.",
      vision: "Visión",
      visionDesc: "Un ecosistema interconectado donde agentes IA y humanos operen sobre una base tecnológica descentralizada, confiable y eficiente.",
      valuesTitle: "Nuestros Valores",
      values: [
        { title: "Innovación", description: "Exploramos constantemente nuevas tecnologías y paradigmas para ofrecer soluciones que marquen la diferencia en el ecosistema blockchain." },
        { title: "Transparencia", description: "Creemos en la apertura total. Nuestro código, procesos y comunicación reflejan nuestro compromiso con la confianza y la honestidad." },
        { title: "Excelencia Técnica", description: "Cada línea de código que escribimos sigue los más altos estándares de calidad, seguridad y rendimiento." },
        { title: "Comunidad", description: "Construimos para y con la comunidad. La colaboración y el feedback son el motor de nuestra evolución." },
      ],
      teamTitle: "Equipo",
      teamDesc: "Somos un equipo multidisciplinario de ingenieros, diseñadores y estrategas apasionados por la tecnología descentralizada. Conoce a nuestros fundadores en la página principal.",
    },
    useCases: {
      title: "Casos de Uso",
      intro: "Aplicamos tecnología blockchain para resolver problemas reales en diferentes industrias. Estos son algunos de los casos donde nuestra infraestructura marca la diferencia.",
      cases: [
        { tag: "DeFi", title: "Protocolos de Finanzas Descentralizadas", description: "Diseñamos e implementamos smart contracts para protocolos DeFi, incluyendo lending, staking, yield farming y AMMs en múltiples cadenas.", chains: ["Starknet", "Ethereum", "Base"] },
        { tag: "NFTs", title: "Infraestructura para NFTs y Coleccionables Digitales", description: "Desarrollamos contratos de minteo, marketplaces y herramientas de gestión para colecciones NFT a gran escala.", chains: ["Ethereum", "Polygon", "Base"] },
        { tag: "Supply Chain", title: "Trazabilidad y Cadena de Suministro", description: "Implementamos soluciones de trazabilidad en blockchain para empresas que necesitan verificar la autenticidad de sus productos.", chains: ["Polygon", "BNB", "Avalanche"] },
        { tag: "Identidad", title: "Identidad Descentralizada (DID)", description: "Construimos sistemas de identidad digital soberana que permiten a los usuarios controlar sus datos sin intermediarios.", chains: ["Starknet", "Ethereum"] },
        { tag: "Gaming", title: "Gaming & Metaverso", description: "Desarrollamos infraestructura on-chain para juegos Web3, economías de tokens in-game y assets interoperables.", chains: ["Monad", "BNB", "Avalanche"] },
        { tag: "Tokenización", title: "Tokenización de Activos del Mundo Real (RWA)", description: "Facilitamos la tokenización de activos reales como inmuebles, arte y commodities para inversión fraccionada.", chains: ["Ethereum", "Polygon", "Avalanche"] },
        { tag: "Agentic", title: "Infraestructura de Agentes & MOLTX", description: "Desarrollamos MOLTX (Multi-Agent Orchestration Layer), una capa de orquestación para agentes IA soberanos que interactúan con protocolos blockchain de forma autónoma.", chains: ["Starknet", "Base", "Ethereum"] },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "Estamos listos para llevar tu proyecto al siguiente nivel. ¿Hablamos? Agenda una llamada de 15 minutos con nuestro equipo técnico para explorar cómo podemos colaborar.",
      contactInfo: "Información de contacto",
      hours: "Horario de atención",
      monFri: "Lunes - Viernes",
      satSun: "Sábado - Domingo",
      closed: "Cerrado",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      selectSubject: "Selecciona un asunto",
      subjectProject: "Nuevo proyecto",
      subjectCollab: "Colaboración",
      subjectSupport: "Soporte técnico",
      subjectOther: "Otro",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o consulta...",
      thankYou: "Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.",
    },
    education: {
      title: "Educación",
      description: "Estamos desarrollando esta sección para brindar formación a quienes estén interesados en aprender sobre inteligencia artificial y Blockchain.",
      status: "En desarrollo",
    },
    privacy: {
      title: "Política de Privacidad",
      sections: [
        { title: "1. Introducción", content: "Reflecter Labs (\"nosotros\" o \"nuestro\") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web y utiliza nuestros servicios." },
        { title: "2. Información que Recopilamos", content: "Podemos recopilar datos personales (nombre, email, teléfono), datos de uso (IP, navegador, páginas visitadas), datos blockchain (direcciones de wallets públicas) y datos de cookies según nuestra Política de Cookies." },
        { title: "3. Cómo Usamos su Información", content: "Para proporcionar y mantener nuestros servicios, mejorar la experiencia del usuario, comunicarnos con usted, cumplir obligaciones legales y detectar fraude o abuso." },
        { title: "4. Compartir Datos", content: "No vendemos su información personal. Podemos compartir datos con proveedores de servicios externos de confianza, sujetos a acuerdos de confidencialidad estrictos." },
        { title: "5. Seguridad de Datos", content: "Implementamos medidas de seguridad estándar de la industria incluyendo encriptación, controles de acceso y auditorías regulares de seguridad." },
        { title: "6. Sus Derechos", content: "Dependiendo de su jurisdicción, puede tener derecho a acceder, corregir, eliminar o portar sus datos personales. Contáctenos en contact@reflecterlabs.xyz." },
        { title: "7. Contacto", content: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos en: contact@reflecterlabs.xyz" },
      ],
    },
    terms: {
      title: "Términos de Servicio",
      sections: [
        { title: "1. Aceptación de Términos", content: "Al acceder o usar los servicios de Reflecter Labs, usted acepta estar sujeto a estos Términos de Servicio." },
        { title: "2. Descripción de Servicios", content: "Reflecter Labs proporciona infraestructura blockchain, desarrollo de smart contracts y servicios tecnológicos relacionados en múltiples cadenas incluyendo Starknet, Ethereum, Base, Polygon, BNB, Avalanche y Monad." },
        { title: "3. Obligaciones del Usuario", content: "Debe tener al menos 18 años, es responsable de la seguridad de su cuenta y credenciales de wallet, no debe usar nuestros servicios para fines ilegales y es responsable de toda la actividad bajo su cuenta." },
        { title: "4. Propiedad Intelectual", content: "Todo el contenido, código, diseños y marcas en esta plataforma son propiedad de Reflecter Labs o sus licenciantes." },
        { title: "5. Blockchain y Smart Contracts", content: "Usted reconoce que las transacciones blockchain son irreversibles. Reflecter Labs no es responsable de pérdidas resultantes de interacciones con smart contracts, fallos de red o errores del usuario." },
        { title: "6. Limitación de Responsabilidad", content: "En la máxima medida permitida por la ley, Reflecter Labs no será responsable por daños indirectos, incidentales, especiales o consecuentes." },
        { title: "7. Ley Aplicable", content: "Estos Términos se regirán por las leyes de la República Argentina, sin consideración a sus disposiciones de conflicto de leyes." },
        { title: "8. Contacto", content: "Para preguntas sobre estos Términos, contáctenos en: contact@reflecterlabs.xyz" },
      ],
    },
    cookies: {
      title: "Política de Cookies",
      sections: [
        { title: "1. Qué son las Cookies", content: "Las cookies son pequeños archivos de texto almacenados en su dispositivo cuando visita un sitio web. Nos ayudan a reconocer su navegador, recordar sus preferencias y entender cómo interactúa con nuestra plataforma." },
        { title: "2. Tipos de Cookies que Usamos", content: "Usamos cookies esenciales (necesarias para el funcionamiento), cookies de análisis (para entender el uso), cookies funcionales (para recordar preferencias) y no usamos cookies de marketing actualmente." },
        { title: "3. Cookies de Terceros", content: "Algunas cookies pueden ser colocadas por servicios de terceros como proveedores de análisis. No controlamos estas cookies." },
        { title: "4. Gestión de Cookies", content: "Puede controlar y gestionar cookies a través de la configuración de su navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio." },
        { title: "5. Actualizaciones", content: "Podemos actualizar esta Política de Cookies periódicamente. Los cambios serán publicados en esta página con una fecha de revisión actualizada." },
        { title: "6. Contacto", content: "Si tiene preguntas sobre nuestro uso de cookies, contate-nos en: contact@reflecterlabs.xyz" },
      ],
    },
    shanghai: {
      metadataTitle: "Grinta Protocol en Shanghai | Reflecter Labs",
      metadataDesc: "Conoce cómo nuestro protocolo ganó en el Loop House de Shanghai con un modelo RL autónomo y una stablecoin innovadora.",
      backHome: "Volver al inicio",
      badge: "Ganadores - Loop House Shanghai",
      title1: "El Triunfo de",
      title2: "Grinta Protocol",
      title3: "en China",
      subtitle: "Nuestra carta de presentación ante el mundo: Cómo construimos un protocolo de stablecoin en Starknet controlado de manera totalmente autónoma por un modelo de Inteligencia Artificial de Aprendizaje por Refuerzo (RL), logrando el primer lugar en el evento muShanghai.",
      section1: {
        title: "La Revolución: El Gobernador Autónomo (PID-RL)",
        desc: "El núcleo de nuestro éxito radica en el Agente PID-RL. Entrenamos un modelo pequeño y altamente eficiente (Qwen 2.5 de 1.5 billones de parámetros) capaz de ajustar dinámicamente las ganancias del controlador (Kp, Ki) de la stablecoin en función de la volatilidad del mercado de Bitcoin.",
        card1Title: "Latencia Ultra-Baja",
        card1Desc: "Respuestas en menos de 50ms, superando drásticamente a modelos comerciales masivos de API que demoran segundos.",
        card2Title: "Detección de Emergencias",
        card2Desc: "El agente identifica caídas abruptas del mercado y propone correcciones agresivas para mantener la paridad (peg) del token de inmediato.",
        card3Title: "100% Self-Hosted",
        card3Desc: "Los datos de gobernanza nunca abandonan la infraestructura. Completamente offline, sin dependencia de APIs externas.",
        card4Title: "Reducción de Costos",
        card4Desc: "Ejecución hasta 100 veces más económica que alternativas basadas en LLMs de gran tamaño, costando solo $0.001 por inferencia."
      },
      section2: {
        title: "La Stablecoin y la Infraestructura Starknet",
        desc1: "Grinta es un protocolo de stablecoin controlado por PID en la red Starknet. Emplea un mecanismo de precio de redención estilo HAI con un 'hook' en el DEX Ekubo que actualiza las tasas automáticamente en cada intercambio, dejando solo como procesos manuales los feeds del oráculo BTC/USD.",
        desc2: "A nivel de arquitectura, el sistema se basa en 10 contratos inteligentes centrales auditados, gestionando la contabilidad, las subastas holandesas, la liquidación y una 'ParameterGuard' que valida los cambios dictados por el Agente de IA.",
        whyWonTitle: "¿Por qué ganamos?",
        whyWonDesc: "Logramos demostrar que la gobernanza de un protocolo DeFi crítico ya no necesita depender de votaciones humanas lentas o firmas manuales reactivas ante crisis. En la simulación presentada en Shanghai, ante un colapso del 20% del mercado cripto, nuestro Agente RL detectó el evento instantáneamente, ajustó la tasa de redención de la stablecoin (+25%) y logró recuperar la paridad al dólar de manera autónoma. Esto marca el hito inaugural hacia las Finanzas Verdaderamente Autónomas."
      },
      sponsors: {
        title1: "Misión Shanghai 2026:",
        title2: "Buscamos Sponsors",
        desc1: "Únete a la expedición que representará la innovación blockchain de nuestra región en el continente asiático.",
        desc2: "Los fondos recaudados se destinarán íntegramente a cubrir los gastos logísticos, incluyendo trámites de visa, vuelos y estadía desde el 10 de mayo al 16 de junio de 2026. Sé parte del ecosistema que está impulsando la autonomía financiera y destaca tu marca a nivel global frente a los principales actores de la industria.",
        btn1Subtitle: "Para Empresas y Organizaciones",
        btn1Title: "Descargar Propuesta (ES)",
        btn2Subtitle: "Para Networks y Chains",
        btn2Title: "Download Proposal (EN)"
      },
      partners: {
        title: "Potenciales Partners y Aliados",
        ariaLabel: "Sponsors and Partners"
      },
      cta: {
        title: "¿Quieres construir el futuro con nosotros?",
        desc: "Este reconocimiento en Shanghai es solo el primer paso de nuestra hoja de ruta. Estamos expandiendo el desarrollo de agentes autónomos y protocolos de alta fiabilidad.",
        button: "Súmate a la Revolución"
      }
    },
    blogPosts: [] as BlogPost[],
  },
  en: {
    common: {
      readMore: "Read more",
      viewAll: "View all",
      backHome: "Back to home",
      lastUpdated: "Last updated",
      sendMessage: "Send message",
      messageSent: "Message sent",
      sendAnother: "Send another message",
      bookCall: "Book a call",
      hostEvent: "Grinta Protocol",
      supportedBy: "Supported by",
      calendarLink: "https://calendar.app.google/4NF4hz9LoGGok2gdA",
      nav: {
        home: "Home",
        community: "Community",
        education: "Education",
        education_courses: "Academy",
        education_coursesDesc: "Blockchain and artificial intelligence training",
        education_webinars: "Webinars",
        education_webinarsDesc: "Live and recorded sessions",
        solutions: {
          title: "Solutions",
          cdp: {
            title: "CDP",
            desc: "Unified customer data platform",
          },
          rwa: {
            title: "RWA",
            desc: "Real world asset tokenization",
          },
          tokenizacion: {
            title: "Tokenization",
            desc: "Digital assets and programmable economy",
          },
          fintech: {
            title: "Fintech & Payments",
            desc: "Next-generation financial infrastructure",
          },
          defi: {
            title: "DeFi",
            desc: "Decentralized finance without intermediaries",
          },
          trading: {
            title: "Trading",
            desc: "Algorithmic execution and on-chain strategies",
          },
          agentes: {
            title: "Autonomous Agents",
            desc: "Sovereign AI operating on blockchain",
          },
          page: {
            title: "Under development",
            subtitle: "We're building this solution. More information coming soon.",
          },
        },
        research: {
          title: "Research",
          laboratory: "Laboratory",
          laboratoryDesc: "Innovation and technological development",
          kbGraphs: "KB Graphs",
          kbGraphsDesc: "Knowledge Base Visualization",
          blog: "Blog",
          blogDesc: "Latest articles and insights",
        },
      },
    },
    grintaPopup: {
      title: "Grinta Protocol",
      description: "Grinta is a next-generation liquidity protocol designed to optimize capital across multiple chains. We are building the future of decentralized financial efficiency.",
      waitlistTitle: "Join the waitlist",
      waitlistPlaceholder: "you@email.com",
      button: "Join now",
      success: "Thank you! You've been added to the waitlist.",
    },
    hero: {
      subtitle: "Software Solutions, Blockchain Products, Artificial Intelligence, and Autonomous Agents",
      title1: "TECHNOLOGY",
      title2: "LABORATORY",
      description: "We are the disruption of centralization and the fear of bureaucratic ecosystems.",
      grintaButton: "Learn about Grinta Protocol",
      featuredIn: "Featured in",
      shanghaiBanner: "Grinta Protocol was selected to be present at the <span class='text-primary font-bold group-hover/link:underline'>Loop House in Shanghai</span> and at <span class='text-primary font-bold group-hover/link:underline'>muShanghai in China.</span> Learn about the product and become an official sponsor."
    },
    features: {
      heading: "THE PRINCIPLES THAT GUIDE EVERY LINE OF CODE WE WRITE AND EVERY DECISION WE MAKE",
      codeIsLaw: "CODE IS LAW",
      codeIsLawDesc: "It is the absolute truth. No excuses, no middle ground. Logic and execution are what matter and are part of our corporate culture.",
      noStatusQuo: "NO STATUS QUO",
      noStatusQuoDesc: "We don't accept things as they are just because they've always been that way. We question everything and seek better paths.",
      capitalism: "CAPITALISM",
      capitalismDesc: "We believe in incentives, open markets and genuinely generated value. Meritocracy works when the rules are clear.",
    },
    roadmap: {
      heading: "ROADMAP",
      q1Title: "Company Formation",
      q1Desc: "Pre-corporate agreement, company registration and official gazette publication.",
      q1Status: "Completed",
      q2Title: "Strategic Alliances",
      q2Desc: "Strategic alliance agreements to drive decentralization and the web3 ecosystem in Latin America, integrating Grinta Protocol as foundational infrastructure.",
      q2Status: "In progress",
      q3Title: "Computing Power Investment",
      q3Desc: "Capital injection for computing power expansion for efficient development in the technology laboratory.",
      q4Title: "Product Consolidation",
      q4Desc: "Pre-validation and market validation for the capitalization of each specific product.",
    },
    cta: {
      heading: "Schedule a call with our team",
      description: "Let's talk about your project. Our team of experts is ready to help you build custom blockchain solutions.",
      button: "Book a call",
    },
    impact: {
      heading: "SOCIAL RESPONSIBILITY & PURPOSE",
      title: "MORE THAN ECONOMY, WE ARE IMPACT",
      subtitle: "Our vision has always been aligned with the planet. We allocate 10% of our annual billing to projects that transform tomorrow.",
      items: [
        {
          title: "Global Reforestation",
          description: "Massive tree planting in critically deforested areas to restore natural lungs."
        },
        {
          title: "Water is Life",
          description: "Infrastructure to bring clean drinking water to communities lacking this vital resource."
        },
        {
          title: "Aerospace Data Centers",
          description: "Launching infrastructure into space to process AI sustainably and sovereignly."
        },
        {
          title: "Post-Quantum Security",
          description: "Development of advanced cryptography to ensure human privacy in the digital future."
        },
        {
          title: "Thermodynamic Computing",
          description: "Hardware radically more efficient than GPUs, drastically reducing the digital carbon footprint."
        }
      ]
    },
    founders: {
      heading: "THE TEAM BEHIND THE VISION",
    },
    blog: {
      heading: "Blog",
      homeHeading: "LATEST POSTS",
      homeSubtitle: "We explore the frontiers of blockchain technology. Discover our latest publications, analysis and ecosystem news.",
      readMore: "Read article",
      goToBlog: "Go to full blog",
      minRead: "min read",
      comingSoon: "Full article content coming soon.",
      noPostFound: "Article not found.",
    },
    footer: {
      tagline: "Building the future of blockchain technology, one product at a time.",
      company: "Company",
      chains: "Chains",
      legal: "Legal",
      aboutUs: "About Us",
      useCases: "Use Cases",
      contact: "Contact",
      blog: "Blog",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      viewAllChains: "View All Chains",
      rights: "All rights reserved.",
      location: "Córdoba, ARGENTINA",
    },
    about: {
      title: "About Us",
      intro: "Reflecter Labs is a technology laboratory based in Córdoba, Argentina, specializing in blockchain infrastructure and agentic systems. We design and develop the future of digital autonomy through MOLTX and multi-chain solutions for the Web3 ecosystem.",
      intro2: "Our team combines cutting-edge engineering, cryptography, and AI agent orchestration to create tools that drive digital sovereignty and intelligent automation globally.",
      mission: "Mission",
      missionDesc: "Accelerate the transition to an agentic world by building robust, secure, and autonomous infrastructure for agents and humans to interact on the blockchain.",
      vision: "Vision",
      visionDesc: "An interconnected ecosystem where AI agents and humans operate on a decentralized, reliable, and efficient technological foundation.",
      valuesTitle: "Our Values",
      values: [
        { title: "Innovation", description: "We constantly explore new technologies and paradigms to deliver solutions that make a difference in the blockchain ecosystem." },
        { title: "Transparency", description: "We believe in total openness. Our code, processes and communication reflect our commitment to trust and honesty." },
        { title: "Technical Excellence", description: "Every line of code we write follows the highest standards of quality, security and performance." },
        { title: "Community", description: "We build for and with the community. Collaboration and feedback are the engine of our evolution." },
      ],
      teamTitle: "Team",
      teamDesc: "We are a multidisciplinary team of engineers, designers and strategists passionate about decentralized technology. Meet our founders on the home page.",
    },
    useCases: {
      title: "Use Cases",
      intro: "We apply blockchain technology to solve real problems in different industries. These are some cases where our infrastructure makes a difference.",
      cases: [
        { tag: "DeFi", title: "Decentralized Finance Protocols", description: "We design and implement smart contracts for DeFi protocols, including lending, staking, yield farming and AMMs across multiple chains.", chains: ["Starknet", "Ethereum", "Base"] },
        { tag: "NFTs", title: "NFT & Digital Collectibles Infrastructure", description: "We develop minting contracts, marketplaces and management tools for large-scale NFT collections.", chains: ["Ethereum", "Polygon", "Base"] },
        { tag: "Supply Chain", title: "Traceability & Supply Chain", description: "We implement blockchain traceability solutions for companies that need to verify the authenticity of their products.", chains: ["Polygon", "BNB", "Avalanche"] },
        { tag: "Identity", title: "Decentralized Identity (DID)", description: "We build sovereign digital identity systems that allow users to control their data without intermediaries.", chains: ["Starknet", "Ethereum"] },
        { tag: "Gaming", title: "Gaming & Metaverse", description: "We develop on-chain infrastructure for Web3 games, in-game token economies and interoperable assets.", chains: ["Monad", "BNB", "Avalanche"] },
        { tag: "Tokenization", title: "Real World Asset Tokenization (RWA)", description: "We facilitate the tokenization of real assets like real estate, art and commodities for fractional investment.", chains: ["Ethereum", "Polygon", "Avalanche"] },
        { tag: "Agentic", title: "Agentic Infrastructure & MOLTX", description: "We develop MOLTX (Multi-Agent Orchestration Layer), an orchestration layer for sovereign AI agents that interact with blockchain protocols autonomously.", chains: ["Starknet", "Base", "Ethereum"] },
      ],
    },
    contact: {
      title: "Contact",
      intro: "We're ready to take your project to the next level. Let's talk! Schedule a 15-minute call with our technical team to explore how we can collaborate.",
      contactInfo: "Contact information",
      hours: "Business hours",
      monFri: "Monday - Friday",
      satSun: "Saturday - Sunday",
      closed: "Closed",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      selectSubject: "Select a subject",
      subjectProject: "New project",
      subjectCollab: "Collaboration",
      subjectSupport: "Technical support",
      subjectOther: "Other",
      message: "Message",
      messagePlaceholder: "Tell us about your project or inquiry...",
      thankYou: "Thank you for contacting us. We'll get back to you shortly.",
    },
    education: {
      title: "Education",
      description: "We are developing this section to provide education for those interested in learning about artificial intelligence and Blockchain.",
      status: "Under development",
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        { title: "1. Introduction", content: "Reflecter Labs (\"we\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information." },
        { title: "2. Information We Collect", content: "We may collect personal data (name, email, phone), usage data (IP, browser, pages visited), blockchain data (public wallet addresses) and cookie data per our Cookie Policy." },
        { title: "3. How We Use Your Information", content: "To provide and maintain our services, improve user experience, communicate with you, comply with legal obligations and detect fraud or abuse." },
        { title: "4. Data Sharing", content: "We do not sell your personal information. We may share data with trusted third-party service providers subject to strict confidentiality agreements." },
        { title: "5. Data Security", content: "We implement industry-standard security measures including encryption, access controls and regular security audits." },
        { title: "6. Your Rights", content: "Depending on your jurisdiction, you may have the right to access, correct, delete or port your personal data. Contact us at contact@reflecterlabs.xyz." },
        { title: "7. Contact Us", content: "If you have questions about this Privacy Policy, contact us at: contact@reflecterlabs.xyz" },
      ],
    },
    terms: {
      title: "Terms of Service",
      sections: [
        { title: "1. Acceptance of Terms", content: "By accessing or using Reflecter Labs services, you agree to be bound by these Terms of Service." },
        { title: "2. Description of Services", content: "Reflecter Labs provides blockchain infrastructure, smart contract development and related technology services across multiple chains including Starknet, Ethereum, Base, Polygon, BNB, Avalanche and Monad." },
        { title: "3. User Obligations", content: "You must be at least 18 years old, are responsible for your account and wallet security, must not use our services for illegal purposes and are responsible for all activity under your account." },
        { title: "4. Intellectual Property", content: "All content, code, designs and trademarks on this platform are owned by Reflecter Labs or its licensors." },
        { title: "5. Blockchain & Smart Contracts", content: "You acknowledge that blockchain transactions are irreversible. Reflecter Labs is not responsible for losses from smart contract interactions, network failures or user error." },
        { title: "6. Limitation of Liability", content: "To the fullest extent permitted by law, Reflecter Labs shall not be liable for indirect, incidental, special or consequential damages." },
        { title: "7. Governing Law", content: "These Terms shall be governed by the laws of the Argentine Republic." },
        { title: "8. Contact Us", content: "For questions about these Terms, contact us at: contact@reflecterlabs.xyz" },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      sections: [
        { title: "1. What Are Cookies", content: "Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember preferences and understand how you interact with our platform." },
        { title: "2. Types of Cookies We Use", content: "We use essential cookies (required for operation), analytics cookies (to understand usage), functional cookies (to remember preferences) and currently do not use marketing cookies." },
        { title: "3. Third-Party Cookies", content: "Some cookies may be placed by third-party services like analytics providers. We do not control these cookies." },
        { title: "4. Managing Cookies", content: "You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect website functionality." },
        { title: "5. Updates", content: "We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date." },
        { title: "6. Contact Us", content: "If you have questions about our cookie use, contact us at: contact@reflecterlabs.xyz" },
      ],
    },
    shanghai: {
      metadataTitle: "Grinta Protocol in Shanghai | Reflecter Labs",
      metadataDesc: "Discover how our protocol won at the Loop House in Shanghai with an autonomous RL model and an innovative stablecoin.",
      backHome: "Back to home",
      badge: "Winners - Loop House Shanghai",
      title1: "The Triumph of",
      title2: "Grinta Protocol",
      title3: "in China",
      subtitle: "Our global introduction: How we built a stablecoin protocol on Starknet fully autonomously controlled by a Reinforcement Learning (RL) AI model, achieving first place at the muShanghai event.",
      section1: {
        title: "The Revolution: The Autonomous Governor (PID-RL)",
        desc: "The core of our success lies in the PID-RL Agent. We trained a small, highly efficient model (Qwen 2.5 with 1.5 billion parameters) capable of dynamically adjusting the stablecoin controller's gains (Kp, Ki) based on Bitcoin market volatility.",
        card1Title: "Ultra-Low Latency",
        card1Desc: "Responses in under 50ms, drastically outperforming massive commercial API models that take seconds.",
        card2Title: "Emergency Detection",
        card2Desc: "The agent identifies sudden market crashes and proposes aggressive corrections to immediately maintain the token peg.",
        card3Title: "100% Self-Hosted",
        card3Desc: "Governance data never leaves the infrastructure. Completely offline, with no reliance on external APIs.",
        card4Title: "Cost Reduction",
        card4Desc: "Execution up to 100x cheaper than large LLM alternatives, costing just $0.001 per inference."
      },
      section2: {
        title: "The Stablecoin and Starknet Infrastructure",
        desc1: "Grinta is a PID-controlled stablecoin protocol on the Starknet network. It uses a HAI-style redemption price mechanism with a 'hook' on the Ekubo DEX that automatically updates rates on every trade, leaving only BTC/USD oracle feeds as manual processes.",
        desc2: "Architecturally, the system relies on 10 audited core smart contracts, managing accounting, Dutch auctions, liquidation, and a 'ParameterGuard' that validates changes dictated by the AI Agent.",
        whyWonTitle: "Why did we win?",
        whyWonDesc: "We proved that critical DeFi protocol governance no longer needs to rely on slow human voting or reactive manual signatures during crises. In the simulation presented in Shanghai, facing a 20% crypto market collapse, our RL Agent instantly detected the event, adjusted the stablecoin redemption rate (+25%), and autonomously recovered the dollar parity. This marks the inaugural milestone toward Truly Autonomous Finance."
      },
      sponsors: {
        title1: "Shanghai Mission 2026:",
        title2: "Seeking Sponsors",
        desc1: "Join the expedition that will represent our region's blockchain innovation in the Asian continent.",
        desc2: "The funds raised will be fully allocated to covering logistical expenses, including visa processing, flights, and accommodation from May 10th to June 16th, 2026. Be part of the ecosystem driving financial autonomy and highlight your brand globally to key industry players.",
        btn1Subtitle: "For Companies and Organizations",
        btn1Title: "Download Proposal (ES)",
        btn2Subtitle: "For Networks and Chains",
        btn2Title: "Download Proposal (EN)"
      },
      partners: {
        title: "Potential Partners and Allies",
        ariaLabel: "Sponsors and Partners"
      },
      cta: {
        title: "Do you want to build the future with us?",
        desc: "This recognition in Shanghai is just the first step on our roadmap. We are expanding the development of autonomous agents and highly reliable protocols.",
        button: "Join the Revolution"
      }
    },
    blogPosts: [] as BlogPost[],
  },
  pt: {
    common: {
      readMore: "Ler mais",
      viewAll: "Ver tudo",
      backHome: "Voltar ao início",
      lastUpdated: "Última atualização",
      sendMessage: "Enviar mensagem",
      messageSent: "Mensagem enviada",
      sendAnother: "Enviar outra mensagem",
      bookCall: "Agendar uma chamada",
      hostEvent: "Grinta Protocol",
      supportedBy: "Apoiado por",
      calendarLink: "https://calendar.app.google/4NF4hz9LoGGok2gdA",
      nav: {
        home: "Início",
        community: "Comunidade",
        education: "Educação",
        education_courses: "Academia",
        education_coursesDesc: "Formação em blockchain e inteligência artificial",
        education_webinars: "Webinars",
        education_webinarsDesc: "Sessões ao vivo e gravadas",
        solutions: {
          title: "Soluções",
          cdp: {
            title: "CDP",
            desc: "Plataforma unificada de dados de clientes",
          },
          rwa: {
            title: "RWA",
            desc: "Tokenização de ativos do mundo real",
          },
          tokenizacion: {
            title: "Tokenização",
            desc: "Ativos digitais e economia programável",
          },
          fintech: {
            title: "Fintech e Pagamentos",
            desc: "Infraestrutura financeira de nova geração",
          },
          defi: {
            title: "DeFi",
            desc: "Finanças descentralizadas sem intermediários",
          },
          trading: {
            title: "Trading",
            desc: "Execução algorítmica e estratégias on-chain",
          },
          agentes: {
            title: "Agentes Autônomos",
            desc: "IA soberana operando na blockchain",
          },
          page: {
            title: "Em desenvolvimento",
            subtitle: "Estamos construindo esta solução. Mais informações em breve.",
          },
        },
        research: {
          title: "Pesquisa",
          laboratory: "Laboratório",
          laboratoryDesc: "Inovação e desenvolvimento tecnológico",
          kbGraphs: "KB Graphs",
          kbGraphsDesc: "Visualização da Base de Conhecimento",
          blog: "Blog",
          blogDesc: "Últimos artigos e análises",
        },
      },
    },
    grintaPopup: {
      title: "Grinta Protocol",
      description: "O Grinta é um protocolo de liquidez de última geração projetado para otimizar o capital em várias cadeias. Estamos construindo o futuro da eficiência financeira descentralizada.",
      waitlistTitle: "Junte-se à lista de espera",
      waitlistPlaceholder: "seu@email.com",
      button: "Entrar agora",
      success: "Obrigado! Você foi adicionado à lista de espera.",
    },
    hero: {
      subtitle: "Soluções de Software, Produtos Blockchain, Inteligência Artificial e Agentes Autônomos",
      title1: "LABORATÓRIO",
      title2: "TECNOLÓGICO",
      description: "Somos a disrupção da centralização e o temor dos ecossistemas burocráticos.",
      grintaButton: "Conhecer Grinta Protocol",
      featuredIn: "Destaque em",
      shanghaiBanner: "Grinta Protocol foi selecionado para estar presente no <span class='text-primary font-bold group-hover/link:underline'>Loop House em Xangai</span> e no <span class='text-primary font-bold group-hover/link:underline'>muShanghai na China.</span> Conheça o produto e seja um patrocinador oficial."
    },
    features: {
      heading: "OS PRINCÍPIOS QUE GUIAM CADA LINHA DE CÓDIGO QUE ESCREVEMOS E CADA DECISÃO QUE TOMAMOS",
      codeIsLaw: "O CÓDIGO É LEI",
      codeIsLawDesc: "É a verdade absoluta. Sem desculpas, sem meio-termo. A lógica e a execução são o que importa e fazem parte da nossa cultura empresarial.",
      noStatusQuo: "NO STATUS QUO",
      noStatusQuoDesc: "Não aceitamos as coisas como são só porque sempre foram assim. Questionamos tudo e buscamos melhores caminhos.",
      capitalism: "CAPITALISMO",
      capitalismDesc: "Acreditamos nos incentivos, mercados abertos e valor genuinamente gerado. A meritocracia funciona quando as regras são claras.",
    },
    roadmap: {
      heading: "ROTEIRO",
      q1Title: "Formação da Empresa",
      q1Desc: "Acordo pré-societário, registro da empresa e publicação no diário oficial.",
      q1Status: "Concluída",
      q2Title: "Alianças Estratégicas",
      q2Desc: "Acordos de alianças estratégicas para impulsionar a descentralização e o ecossistema web3 na América Latina, integrando o Grinta Protocol como infraestrutura base.",
      q2Status: "Em andamento",
      q3Title: "Investimento em poder computacional",
      q3Desc: "Injeção de capital na ampliação do poder computacional para o desenvolvimento eficiente no laboratório tecnológico.",
      q4Title: "Consolidação de Produtos Solicitados",
      q4Desc: "Pré-validação e validação de mercado para a capitalização de cada produto específico.",
    },
    cta: {
      heading: "Agende uma chamada com nossa equipe",
      description: "Vamos conversar sobre seu projeto. Nossa equipe de especialistas está pronta para ajudá-lo a construir soluções blockchain sob medida.",
      button: "Agendar chamada",
    },
    impact: {
      heading: "RESPONSABILIDADE SOCIAL E PROPÓSITO",
      title: "MAIS QUE ECONOMIA, SOMOS IMPACTO",
      subtitle: "Nossa visão sempre esteve alinhada com o planeta. Destinamos 10% do nosso faturamento anual para projetos que transformam o amanhã.",
      items: [
        {
          title: "Reflorestamento Global",
          description: "Plantio massivo de árvores em áreas criticamente desmatadas para restaurar pulmões naturais."
        },
        {
          title: "Água é Vida",
          description: "Infraestrutura para levar água potável a comunidades que carecem deste recurso vital."
        },
        {
          title: "Centros de Dados Aeroespaciais",
          description: "Lançamento de infraestrutura no espaço para processar IA de forma sustentável e soberana."
        },
        {
          title: "Segurança Pós-Quântica",
          description: "Desenvolvimento de criptografia avançada para garantir a privacidade humana no futuro digital."
        },
        {
          title: "Computação Termodinâmica",
          description: "Hardware radicalmente mais eficiente que as GPUs, reduzindo drasticamente a pegada de carbono digital."
        }
      ]
    },
    founders: {
      heading: "A EQUIPE POR TRÁS DA VISÃO",
    },
    blog: {
      heading: "Blog",
      homeHeading: "ÚLTIMAS PUBLICAÇÕES",
      homeSubtitle: "Exploramos as fronteras da tecnologia blockchain. Conheça nossas últimas publicações, análises e novidades do ecossistema.",
      readMore: "Ler artigo",
      goToBlog: "Ir ao blog completo",
      minRead: "min de leitura",
      comingSoon: "Conteúdo completo do artigo em breve.",
      noPostFound: "Artigo não encontrado.",
    },
    footer: {
      tagline: "Construindo o futuro da tecnologia blockchain, um produto de cada vez.",
      company: "Empresa",
      chains: "Cadeias",
      legal: "Legal",
      aboutUs: "Sobre Nós",
      useCases: "Casos de Uso",
      contact: "Contato",
      blog: "Blog",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      cookiePolicy: "Política de Cookies",
      viewAllChains: "Ver Todas as Cadeias",
      rights: "Todos os direitos reservados.",
      location: "Córdoba, ARGENTINA",
    },
    about: {
      title: "Sobre Nós",
      intro: "Reflecter Labs é um laboratório de tecnología com sede em Córdoba, Argentina, especializado em infraestrutura blockchain e sistemas agênticos. Projetamos e desenvolvemos o futuro da autonomia digital através do MOLTX e soluções multi-chain para o ecossistema Web3.",
      intro2: "Nossa equipe combina engenharia de ponta, criptografia e orquestração de agentes de IA para criar ferramentas que impulsionam a soberania digital e a automação inteligente globalmente.",
      mission: "Missão",
      missionDesc: "Acelerar a transição para um mundo agêntico construindo infraestrutura robusta, segura e autônoma para que agentes e humanos interajam na blockchain.",
      vision: "Visão",
      visionDesc: "Um ecossistema interconectado onde agentes de IA e humanos operam em uma base tecnológica descentralizada, confiável e eficiente.",
      valuesTitle: "Nossos Valores",
      values: [
        { title: "Inovação", description: "Exploramos constantemente novas tecnologias e paradigmas para oferecer soluções que façam a diferença no ecossistema blockchain." },
        { title: "Transparência", description: "Acreditamos na abertura total. Nosso código, processos e comunicação refletem nosso compromisso com a confiança e a honestidade." },
        { title: "Excelencia Técnica", description: "Cada linha de código que escrevemos segue os mais altos padrões de qualidade, segurança e desempenho." },
        { title: "Comunidade", description: "Construímos para e com a comunidade. A colaboração e o feedback são o motor da nossa evolução." },
      ],
      teamTitle: "Equipe",
      teamDesc: "Somos uma equipe multidisciplinar de engenheiros, designers e estrategistas apaixonados por tecnologia descentralizada. Conheça nossos fundadores na página principal.",
    },
    useCases: {
      title: "Casos de Uso",
      intro: "Aplicamos tecnologia blockchain para resolver problemas reais em diferentes indústrias. Estes são alguns casos onde nossa infraestrutura faz a diferença.",
      cases: [
        { tag: "DeFi", title: "Protocolos de Finanças Descentralizadas", description: "Projetamos e implementamos smart contracts para protocolos DeFi, incluindo lending, staking, yield farming e AMMs em múltiplas cadeias.", chains: ["Starknet", "Ethereum", "Base"] },
        { tag: "NFTs", title: "Infraestrutura para NFTs e Coleccionáveis Digitais", description: "Desenvolvemos contratos de mintagem, marketplaces e ferramentas de gestão para coleções NFT em grande escala.", chains: ["Ethereum", "Polygon", "Base"] },
        { tag: "Supply Chain", title: "Rastreabilidade e Cadeia de Suprimentos", description: "Implementamos soluções de rastreabilidade em blockchain para empresas que precisam verificar a autenticidade de seus produtos.", chains: ["Polygon", "BNB", "Avalanche"] },
        { tag: "Identidade", title: "Identidade Descentralizada (DID)", description: "Construímos sistemas de identidade digital soberana que permitem aos usuários controlar seus dados sem intermediários.", chains: ["Starknet", "Ethereum"] },
        { tag: "Gaming", title: "Gaming & Metaverso", description: "Desenvolvemos infraestrutura on-chain para jogos Web3, economias de tokens in-game e assets interoperáveis.", chains: ["Monad", "BNB", "Avalanche"] },
        { tag: "Tokenização", title: "Tokenização de Ativos do Mundo Real (RWA)", description: "Facilitamos a tokenização de ativos reais como imóveis, arte e commodities para investimento fracionado.", chains: ["Ethereum", "Polygon", "Avalanche"] },
        { tag: "Agentic", title: "Infraestrutura de Agentes & MOLTX", description: "Desenvolvemos o MOLTX (Multi-Agent Orchestration Layer), uma camada de orquestração para agentes de IA soberanos que interagem com protocolos blockchain de forma autônoma.", chains: ["Starknet", "Base", "Ethereum"] },
      ],
    },
    contact: {
      title: "Contato",
      intro: "Estamos prontos para levar seu projeto ao próximo nível. Vamos conversar? Agende uma chamada de 15 minutos com nossa equipe técnica para explorar como podemos colaborar.",
      contactInfo: "Informações de contato",
      hours: "Horário de atendimento",
      monFri: "Segunda - Sexta",
      satSun: "Sábado - Domingo",
      closed: "Fechado",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "voce@email.com",
      subject: "Assunto",
      selectSubject: "Selecione um assunto",
      subjectProject: "Novo projeto",
      subjectCollab: "Colaboração",
      subjectSupport: "Suporte técnico",
      subjectOther: "Outro",
      message: "Mensagem",
      messagePlaceholder: "Conte-nos sobre seu projeto ou consulta...",
      thankYou: "Obrigado por entrar em contato. Retornaremos em breve.",
    },
    education: {
      title: "Educação",
      description: "Estamos desenvolvendo esta seção para oferecer formação aos interessados em aprender sobre inteligência artificial e Blockchain.",
      status: "Em desenvolvimento",
    },
    privacy: {
      title: "Política de Privacidade",
      sections: [
        { title: "1. Introdução", content: "Reflecter Labs (\"nós\" ou \"nosso\") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações." },
        { title: "2. Informações que Coletamos", content: "Podemos coletar dados pessoais (nome, email, telefone), dados de uso (IP, navegador, páginas visitadas), dados blockchain (endereços de wallets públicos) e dados de cookies." },
        { title: "3. Como Usamos suas Informações", content: "Para fornecer e manter nossos serviços, melhorar a experiência do usuário, comunicar-nos com você, cumprir obrigações legais e detectar fraude ou abuso." },
        { title: "4. Compartilhamento de Dados", content: "Não vendemos suas informações pessoais. Podemos compartilhar dados com provedores de serviços terceirizados de confiança, sujeitos a acordos de confidencialidade." },
        { title: "5. Segurança de Dados", content: "Implementamos medidas de segurança padrão da indústria incluindo criptografia, controles de acesso e auditorias regulares de segurança." },
        { title: "6. Seus Direitos", content: "Dependendo de sua jurisdição, você pode ter direito de acessar, corrigir, excluir ou portar seus dados pessoais. Contate-nos em contact@reflecterlabs.xyz." },
        { title: "7. Contato", content: "Se tiver dúvidas sobre esta Política de Privacidade, contate-nos em: contact@reflecterlabs.xyz" },
      ],
    },
    terms: {
      title: "Termos de Serviço",
      sections: [
        { title: "1. Aceitação dos Termos", content: "Ao acessar ou usar os serviços da Reflecter Labs, você concorda em estar vinculado a estes Termos de Serviço." },
        { title: "2. Descrição dos Serviços", content: "Reflecter Labs fornece infraestrutura blockchain, desenvolvimento de smart contracts e serviços tecnológicos relacionados em múltiplas cadeias incluindo Starknet, Ethereum, Base, Polygon, BNB, Avalanche e Monad." },
        { title: "3. Obrigações do Usuário", content: "Deve ter pelo menos 18 anos, é responsável pela segurança de sua conta e credenciais de wallet, não deve usar nossos servicios para fins ilegais e é responsável por toda atividade em sua conta." },
        { title: "4. Propriedade Intelectual", content: "Todo conteúdo, código, designs e marcas nesta plataforma são propriedade da Reflecter Labs ou seus licenciadores." },
        { title: "5. Blockchain e Smart Contracts", content: "Você reconhece que transações blockchain são irreversíveis. Reflecter Labs não é responsável por perdas resultantes de interações com smart contracts, falhas de rede ou erro do usuário." },
        { title: "6. Limitação de Responsabilidade", content: "Na máxima extensão permitida por lei, Reflecter Labs não será responsável por danos indiretos, incidentais, especiais ou consequenciais." },
        { title: "7. Lei Aplicável", content: "Estes Termos serão regidos pelas leis da República Argentina." },
        { title: "8. Contato", content: "Para dúvidas sobre estes Termos, contate-nos em: contact@reflecterlabs.xyz" },
      ],
    },
    cookies: {
      title: "Política de Cookies",
      sections: [
        { title: "1. O que são Cookies", content: "Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles nos ajudam a reconhecer seu navegador, lembrar suas preferências e entender como você interage com nossa plataforma." },
        { title: "2. Tipos de Cookies que Usamos", content: "Usamos cookies essenciais (necessários para operação), cookies de análise (para entender o uso), cookies funcionais (para lembrar preferências) e atualmente não usamos cookies de marketing." },
        { title: "3. Cookies de Terceiros", content: "Alguns cookies podem ser colocados por serviços de terceiros como provedores de análise. Não controlamos esses cookies." },
        { title: "4. Gerenciamento de Cookies", content: "Você pode controlar e gerenciar cookies através das configurações do seu navegador. Note que desativar certos cookies pode afetar a funcionalidade do site." },
        { title: "5. Atualizações", content: "Podemos atualizar esta Política de Cookies periódicamente. As alterações serão publicadas nesta página com uma data de revisão atualizada." },
        { title: "6. Contato", content: "Se tiver dúvidas sobre nosso uso de cookies, contate-nos em: contact@reflecterlabs.xyz" },
      ],
    },
    shanghai: {
      metadataTitle: "Grinta Protocol em Xangai | Reflecter Labs",
      metadataDesc: "Descubra como nosso protocolo venceu na Loop House em Xangai com um modelo de RL autônomo e uma stablecoin inovadora.",
      backHome: "Voltar ao início",
      badge: "Vencedores - Loop House Xangai",
      title1: "O Triunfo do",
      title2: "Grinta Protocol",
      title3: "na China",
      subtitle: "Nosso cartão de visitas global: Como construímos um protocolo de stablecoin na Starknet controlado de forma totalmente autônoma por um modelo de Inteligência Artificial de Aprendizado por Reforço (RL), conquistando o primeiro lugar no evento muShanghai.",
      section1: {
        title: "A Revolução: O Governador Autônomo (PID-RL)",
        desc: "O núcleo do nosso sucesso reside no Agente PID-RL. Treinamos um modelo pequeno e altamente eficiente (Qwen 2.5 de 1,5 bilhão de parâmetros) capaz de ajustar dinamicamente os ganhos do controlador da stablecoin (Kp, Ki) com base na volatilidade do mercado de Bitcoin.",
        card1Title: "Latência Ultrabaixa",
        card1Desc: "Respostas em menos de 50ms, superando drasticamente os modelos massivos de APIs comerciais que demoram segundos.",
        card2Title: "Detecção de Emergências",
        card2Desc: "O agente identifica quedas repentinas do mercado e propõe correções agressivas para manter imediatamente a paridade (peg) do token.",
        card3Title: "100% Self-Hosted",
        card3Desc: "Os dados de governança nunca saem da infraestrutura. Totalmente offline, sem dependência de APIs externas.",
        card4Title: "Redução de Custos",
        card4Desc: "Execução até 100 vezes mais econômica que alternativas baseadas em grandes LLMs, custando apenas US$ 0,001 por inferência."
      },
      section2: {
        title: "A Stablecoin e a Infraestrutura Starknet",
        desc1: "O Grinta é um protocolo de stablecoin controlado por PID na rede Starknet. Emprega um mecanismo de preço de resgate estilo HAI com um 'hook' na DEX Ekubo que atualiza automaticamente as taxas em cada negociação, deixando apenas os feeds de oráculo BTC/USD como processos manuais.",
        desc2: "Arquitetonicamente, o sistema baseia-se em 10 contratos inteligentes principais auditados, gerenciando contabilidade, leilões holandeses, liquidação e um 'ParameterGuard' que valida as alterações ditadas pelo Agente de IA.",
        whyWonTitle: "Por que vencemos?",
        whyWonDesc: "Provamos que a governança de protocolos DeFi críticos não precisa mais depender de votações humanas lentas ou assinaturas manuais reativas durante crises. Na simulação apresentada em Xangai, diante de um colapso de 20% no mercado cripto, nosso Agente RL detectou instantaneamente o evento, ajustou a taxa de resgate da stablecoin (+25%) e recuperou a paridade com o dólar de forma autônoma. Isso marca o marco inaugural rumo às Finanças Verdadeiramente Autônomas."
      },
      sponsors: {
        title1: "Missão Xangai 2026:",
        title2: "Buscamos Patrocinadores",
        desc1: "Junte-se à expedição que representará a inovação blockchain da nossa região no continente asiático.",
        desc2: "Os fundos arrecadados serão integralmente destinados à cobertura de despesas logísticas, incluindo vistos, voos e hospedagem de 10 de maio a 16 de junho de 2026. Faça parte do ecossistema que impulsiona a autonomia financeira e destaque sua marca globalmente perante os principais atores do setor.",
        btn1Subtitle: "Para Empresas e Organizações",
        btn1Title: "Baixar Proposta (ES)",
        btn2Subtitle: "Para Redes e Chains",
        btn2Title: "Download Proposal (EN)"
      },
      partners: {
        title: "Potenciais Parceiros e Aliados",
        ariaLabel: "Patrocinadores e Parceiros"
      },
      cta: {
        title: "Você quer construir o futuro conosco?",
        desc: "Este reconhecimento em Xangai é apenas o primeiro passo do nosso roteiro. Estamos expandindo o desenvolvimento de agentes autônomos e protocolos altamente confiáveis.",
        button: "Junte-se à Revolução"
      }
    },
    blogPosts: [
      {
        slug: "introduccion-starknet",
        title: "Introdução ao Starknet: O futuro da escalabilidade do Ethereum",
        excerpt: "Starknet usa provas STARK para escalar Ethereum de forma eficiente. Exploramos sua arquitetura, vantagens e como desenvolver neste ecossistema.",
        date: "2026-02-28",
        category: "Tecnologia",
        readTime: 8,
        image: "/blog/starknet.png",
      },
      {
        slug: "smart-contracts-seguridad",
        title: "Segurança em Smart Contracts: Melhores práticas para 2026",
        excerpt: "Smart contracts gerenciam milhões de dólares. Analisamos as vulnerabilidades mais comuns e as melhores práticas para escrever código seguro.",
        date: "2026-02-20",
        category: "Segurança",
        readTime: 12,
        image: "/blog/security.png",
      },
      {
        slug: "defi-latam",
        title: "DeFi na América Latina: Oportunidades e desafios",
        excerpt: "A América Latina é uma das regiões com maior adoção de criptomoedas. Analisamos o panorama DeFi e as oportunidades para desenvolvedores.",
        date: "2026-02-10",
        category: "DeFi",
        readTime: 10,
        image: "/blog/defi-latam.png",
      },
      {
        slug: "tokenizacion-activos-reales",
        title: "Tokenização de ativos reais: A próxima revolução financeira",
        excerpt: "A tokenização de RWA promete democratizar o investimento. Exploramos protocolos, regulações e o futuro dos ativos tokenizados.",
        date: "2026-01-28",
        category: "Tokenização",
        readTime: 9,
        image: "/blog/rwa.png",
      },
      {
        slug: "monad-evm-paralelo",
        title: "Monad: EVM paralelo e o futuro do desempenho blockchain",
        excerpt: "Monad promete executar transações EVM em paralelo. Analisamos seu design técnico e o que significa para o ecossistema de desenvolvedores.",
        date: "2026-01-15",
        category: "Tecnologia",
        readTime: 7,
        image: "/blog/monad.png",
      },
      {
        slug: "identidad-descentralizada",
        title: "Identidade descentralizada: Controle total sobre seus dados",
        excerpt: "Sistemas DID permitem que os usuários sejam donos de sua identidade digital. Exploramos padrões, implementações e casos de uso.",
        date: "2026-01-05",
        category: "Identidade",
        readTime: 11,
        image: "/blog/did.png",
      },
    ],
  },
  zh: {
    common: {
      readMore: "阅读更多",
      viewAll: "查看全部",
      backHome: "返回首页",
      lastUpdated: "最近更新",
      sendMessage: "发送消息",
      messageSent: "消息已发送",
      sendAnother: "发送另一条消息",
      bookCall: "预约通话",
      hostEvent: "Grinta Protocol",
      supportedBy: "支持方",
      calendarLink: "https://calendar.app.google/4NF4hz9LoGGok2gdA",
      nav: {
        home: "首页",
        community: "社区",
        education: "教育",
        education_courses: "学院",
        education_coursesDesc: "区块链和人工智能培训",
        education_webinars: "网络研讨会",
        education_webinarsDesc: "直播和录播课程",
        solutions: {
          title: "解决方案",
          cdp: {
            title: "CDP",
            desc: "统一客户数据平台",
          },
          rwa: {
            title: "RWA",
            desc: "现实世界资产代币化",
          },
          tokenizacion: {
            title: "代币化",
            desc: "数字资产和可编程经济",
          },
          fintech: {
            title: "金融科技与支付",
            desc: "下一代金融基础设施",
          },
          defi: {
            title: "DeFi",
            desc: "无中间机构的去中心化金融",
          },
          trading: {
            title: "交易",
            desc: "算法执行和链上策略",
          },
          agentes: {
            title: "自主代理",
            desc: "在区块链上运行的主权人工智能",
          },
          page: {
            title: "开发中",
            subtitle: "我们正在构建此解决方案。更多信息即将推出。",
          },
        },
        research: {
          title: "研究",
          laboratory: "实验室",
          laboratoryDesc: "创新与技术开发",
          kbGraphs: "KB 图表",
          kbGraphsDesc: "知识库可视化",
          blog: "博客",
          blogDesc: "最新文章和见解",
        },
      },
    },
    grintaPopup: {
      title: "Grinta Protocol",
      description: "Grinta 是下一代流动性协议，旨在优化多链资本。我们正在构建去中心化金融效率的未来。",
      waitlistTitle: "加入候补名单",
      waitlistPlaceholder: "your@email.com",
      button: "立即加入",
      success: "谢谢！您已加入候补名单。",
    },
    hero: {
      subtitle: "软件解决方案、区块链产品、人工智能和自主代理",
      title1: "技术",
      title2: "实验室",
      description: "我们是中心化的颠覆者，是官僚生态系统的恐惧。",
      grintaButton: "了解 Grinta Protocol",
      featuredIn: "特别报道",
      shanghaiBanner: "Grinta Protocol 入选 <span class='text-primary font-bold group-hover/link:underline'>上海 Loop House</span> 和 <span class='text-primary font-bold group-hover/link:underline'>中国 muShanghai</span>。了解产品并成为官方赞助商。"
    },
    features: {
      heading: "指导我们编写每一行代码和做出每一个决策的原则",
      codeIsLaw: "代码即法律",
      codeIsLawDesc: "这是绝对的真理。没有借口，没有折中。逻辑和执行才是最重要的，它们是我们企业文化的一部分。",
      noStatusQuo: "拒绝现状",
      noStatusQuoDesc: "我们不接受仅仅因为一直以来如此而维持现状。我们质疑一切，寻求更好的道路。",
      capitalism: "资本主义",
      capitalismDesc: "我们相信激励机制、开放市场和真正创造的价值。当规则明确时，精英管理就会起作用。",
    },
    roadmap: {
      heading: "路线图",
      q1Title: "公司成立",
      q1Desc: "签订公司成立前协议、公司注册及官方公告。",
      q1Status: "已完成",
      q2Title: "战略联盟",
      q2Desc: "达成战略联盟协议，整合 Grinta Protocol 作为基础架构，推动拉丁美洲的去中心化和 Web3 生态系统发展。",
      q2Status: "进行中",
      q3Title: "计算能力投资",
      q3Desc: "注资扩大技术实验室的计算能力，以实现高效开发。",
      q4Title: "产品整合",
      q4Desc: "针对每个特定产品的资本化进行市场预验证和验证。",
    },
    cta: {
      heading: "与我们的团队预约通话",
      description: "让我们谈谈您的项目。我们的专家团队已准备好帮助您构建定制的区块链解决方案。",
      button: "预约通话",
    },
    impact: {
      heading: "社会责任与宗旨",
      title: "不仅是经济，我们更是影响力",
      subtitle: "我们的愿景始终与地球保持一致。我们将年营业额的 10% 投入到改变未来的项目中。",
      items: [
        {
          title: "全球植树造林",
          description: "在严重森林砍伐地区大规模植树，恢复自然肺部。"
        },
        {
          title: "水即生命",
          description: "为缺乏这一重要资源的社区建设提供清洁饮用水的基础设施。"
        },
        {
          title: "航空航天数据中心",
          description: "向太空部署基础设施，以可持续和主权的方式处理人工智能。"
        },
        {
          title: "后量子安全",
          description: "开发先进加密技术，确保未来数字世界中人类的隐私。"
        },
        {
          title: "热力学计算",
          description: "比 GPU 效率极高的硬件，大幅减少数字碳足迹。"
        }
      ]
    },
    founders: {
      heading: "愿景背后的团队",
    },
    blog: {
      heading: "博客",
      homeHeading: "最新文章",
      homeSubtitle: "我们探索区块链技术的边界。了解我们的最新发布、分析和生态系统动态。",
      readMore: "阅读文章",
      goToBlog: "跳转到完整博客",
      minRead: "分钟阅读",
      comingSoon: "文章内容即将推出。",
      noPostFound: "未找到文章。",
    },
    footer: {
      tagline: "深耕区块链技术未来，精心打造每一款产品。",
      company: "公司",
      chains: "链",
      legal: "法律",
      aboutUs: "关于我们",
      useCases: "使用案例",
      contact: "联系我们",
      blog: "博客",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      cookiePolicy: "Cookie 政策",
      viewAllChains: "查看所有链",
      rights: "版权所有。",
      location: "阿根廷，科尔多瓦",
    },
    about: {
      title: "关于我们",
      intro: "Reflecter Labs 是一家总部位于阿根廷科尔多瓦的技术实验室，专注于区块链基础设施和代理系统。我们通过 MOLTX 和适用于 Web3 生态系统的多链解决方案来设计/开发数字自治的未来。",
      intro2: "我们的团队结合了前沿工程、密码学和人工智能代理编排，致力于打造推动全球数字主权和智能自动化的工具。",
      mission: "使命",
      missionDesc: "通过构建强大、安全和自主的基础设施，加速向代理世界的转型，使代理和人类能够在区块链上进行交互。",
      vision: "愿景",
      visionDesc: "一个相互连接的生态系统，在这个系统中，人工智能代理和人类在去中心化、可靠且高效的技术基础上运行。",
      valuesTitle: "我们的价值观",
      values: [
        { title: "创新", description: "我们不断探索新技术和范式，提供在区块链生态系统中脱颖而出的解决方案。" },
        { title: "透明", description: "我们相信完全开放。我们的代码、流程和沟通体现了我们对信任/诚实的承诺。" },
        { title: "卓越技术", description: "我们编写的每一行代码都遵循质量、安全和性能的最高标准。" },
        { title: "社区", description: "我们为社区而建，并与社区共同建设。协作和反馈是我们发展的动力。" },
      ],
      teamTitle: "团队",
      teamDesc: "我们是一支多学科团队，由对去中心化技术充满热情的工程师、设计师和战略家组成。在首页了解我们的创始人。",
    },
    useCases: {
      title: "使用案例",
      intro: "我们应用区块链技术解决不同行业的实际问题。这些是我们的基础设施发挥作用的一些案例。",
      cases: [
        { tag: "DeFi", title: "去中心化金融协议", description: "我们为 DeFi 协议设计并实施智能合约，包括多链上的借贷、质押、收益耕作和 AMM。", chains: ["Starknet", "Ethereum", "Base"] },
        { tag: "NFTs", title: "NFT 和数字收藏品基础设施", description: "我们为大规模 NFT 系列开发铸造合约、市场和管理工具。", chains: ["Ethereum", "Polygon", "Base"] },
        { tag: "Supply Chain", title: "溯源与供应链", description: "我们为需要验证产品真实性的公司实施区块链溯源解决方案。", chains: ["Polygon", "BNB", "Avalanche"] },
        { tag: "Identity", title: "去中心化身份 (DID)", description: "我们构建主权数字身份系统，允许用户在没有中间机构的情况下控制其数据。", chains: ["Starknet", "Ethereum"] },
        { tag: "Gaming", title: "游戏与元宇宙", description: "我们为 Web3 游戏开发链上基础设施、游戏内代币经济和互操作系统资产。", chains: ["Monad", "BNB", "Avalanche"] },
        { tag: "Tokenization", title: "现实世界资产代币化 (RWA)", description: "我们促进房地产、艺术品和大宗商品等真实资产的代币化，以进行碎片化投资。", chains: ["Ethereum", "Polygon", "Avalanche"] },
        { tag: "Agentic", title: "代理基础设施与 MOLTX", description: "我们开发了 MOLTX（多代理编排层），这是主权人工智能代理与区块链协议自主交互的编排层。", chains: ["Starknet", "Base", "Ethereum"] },
      ],
    },
    contact: {
      title: "联系我们",
      intro: "我们已准备好将您的项目提升到新的水平. 聊聊吧？与我们的技术团队预约 15 分钟的通话，探讨我们如何合作。",
      contactInfo: "联系信息",
      hours: "营业时间",
      monFri: "周一 - 周五",
      satSun: "周六 - 周日",
      closed: "休息",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "电子邮件",
      emailPlaceholder: "your@email.com",
      subject: "主题",
      selectSubject: "选择主题",
      subjectProject: "新项目",
      subjectCollab: "合作",
      subjectSupport: "技术支持",
      subjectOther: "其他",
      message: "消息",
      messagePlaceholder: "告诉我们您的项目或咨询...",
      thankYou: "感谢您联系我们. 我们会尽快回复您。",
    },
    education: {
      title: "教育",
      description: "我们正在开发此板块，为有兴趣学习人工智能和区块链的人士提供培训。",
      status: "开发中",
    },
    privacy: {
      title: "隐私政策",
      sections: [
        { title: "1. 简介", content: "Reflecter Labs（“我们”或“我们的”）致力于保护您的隐私. 本隐私政策解释了我们在您访问我们的网站和使用我们的服务时如何收集、使用、披露和保护您的信息。" },
        { title: "2. 我们收集的信息", content: "我们可能会收集个人数据（姓名、电子邮件、电话）、使用数据（IP、浏览器、访问的页面）、区块链数据（公共钱包地址）以及根据我们的 Cookie 政策收集的 Cookie 数据。" },
        { title: "3. 我们如何使用您的信息", content: "为了提供和维护我们的服务、改善用户体验、与您沟通、履行法律义务并检测欺诈或滥用行为。" },
        { title: "4. 数据共享", content: "我们不会出售您的个人信息. 我们可能会与受严格保密协议约束的受信任第三方服务提供商共享数据。" },
        { title: "5. 数据安全", content: "我们实施行业标准的安全性措施，包括加密、访问控制和定期安全性审计。" },
        { title: "6. 您的权利", content: "根据您所在的司法管辖区，您可能拥有访问、更正、删除或移植您的个人数据的权利. 请通过 contact@reflecterlabs.xyz 联系我们。" },
        { title: "7. 联系我们", content: "如果您对本隐私政策有任何疑问，请联系我们：contact@reflecterlabs.xyz" },
      ],
    },
    terms: {
      title: "服务条款",
      sections: [
        { title: "1. 接受条款", content: "通过访问或使用 Reflecter Labs 的服务，即表示您同意受这些服务条款的约束。" },
        { title: "2. 服务描述", content: "Reflecter Labs 在包括 Starknet、Ethereum、Base、Polygon、BNB、Avalanche 和 Monad 在内的多个链上提供区块链基础设施、智能合约开发和相关技术服务。" },
        { title: "3. 用户义务", content: "您必须年满 18 岁，对您的账户和钱包凭证的安全性负责，不得将我们的服务用于非法目的，并对您账户下的所有活动负责。" },
        { title: "4. 知识产权", content: "本平台上的所有内容、代码、设计和商标均为 Reflecter Labs 或其许可方的财产。" },
        { title: "5. 区块链与智能合约", content: "您承认区块链交易是不可逆的。对于因智能合约交互、网络故障或用户错误导致的损失，Reflecter Labs 概不负责。" },
        { title: "6. 责任限制", content: "在法律允许的最大范围内，Reflecter Labs 不对任何间接、附带、特别或后果性损害负责。" },
        { title: "7. 适用法律", content: "这些条款受阿根廷共和国法律管辖，不考虑其冲突法条款。" },
        { title: "8. 联系我们", content: "有关本条款的问题，请联系我们：contact@reflecterlabs.xyz" },
      ],
    },
    cookies: {
      title: "Cookie 政策",
      sections: [
        { title: "1. 什么是 Cookie", content: "Cookie 是在您访问网站时存储在您设备上的小型文本文件。它们帮助我们识别您的浏览器、记住您的偏好并了解您如何与我们的平台互动。" },
        { title: "2. 我们使用的 Cookie 类型", content: "我们使用基本 Cookie（操作所需）、分析 Cookie（了解使用情况）、功能 Cookie（记住偏好），目前不使用营销 Cookie。" },
        { title: "3. 第三方 Cookie", content: "某些 Cookie 可能会由分析提供商等第三方服务放置. 我们无法控制这些 Cookie。" },
        { title: "4. 管理 Cookie", content: "您可以通过浏览器设置控制和管理 Cookie. 请注意，禁用某些 Cookie 可能会影响网站功能。" },
        { title: "5. 更新", content: "我们可能会定期更新本 Cookie 政策. 更改将发布在此页面上，并注有更新的修订日期。" },
        { title: "6. 联系我们", content: "如果您对我们使用 Cookie 有任何疑问，请联系我们：contact@reflecterlabs.xyz" },
      ],
    },
    shanghai: {
      metadataTitle: "Grinta Protocol 在上海 | Reflecter Labs",
      metadataDesc: "了解我们的协议如何凭借自主的强化学习(RL)模型和创新的稳定币在上海 Loop House 获胜。",
      backHome: "返回首页",
      badge: "获胜者 - 上海 Loop House",
      title1: "的胜利",
      title2: "Grinta Protocol",
      title3: "在中国",
      subtitle: "我们向世界的介绍：我们如何在 Starknet 上构建一个由强化学习 (RL) AI 模型完全自主控制的稳定币协议，并在 muShanghai 活动中获得第一名。",
      section1: {
        title: "革命：自主管理者 (PID-RL)",
        desc: "我们成功的核心在于 PID-RL 代理。我们训练了一个小巧高效的模型（15亿参数的 Qwen 2.5），能够根据比特币市场的波动性动态调整稳定币控制器的参数 (Kp, Ki)。",
        card1Title: "超低延迟",
        card1Desc: "响应时间不到 50 毫秒，远远优于需要几秒钟的大型商业 API 模型。",
        card2Title: "紧急情况检测",
        card2Desc: "代理能识别市场突发崩盘，并提出积极的修正方案，以立即维持代币挂钩。",
        card3Title: "100% 自托管",
        card3Desc: "治理数据绝不离开基础设施。完全离线，不依赖任何外部 API。",
        card4Title: "降低成本",
        card4Desc: "执行成本比大型 LLM 替代方案低高达 100 倍，每次推理仅需 0.001 美元。"
      },
      section2: {
        title: "稳定币与 Starknet 基础设施",
        desc1: "Grinta 是 Starknet 网络上由 PID 控制的稳定币协议。它在 Ekubo DEX 上采用类似 HAI 的赎回价格机制和“挂钩(hook)”，在每次交易时自动更新利率，只保留 BTC/USD 预言机信息作为手动操作。",
        desc2: "在架构层面上，该系统依赖于 10 个经过审计的核心智能合约，管理会计、荷兰式拍卖、清算，以及验证 AI 代理所做更改的“ParameterGuard”。",
        whyWonTitle: "我们为什么赢了？",
        whyWonDesc: "我们证明了关键的 DeFi 协议治理在危机期间不再需要依赖缓慢的人工投票或被动的手动签名。在上海展示的模拟中，面对加密市场 20% 的崩盘，我们的 RL 代理立即检测到事件，调整了稳定币的赎回率 (+25%)，并自主恢复了美元平价。这标志着真正自主金融的开端。"
      },
      sponsors: {
        title1: "2026 上海任务：",
        title2: "寻找赞助商",
        desc1: "加入远征，代表我们地区在亚洲大陆展示区块链创新。",
        desc2: "筹集的资金将全部用于支付物流费用，包括 2026 年 5 月 10 日至 6 月 16 日期间的签证办理、航班和住宿。成为推动金融自主生态系统的一部分，并向行业主要参与者全球展示您的品牌。",
        btn1Subtitle: "致企业和组织",
        btn1Title: "下载提案 (ES)",
        btn2Subtitle: "致网络和链 (Chains)",
        btn2Title: "Download Proposal (EN)"
      },
      partners: {
        title: "潜在合作伙伴与盟友",
        ariaLabel: "赞助商与合作伙伴"
      },
      cta: {
        title: "你想和我们一起共创未来吗？",
        desc: "在上海获得的这项认可是我们路线图的第一步。我们正在扩展自主代理和高可靠性协议的开发。",
        button: "加入革命"
      }
    },
    blogPosts: [] as BlogPost[],
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string
  ? string
  : T[K] extends readonly any[]
  ? T[K]
  : DeepString<T[K]>
};

export type Dictionary = DeepString<typeof dictionaries.es>;

const dictionaryCache: Partial<Record<Locale, Dictionary>> = {};

export function getDictionary(locale: Locale): Dictionary {
  if (dictionaryCache[locale]) {
    return dictionaryCache[locale]!;
  }
  const dictionary = (dictionaries[locale] || dictionaries[defaultLocale]) as unknown as Dictionary;
  dictionaryCache[locale] = dictionary;
  return dictionary;
}
