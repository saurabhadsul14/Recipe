import React, { useState } from "react";
import CuisineList from "./components/CuisineList";
import CuisineDetail from "./components/CuisineDetail";
import "./App.css";

const App = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const cuisines = [
    {
      name: "Indian",
      image: "/images/indian.jpeg",
      recipes: [
        {
          name: "Chicken Curry",
          description: "A spicy and flavorful Indian dish",
          image: "/images/chicken-curry.jpeg",
          ingredients: [
            "Chicken",
            "Curry powder",
            "Coconut milk",
            "Onion",
            "Garlic",
            "Ginger",
            "Tomato",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook the onion, garlic, and ginger. Add the chicken and cook until browned. Add the curry powder and tomato, then the coconut milk, and let it simmer until the chicken is cooked through.",
        },
        {
          name: "Vegetable Stir Fry",
          description: "A quick and healthy dish",
          image: "/images/vegetable-stir-fry.jpeg",
          ingredients: [
            "Broccoli",
            "Bell peppers",
            "Carrots",
            "Soy sauce",
            "Garlic",
            "Ginger",
            "Olive oil",
          ],
          instructions:
            "Stir fry the vegetables with garlic and ginger in olive oil. Add soy sauce and cook until vegetables are tender.",
        },
        {
          name: "Butter Chicken",
          description: "A creamy and rich chicken dish",
          image: "/images/butter-chicken.jpeg",
          ingredients: [
            "Chicken",
            "Butter",
            "Tomato puree",
            "Cream",
            "Onion",
            "Garlic",
            "Ginger",
            "Spices (garam masala, turmeric, cumin)",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook the onion, garlic, and ginger in butter. Add the chicken and spices, and cook until browned. Add the tomato puree and cream, and let it simmer until the chicken is cooked through.",
        },
        {
          name: "Paneer Tikka",
          description: "Grilled paneer cubes marinated in spices",
          image: "/images/paneer-tikka.jpeg",
          ingredients: [
            "Paneer",
            "Yogurt",
            "Spices (cumin, coriander, turmeric, chili powder)",
            "Lemon juice",
            "Garlic",
            "Ginger",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Marinate the paneer cubes in yogurt and spices mixture. Skewer the paneer and grill until golden brown.",
        },
        {
          name: "Chole (Chickpea Curry)",
          description: "A flavorful chickpea curry",
          image: "/images/chole.jpeg",
          ingredients: [
            "Chickpeas",
            "Tomato",
            "Onion",
            "Garlic",
            "Ginger",
            "Spices (coriander, cumin, turmeric, garam masala)",
            "Salt",
            "Pepper",
            "Cilantro",
          ],
          instructions:
            "Cook the onion, garlic, and ginger. Add the tomatoes and spices, and cook until the tomatoes are soft. Add the chickpeas and simmer until the flavors meld together. Garnish with cilantro.",
        },
        {
          name: "Biryani",
          description:
            "A fragrant rice dish with spices and meat or vegetables",
          image: "/images/biryani.jpeg",
          ingredients: [
            "Basmati rice",
            "Chicken or vegetables",
            "Yogurt",
            "Onion",
            "Garlic",
            "Ginger",
            "Spices (biryani masala, turmeric, cumin)",
            "Saffron",
            "Cilantro",
            "Mint",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Marinate the chicken or vegetables in yogurt and spices. Cook the rice with saffron. Layer the marinated chicken or vegetables and rice, and cook on low heat until everything is cooked through. Garnish with cilantro and mint.",
        },
        {
          name: "Palak Paneer",
          description: "Paneer cubes in a creamy spinach sauce",
          image: "/images/palak-paneer.jpeg",
          ingredients: [
            "Spinach",
            "Paneer",
            "Onion",
            "Garlic",
            "Ginger",
            "Tomato",
            "Cream",
            "Spices (cumin, coriander, garam masala)",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook the spinach until wilted and blend into a puree. Cook the onion, garlic, and ginger, then add the tomatoes and spices. Add the spinach puree and paneer cubes, and simmer. Stir in the cream before serving.",
        },
        {
          name: "Aloo Gobi",
          description: "Potato and cauliflower curry",
          image: "/images/aloo-gobi.jpeg",
          ingredients: [
            "Potatoes",
            "Cauliflower",
            "Onion",
            "Garlic",
            "Ginger",
            "Tomato",
            "Spices (cumin, coriander, turmeric, chili powder)",
            "Cilantro",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook the onion, garlic, and ginger. Add the tomatoes and spices, and cook until the tomatoes are soft. Add the potatoes and cauliflower, and cook until tender. Garnish with cilantro.",
        },
        {
          name: "Samosa",
          description: "Fried or baked pastry with a savory filling",
          image: "/images/samosa.jpeg",
          ingredients: [
            "Potatoes",
            "Peas",
            "Spices (cumin, coriander, garam masala)",
            "Flour",
            "Oil",
            "Salt",
            "Pepper",
            "Cilantro",
          ],
          instructions:
            "Make a dough with flour and water. Cook the potatoes and peas with spices. Fill the dough with the potato mixture, shape into triangles, and fry or bake until golden brown.",
        },
        {
          name: "Gulab Jamun",
          description: "Deep-fried dough balls soaked in sweet syrup",
          image: "/images/gulab-jamun.jpeg",
          ingredients: [
            "Milk powder",
            "Flour",
            "Baking soda",
            "Milk",
            "Sugar",
            "Cardamom",
            "Rose water",
            "Ghee or oil for frying",
          ],
          instructions:
            "Make a dough with milk powder, flour, baking soda, and milk. Shape into small balls and fry until golden brown. Soak the fried balls in a sugar syrup flavored with cardamom and rose water.",
        },
      ],
    },
    {
      name: "Italian",
      image: "/images/italian.jpeg",
      recipes: [
        {
          name: "Spaghetti Carbonara",
          description: "A classic Italian pasta dish with creamy sauce",
          image: "/images/spaghetti-carbonara.jpeg",
          ingredients: [
            "Spaghetti",
            "Guanciale or pancetta",
            "Egg yolks",
            "Parmesan cheese",
            "Black pepper",
            "Salt",
          ],
          instructions:
            "Cook the pasta until al dente. In a separate pan, cook the guanciale or pancetta until crispy. Whisk together egg yolks, Parmesan cheese, and black pepper. Toss the cooked pasta with the egg mixture and guanciale until coated. Serve immediately.",
        },
        {
          name: "Margherita Pizza",
          description:
            "A classic pizza topped with tomato sauce, mozzarella cheese, and basil",
          image: "/images/margherita-pizza.jpeg",
          ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
          ],
          instructions:
            "Stretch out the pizza dough and spread tomato sauce on top. Tear the mozzarella cheese into pieces and distribute evenly on the pizza. Bake in a preheated oven until the crust is golden and the cheese is melted. Top with fresh basil leaves, drizzle with olive oil, and sprinkle with salt.",
        },
        {
          name: "Risotto alla Milanese",
          description: "Creamy saffron-infused risotto from Milan",
          image: "/images/risotto-alla-milanese.jpeg",
          ingredients: [
            "Arborio rice",
            "White wine",
            "Onion",
            "Chicken or vegetable broth",
            "Saffron threads",
            "Butter",
            "Parmesan cheese",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Toast the rice with chopped onion until translucent. Add white wine and saffron threads and cook until absorbed. Gradually add hot broth, stirring constantly until the rice is creamy and tender. Stir in butter and Parmesan cheese, season with salt and pepper, and serve.",
        },
        {
          name: "Lasagna",
          description: "A hearty layered pasta dish with meat sauce and cheese",
          image: "/images/lasagna.jpeg",
          ingredients: [
            "Lasagna noodles",
            "Ground beef",
            "Tomato sauce",
            "Ricotta cheese",
            "Mozzarella cheese",
            "Parmesan cheese",
            "Egg",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook noodles and ground beef. Layer noodles with sauce, cheese mixture, and meat in a baking dish. Bake at 375°F for 45 minutes.",
        },
        {
          name: "Bruschetta",
          description:
            "Toasted bread topped with tomatoes, basil, and olive oil",
          image: "/images/bruschetta.jpeg",
          ingredients: [
            "Baguette or Italian bread",
            "Tomatoes",
            "Garlic",
            "Fresh basil leaves",
            "Extra virgin olive oil",
            "Balsamic vinegar",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Slice the bread and toast until golden brown. Rub each slice with garlic and top with diced tomatoes and chopped basil. Drizzle with olive oil and balsamic vinegar, and season with salt and pepper.",
        },
        {
          name: "Tiramisu",
          description:
            "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
          image: "/images/tiramisu.jpeg",
          ingredients: [
            "Ladyfingers",
            "Espresso coffee",
            "Mascarpone cheese",
            "Eggs",
            "Sugar",
            "Cocoa powder",
          ],
          instructions:
            "Dip ladyfingers in espresso and layer in a dish. Mix together mascarpone cheese, egg yolks, and sugar. Spread the mascarpone mixture over the ladyfingers. Repeat layers and refrigerate. Dust with cocoa powder before serving.",
        },
        {
          name: "Caprese Salad",
          description:
            "Simple salad made with fresh tomatoes, mozzarella cheese, basil, and olive oil",
          image: "/images/caprese-salad.jpeg",
          ingredients: [
            "Tomatoes",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Extra virgin olive oil",
            "Balsamic vinegar",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Slice tomatoes and mozzarella cheese. Arrange on a plate with fresh basil leaves. Drizzle with olive oil and balsamic vinegar. Season with salt and pepper.",
        },
        {
          name: "Pesto Pasta",
          description:
            "Pasta tossed in a vibrant sauce made with basil, garlic, pine nuts, and Parmesan cheese",
          image: "/images/pesto-pasta.jpeg",
          ingredients: [
            "Pasta (such as spaghetti or penne)",
            "Fresh basil leaves",
            "Garlic",
            "Pine nuts",
            "Parmesan cheese",
            "Extra virgin olive oil",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook pasta until al dente. Blend basil, garlic, pine nuts, Parmesan cheese, and olive oil until smooth. Toss pasta with pesto sauce and season with salt and pepper.",
        },
        {
          name: "Minestrone Soup",
          description: "Hearty vegetable soup with pasta or rice",
          image: "/images/minestrone-soup.jpeg",
          ingredients: [
            "Vegetable broth",
            "Tomatoes",
            "Carrots",
            "Celery",
            "Onion",
            "Zucchini",
            "Green beans",
            "Cabbage",
            "Pasta or rice",
            "Basil",
            "Parmesan cheese",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Cook onion, carrots, celery, and garlic until softened. Add tomatoes, zucchini, green beans, cabbage, and vegetable broth. Simmer until vegetables are tender. Add pasta or rice and cook until done. Serve with fresh basil and Parmesan cheese.",
        },
        {
          name: "Calzone",
          description: "Folded pizza filled with cheese and other toppings",
          image: "/images/calzone.jpeg",
          ingredients: [
            "Pizza dough",
            "Mozzarella cheese",
            "Tomato sauce",
            "Pepperoni or other toppings",
            "Olive oil",
            "Salt",
            "Pepper",
          ],
          instructions:
            "Stretch out the pizza dough into a circle. Spread tomato sauce on half of the dough, leaving a border. Add toppings and mozzarella cheese. Fold the other half of the dough over the filling and crimp the edges to seal. Brush with olive oil, sprinkle with salt and pepper, and bake until golden brown.",
        },
      ],
    },
    {
      name: "Chinese",
      image: "/images/chinese.jpeg",
      recipes: [
        {
          name: "Kung Pao Chicken",
          description: "Spicy stir-fried chicken with peanuts and vegetables",
          image: "/images/kung-pao-chicken.jpeg",
          ingredients: [
            "Chicken breast",
            "Soy sauce",
            "Rice vinegar",
            "Sesame oil",
            "Cornstarch",
            "Garlic",
            "Ginger",
            "Dried red chilies",
            "Peanuts",
            "Green onions",
          ],
          instructions:
            "Marinate chicken with soy sauce, rice vinegar, sesame oil, and cornstarch. Stir-fry chicken with garlic, ginger, and dried red chilies. Add peanuts and green onions, and cook until chicken is done.",
        },
        {
          name: "Sweet and Sour Pork",
          description: "Crispy pork chunks coated in a sweet and tangy sauce",
          image: "/images/sweet-and-sour-pork.jpeg",
          ingredients: [
            "Pork tenderloin",
            "Cornstarch",
            "Egg",
            "Soy sauce",
            "Rice vinegar",
            "Ketchup",
            "Sugar",
            "Pineapple",
            "Bell peppers",
            "Onion",
          ],
          instructions:
            "Coat pork chunks in a mixture of cornstarch, egg, and soy sauce, and fry until crispy. Make a sauce with rice vinegar, ketchup, and sugar. Stir-fry bell peppers, onion, and pineapple, then add sauce and cooked pork.",
        },
        {
          name: "Mapo Tofu",
          description: "Soft tofu and ground pork cooked in a spicy sauce",
          image: "/images/mapo-tofu.jpeg",
          ingredients: [
            "Soft tofu",
            "Ground pork",
            "Soy sauce",
            "Sichuan peppercorns",
            "Chili bean paste",
            "Garlic",
            "Ginger",
            "Green onions",
            "Cornstarch",
          ],
          instructions:
            "Cook ground pork with garlic, ginger, and Sichuan peppercorns. Add chili bean paste and soy sauce, then stir in tofu cubes. Thicken with cornstarch slurry and garnish with green onions.",
        },
        {
          name: "Dumplings",
          description:
            "Steamed or pan-fried dumplings filled with meat and vegetables",
          image: "/images/dumplings.jpeg",
          ingredients: [
            "Ground pork",
            "Shrimp",
            "Cabbage",
            "Green onions",
            "Ginger",
            "Soy sauce",
            "Sesame oil",
            "Wonton wrappers",
          ],
          instructions:
            "Mix ground pork, shrimp, cabbage, green onions, ginger, soy sauce, and sesame oil for the filling. Wrap in wonton wrappers and steam or pan-fry until cooked through.",
        },
        {
          name: "Chow Mein",
          description: "Stir-fried noodles with vegetables and meat",
          image: "/images/chow-mein.jpeg",
          ingredients: [
            "Egg noodles",
            "Chicken or beef",
            "Cabbage",
            "Carrots",
            "Bell peppers",
            "Onion",
            "Garlic",
            "Ginger",
            "Soy sauce",
            "Sesame oil",
          ],
          instructions:
            "Cook noodles according to package instructions. Stir-fry chicken or beef with garlic, ginger, and vegetables. Add cooked noodles, soy sauce, and sesame oil, and toss until combined.",
        },
        {
          name: "Egg Drop Soup",
          description: "Simple soup made with beaten eggs and chicken broth",
          image: "/images/egg-drop-soup.jpeg",
          ingredients: [
            "Chicken broth",
            "Eggs",
            "Green onions",
            "Soy sauce",
            "Cornstarch",
            "Salt",
          ],
          instructions:
            "Bring chicken broth to a simmer. Beat eggs and slowly pour into the broth, stirring gently. Thicken with a cornstarch slurry, add soy sauce and salt, and garnish with green onions.",
        },
        {
          name: "General Tso's Chicken",
          description: "Crispy chicken pieces in a sweet and spicy sauce",
          image: "/images/general-tsos-chicken.jpeg",
          ingredients: [
            "Chicken thighs",
            "Cornstarch",
            "Soy sauce",
            "Rice vinegar",
            "Sugar",
            "Garlic",
            "Ginger",
            "Dried red chilies",
            "Green onions",
          ],
          instructions:
            "Coat chicken pieces in cornstarch and fry until crispy. Make a sauce with soy sauce, rice vinegar, sugar, garlic, ginger, and dried red chilies. Toss cooked chicken in the sauce and garnish with green onions.",
        },
        {
          name: "Spring Rolls",
          description:
            "Crispy fried rolls filled with vegetables and sometimes meat",
          image: "/images/spring-rolls.jpeg",
          ingredients: [
            "Spring roll wrappers",
            "Cabbage",
            "Carrots",
            "Bean sprouts",
            "Shiitake mushrooms",
            "Ground pork",
            "Garlic",
            "Ginger",
            "Soy sauce",
            "Sesame oil",
          ],
          instructions:
            "Stir-fry vegetables, mushrooms, and ground pork with garlic, ginger, soy sauce, and sesame oil. Fill spring roll wrappers with the mixture, roll tightly, and fry until golden brown.",
        },
        {
          name: "Orange Chicken",
          description:
            "Crispy chicken pieces coated in a sweet and tangy orange sauce",
          image: "/images/orange-chicken.jpeg",
          ingredients: [
            "Chicken breast",
            "Cornstarch",
            "Egg",
            "Soy sauce",
            "Orange juice",
            "Sugar",
            "Garlic",
            "Ginger",
            "Green onions",
          ],
          instructions:
            "Coat chicken pieces in a mixture of cornstarch, egg, and soy sauce, and fry until crispy. Make a sauce with orange juice, sugar, garlic, and ginger. Toss cooked chicken in the sauce and garnish with green onions.",
        },
        {
          name: "Beef and Broccoli",
          description: "Stir-fried beef and broccoli in a savory sauce",
          image: "/images/beef-and-broccoli.jpeg",
          ingredients: [
            "Flank steak",
            "Broccoli",
            "Soy sauce",
            "Oyster sauce",
            "Sesame oil",
            "Garlic",
            "Ginger",
            "Cornstarch",
            "Green onions",
          ],
          instructions:
            "Marinate beef strips in soy sauce, garlic, ginger, and cornstarch. Stir-fry beef until browned, then add broccoli and cook until tender. Add oyster sauce and sesame oil, and garnish with green onions.",
        },
      ],
    },
    {
      name: "Korean",
      image: "/images/korean.jpg",
      recipes: [
        {
          name: "Bibimbap",
          description:
            "Mixed rice with assorted vegetables, meat, and spicy sauce",
          image: "/images/bibimbap.jpeg",
          ingredients: [
            "Cooked rice",
            "Beef (or tofu)",
            "Carrots",
            "Spinach",
            "Bean sprouts",
            "Zucchini",
            "Soy sauce",
            "Sesame oil",
            "Garlic",
            "Gochujang (Korean chili paste)",
            "Eggs",
            "Sesame seeds",
          ],
          instructions:
            "Sauté vegetables and beef with garlic, soy sauce, and sesame oil. Fry eggs sunny-side-up. Serve rice topped with sautéed vegetables, beef, and fried egg. Mix in gochujang and sesame seeds.",
        },
        {
          name: "Kimchi",
          description: "Fermented cabbage with Korean spices",
          image: "/images/kimchi.jpeg",
          ingredients: [
            "Napa cabbage",
            "Korean red pepper flakes (gochugaru)",
            "Garlic",
            "Ginger",
            "Fish sauce",
            "Salt",
            "Sugar",
            "Green onions",
            "Radish",
          ],
          instructions:
            "Salt cabbage and let it sit. Rinse and drain. Make a paste with garlic, ginger, fish sauce, gochugaru, salt, and sugar. Mix paste with cabbage, green onions, and radish. Ferment at room temperature.",
        },
        {
          name: "Japchae",
          description: "Stir-fried glass noodles with vegetables and meat",
          image: "/images/japchae.jpeg",
          ingredients: [
            "Sweet potato starch noodles (dangmyeon)",
            "Beef",
            "Spinach",
            "Carrots",
            "Onion",
            "Mushrooms",
            "Soy sauce",
            "Sugar",
            "Sesame oil",
            "Garlic",
            "Sesame seeds",
          ],
          instructions:
            "Cook noodles and stir-fry with vegetables, beef, and garlic in sesame oil. Season with soy sauce and sugar. Garnish with sesame seeds.",
        },
        {
          name: "Tteokbokki",
          description: "Spicy rice cakes in a sweet and spicy sauce",
          image: "/images/tteokbokki.jpeg",
          ingredients: [
            "Rice cakes (tteok)",
            "Fish cakes",
            "Gochujang (Korean chili paste)",
            "Soy sauce",
            "Sugar",
            "Garlic",
            "Sesame oil",
            "Green onions",
          ],
          instructions:
            "Boil rice cakes and fish cakes. Make a sauce with gochujang, soy sauce, sugar, garlic, and sesame oil. Add cooked rice cakes and fish cakes to the sauce. Garnish with green onions.",
        },
        {
          name: "Kimchi Pancakes",
          description: "Savory pancakes made with kimchi and flour",
          image: "/images/kimchi-pancakes.jpeg",
          ingredients: [
            "Kimchi",
            "Flour",
            "Water",
            "Eggs",
            "Soy sauce",
            "Sugar",
            "Sesame oil",
            "Green onions",
          ],
          instructions:
            "Chop kimchi and mix with flour, water, eggs, soy sauce, sugar, and sesame oil. Fry pancakes until crispy. Serve with soy dipping sauce.",
        },
        {
          name: "Bulgogi",
          description: "Marinated grilled beef",
          image: "/images/bulgogi.jpeg",
          ingredients: [
            "Beef (sirloin or ribeye)",
            "Soy sauce",
            "Sugar",
            "Sesame oil",
            "Garlic",
            "Pear",
            "Onion",
            "Green onions",
          ],
          instructions:
            "Marinate beef strips in soy sauce, sugar, sesame oil, garlic, and pureed pear. Grill or stir-fry until cooked. Garnish with sliced green onions.",
        },
        {
          name: "Haemul Pajeon",
          description: "Seafood and green onion pancake",
          image: "/images/haemul-pajeon.jpeg",
          ingredients: [
            "Flour",
            "Water",
            "Eggs",
            "Green onions",
            "Seafood (shrimp, squid, or oysters)",
            "Soy sauce",
            "Vinegar",
            "Sugar",
          ],
          instructions:
            "Mix flour, water, and eggs to make batter. Add chopped green onions and seafood. Fry pancake until golden brown. Serve with dipping sauce made of soy sauce, vinegar, and sugar.",
        },
        {
          name: "Samgyeopsal",
          description: "Grilled pork belly",
          image: "/images/samgyeopsal.jpeg",
          ingredients: [
            "Pork belly slices",
            "Lettuce leaves",
            "Garlic",
            "Ssamjang (spicy paste)",
            "Soybean paste",
            "Sesame oil",
            "Green onions",
          ],
          instructions:
            "Grill pork belly slices. Wrap in lettuce leaves with garlic, ssamjang, soybean paste, sesame oil, and green onions.",
        },
        {
          name: "Doenjang Jjigae",
          description: "Soybean paste stew",
          image: "/images/doenjang-jjigae.jpeg",
          ingredients: [
            "Soybean paste (doenjang)",
            "Tofu",
            "Zucchini",
            "Potato",
            "Onion",
            "Garlic",
            "Green chili peppers",
            "Anchovy or beef broth",
            "Green onions",
          ],
          instructions:
            "Boil broth with vegetables, garlic, and green chili peppers. Add soybean paste and tofu. Simmer until vegetables are tender. Garnish with green onions.",
        },
        {
          name: "Gimbap",
          description: "Seaweed rice rolls with vegetables and meat",
          image: "/images/gimbap.jpeg",
          ingredients: [
            "Seaweed sheets",
            "Sushi rice",
            "Carrots",
            "Cucumber",
            "Spinach",
            "Eggs",
            "Pickled radish",
            "Ham or beef",
            "Sesame oil",
            "Soy sauce",
          ],
          instructions:
            "Place seaweed sheet on bamboo mat. Spread rice and arrange vegetables, eggs, and meat. Roll tightly. Slice and serve with soy sauce and sesame oil.",
        },
      ],
    },
  ];

  return (
    <div className="app-container">
      {!selectedCuisine ? (
        <CuisineList cuisines={cuisines} onSelectCuisine={setSelectedCuisine} />
      ) : (
        <CuisineDetail
          cuisine={selectedCuisine}
          onBack={() => setSelectedCuisine(null)}
        />
      )}
    </div>
  );
};

export default App;
