export const SITE = {
  name: "GOLDEN SECURITE",
  slogan: "Sécurité des biens et des personnes",
  phone: "+223 74 60 18 98",
  email: "goldensecurite@yahoo.com",
  address: "Djélibougou Extension, Rue 275 Porte 986",
  addressFull: "03 BP 21 Bamako – Mali",
  whatsapp: "22374601898",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124378.529!2d-8.0089!3d12.6392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzIxLjEiTiA4wrAwMCczMi4wIlc!5e0!3m2!1sfr!2sml!4v1",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "gardiennage",
    title: "Gardiennage",
    description: "Surveillance continue de vos locaux par des agents formés et équipés. Présence dissuasive et réactivité en cas d'incident.",
    icon: "shield",
  },
  {
    id: "securite-privee",
    title: "Sécurité privée",
    description: "Protection personnalisée pour particuliers et entreprises. Agents diplômés et habilités pour tous types d'événements.",
    icon: "user-shield",
  },
  {
    id: "biens-personnes",
    title: "Protection des biens et des personnes",
    description: "Sécurisation de vos biens, de vos équipes et de vos visiteurs. Prévention des risques et gestion des accès.",
    icon: "building-shield",
  },
  {
    id: "videosurveillance",
    title: "Vidéosurveillance",
    description: "Installation et maintenance de systèmes de vidéosurveillance HD. Enregistrement, vision à distance et alertes.",
    icon: "camera",
  },
  {
    id: "cameras",
    title: "Installation de caméras",
    description: "Pose de caméras intérieures et extérieures, fixes ou motorisées. Solutions adaptées à chaque budget.",
    icon: "video",
  },
  {
    id: "materiels",
    title: "Vente de matériels de sécurité",
    description: "Alarmes, détecteurs, contrôles d'accès, équipements de protection. Conseil et installation par nos techniciens.",
    icon: "shopping-cart",
  },
] as const;

export const SOLUTIONS = [
  {
    title: "Systèmes de vidéosurveillance",
    description: "Réseaux de caméras IP, NVR/DVR, stockage cloud et logiciels de gestion.",
  },
  {
    title: "Caméras de sécurité",
    description: "Caméras bullet, dôme, PTZ, thermiques et à reconnaissance.",
  },
  {
    title: "Alarmes",
    description: "Alarmes intrusion, incendie et techniques. Centrales et sirènes.",
  },
  {
    title: "Surveillance d'entreprise",
    description: "Rondes virtuelles, contrôle d'accès et gestion des badges.",
  },
  {
    title: "Sécurité d'événements",
    description: "Gardiennage et vidéosurveillance pour séminaires, salons et manifestations.",
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Clients satisfaits" },
  { value: 150, suffix: "+", label: "Agents qualifiés" },
  { value: 10, suffix: "", label: "Années d'expérience" },
  { value: 24, suffix: "/7", label: "Surveillance" },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Quels types de sites pouvez-vous sécuriser ?",
    a: "Nous intervenons sur tous types de sites : entreprises, chantiers, entrepôts, résidences, commerces, événements et particuliers.",
  },
  {
    q: "Proposez-vous des contrats à la journée ou ponctuels ?",
    a: "Oui. Nous proposons des contrats annuels, mensuels, à la journée ou pour des missions ponctuelles (événements, déménagements).",
  },
  {
    q: "Les agents sont-ils formés et habilités ?",
    a: "Tous nos agents sont formés, diplômés et habilités conformément à la réglementation en vigueur en matière de sécurité privée.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire de contact ou appelez-nous. Nous étudions votre besoin et vous adressons un devis personnalisé sous 48 h.",
  },
  {
    q: "Intervenez-vous uniquement à Bamako ?",
    a: "Notre siège est à Bamako. Nous pouvons étudier des interventions dans d'autres villes du Mali selon le projet.",
  },
] as const;
