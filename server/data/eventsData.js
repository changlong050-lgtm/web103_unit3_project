// Locations for the cooking meetup community.
// Each location has many events. Each event teaches one dish
// (dishId references the original foodData array).

const locationData = [
  {
    id: 1,
    name: "Mission Community Kitchen",
    neighborhood: "Mission District, San Francisco, CA",
    description: "A shared community kitchen with eight stations, perfect for hands-on group cooking classes.",
    lat: 37.7599,
    lng: -122.4148
  },
  {
    id: 2,
    name: "Castro Cultural Kitchen",
    neighborhood: "Castro, San Francisco, CA",
    description: "A community kitchen hosting workshops focused on traditional and world cuisines.",
    lat: 37.7609,
    lng: -122.4350
  },
  {
    id: 3,
    name: "Marina Rooftop Kitchen",
    neighborhood: "Marina District, San Francisco, CA",
    description: "An open-air rooftop kitchen ideal for grilling, fresh seafood, and summer dishes.",
    lat: 37.8030,
    lng: -122.4360
  },
  {
    id: 4,
    name: "SoMa Culinary Kitchen",
    neighborhood: "SoMa, San Francisco, CA",
    description: "A professional teaching kitchen with chef-led technique classes.",
    lat: 37.7785,
    lng: -122.4056
  }
];

// Events: each one is a cooking session at a location, teaching one dish.
// Dates are a mix of past (occurred) and future (upcoming).
const eventData = [
  {
    id: 1,
    title: "Communal Hot Pot Night",
    dishId: 1,            // Hot Pot
    locationId: 1,        // Mission Community Kitchen
    date: "2026-05-12",
    host: "Chef Lin Wei",
    skillLevel: "Beginner",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiUtFev8Mk6Z-bTEAhx6PMI8V1y13sSU97g&s"
  },
  {
    id: 2,
    title: "Stir-Fry Basics: Pad Thai",
    dishId: 2,            // Pad Thai
    locationId: 1,
    date: "2026-07-03",
    host: "Chef Anong",
    skillLevel: "Beginner",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwYrVcIr4VONXvVcy2wFeBtyH76UucAJ3og&s"
  },
  {
    id: 3,
    title: "Roman Pasta Workshop",
    dishId: 7,            // Pasta Carbonara
    locationId: 1,
    date: "2026-08-15",
    host: "Chef Marco Rossi",
    skillLevel: "Intermediate",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1w3AqIw9tXmWuAPVIpW-pinM279ffePwWQ&s"
  },
  {
    id: 4,
    title: "Tacos al Pastor & Salsa",
    dishId: 6,            // Tacos
    locationId: 2,        // Castro Cultural Kitchen
    date: "2026-04-20",
    host: "Chef Lucía Hernández",
    skillLevel: "Beginner",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskCR0-vqiWM4TZgN8VmYkvGoFRGXXGeFp5A&s"
  },
  {
    id: 5,
    title: "Spice Route: Biryani Layering",
    dishId: 10,           // Biryani
    locationId: 2,
    date: "2026-09-07",
    host: "Chef Priya Nair",
    skillLevel: "Advanced",
    imageurl: "https://butfirstchai.com/wp-content/uploads/2025/09/keema-biryani-recipe.jpg"
  },
  {
    id: 6,
    title: "Middle Eastern Falafel Frying",
    dishId: 8,            // Falafel
    locationId: 2,
    date: "2026-06-28",
    host: "Chef Omar Haddad",
    skillLevel: "Beginner",
    imageurl: "https://www.aceitesdeolivadeespana.com/wp-content/uploads/2021/01/receta-falafel.jpg"
  },
  {
    id: 7,
    title: "Rooftop Ceviche Session",
    dishId: 3,            // Ceviche
    locationId: 3,        // Marina Rooftop Kitchen
    date: "2026-05-30",
    host: "Chef Diego Morales",
    skillLevel: "Beginner",
    imageurl: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg"
  },
  {
    id: 8,
    title: "Paella Under the Sun",
    dishId: 4,            // Paella
    locationId: 3,
    date: "2026-07-19",
    host: "Chef Carmen Ruiz",
    skillLevel: "Intermediate",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHe9JK1ts9yJ5yeRGPzeKav11QWShhPwJlFA&s"
  },
  {
    id: 9,
    title: "Sushi Rolling Masterclass",
    dishId: 5,            // Sushi
    locationId: 4,        // SoMa Culinary Kitchen
    date: "2026-03-22",
    host: "Chef Kenji Tanaka",
    skillLevel: "Advanced",
    imageurl: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/64EF898D-2EDD-4B47-A456-E6A7D137AC91/Derivates/00f76cac-64f6-4573-be4f-e604a7d99143.jpg"
  },
  {
    id: 10,
    title: "Quebec Comfort: Poutine",
    dishId: 9,            // Poutine
    locationId: 4,
    date: "2026-08-02",
    host: "Chef Émile Tremblay",
    skillLevel: "Beginner",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0jVmyiyj3J46x29K0KOyZnPK-F9xOcM9JQ&s"
  }
];

export { locationData, eventData };