// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navigate to order page with selected item
function customizeOrder(itemName) {
    sessionStorage.setItem("selectedItem", itemName);
    window.location.href = 'order.html';
}

// Pre-fill order form with item name
window.onload = function() {
    const itemName = sessionStorage.getItem("selectedItem");
    if (itemName) {
        document.getElementById("item").value = itemName;
        sessionStorage.removeItem("selectedItem");
    }
};
