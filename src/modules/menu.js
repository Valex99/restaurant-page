export default function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-container");

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Our Menu";
  menuDiv.appendChild(menuHeader);

  const menuList = document.createElement("ul");
  const items = [
    {
      name: "The Lone Star BBQ Burger",
      price: "$12.99",
      description:
        "Smoked bacon, BBQ sauce, cheddar cheese, and crispy onion rings.",
    },
    {
      name: "The All-American Classic",
      price: "$10.99",
      description:
        "Juicy beef patty, lettuce, tomato, pickles, onion, and American cheese.",
    },
    {
      name: "The Firehouse Inferno",
      price: "$13.99",
      description:
        "Spicy jalapeños, pepper jack cheese, chipotle mayo, and hot sauce.",
    },
    {
      name: "The Ranchero Delight",
      price: "$14.99",
      description:
        "Beef patty, fried egg, avocado, ranch dressing, and crispy bacon.",
    },
    {
      name: "The Smokestack Supreme",
      price: "$15.99",
      description:
        "Hickory-smoked brisket, cheddar cheese, caramelized onions, and smoky aioli.",
    },
    {
      name: "The Big Buffalo",
      price: "$11.99",
      description:
        "Buffalo chicken patty, blue cheese crumbles, lettuce, and ranch drizzle.",
    },
  ];

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");

    const namePrice = document.createElement("div");
    namePrice.classList.add("name-price");

    const burgerName = document.createElement("li");
    burgerName.textContent = item.name;

    const burgerPrice = document.createElement("h3");
    burgerPrice.textContent = item.price;

    const burgerDescription = document.createElement("p");
    burgerDescription.textContent = item.description;

    // Append elements to the right containers
    namePrice.appendChild(burgerName);
    namePrice.appendChild(burgerPrice);

    itemDiv.appendChild(namePrice);
    itemDiv.appendChild(burgerDescription);

    menuList.appendChild(itemDiv);
  });

  menuDiv.appendChild(menuList);
  return menuDiv;
}
