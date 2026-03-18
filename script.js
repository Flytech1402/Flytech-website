// Language management
let currentLang = 'en';

// Language data - can be moved to separate JSON files later
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_products: "Products",
        nav_contact: "Contact",
        tagline: "Leading FTTH & Telecom Solutions",
        // Hero
        hero_title: "Advanced FTTH & Telecom Equipment",
        hero_subtitle: "High-quality DUALBAND CATV ONU, WIFI7 XGSPON BE7200 ONU, OLT, cables, junction boxes, OTDR, splicer, RRU, BBU and more.",
        hero_button: "Explore Products",
        // About
        about_title: "About HANGZHOU FLY TECHNOLOGY CO., LTD.",
        about_text: "We are a professional manufacturer and supplier of FTTH (Fiber to the Home) and telecom products, serving global markets with reliable and innovative solutions. Our product range includes optical network units, optical line terminals, fiber cables, testing equipment, and wireless communication devices.",
        feature1_title: "Global Reach",
        feature1_text: "We export to over 50 countries worldwide.",
        feature2_title: "Quality Certified",
        feature2_text: "Products meet international standards (ISO, CE, RoHS).",
        feature3_title: "Technical Support",
        feature3_text: "Dedicated team for pre-sales and after-sales assistance.",
        // Products
        products_title: "Our Products",
        products_subtitle: "Comprehensive range of FTTH and telecom equipment",
        // Contact
        contact_title: "Contact Us",
        contact_info: "Get in Touch",
        contact_phone: "Phone: +86 571 8888 9999",
        contact_address: "Hangzhou, Zhejiang, China",
        whatsapp_title: "Contact via WhatsApp",
        whatsapp_scan: "Scan QR code to chat with us",
        contact_form_title: "Send Message",
        contact_send: "Send Message",
        // Footer
        footer_note: "Professional FTTH & Telecom Equipment Supplier"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_products: "Productos",
        nav_contact: "Contacto",
        tagline: "Soluciones líderes en FTTH y Telecomunicaciones",
        hero_title: "Equipos avanzados de FTTH y Telecomunicaciones",
        hero_subtitle: "ONU DUALBAND CATV de alta calidad, ONU WIFI7 XGSPON BE7200, OLT, cables, cajas de empalme, OTDR, empalmadora, RRU, BBU y más.",
        hero_button: "Explorar Productos",
        about_title: "Acerca de HANGZHOU FLY TECHNOLOGY CO., LTD.",
        about_text: "Somos un fabricante y proveedor profesional de productos FTTH (Fibra hasta el Hogar) y de telecomunicaciones, sirviendo a mercados globales con soluciones confiables e innovadoras. Nuestra gama de productos incluye unidades de red óptica, terminales de línea óptica, cables de fibra, equipos de prueba y dispositivos de comunicación inalámbrica.",
        feature1_title: "Alcance Global",
        feature1_text: "Exportamos a más de 50 países en todo el mundo.",
        feature2_title: "Calidad Certificada",
        feature2_text: "Productos que cumplen con estándares internacionales (ISO, CE, RoHS).",
        feature3_title: "Soporte Técnico",
        feature3_text: "Equipo dedicado para asistencia pre y post venta.",
        products_title: "Nuestros Productos",
        products_subtitle: "Amplia gama de equipos FTTH y de telecomunicaciones",
        contact_title: "Contáctenos",
        contact_info: "Póngase en Contacto",
        contact_phone: "Teléfono: +86 571 8888 9999",
        contact_address: "Hangzhou, Zhejiang, China",
        whatsapp_title: "Contactar por WhatsApp",
        whatsapp_scan: "Escanee el código QR para chatear con nosotros",
        contact_form_title: "Enviar Mensaje",
        contact_send: "Enviar Mensaje",
        footer_note: "Proveedor profesional de equipos FTTH y Telecomunicaciones"
    },
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_products: "Produtos",
        nav_contact: "Contato",
        tagline: "Soluções líderes em FTTH e Telecomunicações",
        hero_title: "Equipamentos avançados de FTTH e Telecomunicações",
        hero_subtitle: "ONU DUALBAND CATV de alta qualidade, ONU WIFI7 XGSPON BE7200, OLT, cabos, caixas de junção, OTDR, fusionadora, RRU, BBU e mais.",
        hero_button: "Explorar Produtos",
        about_title: "Sobre a HANGZHOU FLY TECHNOLOGY CO., LTD.",
        about_text: "Somos um fabricante e fornecedor profissional de produtos FTTH (Fibra até o Lar) e de telecomunicações, atendendo mercados globais com soluções confiáveis e inovadoras. Nossa linha de produtos inclui unidades de rede óptica, terminais de linha óptica, cabos de fibra, equipamentos de teste e dispositivos de comunicação sem fio.",
        feature1_title: "Alcance Global",
        feature1_text: "Exportamos para mais de 50 países em todo o mundo.",
        feature2_title: "Qualidade Certificada",
        feature2_text: "Produtos atendem aos padrões internacionais (ISO, CE, RoHS).",
        feature3_title: "Suporte Técnico",
        feature3_text: "Equipe dedicada para assistência pré e pós-venda.",
        products_title: "Nossos Produtos",
        products_subtitle: "Ampla gama de equipamentos FTTH e telecomunicações",
        contact_title: "Entre em Contato",
        contact_info: "Fale Conosco",
        contact_phone: "Telefone: +86 571 8888 9999",
        contact_address: "Hangzhou, Zhejiang, China",
        whatsapp_title: "Contato via WhatsApp",
        whatsapp_scan: "Escaneie o código QR para conversar conosco",
        contact_form_title: "Enviar Mensagem",
        contact_send: "Enviar Mensagem",
        footer_note: "Fornecedor profissional de equipamentos FTTH e Telecomunicações"
    }
};

// Product data
const products = [
    {
        id: 1,
        name: "DUALBAND CATV ONU",
        description: "Dual-band CATV Optical Network Unit with high performance and stability.",
        tags: ["ONU", "CATV", "Dual-band"],
        image: "images/product-onu.jpg"
    },
    {
        id: 2,
        name: "WIFI7 XGSPON BE7200 ONU",
        description: "Next-generation WiFi7 XGSPON ONU with BE7200 speed for ultra-fast connectivity.",
        tags: ["ONU", "WiFi7", "XGSPON", "BE7200"],
        image: "images/product-wifi7.jpg"
    },
    {
        id: 3,
        name: "OLT (MA5800X7)",
        description: "High-density Optical Line Terminal for large-scale FTTH deployments.",
        tags: ["OLT", "FTTH", "High-density"],
        image: "images/product-olt-huawei.jpg"
    },
    {
        id: 4,
        name: "OLT (C320)",
        description: "Compact OLT solution for small to medium-sized networks.",
        tags: ["OLT", "Compact", "GPON"],
        image: "images/product-olt-zte.jpg"
    },
    {
        id: 5,
        name: "Fiber Cables",
        description: "Various types of fiber optic cables: single-mode, multi-mode, indoor, outdoor.",
        tags: ["Cables", "Fiber", "Optical"],
        image: "images/product-cables.jpg"
    },
    {
        id: 6,
        name: "Junction Boxes",
        description: "Fiber distribution boxes and splice closures for network protection.",
        tags: ["Junction Box", "Splice", "Distribution"],
        image: "images/product-junction.jpg"
    },
    {
        id: 7,
        name: "OTDR",
        description: "Optical Time Domain Reflectometer for fiber testing and fault location.",
        tags: ["OTDR", "Testing", "Diagnostics"],
        image: "images/product-otdr.jpg"
    },
    {
        id: 8,
        name: "Fusion Splicer",
        description: "High-precision fiber fusion splicer for fast and reliable splicing.",
        tags: ["Splicer", "Fusion", "Fiber"],
        image: "images/product-splicer.jpg"
    },
    {
        id: 9,
        name: "RRU (Remote Radio Unit)",
        description: "Remote Radio Unit for wireless base station applications.",
        tags: ["RRU", "Wireless", "Radio"],
        image: "images/product-rru.jpg"
    },
    {
        id: 10,
        name: "BBU (Baseband Unit)",
        description: "Baseband Unit for central processing in wireless networks.",
        tags: ["BBU", "Baseband", "Wireless"],
        image: "images/product-bbu.jpg"
    }
];

// Initialize language and products
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Load initial language
    loadLanguage(currentLang);
    
    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Load products
    renderProducts();
    
    // Simple form submission (demo)
    document.getElementById('messageForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert(currentLang === 'en' ? 'Thank you! Your message has been sent.' :
              currentLang === 'es' ? '¡Gracias! Su mensaje ha sido enviado.' :
              'Obrigado! Sua mensagem foi enviada.');
        this.reset();
    });
});

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    loadLanguage(lang);
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Load language translations
function loadLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langData[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = langData[key];
            } else {
                el.textContent = langData[key];
            }
        }
    });
}

// Render product cards
function renderProducts() {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Placeholder images (if real images are not available)
function generatePlaceholderImages() {
    // This function can be used to create placeholder images if needed
    console.log('Placeholder images would be generated here.');
}

// Call placeholder generator if images are missing (optional)
// generatePlaceholderImages();