export default function createAbout() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-container");

  const aboutHeader = document.createElement("h2");
  aboutHeader.classList.add("about-header");
  aboutHeader.textContent = "Our Story";
  aboutDiv.appendChild(aboutHeader);

  const ourStory = document.createElement("p");
  ourStory.classList.add("our-story");
  ourStory.innerHTML = `
  <strong>Welcome to The Patriot Grill – A Legacy of Flavor</strong><br><br>
  At <strong>The Patriot Grill</strong>, we’re more than just a burger joint – we’re a celebration of American tradition. For over <strong>50 years</strong>, we’ve been serving up mouthwatering, all-American classics that bring people together.<br><br>
  Our story began with a small-town dream: to create a place where families, friends, and food lovers could gather to enjoy the simple, hearty flavors of the USA. From our signature burgers stacked high with premium ingredients to our smoky BBQ creations and crispy fries, every bite is a tribute to the culinary spirit of America.<br><br>
  We pride ourselves on using only the freshest ingredients and time-honored recipes passed down through generations. Whether you’re craving the perfect burger, a sizzling hot sandwich, or a hearty side, you’ll find it here, served with a smile and a touch of patriotism.<br><br>
  So pull up a chair, savor the flavors, and join us in keeping the great American food tradition alive. <strong>The Patriot Grill</strong> – where every meal is a taste of freedom.
`;
  aboutDiv.appendChild(ourStory);

  return aboutDiv;
}
