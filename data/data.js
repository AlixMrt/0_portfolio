const data = {
  openingTimeSlotsArray: [
    {
      days: "Du Mardi au Vendredi",
      hours: "de 11h à 13h puis de 18h à 22h",
    },
    {
      days: "Samedi & Dimanche",
      hours: "de 17h à 22h",
    },
  ],

  languagesButtons: {
    language1: "french",
    language2: "english",
  },

  newSideNavLinks: [
    // { name: "Accueil", hrefTarget: "#section1", hrefTargetName: "section1" },
    { name: "Menu", hrefTarget: "#section2", hrefTargetName: "section2" },
    {
      name: "About us",
      hrefTarget: "#section3",
      hrefTargetName: "section3",
    },
    { name: "Gallerie", hrefTarget: "#section4", hrefTargetName: "section4" },
    { name: "Contact", hrefTarget: "#section5", hrefTargetName: "section5" },
  ],

  pageHeading: {
    pageTitle: "Au Vieux Chêne",
    pageSubtitle: "Restaurant Gastronomique à Fontainebleau",
    imageDescription: "logo d'un vieux chêne, arbre symbole du restaurant",
    imageLink: "/svg/tree.svg",
  },

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

  findUs: {
    street: "46 rue de Bourgogne",
    city: "Fontainebleau",
    phoneNumber: "01 46 37 28 36",
    email: "LeVieuxChene@contact.com",
  },

  dishesCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"], ["Vins"]],

  dishesArray: {
    Entrées: [
      {
        name: "Salade Parisienne",
        description: "Laitue, jambon, emmental, croûtons, œufs durs & tomates",
      },
      {
        name: "Velouté de Potiron",
        description: "Rouge vif d’Étampes, oignons caramélisés & crème fraîche",
        isVegetarian: "true",
      },
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
        name: "Foie Gras",
        description: "Pâté de foie gras avec  chutney &  pain de seigle",
      },
      {
        name: "Soufflés au Brochet",

        description:
          "Gourmandise légère de poisson cuite au four & parfumée aux herbes",
      },
    ],
    Plats: [
      {
        name: "Ratatouille Provençale",
        description: "Mijoté de légumes méditerranéens aux herbes de Provence",
        isVegetarian: "true",
      },
      {
        name: "Risotto aux Champignons",
        description: "Arborio, cèpes sauvages, bouillon de légumes & parmesan",
        isVegetarian: "true",
      },
      {
        name: "Truite Meunière",
        description: "Filet doré au beurre, amandes grillées & persil",
      },

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
      {
        name: "Confit de Canard",
        description:
          "Cuisse confite dans sa graisse, servie avec des pommes de terre sautées",
      },
      {
        name: "Homard Thermidor",
        description:
          "Viande de homard en sauce crémeuse au vin, moutarde & fromage",
      },
    ],
    Desserts: [
      {
        name: "Trio de Fromages",
        price: "10",
        description:
          "Trio de fromages français : Brie, Bleu d'Auvergne, Chèvre cendré, accompagné de figues et de noix",
      },
      {
        name: "Tiramisu",
        price: "12",
        description:
          "Biscuits imbibés de café, mascarpone vanillé, poudre de cacao",
      },

      {
        name: "Île Flotante",
        price: "12",
        description:
          "Meringue aérienne posée sur crème anglaise veloutée, garnie de caramel doré",
      },

      {
        name: "Tarte Tatin",
        price: "12",
        description:
          "Pommes caramélisées, pâte feuilletée accompagnée de crème ou de glace vanille",
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

  imagesArray: [
    {
      imgSrc: "img-1",
      name: `Tiramisu`,
      category: "Enter",
      description: "Café & Mascarpone Vanillé",
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
      name: `Fromages`,
      category: "Entrée",
      description: "Bleu, Gouda & Munster",
      number: 3,
    },
    {
      imgSrc: "img-4",
      name: `Salade`,
      category: "Entrée",
      description: "Saumon fumé & Roquette",
      number: 4,
    },
    {
      imgSrc: "img-5",
      name: `Tagliatelles`,
      category: "Entrée",
      description: "Truffes & Pignons de pin",
      number: 5,
    },
    {
      imgSrc: "img-6",
      name: `Montagne`,
      category: "Entrée",
      description: "Amandes grillées & Vanille",
      number: 6,
    },
  ],
};

export default data;
