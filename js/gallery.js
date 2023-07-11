document.addEventListener("DOMContentLoaded", function () {
  var featuredImage = document.getElementById("featured-image");
  var thumbnailsContainer = document.getElementById("thumbnails");
  var figcaption = document.querySelector("figcaption");

  var images = [
    {
      large: "./images/flowers-pink-large.jpg",
      small: "./images/flowers-pink-small.jpg",
      alt: "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
      title:
        "Sunflowers are known for their vibrant yellow petals and are a symbol of happiness and vitality.",
    },
    {
      large: "./images/flowers-purple-large.jpg",
      small: "./images/flowers-purple-small.jpg",
      alt: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
      title:
        "Poppies are beautiful flowers that often symbolize remembrance and are associated with peace and sleep.",
    },
    {
      large: "./images/flowers-red-large.jpg",
      small: "./images/flowers-red-small.jpg",
      alt: "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
      title:
        "Daffodils are spring-blooming flowers that symbolize new beginnings and are a sign of hope and rebirth.",
    },
    {
      large: "./images/flowers-white-large.jpg",
      small: "./images/flowers-white-small.jpg",
      alt: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
      title:
        "Sentmaring Park is a beautiful park located in Münster, Germany, known for its serene landscapes and recreational activities.",
    },
    {
      large: "./images/flowers-yellow-large.jpg",
      small: "./images/flowers-yellow-small.jpg",
      alt: "Market in Münster, North Rhine-Westphalia, Germany",
      title:
        "The market in Münster offers a vibrant and diverse range of products, including fresh produce, local crafts, and delicious food.",
    },
  ];

  images.forEach(image => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    
    img.src = image.small;
    img.alt = image.alt;
    img.width = 240;
    img.height = 160;
    
    li.appendChild(img);
    thumbnailsContainer.appendChild(li);
    
    img.addEventListener("click", () => {
      featuredImage.src = image.large;
      featuredImage.alt = image.alt;
      figcaption.textContent = image.title;
      
      thumbnailsContainer.querySelectorAll("img").forEach(thumbnail => {
        thumbnail.classList.remove("active");
      });
      
      img.classList.add("active");
    });
  });
});