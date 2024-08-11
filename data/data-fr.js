const data = {
  pageHeading: {
    pageTitle: "Au Vieux Chêne",
    pageSubtitle: "Restaurant Gastronomique Fontainebleau",
    imageLink: "/svg/tree-black.svg",
    imageDescription: "logo d'un vieux chêne, arbre symbole du restaurant",
    ornamentLink: "/svg/ornament-black.svg",
    ornamentDescription: "small ornamental element",
  },

  languagesButtons: {
    language1: "french",
    language2: "english",
  },

  navBar: {
    imageLink: "/svg/tree-gold.svg",
    imageDescription: "logo d'un vieux chêne, arbre symbole du restaurant",
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

  vegetarianWording: "(végétarien) ",
  veganWording: "(végan) ",

  descriptionArray: {
    restaurant: {
      headingText: "Le Restaurant",
      paragraphsArray: [
        "Au Vieux Chêne, niché au cœur de Fontainebleau, est un restaurant gastronomique dédié à la cuisine française traditionnelle. En entrant, vous êtes enveloppé par une ambiance élégante et accueillante, typique de l'hospitalité française.",
        "Le menu est un hommage aux classiques de la gastronomie française, avec des plats élaborés à partir d'ingrédients frais et de saison. Les chefs talentueux du Vieux Chêne mettent leur savoir-faire au service de créations culinaires raffinées telles que les escargots de Bourgogne, le coq au vin, et les crêpes Suzette.",
        "Chaque plat est une invitation à un voyage gustatif, offrant une expérience inoubliable pour les amateurs de bonne cuisine. Au Vieux Chêne est une adresse incontournable pour les gourmets.",
      ],
      imageDescription: "a photo of our restaurant with table and chairs",
      imageLink: "salle-restaurant.png",
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

  dishesCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"], ["Vins"]],

  dishesArray: {
    Entrées: [
      {
        name: "Salade Parisienne",
        price: "12",
        description: "Laitue, jambon, emmental, croûtons, œufs durs & tomates",
      },
      {
        name: "Salade Franc-Comtoise",
        price: "12",
        description:
          "Feuille de chêne, pommes de terre, saucisse de Morteau, comté & noix ",
      },
      {
        name: "Velouté de Potiron",
        price: "14",
        description: "Rouge vif d’Étampes, oignons caramélisés & crème fraîche",
        isVegetarian: "true",
      },

      {
        name: "Tartare de Saumon",
        price: "16",
        description: "Saumon mariné, aneth, échalotes & croûtons croustillants",
      },
    ],
    Plats: [
      {
        name: "Ratatouille Provençale",
        price: "22",
        description: "Mijoté de légumes méditerranéens aux herbes de Provence",
        isVegetarian: "true",
      },
      {
        name: "Risotto aux Champignons",
        price: "24",
        description: "Arborio, cèpes sauvages, bouillon de légumes & parmesan",
        isVegetarian: "true",
      },
      {
        name: "Truite Meunière",
        price: "24",
        description: "Filet doré au beurre, amandes grillées & persil",
      },
      {
        name: "Moules Marinières",
        price: "26",
        description:
          "Moules cuites au vin blanc accompagnées de pommes de terre frites",
      },
      {
        name: "Bœuf Bourguignon ",
        price: "26",
        description:
          "Viande mijotée, vin rouge, carottes, oignons & lardons fumés",
      },
      {
        name: "Confit de Canard",
        price: "26",
        description:
          "Cuisse confite dans sa graisse, servie avec des pommes de terre sautées",
      },
    ],
    Desserts: [
      {
        name: "Trio de Fromages",
        price: "10",
        description:
          "Brie, Bleu des Causses et Chèvre cendré accompagnés de figues & de noix",
      },
      {
        name: "Tiramisu",
        price: "12",
        description:
          "Biscuits imbibés de café, mascarpone vanillé & poudre de cacao",
      },

      {
        name: "Île Flotante",
        price: "12",
        description:
          "Meringue aérienne posée sur crème anglaise & garnie de caramel",
      },

      {
        name: "Tarte Tatin",
        price: "12",
        description:
          "Pommes caramélisées sur pâte feuilletée accompagnées de glace à la vanille",
      },
    ],
    Vins: [
      {
        name: "Cabernet Sauvignon",
        price: "10",
        description: "Rouge | Ardèche | Accompagne Viande & Fromages",
      },
      {
        name: "Pinot Noir",
        price: "18",
        description: "Rouge | Alsace | Accompagne Viande & Fromages",
      },
      {
        name: "Chardonnay",
        price: "20",
        description: "Blanc | Bourgogne | Accompagne Poissons & Fromages",
      },
      {
        name: "Château Chinon",
        price: "24",
        description: "Rouge | Vallée de la Loire | Accompagne Viande",
      },
    ],
  },

  menusCategoriesArray: [
    ["Menu Découverte"],
    ["Menu Epicurien"],
    ["Menu Classique"],
  ],
  menusOtherCategoriesArray: [["Carte des Vins"]],

  menusArray: {
    "Menu Découverte": {
      menuName: "Menu Découverte",
      menuPrice: "60",
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
            isVegetarian: "true",
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
      menuPrice: "75",
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
              "Assortiment de jambon, saucisson et terrine accompagné de cornichons & d'oignons",
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
      menuPrice: "90",
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
            price: "26",
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
            price: "26",
            description:
              "Cuisse confite dans sa graisse, servie avec des pommes de terre sautées",
          },
          {
            name: "Blanquette de Veau",
            price: "26",
            description:
              "Viande de veau mijotée en sauce blanche avec carottes, champignons, oignons et riz parfumé",
          },
          {
            name: "Homard Thermidor",
            price: "26",
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
              " Un vin généreux avec des arômes de cerise, de réglisse et de poivre, bien équilibré avec des tanins souples",
          },
          {
            name: "Bourgogne Pinot Noir 2019, Louis Jadot",
            price: "35",
            description:
              "Ce Pinot Noir offre des notes de fruits rouges, de sous-bois et une texture élégante, typique des grands Bourgognes",
          },

          {
            name: "Cahors Malbec 2019, Château du Cèdre",
            price: "40",
            description:
              "Un Cahors riche avec des arômes de fruits noirs, de violette et de réglisse, offrant une belle profondeur et une structure tannique bien intégrée",
          },
          {
            name: "Châteauneuf-du-Pape Les Bécasses 2018 (Vallée du Rhône)",
            price: "40",
            description:
              "Un vin puissant avec des arômes de fruits rouges mûrs, d'épices et de garrigue, offrant une bonne structure et une belle longueur en bouche",
          },

          {
            name: "Château de Pibarnon 2018 (Bandol)",
            price: "45",
            description:
              "Ce Bandol, principalement à base de Mourvèdre, offre des notes de fruits noirs, de terre et d'épices, avec une belle structure et une finale longue",
          },
        ],

        Blancs: [
          {
            name: "Sancerre 2022, Domaine Vacheron (Loire)",
            price: "35",
            description:
              "Un Sauvignon Blanc rafraîchissant avec des notes de citron, de pêche blanche et une minéralité distinctive, parfait pour les fruits de mer",
          },
          {
            name: "Pessac-Léognan Blanc 2020, Château Carbonnieux (Bordeaux)",
            price: "35",
            description:
              "Un vin blanc complexe à base de Sauvignon Blanc et de Sémillon, avec des arômes de fruits tropicaux, de miel et une acidité vive",
          },
          {
            name: "Rully 1er Cru 2019, Domaine Clos Salomon (Bourgogne)",
            price: "40",
            description:
              "Ce Chardonnay offre des arômes de fruits blancs, de beurre et de toast, avec une belle texture crémeuse et une minéralité rafraîchissante",
          },
          {
            name: "Gewurztraminer 2019, Domaine Weinbach (Alsace)",
            price: "45",
            description:
              "Un Gewurztraminer aromatique avec des notes de rose, de lychee et d'épices, offrant une belle richesse et une douceur équilibrée",
          },
          {
            name: "Chassagne-Montrachet 2020, Domaine Jean-Marc Roulot (Bourgogne)",
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
              "Un Champagne brut élégant avec des notes de pomme verte, d'agrumes et une fine mousse crémeuse",
          },
          {
            name: "Crémant d'Alsace Brut, Domaine Dopff & Irion",
            price: "30",
            description:
              "Un Crémant frais avec des arômes de fleurs blanches et de fruits à chair blanche, offrant une mousse fine et une belle vivacité",
          },
          {
            name: "Champagne Henriot Brut Souverain",
            price: "50",
            description:
              "Un Champagne harmonieux avec des notes d'agrumes, de fruits rouges et de pain grillé, offrant une mousse fine et une finale élégante",
          },
        ],
      },
    },
  },

  imagesArray: [
    {
      imgSrc: "img-1",
      name: `Salade Parisienne`,
      category: "Entrée",
      description: "Saumon fumé & Roquette",
      number: 1,
    },
    {
      imgSrc: "img-2",
      name: `Risotto`,
      category: "Entrée",
      description: "Crevettes & Basilic",
      number: 2,
    },
    {
      imgSrc: "img-3",
      name: `Tagliatelles`,
      category: "Entrée",
      description: "Truffes & Pignons de pin",
      number: 3,
    },
    {
      imgSrc: "img-3",
      name: `Fromages`,
      category: "Entrée",
      description: "Bleu, Gouda & Munster",
      number: 4,
    },
    {
      imgSrc: "img-5",
      name: `Montagne`,
      category: "Entrée",
      description: "Amandes grillées & Vanille",
      number: 5,
    },
    {
      imgSrc: "img-6",
      name: `Tiramisu`,
      category: "Enter",
      description: "Café & Mascarpone Vanillé",
      number: 6,
    },
  ],

  findUs: {
    street: "46 rue de Bourgogne",
    city: "Fontainebleau",
    phoneNumber: "01 46 37 28 36",
    email: "LeVieuxChene@contact.com",
  },

  openingTimeSlotsArray: [
    {
      days: "Mardi au Vendredi",
      hours: "de 11h à 13h & de 18h à 22h",
    },
    {
      days: "Samedi & Dimanche",
      hours: "de 17h à 22h",
    },
  ],
};

export default data;
