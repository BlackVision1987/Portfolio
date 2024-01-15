document.addEventListener("DOMContentLoaded", function() {
  
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  for (const internalLink of internalLinks) {
    internalLink.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scroll({
      top: targetElement.offsetTop - 50,
      left: 0,
      behavior: 'smooth'
    });
  }

  
  const projectDetails = document.querySelectorAll('.project');

  for (const projectDetail of projectDetails) {
    projectDetail.addEventListener('click', toggleProjectDetails);
  }

  function toggleProjectDetails() {
    this.classList.toggle('active');
  }
});
function changeLanguage(language) {
  const languageElements = {
    'es': {
    'header-title': 'Gabriel Rioja',
    'header-subtitle': 'Técnico de TI - Desarrollador de Software',
    'about-title': 'Acerca de Mí',
    'about-content': '¡Hola! Soy Gabriel Rioja, un apasionado técnico de PCs y ahora iniciando como desarrollador de software con experiencia en Python, JavaScript, HTML y CSS. Mi objetivo es el desarrollo y crecimiento personal, transmitir los conocimientos adquiridos.',
    'experience-title': 'Experiencia Laboral',
    'education-title': 'Educación',
    'skills-title': 'Habilidades',
    'projects-title': 'Proyectos Destacados',
    'contact-title': 'Contacto',
    'contact-content': 'Puedes contactarme en <a href="mailto:gabriel_rioja@hotmail.com">gabriel_rioja@hotmail.com</a>. También estoy en <a href="https://www.linkedin.com/in/gabriel-rioja-rodriguez-b560182a7/" target="_blank">LinkedIn</a> y <a href="https://github.com/BlackVision1987" target="_blank">GitHub</a>.',
    'footer-content': '&copy; 2023 Gabriel Rioja - Portfolio',
    'job1-title': 'Técnico de TI',
    'jcompany1': 'Empresa:',        
    'jdate1-current': 'Actualidad',
    'jdate1': 'Fecha:',
    'job1-responsibility': [
      '*Armo presupuestos de PCs a medida.',
      '*Me encargo de buscar los componentes, armarlos e instalar SO y programas.',
      '*Detecto fallas de Hardware y Software y paso a repararlas de ser posible.',
      '*Mantenimiento de PCs, actualización de Hardware, Software, limpieza.'
    ],
    'job2-title': 'Instructor de Computación',
    'jcompany2': 'Empresa:',
    'jcompany2-current': 'F.U.C.E (Fundación Unión de Centros Educativos)',   
    'jdate2': 'Fecha:',     
    'job2-responsibility': [
      '*Me desempeñaba bien en cualquiera de las aulas (Hard, Soft 1, 2 y Redes).',
      '*Me encargaba de pasar informes y listas de alumnos al sistema.'
    ],
    'job3-title': 'Auditor',
      'jcompany3': 'Empresa:',  
      'jdate3': 'Fecha:',        
      'job3-responsibility': [
        '*Contaba mercadería para empresas grandes como Norte o Carrefour.',
        '*Buena productividad de trabajo.'
      ],
      'job4-title': 'Vendedor',
      'jcompany4': 'Empresa:',  
      'jdate4': 'Fecha:',        
      'job4-responsibility': [
        '*Vendedor de salón, repositor, ingresar clientes en el sistema, cajero.'
      ],
      'job5-title': 'Soporte Técnico',
      'jcompany5': 'Empresa:',  
      'jdate5': 'Fecha:',        
      'job5-responsibility': [
        '*Reparación de pcs, redes on site y remoto.'
      ],
      'job6-title': 'Telemarketer',
      'jcompany6': 'Empresa:',  
      'jdate6': 'Fecha:',        
      'job6-responsibility': [
        '*Venta telefónica del servicio de DirectTV.',
        '*Buena habilidad de venta, conocimiento del producto.'
      ],
    'degree1-title': 'Bachiller Comercio Exterior',
    'education1': 'Institución:',
    'ddate1': 'Fecha:',    
    'degree1-data': [
      '*Estudios primarios completos.',
      '*Estudios secundarios completos.'
    ],
    'degree2-title': 'Curso Python',
    'education2': 'Institución:',
    'ddate2': 'Fecha:',
    'dcert2-current': 'Certificado',       
    'project1-title': 'Tienda de Hardware de PC',
    'degree3-title': 'Curso JavaScript',
    'education3': 'Institución:',
    'ddate3': 'Fecha:',
    'skt1': 'Técnico de TI',
    'dcert3-current': 'Certificado',       
    'project1-title': 'Tienda de Hardware de PC',
    'project1-data': [
      '*Proyecto final de JavaScript, una tienda simple para compra de componentes de PC',
      '<a href="https://blackvision1987.github.io/Entrega-Final-JS-Rioja/" target="_blank">https://blackvision1987.github.io/Entrega-Final-JS-Rioja/</a>',
      '<a href="https://github.com/BlackVision1987/Entrega-Final-JS-Rioja.git" target="_blank">https://github.com/BlackVision1987/Entrega-Final-JS-Rioja.git</a>'
    ]
  },
  'en': {
      'header-title': 'Gabriel Rioja',
      'header-subtitle': 'IT Technician - Software Developer',
      'about-title': 'About Me',
      'about-content': 'Hello! I am Gabriel Rioja, a passionate PC technician now transitioning into software development with experience in Python, JavaScript, HTML, and CSS. My goal is personal development and growth, sharing the knowledge I have acquired.',
      'experience-title': 'Work Experience',
      'education-title': 'Education',
      'skills-title': 'Skills',
      'projects-title': 'Featured Projects',
      'contact-title': 'Contact',
      'contact-content': 'You can reach me at <a href="mailto:gabriel_rioja@hotmail.com">gabriel_rioja@hotmail.com</a>. I am also on <a href="https://www.linkedin.com/in/gabriel-rioja-rodriguez-b560182a7/" target="_blank">LinkedIn</a> and <a href="https://github.com/BlackVision1987" target="_blank">GitHub</a>.',
      'footer-content': '&copy; 2023 Gabriel Rioja - Portfolio',
      'job1-title': 'IT Technician',
      'jcompany1': 'Company:',
      'jdate1-current': 'Present',
      'jdate1': 'Date:',
      'job1-responsibility': [
        '*Custom PC budgets.',
        '*Responsible for sourcing components, assembling, and installing OS and programs.',
        '*Detect and repair Hardware and Software issues when possible.',
        '*PC maintenance, Hardware and Software updates, cleaning.'
      ],
      'job2-title': 'Computer Instructor',
      'jcompany2': 'Company:',
      'jcompany2-current': 'F.U.C.E (Foundation Union of Educational Centers)',  
      'jdate2': 'Date:',        
      'job2-responsibility': [
        '*Performed well in any of the classrooms (Hard, Soft 1, 2, and Networks).',
        '*Responsible for reports and student lists in the system.'
      ],
      'job3-title': 'Inventory Count',
      'jcompany3': 'Company:',  
      'jdate3': 'Date:',        
      'job3-responsibility': [
        '*Counted merchandise for large companies like Norte or Carrefour.',
        '*Good work productivity.'
      ],
      'job4-title': 'Salesperson',
      'jcompany4': 'Company:',  
      'jdate4': 'Date:',        
      'job4-responsibility': [
        '*Sales floor, stock clerk, customer entry into the system, cashier.'
      ],
      'job5-title': 'Technical Support',
      'jcompany5': 'Company:',  
      'jdate5': 'Date:',        
      'job5-responsibility': [
        '*PC repair, on-site and remote network support.'
      ],
      'job6-title': 'Telemarketer',
      'jcompany6': 'Company:',  
      'jdate6': 'Date:',        
      'job6-responsibility': [
        '*Telephone sales of DirectTV service.',
        '*Strong sales skills, product knowledge.'
      ],
      'degree1-title': 'High School Graduate in Foreign Trade',
      'education1': 'Institution:',
      'ddate1': 'Date:',
      'degree1-data': [
      '*Completed primary studies.',
      '*Completed secondary studies.'
    ],
      'degree2-title': 'Python Course',
      'education2': 'Institution:',
      'ddate2': 'Date:',
      'dcert2-current': 'Certificate',
      'degree3-title': 'JavaScript Course',
      'education3': 'Institution:',
      'ddate3': 'Date:',
      'skt1': 'IT Technician',
      'dcert3-current': 'Certificate',        
      'project1-title': 'PC Hardware Store',
      'project1-data': [
      '*Final JavaScript project, a simple store for purchasing PC components',
      '<a href="https://blackvision1987.github.io/Entrega-Final-JS-Rioja/" target="_blank">https://blackvision1987.github.io/Entrega-Final-JS-Rioja/</a>',
      '<a href="https://github.com/BlackVision1987/Entrega-Final-JS-Rioja.git" target="_blank">https://github.com/BlackVision1987/Entrega-Final-JS-Rioja.git</a>'
    ]
    }
  };

  
  for (const elementId in languageElements[language]) {
    const element = document.getElementById(elementId);
    if (element) {
      
      if (Array.isArray(languageElements[language][elementId])) {
        const content = languageElements[language][elementId].join('<br>');
        element.innerHTML = content;
      } else {
        element.innerHTML = languageElements[language][elementId];
      }
    }
  }
}
