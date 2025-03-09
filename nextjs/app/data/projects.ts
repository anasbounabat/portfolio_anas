// app/data/projects.ts
export const projects = [
    {
      id: 1,
      title: "Création d'un thème WordPress",
      description: "Développement d'un thème WordPress personnalisé pour un site web portfolio, avec Next.js, React et Tailwind CSS.",
      imageUrl: "/images/siteWordpress.png",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/username/portfolio",
      fullDescription: `
        ## Création d'un thème WordPress personnalisé
    
        Ce projet consistait à créer un thème WordPress sur mesure, adapté aux besoins spécifiques d'un portfolio. Le site a été entièrement
         conçu et développé pour offrir une expérience utilisateur fluide et moderne.
    
        ## Technologies utilisées  
        - **PHP** pour la gestion dynamique du contenu et la création du thème  
        - **HTML & CSS** pour structurer et personnaliser l'interface  
        - **JavaScript** pour l'ajout d'interactivité et d'animations  
        - **WordPress** pour la gestion de contenu et l'édition facile du site  
    
        ## Fonctionnalités  
        - Création d'un thème WordPress entièrement personnalisé  
        - Design responsive adapté à tous les appareils  
        - Intégration de fonctionnalités dynamiques et interactives  
        - Personnalisation complète du design avec Tailwind CSS  
    
        Le but de ce projet était de créer une plateforme fluide, facile à utiliser, et esthétiquement agréable.  
    
        💡 **Je suis toujours ouvert à discuter de la création de thèmes WordPress ou de projets similaires !** 🚀
      `
    },
    {
      id: 2,
  title: "Vélo'Cité - Site Web pour la Mobilité Durable",
  description: "Développement d'un site web pour Vélo'Cité, une initiative visant à promouvoir une mobilité urbaine plus durable.",
  imageUrl: "/images/sitept.png",
  tags: ["HTML", "CSS", "JavaScript", "Git"],
  codeLink: "https://github.com/username/velo-cite",
  fullDescription: `
    ## Vélo'Cité - Site Web pour la Mobilité Durable

    Avec André, nous avons créé un site web pour Vélo'Cité, une initiative visant à promouvoir une mobilité urbaine plus durable
     en facilitant l'accès à la location de vélos dans la ville.

    ## Technologies utilisées  
    - **HTML** pour structurer le contenu du site  
    - **CSS** pour personnaliser et styliser le design  
    - **JavaScript** pour ajouter des interactions et dynamiser l'expérience utilisateur  
    - **Git** pour la gestion du code source et la collaboration  

    ## Fonctionnalités  
    - Site web simple et fonctionnel pour la promotion de la mobilité durable  
    - Design responsive pour une utilisation optimale sur tous les appareils  
    - Intégration d'informations et de services relatifs à la location de vélos  
    - Gestion et suivi des projets via Git pour un travail collaboratif efficace  

    Ce projet a été une belle expérience de collaboration, et nous sommes fiers d'avoir contribué à une initiative qui soutient
     une mobilité plus verte et plus accessible.

  `
    },
    {
      id: 3,
      title: "Convertisseur de Devises avec API et Git",
      description: "Développement d'un convertisseur de devises en utilisant une API pour récupérer les taux de change en temps réel et Git pour la gestion du code.",
      imageUrl: "/images/siteapi.png",
      tags: ["Git", "API", "JavaScript", "HTML", "CSS"],
      codeLink: "https://github.com/username/currency-converter",
      fullDescription: `
        ## Création d'un site de convertisseur de devises avec une API et Git
    
        Je suis ravi de partager que j'ai récemment travaillé sur un **convertisseur de devises**, utilisant **Git** pour le suivi
         des versions et la gestion du code. 
    
        ### Qu'est-ce que ça implique ?
        J'ai utilisé une **API** pour récupérer les taux de change en temps réel, permettant ainsi aux utilisateurs de convertir 
        facilement différentes devises. Ce projet m'a non seulement permis de perfectionner mes compétences techniques, mais
         également d'approfondir ma compréhension des systèmes d'API.
    
        ### Voici quelques points forts de ce projet :
        - **Utilisation de Git** pour un suivi efficace des versions et une gestion fluide du code.
        - **Intégration d'une API** pour des taux de change précis et en temps réel.
        - **Conception d'une interface utilisateur intuitive** pour une expérience optimale.
    
        N’hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur ce projet.
    
      
      `
    },
  ];
  
  export const getProjectById = (id: number) => {
    return projects.find(project => project.id === id) || null;
  };
