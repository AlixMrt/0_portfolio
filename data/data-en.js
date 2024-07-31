const data = {
  languagesButtons: {
    language1: "french",
    language2: "english",
  },

  sideNavLinks: [
    // { name: "Accueil", hrefTarget: "#section1", hrefTargetName: "section1" },
    { name: "Menu", hrefTarget: "#section2", hrefTargetName: "section2" },
    {
      name: "About us",
      hrefTarget: "#section3",
      hrefTargetName: "section3",
    },
    { name: "Gallery", hrefTarget: "#section4", hrefTargetName: "section4" },
    { name: "Find us", hrefTarget: "#section5", hrefTargetName: "section5" },
  ],

  vegetarianWording: "(vegetarian) ",
  veganWording: "(vegan) ",

  pageHeading: {
    pageTitle: "Au Vieux Chêne",
    pageSubtitle: "Gourmet restaurant in Fontainebleau",
    imageDescription: "a logo of an old oak symbol of our restaurant",
    imageLink: "/svg/tree.svg",
  },

  descriptionArray: {
    restaurant: {
      headingText: "Le Restaurant",
      paragraphsArray: [
        "At Au Vieux Chêne, nestled in the heart of Fontainebleau, is a gourmet restaurant dedicated to traditional French cuisine. Upon entering, you are enveloped by an elegant and welcoming atmosphere, typical of French hospitality.",
        "The menu is a tribute to the classics of French gastronomy, with dishes crafted from fresh, seasonal ingredients. The talented chefs at Le Vieux Chêne use their expertise to create refined culinary delights such as escargots de Bourgogne, coq au vin, and crêpes Suzette.",
        "Each dish is an invitation to a culinary journey, offering an unforgettable experience for food lovers. Au Vieux Chêne is a must-visit for gourmets.",
      ],
      imageDescription: "a photo of our restaurant with table and chairs",
      imageLink: "salle-restaurant.png",
    },

    chef: {
      headingText: "Le Chef",
      paragraphsArray: [
        "Chef Jean-Pierre Dubois, an iconic figure of French gastronomy, has joined Au Vieux Chêne in Fontainebleau, bringing with him rich experience and exceptional expertise. Trained at the most prestigious culinary schools and having worked in Michelin-starred restaurants around the world, Jean-Pierre is renowned for his mastery of traditional techniques and culinary innovation.",
        "His passion for French cuisine is expressed through refined and creative dishes that blend tradition and modernity. Since his arrival at Au Vieux Chêne, the restaurant has experienced a revival, attracting gourmets in search of an unforgettable gastronomic experience. Jean-Pierre Dubois continues to inspire and elevate French cuisine to new heights.",
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

  openingTimeSlotsArray: [
    {
      days: "Tuesday to Friday",
      hours: "from 11 AM to 2 PM & from 6 PM to 10 PM",
    },
    {
      days: "Saturday & Sunday",
      hours: "from 5 PM to 10 PM",
    },
  ],

  dishesCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"], ["Vins"]],

  dishesArray: {
    Entrées: [
      {
        name: "Pumpkin Velouté",
        price: "10",
        description:
          "Rouge vif d'Étampes, caramelized onions, bouquet of spices, and fresh cream",
        isVegetarian: "true",
        // isVegan: "true",
      },
      {
        name: "Parisian Salad",
        price: "14",
        description:
          "Lettuce, ham, Emmental cheese, croutons, hard-boiled eggs, tomatoes",
      },
      {
        name: "Franc-Comtoise Salad",
        price: "14",
        description:
          "Oak leaf lettuce, potatoes, Morteau sausage, Comté cheese, walnuts",
      },

      {
        name: "Salmon Tartare",
        price: "16",
        description:
          "Marinated salmon with dill, shallots, lemon zest, served with crispy croutons",
      },
    ],
    Plats: [
      {
        name: "Provençal Ratatouille",
        price: "22",
        description:
          "Slow-cooked Mediterranean vegetables with provencal herbs",
        isVegetarian: "true",
      },
      {
        name: "Mushroom Risotto",
        price: "24",
        description:
          "Arborio rice with porcini mushrooms, vegetable broth, Parmesan, parsley",
        isVegetarian: "true",
      },
      {
        name: "Trout Meunière",
        price: "24",
        description:
          "Pan-fried golden fillet in butter with grilled almonds, parsley & lemon",
      },
      {
        name: "Mussels Marinière",
        price: "26",
        description:
          "Fresh mussels cooked in a white wine broth with garlic, shallots, parsley, served with fries",
      },
      {
        name: "Beef Bourguignon",
        price: "26",
        description:
          "Slow-cooked beef, red wine, carrots, onions, smoked bacon lardons & mushrooms",
      },
      {
        name: "Duck Confit",
        price: "26",
        description:
          "Confit duck leg, served with sautéed potatoes and a meat juice sauce",
      },
    ],
    Desserts: [
      {
        name: "Trio of Cheeses",
        price: "10",
        description:
          "Trio of French cheeses: Brie, Bleu d'Auvergne, Ash-covered Goat Cheese, accompanied by figs and walnuts",
      },
      {
        name: "Tiramisu",
        price: "12",
        description: "Coffee-soaked biscuits, vanilla mascarpone, cocoa powder",
      },

      {
        name: "Île Flotante",
        price: "12",
        description:
          "Light meringue on velvety English cream, topped with golden caramel",
      },

      {
        name: "Tarte Tatin",
        price: "12",
        description:
          "Caramelized apples, puff pastry served with vanilla cream or ice cream",
      },
    ],
    Vins: [
      {
        name: "Cabernet Sauvignon",
        price: "10",
        description: "Red | Ardèche |  Meat & Cheese",
      },
      {
        name: "Pinot Noir",
        price: "18",
        description: "Red | Alsace | Meat & Cheese",
      },
      {
        name: "Chardonnay",
        price: "20",
        description: "Blanc | Bourgogne | Fish & Cheese",
      },
      {
        name: "Château Chinon",
        price: "24",
        description: "Red | Vallée de la Loire | Meat",
      },
    ],
  },

  menusCategoriesArray: [
    ["Menu Découverte"],
    ["Menu Epicurien"],
    ["Menu Classique"],
  ],
  menusOtherCategoriesArray: [["Wine List"]],

  menusArray: {
    "Menu Découverte": {
      menuName: "Menu Découverte",
      menuPrice: "60",
      menuDescription: "un menu pour les explorateurs",
      menuCategoriesArray: [["Entrées"], ["Plats"], ["Desserts"]],
      menuCategories: {
        Entrées: [
          {
            name: "Parisian Salad",
            description:
              "Lettuce, ham, Emmental cheese, croutons, hard-boiled eggs, tomatoes",
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
              "Slow-cooked Mediterranean vegetables with provencal herbs",
            isVegetarian: "true",
          },
          {
            name: "Risotto aux Champignons",
            description:
              "Arborio rice with porcini mushrooms, vegetable broth, Parmesan, parsley",

            isVegetarian: "true",
          },
          {
            name: "Truite Meunière",
            description:
              "Pan-fried golden fillet in butter with grilled almonds, parsley & lemon",
          },
        ],

        Desserts: [
          {
            name: "Trio de Fromages",
            description:
              "Trio of French cheeses: Brie, Bleu d'Auvergne, Ash-covered Goat Cheese, accompanied by figs and walnuts",
          },

          {
            name: "Tarte Tatin",
            description:
              "Caramelized apples, puff pastry served with vanilla cream or ice cream",
          },

          {
            name: "Tiramisu",
            description:
              "Coffee-soaked biscuits, vanilla mascarpone, cocoa powder",
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
            name: "Franc-Comtoise Salad",
            description:
              "Oak leaf lettuce, potatoes, Morteau sausage, Comté cheese, walnuts",
          },
          {
            name: "Charcuterie Auvergnate",
            description:
              "Assortiment de jambon, saucisson et terrine accompagné de cornichons & d'oignons",
          },
          {
            name: "Tartare de Saumon",
            description:
              "Marinated salmon with dill, shallots, lemon zest, served with crispy croutons",
          },
        ],

        Plats: [
          {
            name: "Bœuf Bourguignon",
            description:
              "Slow-cooked beef, red wine, carrots, onions, smoked bacon lardons & mushrooms",
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
              "Light meringue on velvety English cream, topped with golden caramel",
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
              "Veal simmered in a creamy white sauce with carrots, mushrooms, and onions, served with aromatic rice.",
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
              "Crispy puff pastry layered with smooth vanilla pastry cream, topped with a delicate glaze.",
          },
          {
            name: "Opéra",
            description:
              "Joconde sponge soaked in coffee, layered with cream, ganache, and covered with dark chocolate glaze.",
          },
          {
            name: "Profitérols",
            description:
              "Choux filled with pastry cream, topped with chocolate, and decorated with almonds.",
          },
        ],
      },
    },
    "Wine List": {
      menuName: "Wine List",
      menuDescription: "un menu pour les conservateurs",
      menuCategoriesArray: [["Red"], ["White"], ["Sparkling"]],
      menuCategories: {
        Red: [
          {
            name: "Côtes du Rhône Villages 2020, Domaine de la Janasse",
            price: "25",
            description:
              "A generous wine with aromas of cherry, licorice, and pepper, well-balanced with soft tannins.",
          },
          {
            name: "Bourgogne Pinot Noir 2019, Louis Jadot",
            price: "35",
            description:
              "This Pinot Noir offers notes of red fruits, undergrowth, and an elegant texture, typical of great Burgundies.",
          },

          {
            name: "Cahors Malbec 2019, Château du Cèdre (Sud-Ouest)",
            price: "40",
            description:
              "A rich Cahors with aromas of black fruits, violet, and licorice, offering great depth and a well-integrated tannic structure.",
          },
          {
            name: "Châteauneuf-du-Pape Les Bécasses 2018 (Vallée du Rhône)",
            price: "40",
            description:
              "A powerful wine with aromas of ripe red fruits, spices, and garrigue, offering good structure and a beautiful length on the palate.",
          },

          {
            name: "Château de Pibarnon 2018 (Bandol)",
            price: "45",
            description:
              "This Bandol, primarily made from Mourvèdre, offers notes of dark fruits, earth, and spices, with a beautiful structure and a long finish.",
          },
        ],

        White: [
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
              "A complex white wine made from Sauvignon Blanc and Sémillon, with aromas of tropical fruits, honey, and a vibrant acidity.",
          },
          {
            name: "Rully 1er Cru 2019, Domaine Clos Salomon (Bourgogne)",
            price: "40",
            description:
              "This Chardonnay offers aromas of white fruits, butter, and toast, with a lovely creamy texture and refreshing minerality.",
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
              "An elegant Bourgogne blanc with aromas of white-fleshed fruits, hazelnuts, and minerality, offering beautiful complexity and a long finish.",
          },
        ],

        Sparkling: [
          {
            name: "Champagne Pierre Gimonnet & Fils Cuis 1er Cru Brut",
            price: "40",
            description:
              "An elegant brut Champagne with notes of green apple, citrus, and a fine, creamy mousse.",
          },
          {
            name: "Crémant d'Alsace Brut, Domaine Dopff & Irion",
            price: "30",
            description:
              "A fresh Crémant with aromas of white flowers and white-fleshed fruits, offering a fine mousse and a vibrant liveliness.",
          },
          {
            name: "Champagne Henriot Brut Souverain",
            price: "50",
            description:
              "A harmonious Champagne with notes of citrus, red fruits, and toasted bread, offering a fine mousse and an elegant finish.",
          },
        ],
      },
    },
  },

  imagesArray: [
    {
      imgSrc: "img-1",
      name: `Salad`,
      category: "Enter",
      description: "Smoked salmon & arugula",
      number: 1,
    },
    {
      imgSrc: "img-2",
      name: `Risotto`,
      category: "Entrée",
      description: "Truffles & Pine nuts",
      number: 2,
    },
    {
      imgSrc: "img-3",
      name: `Tagliatelles`,
      category: "Entrée",
      description: "Shrimps & Basil",
      number: 3,
    },
    {
      imgSrc: "img-4",
      name: `Cheeses`,
      category: "Entrée",
      description: "Blue cheese, Gouda & Munster",
      number: 4,
    },
    {
      imgSrc: "img-5",
      name: `Montagne`,
      category: "Entrée",
      description: "Grilled almonds & Vanilla",
      number: 5,
    },
    {
      imgSrc: "img-6",
      name: `Tiramisu`,
      category: "Entrée",
      description: "Coffee & Vanilla Mascarpone",
      number: 6,
    },
  ],
};

export default data;
