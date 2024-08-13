// Display Vegetarian / Vegan tag on dishes
// Choose between Menu & A la carte (different display options)
// Choose Logo
// Choose ornaments (hero section)
// Choose ornament (text-divider)
// Choose fonts
// Choose light vs dark mode
// Choose Languages
// Choose navbar display

const websiteName = "Au Vieux Chêne";
const city = "Fontainebleau";
const street = "46 rue de Bourgogne";
const definition = "Restaurant Gastronomique";
const phoneNumber = "01 46 37 28 36";
const email = "AuVieuxChene@contact.com";
const openingHours = [
  {
    days: "Mardi au Vendredi",
    hours: "de 11h à 13h & de 18h à 22h",
  },
  {
    days: "Samedi & Dimanche",
    hours: "de 17h à 22h",
  },
];
const socialMedia = [
  {
    name: "Instagram",
    src: "/svg/social-media/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "Facebook",
    src: "/svg/social-media/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    src: "/svg/social-media/twitter.svg",
    href: "https://x.com",
  },
];
const defaultHeroLogo = "/logo/logo-black.svg";
const defaultNavBarLogo = "/logo/logo-gold.svg";
const logoDescription =
  "logo d'un vieux chêne, arbre symbole du restaurant Le Vieux Chêne";

const defaultTextDividerSrc = "svg/text-divider/text-divider-black.svg";
const defaultOrnamentSrc = "svg/ornament/ornament-black.svg";

const data = {
  //
  // //
  // // // LANGUAGES
  // //
  //

  //
  // //
  // // // NAVIGATION BAR

  navBar: {
    imageLink: defaultNavBarLogo,
    imageDescription: logoDescription,
    heading: websiteName,

    links: [
      // { name: "Accueil", hrefTarget: "#section1", hrefTargetName: "section1" },
      { name: "Menu", hrefTarget: "#section2", hrefTargetName: "section2" },
      {
        name: "À propos",
        hrefTarget: "#section3",
        hrefTargetName: "section3",
      },
      { name: "Galerie", hrefTarget: "#section4", hrefTargetName: "section4" },
      {
        name: "Nous trouver",
        hrefTarget: "#section5",
        hrefTargetName: "section5",
      },
    ],
  },

  //
  // //
  // // // HERO
  hero: {
    pageTitle: websiteName,
    pageSubtitle: definition + " " + city,
    imageLink: defaultHeroLogo,
    imageDescription: logoDescription,
    ornamentLink: defaultOrnamentSrc,
    ornamentDescription: "small ornamental element",
    languagesButtons: {
      language1: "french",
      language2: "english",
    },
  },

  //
  // //
  // // // A LA CARTE
  carte: {
    dishesCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"], ["Vins"]],

    vegetarianWording: "(végétarien) ",
    veganWording: "(végan) ",

    dishesArray: {
      Entrées: [
        {
          name: "Velouté de Potiron",
          price: 12,
          description:
            "Rouge vif d’Étampes, oignons caramélisés & crème fraîche",
          isVegetarian: "true",
        },
        {
          name: "Salade Franc-Comtoise",
          price: 14,
          description:
            "Feuille de chêne, pommes de terre, saucisse de Morteau, comté & noix",
        },
        {
          name: "Charcuterie Auvergnate",
          price: 14,
          description:
            "Jambon, saucisson et terrine accompagné de cornichons & d'oignons",
        },
        {
          name: "Foie Gras",
          price: 16,
          description: "Pâté de foie gras avec  chutney &  pain de seigle",
        },
      ],
      Plats: [
        {
          name: "Risotto aux Champignons",
          price: 20,
          description:
            "Arborio, cèpes sauvages, bouillon de légumes & parmesan",
          isVegetarian: "true",
        },
        {
          name: "Truite Meunière",
          price: 22,
          description: "Filet doré au beurre, amandes grillées & persil",
        },

        {
          name: "Bœuf Bourguignon",
          price: 22,
          description:
            "Viande mijotée, vin rouge, carottes, oignons & lardons fumés",
        },

        {
          name: "Confit de Canard",
          price: 24,
          description:
            "Cuisse confite dans sa graisse, servie avec des pommes de terre sautées",
        },
      ],
      Desserts: [
        {
          name: "Trio de Fromages",
          price: 12,
          description:
            "Brie, Bleu des Causses & Chèvre cendré accompagnés de figues & de noix",
        },
        {
          name: "Charlotte aux Fraises",
          price: 14,
          description: "Boudoirs, crème mouseuse & décoration de fraises",
        },
        {
          name: "Opéra",
          price: 16,
          description:
            "Biscuit Joconde imbibé de café, de crème, de ganache & glacé au chocolat noir",
        },
        {
          name: "Profitérols",
          price: 16,
          description:
            "Choux garnis de crème Patissière, nappés de chocolat & décorés d'amandes",
        },
      ],
      Vins: [
        {
          name: "Côtes du Rhône Villages 2020, Domaine de la Janasse",
          price: 25,
          description:
            "Arômes de cerise & réglisse,  bien équilibré avec des tanins souples",
        },
        {
          name: "Bourgogne Pinot Noir 2019, Louis Jadot",
          price: 35,
          description:
            "Notes de fruits rouges & texture élégante, typique des grands Bourgognes",
        },

        {
          name: "Rully 1er Cru 2019, Domaine Clos Salomon",
          price: 40,
          description:
            "Chardonnay offrant des arômes de fruits blancs avec une belle texture crémeuse",
        },
        {
          name: "Gewurztraminer 2019, Domaine Weinbach",
          price: 45,
          description:
            "Notes de rose, de lychee et d'épices alliant richesse & douceur",
        },
      ],
    },
  },

  //
  // //
  // // // MENU
  menu: {
    menusCategoriesArray: [
      ["Menu Découverte"],
      ["Menu Epicurien"],
      ["Menu Classique"],
    ],
    menusOtherCategoriesArray: [["Carte des Vins"]],

    menusArray: {
      "Menu Découverte": {
        menuName: "Menu Découverte",
        menuPrice: 35,
        menuDescription: "un menu pour les explorateurs",
        menuCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"]],
        menuCategories: {
          Entrées: [
            {
              name: "Salade Parisienne",
              description:
                "Laitue, jambon, emmental, croûtons, œufs durs & tomates",
            },
            {
              name: "Velouté de Potiron",
              description:
                "Rouge vif d’Étampes, oignons caramélisés & crème fraîche",
              isVegetarian: "true",
            },
            {
              name: "Flamenkuche",
              description:
                "Pâte fine et croquante garnie de crème, d'oignons & de lardons",
            },
          ],
          Plats: [
            {
              name: "Ratatouille Provençale",
              description:
                "Mijoté de légumes méditerranéens aux herbes de Provence",
              isVegan: true,
            },
            {
              name: "Risotto aux Champignons",
              description:
                "Arborio, cèpes sauvages, bouillon de légumes & parmesan",
              isVegetarian: "true",
            },
            {
              name: "Truite Meunière",
              description: "Filet doré au beurre, amandes grillées & persil",
            },
          ],
          Desserts: [
            {
              name: "Trio de Fromages",
              description:
                "Brie, Bleu des Causses & Chèvre cendré accompagnés de figues & de noix",
            },
            {
              name: "Tarte Tatin",
              description:
                "Pommes caramélisées sur pâte feuilletée accompagnées de glace à la vanille",
            },
            {
              name: "Tiramisu",
              description:
                "Biscuits imbibés de café, mascarpone vanillé & poudre de cacao",
            },
          ],
        },
      },
      "Menu Epicurien": {
        menuName: "Menu Epicurien",
        menuPrice: 40,
        menuDescription: "un menu pour les profiteurs",
        menuCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"]],
        menuCategories: {
          Entrées: [
            {
              name: "Salade Franc-Comtoise",
              description:
                "Feuille de chêne, pommes de terre, saucisse de Morteau, comté & noix",
            },
            {
              name: "Charcuterie Auvergnate",
              description:
                "Jambon, saucisson et terrine accompagné de cornichons & d'oignons",
            },
            {
              name: "Tartare de Saumon",
              description:
                "Saumon mariné, aneth, échalotes & croûtons croustillants",
            },
          ],
          Plats: [
            {
              name: "Bœuf Bourguignon",
              description:
                "Viande mijotée, vin rouge, carottes, oignons & lardons fumés",
            },
            {
              name: "Moules Marinières",
              description:
                "Moules cuites au vin blanc accompagnées de pommes de terre frites",
            },

            {
              name: "Côte de Bœuf",
              description:
                "Côte de bœuf maturée accompagnée de légumes rôtis et d'une sauce au poivre",
            },
          ],
          Desserts: [
            {
              name: "Mousse au Chocolat",
              description: "Chocolat Noir du Pérou & éclats de noisettes",
            },
            {
              name: "Charlotte aux Fraises",
              description: "Boudoirs, crème mouseuse & décoration de fraises",
            },
            {
              name: "Île Flotante",
              description:
                "Meringue aérienne posée sur crème anglaise & garnie de caramel",
            },
          ],
        },
      },
      "Menu Classique": {
        menuName: "Menu Classique",
        menuPrice: 50,
        menuDescription: "un menu pour les conservateurs",
        menuCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"]],
        menuCategories: {
          Entrées: [
            {
              name: "Foie Gras",
              description: "Pâté de foie gras avec  chutney &  pain de seigle",
            },
            {
              name: "Soufflés au Brochet",
              description:
                "Gourmandise légère de poisson cuite au four & parfumée aux herbes",
            },
            {
              name: "Tartare de Boeuf",
              description:
                "Fines tranches de bœuf cru assaisonnées d’huile d’olive & de citron",
            },
          ],

          Plats: [
            {
              name: "Confit de Canard",
              description:
                "Cuisse confite dans sa graisse, servie avec des pommes de terre sautées",
            },
            {
              name: "Blanquette de Veau",
              description:
                "Viande de veau mijotée en sauce blanche avec carottes, champignons, oignons et riz parfumé",
            },
            {
              name: "Homard Thermidor",
              description:
                "Viande de homard en sauce crémeuse au vin, moutarde & fromage",
            },
          ],
          Desserts: [
            {
              name: "Millefeuille à la Vanille",
              description:
                "Pâte feuilletée croustillante et légère, alternant avec une onctueuse crème pâtissière à la vanille",
            },
            {
              name: "Opéra",
              description:
                "Biscuit Joconde imbibé de café, de crème, de ganache & glacé au chocolat noir",
            },
            {
              name: "Profitérols",
              description:
                "Choux garnis de crème Patissière, nappés de chocolat & décorés d'amandes",
            },
          ],
        },
      },
      "Carte des Vins": {
        menuName: "Carte des Vins",
        menuDescription: "un menu pour les conservateurs",
        menuCategoriesArray: [["Rouges"], ["Blancs"], ["Pétillants"]],
        menuCategories: {
          Rouges: [
            {
              name: "Côtes du Rhône Villages 2020, Domaine de la Janasse",
              price: "25",
              description:
                "Arômes de cerise & réglisse,  bien équilibré avec des tanins souples",
            },
            {
              name: "Bourgogne Pinot Noir 2019, Louis Jadot",
              price: "35",
              description:
                "Notes de fruits rouges & texture élégante, typique des grands Bourgognes",
            },
            {
              name: "Cahors Malbec 2019, Château du Cèdre",
              price: "40",
              description:
                "Arômes de fruits noirs, de violette et de réglisse, offrant une belle profondeur",
            },
            {
              name: "Châteauneuf-du-Pape Les Bécasses 2018",
              price: "40",
              description:
                "Un vin puissant avec des arômes de fruits rouges mûrs, d'épices et de garrigue, offrant une bonne structure et une belle longueur en bouche",
            },
            {
              name: "Château de Pibarnon 2018",
              price: "45",
              description:
                "Ce Bandol, principalement à base de Mourvèdre, offre des notes de fruits noirs, de terre et d'épices, avec une belle structure et une finale longue",
            },
          ],

          Blancs: [
            {
              name: "Sancerre 2022, Domaine Vacheron",
              price: "35",
              description:
                "Un Sauvignon Blanc rafraîchissant avec des notes de citron, de pêche blanche et une minéralité distinctive, parfait pour les fruits de mer",
            },
            {
              name: "Pessac-Léognan Blanc 2020, Château Carbonnieux",
              price: "35",
              description:
                "Un vin blanc complexe à base de Sauvignon Blanc et de Sémillon, avec des arômes de fruits tropicaux, de miel et une acidité vive",
            },
            {
              name: "Rully 1er Cru 2019, Domaine Clos Salomon",
              price: "40",
              description:
                "Chardonnay offrant des arômes de fruits blancs avec une belle texture crémeuse",
            },
            {
              name: "Gewurztraminer 2019, Domaine Weinbach",
              price: "45",
              description:
                "Notes de rose, de lychee et d'épices alliant richesse & douceur",
            },
            {
              name: "Chassagne-Montrachet 2020, Domaine Jean-Marc Roulot",
              price: "60",
              description:
                "Un Bourgogne blanc élégant avec des arômes de fruits à chair blanche, de noisette et de minéralité, offrant une belle complexité et une finale longue",
            },
          ],

          Pétillants: [
            {
              name: "Champagne Pierre Gimonnet & Fils Cuis 1er Cru Brut",
              price: "40",
              description:
                "Notes de pommes vertes & d'agrumes, fine mousse crémeuse",
            },
            {
              name: "Crémant d'Alsace Brut, Domaine Dopff & Irion",
              price: "30",
              description:
                "Arômes de fleurs blanches & de fruits à chair blanche,  belle vivacité",
            },
            {
              name: "Champagne Henriot Brut Souverain",
              price: "50",
              description:
                "Notes d'agrumes & de fruits rouges offrant une touche finale élégante",
            },
          ],
        },
      },
    },
  },

  //
  // //
  // // // ABOUT
  aboutUs: {
    descriptionArray: {
      restaurant: {
        headingText: "Le Restaurant",
        paragraphsArray: [
          "Au Vieux Chêne, niché au cœur de Fontainebleau, est un restaurant gastronomique dédié à la cuisine française traditionnelle. En entrant, vous êtes enveloppé par une ambiance élégante et accueillante, typique de l'hospitalité française.",
          "Le menu est un hommage aux classiques de la gastronomie française, avec des plats élaborés à partir d'ingrédients frais et de saison. Les chefs talentueux du Vieux Chêne mettent leur savoir-faire au service de créations culinaires raffinées telles que les escargots de Bourgogne, le coq au vin, et les crêpes Suzette.",
          "Chaque plat est une invitation à un voyage gustatif, offrant une expérience inoubliable pour les amateurs de bonne cuisine. Au Vieux Chêne est une adresse incontournable pour les gourmets.",
        ],
        imageDescription: "a photo of our restaurant with table and chairs",
        imageLink: "restaurant.png",
      },

      chef: {
        headingText: "Le Chef",
        paragraphsArray: [
          "Le chef Jean-Pierre Dubois, figure emblématique de la gastronomie française, a rejoint Au Vieux Chêne à Fontainebleau, apportant avec lui une riche expérience et un savoir-faire exceptionnel. Formé dans les plus prestigieuses écoles culinaires et ayant travaillé dans des restaurants étoilés à travers le monde, Jean-Pierre est reconnu pour sa maîtrise des techniques traditionnelles et son innovation culinaire. ",
          "Sa passion pour la cuisine française s'exprime à travers des plats raffinés et créatifs, alliant tradition et modernité. Depuis son arrivée Au Vieux Chêne, le restaurant a connu un renouveau, attirant les gourmets en quête d'une expérience gastronomique inoubliable. Jean-Pierre Dubois continue d'inspirer et d'élever la cuisine française à de nouveaux sommets.",
        ],
        imageDescription:
          "a photo of the chef Jean-Pierre Dubois standing in his kitchen",
        imageLink: "chef.png",
      },
    },
  },

  //
  // //
  // // // Gallery
  gallery: {
    imagesArray: [
      {
        imgSrc: "img-1",
        name: `Salade Parisienne`,
        description: "Saumon fumé & Roquette",
        number: 1,
      },
      {
        imgSrc: "img-2",
        name: `Risotto`,
        description: "Crevettes & Basilic",
        number: 2,
      },
      {
        imgSrc: "img-3",
        name: `Tagliatelles`,
        description: "Truffes & Pignons de pin",
        number: 3,
      },
      {
        imgSrc: "img-4",
        name: `Fromages`,
        description: "Bleu, Gouda & Munster",
        number: 4,
      },
      {
        imgSrc: "img-5",
        name: `Montagne`,
        description: "Amandes grillées & Vanille",
        number: 5,
      },
      {
        imgSrc: "img-6",
        name: `Tiramisu`,
        description: "Café & Mascarpone Vanillé",
        number: 6,
      },
    ],
  },

  //
  // //
  // // // FIND US
  findUs: {
    openingHours: openingHours,

    address: {
      street: street,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
    },
    socialMedia: socialMedia,
  },

  //
  // //
  // // // FOOTER
  footer: {
    mainTitle: websiteName,
    subTitle: `${definition} - ${city}`,
    paragraphText: `${websiteName}. All Rights reserved. 2024`,
    optionalTextDivider: "svg/text-divider/text-divider-white.svg",
  },
};

export default data;

export { defaultTextDividerSrc };
