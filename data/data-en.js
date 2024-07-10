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
      },
      {
        name: "Parisian Salad",
        price: "14",
        description:
          "Lettuce, ham, Emmental cheese, croutons, hard-boiled eggs, tomatoes, and vinaigrette",
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
          "Slow-cooked Mediterranean vegetables (eggplants, zucchini, bell peppers, tomatoes) with Provencal herbs",
        isVegetarian: "true",
      },
      {
        name: "Mushroom Risotto",
        price: "24",
        description:
          "Arborio rice with porcini mushrooms and wild mushrooms, vegetable broth, Parmesan, parsley",
        isVegetarian: "true",
      },
      {
        name: "Trout Meunière",
        price: "24",
        description:
          "Pan-fried golden fillet in butter with grilled almonds, parsley, lemon",
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
          "Slow-cooked beef, red wine, carrots, onions, smoked bacon lardons, mushrooms",
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

  imagesArray: [
    {
      imgSrc: "img-1",
      name: `Tiramisu`,
      category: "Enter",
      description: "Coffee & Vanilla Mascarpone",
      number: 1,
    },
    {
      imgSrc: "img-2",
      name: `Risotto`,
      category: "Entrée",
      description: "Shrimps & Basil",
      number: 2,
    },
    {
      imgSrc: "img-3",
      name: `Fromages`,
      category: "Entrée",
      description: "Blue cheese, Gouda & Munster",
      number: 3,
    },
    {
      imgSrc: "img-4",
      name: `Salade`,
      category: "Entrée",
      description: "Smoked salmon & arugula",
      number: 4,
    },
    {
      imgSrc: "img-5",
      name: `Tagliatelles`,
      category: "Entrée",
      description: "Truffles & Pine nuts",
      number: 5,
    },
    {
      imgSrc: "img-6",
      name: `Montagne`,
      category: "Entrée",
      description: "Grilled almonds & Vanilla",
      number: 6,
    },
  ],
};

export default data;
