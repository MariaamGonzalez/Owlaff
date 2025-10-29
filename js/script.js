// Diccionario de traducciones
const translations = {
    es: {
        menu_home: "Inicio",
        menu_about: "Sobre el Proyecto",
        menu_gallery: "Galería",
        menu_contact: "Contacto",
        main_title: "Owlaff",
        main_instagram: "Instagram: @owlaff",
        main_slogan: "\"Creatividad que se saborea, innovación que te endulza.\"",
        main_vm_title: "Visión, Misión y Valores",
        main_vm: "Somos un emprendimiento destacado por nuestra creatividad, innovación y sabor. Creamos waffles artesanales únicos, usando ingredientes frescos y diferentes. Nos caracterizamos por la calidez, amabilidad y el compromiso local.",
        main_about_title: "¿Quiénes somos?",
        main_about: "Owlaff es un emprendimiento virtual de waffles artesanales, enfocado en la innovación, la creatividad y sabores únicos nunca antes vistos. Utilizamos ingredientes frescos y de calidad, para garantizar una experiencia deliciosa y responsable.",
        about_title: "Sobre Owlaff",
        about_healthy_title: "Inclusión de opciones saludables",
        about_healthy_desc: "Ofrecemos waffles saludables, pensados para personas que:",
        about_healthy_diet: "Siguen dietas especiales,",
        about_healthy_sugar: "Buscan bajo contenido en azúcar,",
        about_healthy_lifestyle: "Tienen estilos de vida que limitan el consumo de harinas refinadas y azúcares.",
        about_healthy_final: "Queremos que todos puedan disfrutar de un postre sin dañar su salud ni romper su alimentación, sin remordimientos, demostrando que lo saludable también puede ser delicioso.",
        about_custom_title: "Waffles personalizados",
        about_custom_desc: "Nuestros clientes pueden:",
        about_custom_build: "Armar sus waffles a su gusto,",
        about_custom_combine: "Crear combinaciones nuevas que se ajusten a sus preferencias,",
        about_custom_design: "Diseñar el postre perfecto, único y divertido.",
        about_custom_final: "¡Queremos que vivan una experiencia sabrosa y original!",
        about_service_title: "Atención al cliente y compromiso",
        about_service: "Ofrecemos un servicio al cliente excelente, reforzando nuestros valores y nuestro compromiso con cada pedido. Nos importa conectar con nuestros clientes y brindarles una atención cercana y de confianza.",
        about_offers_title: "Ofertas y paquetes especiales",
        about_offers_events: "Paquetes para eventos y fechas especiales,",
        about_offers_combos: "Combos semanales,",
        about_offers_activities: "Actividades para interactuar con el público y mantener una variedad de marketing.",
        about_social_title: "Redes sociales",
        about_social: "Contamos con una página de Instagram donde podrás:",
        about_social_promos: "Ver nuestras promociones,",
        about_social_products: "Consultar productos y novedades,",
        about_social_contact: "Enviar tus consultas y recibir atención rápida.",
        gallery_title: "Galería de Fotos",
        contact_title: "Contacto",
        contact_name: "Nombre:",
        contact_email: "Correo electrónico:",
        contact_message: "Mensaje:",
        contact_send: "Enviar"
    },
    en: {
        menu_home: "Home",
        menu_about: "About the Project",
        menu_gallery: "Gallery",
        menu_contact: "Contact",
        main_title: "Owlaff",
        main_instagram: "Instagram: @owlaff",
        main_slogan: "\"Creativity you can taste, innovation that sweetens you.\"",
        main_vm_title: "Vision, Mission and Values",
        main_vm: "We are a business known for our creativity, innovation, and flavor. We create unique artisanal waffles using fresh and different ingredients. We are characterized by warmth, kindness, and local commitment.",
        main_about_title: "Who are we?",
        main_about: "Owlaff is a virtual business of artisanal waffles, focused on innovation, creativity, and unique flavors never seen before. We use fresh, quality ingredients to guarantee a delicious and responsible experience.",
        about_title: "About Owlaff",
        about_healthy_title: "Inclusion of healthy options",
        about_healthy_desc: "We offer healthy waffles, designed for people who:",
        about_healthy_diet: "Follow special diets,",
        about_healthy_sugar: "Look for low sugar content,",
        about_healthy_lifestyle: "Have lifestyles that limit the consumption of refined flours and sugars.",
        about_healthy_final: "We want everyone to enjoy a dessert without harming their health or breaking their diet, without regrets, showing that healthy can also be delicious.",
        about_custom_title: "Custom waffles",
        about_custom_desc: "Our customers can:",
        about_custom_build: "Build their waffles to their liking,",
        about_custom_combine: "Create new combinations that suit their preferences,",
        about_custom_design: "Design the perfect, unique and fun dessert.",
        about_custom_final: "We want you to have a tasty and original experience!",
        about_service_title: "Customer service and commitment",
        about_service: "We offer excellent customer service, reinforcing our values and our commitment with every order. We care about connecting with our customers and providing close and trustworthy attention.",
        about_offers_title: "Special offers and packages",
        about_offers_events: "Packages for events and special dates,",
        about_offers_combos: "Weekly combos,",
        about_offers_activities: "Activities to interact with the public and keep a variety of marketing.",
        about_social_title: "Social media",
        about_social: "We have an Instagram page where you can:",
        about_social_promos: "See our promotions,",
        about_social_products: "Check products and news,",
        about_social_contact: "Send your inquiries and receive quick attention.",
        gallery_title: "Photo Gallery",
        contact_title: "Contact",
        contact_name: "Name:",
        contact_email: "Email:",
        contact_message: "Message:",
        contact_send: "Send"
    }
};

// Cambiar idioma
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    localStorage.setItem('expoLang', lang);
}

// Menú desplegable responsive
function setupMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Idioma
    const savedLang = localStorage.getItem('expoLang') || 'es';
    setLanguage(savedLang);
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    // Menú
    setupMenu();
});
