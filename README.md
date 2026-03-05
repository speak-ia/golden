# Golden Sécurité – Site vitrine

Site vitrine professionnel pour **Golden Sécurité**, société de sécurité à Bamako (Mali) : gardiennage, sécurité privée, vidéosurveillance, vente de matériels.

## Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)

## Structure du projet

```
golden-securite-site/
├── public/                 # Assets statiques (favicon, images)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout global, SEO, Header/Footer
│   │   ├── page.tsx        # Accueil
│   │   ├── globals.css     # Styles globaux, thème (noir, bleu, doré)
│   │   ├── a-propos/       # Page À propos
│   │   ├── services/       # Page Services
│   │   ├── solutions/      # Page Solutions de sécurité
│   │   └── contact/        # Page Contact + formulaire
│   ├── components/
│   │   ├── Header.tsx      # Menu sticky, responsive
│   │   ├── Footer.tsx      # Liens, contact, copyright
│   │   ├── WhatsAppButton.tsx  # Bouton flottant WhatsApp
│   │   ├── BackToTop.tsx   # Retour en haut
│   │   ├── AnimatedCounter.tsx # Compteurs (clients, agents, etc.)
│   │   ├── FAQ.tsx         # Section FAQ accordéon
│   │   ├── CameraAnimation.tsx  # Animation caméra
│   │   └── ContactForm.tsx # Formulaire (FormSubmit.co)
│   └── lib/
│       └── constants.ts    # Données (SITE, SERVICES, NAV, etc.)
├── netlify.toml            # Config déploiement Netlify
└── package.json
```

## Démarrage en local

```bash
cd golden-securite-site
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Déploiement sur Netlify

### 1. Prérequis

- Compte [Netlify](https://www.netlify.com)
- Projet poussé sur **GitHub**, **GitLab** ou **Bitbucket**

### 2. Déployer

1. Connectez-vous à Netlify → **Add new site** → **Import an existing project**.
2. Choisissez votre dépôt Git.
3. Paramètres de build :
   - **Base directory** : `golden-securite-site` (si le repo est à la racine du dossier GoldenSecurite, sinon laisser vide si tout le repo est le site).
   - **Build command** : `npm run build`
   - **Publish directory** : `.next` (Netlify avec le plugin Next.js gère cela automatiquement si vous utilisez le plugin recommandé.)
4. Utilisez le **plugin Netlify pour Next.js** :
   - Dans **Site configuration** → **Plugins** → **Add plugin** → chercher **@netlify/plugin-nextjs** et l’installer.
   - Ou laisser Netlify détecter Next.js et proposer le plugin.
5. Variables d’environnement (optionnel mais recommandé) :
   - `NEXT_PUBLIC_SITE_URL` = `https://votre-domaine.netlify.app` (ou votre domaine personnalisé)  
     → Utilisé pour la redirection après envoi du formulaire de contact.

### 3. Fichier `netlify.toml`

Le fichier `netlify.toml` à la racine du projet est déjà configuré pour Next.js :

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Si le site Next.js est dans un sous-dossier (ex. `golden-securite-site`) :

```toml
[build]
  base = "golden-securite-site"
  command = "npm run build"
  publish = "golden-securite-site/.next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 4. Formulaire de contact

Le formulaire utilise **FormSubmit.co** et envoie les messages à **goldensecurite@yahoo.com**. À la première soumission, FormSubmit envoie un email de confirmation à cette adresse ; il faut cliquer sur le lien pour activer la réception des messages.

- Redirection après envoi : vers `NEXT_PUBLIC_SITE_URL/contact?success=1` si la variable est définie.

## Images recommandées

Pour un rendu encore plus professionnel, vous pouvez ajouter dans `public/` :

| Fichier        | Usage |
|----------------|--------|
| `hero-bg.jpg`  | Fond de la bannière (gardiennage / caméras / bâtiment sécurisé) |
| `about.jpg`    | Page À propos (équipe ou site sous surveillance) |
| `favicon.ico`  | Favicon (logo ou bouclier) |
| `og-image.jpg` | Image pour partage social (1200×630 px) |

Conseils : privilégier des visuels orientés **sécurité** (agents, caméras, bâtiments, rondes), en cohérence avec les couleurs **noir, bleu foncé, doré**.

## SEO

- Métadonnées (title, description, keywords) sur toutes les pages.
- Mots clés ciblés : *sécurité privée Bamako*, *gardiennage Mali*, *vidéosurveillance Bamako*, *société de sécurité Mali*.
- Balises Open Graph prêtes à être complétées avec une image si besoin.

## Fonctionnalités incluses

- Design responsive (mobile, tablette, desktop)
- Menu sticky avec fond au scroll
- Animations (compteurs, caméra, bouton WhatsApp flottant)
- Formulaire de contact avec redirection succès
- Bouton WhatsApp flottant
- Section FAQ en accordéon
- Bouton retour en haut
- Thème : noir, bleu foncé, doré, blanc

---

© Golden Sécurité – Tous droits réservés
