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
  title: "Application de Gestion de Propriétés avec Laravel",
  description: "Développement d'une plateforme complète de gestion de propriétés et de réservations avec un système d'authentification Admin/User en Laravel.",
  imageUrl: "/images/image.png",
  tags: ["Laravel", "PHP", "MySQL", "Blade", "MVC"],
  codeLink: "https://github.com/anasbounabat/laravel_test",
  fullDescription: `
  ## Application de Gestion de Propriétés et Réservations avec Laravel

  Ce projet est une **application web développée avec Laravel**, destinée à la gestion des propriétés (appartements, maisons, etc.) ainsi que des **réservations**. 

  ### Fonctionnalités principales :
  - **Système d"authentification** avec rôles : distinction entre les utilisateurs standards et les administrateurs.
  - **Gestion des propriétés** : ajout, modification, suppression et affichage des annonces.
  - **Module de réservation** permettant aux utilisateurs de réserver des biens disponibles.
  - **Tableau de bord Admin** pour superviser l'ensemble des données (utilisateurs, propriétés, réservations).
  
  ### Ce que j'ai appris :
  - Mise en pratique du **pattern MVC avec Laravel**.
  - Gestion des **relations entre modèles Eloquent** (utilisateurs, propriétés, réservations).
  - Sécurité et gestion des droits d'accès selon les rôles.
  - Utilisation efficace des **Blade templates** pour une interface propre et dynamique.

  Ce projet m'a permis de renforcer mes compétences en **développement backend avec Laravel** tout en construisant une application complète et structurée.

  Vous pouvez consulter le code source ici : [GitHub](https://github.com/anasbounabat/laravel_test)
  `
}
    ,{
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

    {
      id: 4,
      title: "Expérience Immersive au Musée du Jouet de Poissy",
      description: "Offrir une expérience interactive en permettant aux visiteurs d’interagir avec des jouets en 3D via une tablette, poser des questions et explorer l’histoire des jouets de manière immersive.",
      imageUrl: "/images/bap.png",
      tags: [
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "TailwindCSS",  "Three.js",
  "React Three Fiber",
  "Socket.io",
],
      codeLink: "https://github.com/miicolas/BAP-Musee-Jouet",
      fullDescription: `
        ## Expérience interactive au Musée de Poissy
    
        J'ai participé, au sein d'un **groupe de 3 développeurs**, à la création d'une **expérience interactive au Musée du Jouet de Poissy**, permettant aux visiteurs d’explorer l’histoire des jouets de manière immersive.
    
        ### Qu'est-ce que ça implique ?
       Les visiteurs peuvent interagir avec des jouets en 3D via une tablette, poser des questions, et découvrir les réponses directement sur l’écran. Le projet combine **technologies front-end et 3D** pour offrir une expérience ludique et éducative à tous les publics.
    
        ### Voici quelques points forts de ce projet :
        - Gestion des interactions utilisateur en temps réel via tablette.
        - Affichage dynamique d’objets 3D et mise à jour des réponses aux questions.
        - Suivi et gestion du projet avec Git.
    
        N’hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur ce projet.
    
`
    },
  ];
  
  export const getProjectById = (id: number) => {
    return projects.find(project => project.id === id) || null;
  };
