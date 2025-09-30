Portfolio Personnel - Next.js

Auteur
Anas Bounabat

URL du site déployé
🔗 Mon Portfolio

Aperçu du projet
Ce portfolio a été développé avec Next.js 13+ (App Router) et Tailwind CSS. Il présente mes projets, mon parcours éducatif et mes compétences, tout en offrant une interface moderne et responsive.

Fonctionnalités
✅ Design responsive
✅ Présentation des projets
✅ Parcours éducatif avec timeline
✅ Page de contact
✅ Mode clair/sombre

Technologies utilisées
Next.js 13+ (App Router)
React
TypeScript
Tailwind CSS
Installation en local
Prérequis
Node.js (version 18.x ou plus récente)
npm ou yarn
Étapes d'installation
Cloner le dépôt

bash
Copier
Modifier
git clone https://github.com/anasbounabat/portfolio_anas.git
cd portfolio_anas
Installer les dépendances

bash
Copier
Modifier
npm install
# ou
yarn install
Configurer les variables d’environnement
Créez un fichier .env.local à la racine du projet et ajoutez les variables nécessaires :

env
Copier
Modifier
NEXT_PUBLIC_SITE_URL=http://localhost:3001
# Ajoutez ici toutes les variables d'environnement nécessaires
Lancer le serveur de développement

bash
Copier
Modifier
npm run dev
# ou
yarn dev
Puis ouvrez votre navigateur et accédez à :
http://localhost:3001/home

Production
Construire l’application pour la production
bash
Copier
Modifier
npm run build
# ou
yarn build
Lancer en mode production
bash
Copier
Modifier
npm run start
# ou
yarn start
Déploiement sur Vercel
Le projet est configuré pour un déploiement facile sur Vercel 🚀

Étapes
Créez un compte sur Vercel
Connectez votre dépôt GitHub
Importez le projet
Configurez les variables d’environnement si nécessaire
Déployez en un clic
Structure du projet
bash
Copier
Modifier

/app                   # Dossier principal de l'application
  ├── /components      # Composants réutilisables
  ├── /home            # Page d'accueil principale
  │    ├── page.tsx    # Contenu de la page d'accueil
  ├── /contact         # Page contact
  │    ├── page.tsx    # Formulaire de contact
  ├── /projets         # Pages des projets individuels
  │    ├── [id]/page.tsx  # Template pour les pages de projet
  ├── /data            # Données statiques (projets, etc.)
  ├── layout.tsx       # Layout principal de l'application
  ├── page.tsx         # Redirection vers /home
  ├── not-found.tsx    # Page 404
/public                # Fichiers statiques (images, etc.)
/styles                # Styles globaux
next.config.js         # Configuration Next.js

Notes importantes

⚡ Le site est configuré pour rediriger automatiquement / vers /home.
📌 Pour modifier le contenu des projets, mettez à jour le fichier :
📂 app/data/projects.ts

