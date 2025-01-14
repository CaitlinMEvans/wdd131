// JavaScript for Back to the Future Product Review Form

// Product Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" },
  ];
  
  // Populate Product Dropdown
  document.addEventListener("DOMContentLoaded", () => {
    const productDropdown = document.getElementById("product");
  
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productDropdown.appendChild(option);
    });
  
    // Populate Star Ratings (1-10)
    const ratingContainer = document.querySelector(".rating");
    for (let i = 1; i <= 10; i++) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      input.type = "radio";
      input.id = `rating-${i}`;
      input.name = "rating";
      input.value = i;
      input.required = true;
  
      const label = document.createElement("label");
      label.htmlFor = `rating-${i}`;
      label.textContent = "★".repeat(i); // Display stars dynamically based on value
  
      div.appendChild(input);
      div.appendChild(label);
      ratingContainer.appendChild(div);
    }
  
    // Form Submission Handler
    const form = document.getElementById("review-form");
    form.addEventListener("submit", (event) => {
      // Check if form is valid
      if (!form.checkValidity()) {
        event.preventDefault();
        displayError();
      } else {
        incrementReviewCounter();
      }
    });
  });
  
  // Display Custom Error Messages
  function displayError() {
    const product = document.getElementById("product");
    const ratingInputs = document.querySelectorAll("input[name='rating']");
  
    if (!product.value) {
      alert("Great Scott! Please select a product before submitting!");
    } else if (![...ratingInputs].some((input) => input.checked)) {
      alert("You must rate the futuristic features! Even Doc Brown would!");
    }
  }
  
  // Increment Review Counter
  function incrementReviewCounter() {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
  }
  