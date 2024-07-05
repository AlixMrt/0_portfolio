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

  descriptionArray: {
    restaurant: [
      {
        paragraph:
          "La Belle Table, nichée au cœur de Fontainebleau, est un restaurant gastronomique dédié à la cuisine française traditionnelle. En entrant, vous êtes enveloppé par une ambiance élégante et accueillante, typique de l'hospitalité française.",
      },
      {
        paragraph:
          "Le menu est un hommage aux classiques de la gastronomie française, avec des plats élaborés à partir d'ingrédients frais et de saison. Les chefs talentueux de La Belle Table mettent leur savoir-faire au service de créations culinaires raffinées telles que les escargots de Bourgogne, le coq au vin, et les crêpes Suzette.",
      },
      {
        paragraph:
          "Chaque plat est une invitation à un voyage gustatif, offrant une expérience inoubliable pour les amateurs de bonne cuisine. La Belle Table est une adresse incontournable pour les gourmets.",
      },
    ],

    chef: [
      {
        paragraph:
          "Le chef Jean-Pierre Dubois, figure emblématique de la gastronomie française, a rejoint La Bonne Table à Fontainebleau, apportant avec lui une riche expérience et un savoir-faire exceptionnel. Formé dans les plus prestigieuses écoles culinaires et ayant travaillé dans des restaurants étoilés à travers le monde, Jean-Pierre est reconnu pour sa maîtrise des techniques traditionnelles et son innovation culinaire. ",
      },
      {
        paragraph:
          "Sa passion pour la cuisine française s'exprime à travers des plats raffinés et créatifs, alliant tradition et modernité. Depuis son arrivée à La Bonne Table, le restaurant a connu un renouveau, attirant les gourmets en quête d'une expérience gastronomique inoubliable. Jean-Pierre Dubois continue d'inspirer et d'élever la cuisine française à de nouveaux sommets.",
      },
    ],
  },

  dishesArray: {
    Entrées: [
      {
        name: "Velouté de Potiron",
        price: "10",
        description:
          "Rouge vif d’Étampes, oignons caramélisés, bouquet d'épices et crème fraîche",
        isVegetarian: "true",
      },
      {
        name: "Salade Parisienne",
        price: "14",
        description:
          "Laitue, jambon, emmental, croûtons, œufs durs, tomates et vinaigrette",
      },
      {
        name: "Salade Franc-Comtoise",
        price: "14",
        description:
          "Feuille de chêne, pommes de terre, saucisse de Morteau, comté, noix ",
      },

      {
        name: "Tartare de Saumon",
        price: "16",
        description:
          "Saumon mariné, aneth, échalotes, zeste de citron, servis avec ses croûtons croustillants",
      },
    ],
    Plats: [
      {
        name: "Ratatouille Provencale",
        price: "22",
        description:
          "Mijoté de légumes méditerranéens (aubergines, courgettes, poivrons, tomates) aux herbes de Provence",
        isVegetarian: "true",
      },
      {
        name: "Risotto aux Champignons",
        price: "24",
        description:
          "Arborio, cèpes et champignons sauvages, bouillon de légumes, parmesan, persil",
        isVegetarian: "true",
      },
      {
        name: "Truite Meunière",
        price: "24",
        description:
          "Filet doré à la poêle dans du beurre, amandes grillées, persil, citron",
      },
      {
        name: "Moules Marinières",
        price: "26",
        description:
          "Moules fraîches cuites dans un bouillon de vin blanc, ail, échalotes, persil, accompagnées de frites",
      },
      {
        name: "Bœuf Bourguignon ",
        price: "26",
        description:
          "Viande de boeuf mijotée, vin rouge, carottes, oignons, lardons fumés, champignons",
      },
      {
        name: "Confit de Canard",
        price: "26",
        description:
          "Cuisse confite dans sa graisse, servi avec des pommes de terre sautées et une sauce au jus de viande",
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
