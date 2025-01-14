// Increment and display the review count using localStorage
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the product name from URL parameters
    const params = new URLSearchParams(window.location.search);
    const selectedProduct = params.get("product") || "Unknown Product";
    document.getElementById("selected-product").textContent = selectedProduct;
  
    // Update the review count using localStorage
    const reviewCountKey = "reviewCount";
    let reviewCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
    reviewCount++;
    localStorage.setItem(reviewCountKey, reviewCount);
  
    // Display the updated review count
    document.getElementById("review-count").textContent = reviewCount;
  });
  