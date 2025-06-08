// Popup data for each footer section
const popupData = {
  blog: `
    <h3>Blog</h3>
    <p>Explore articles and tips about gardening, plant care, seasonal flowers, and much more to keep your garden flourishing.</p>
  `,
  about: `
    <h3>About Us</h3>
    <p>Leaf & Life Gardening is your trusted partner in bringing the beauty of nature into your life. We specialize in garden maintenance, plant care, and providing exquisite plants and accessories.</p>
  `,
  faqs: `
    <h3>FAQs</h3>
    <p>Have questions about planting, fertilizing, or garden design? Find answers to common gardening queries here.</p>
  `,
  authors: `
    <h3>Authors</h3>
    <p>Our expert gardeners and horticulturists share their knowledge and passion through our content and personalized services.</p>
  `,
  events: `
    <h3>Events</h3>
    <p>Join us for workshops, gardening classes, and community planting events to grow your green thumb.</p>
  `,
  shop: `
    <h3>Shop</h3>
    <p>Browse our selection of plants, pots, tools, and garden accessories carefully curated for all your gardening needs.</p>
  `,
  patterns: `
    <h3>Patterns</h3>
    <p>Discover beautiful garden patterns and design inspirations to beautify your outdoor or indoor spaces.</p>
  `,
  themes: `
    <h3>Themes</h3>
    <p>Choose from various garden themes like tropical, Zen, succulent, or floral to give your garden a unique personality.</p>
  `
};

document.querySelectorAll(".popup-trigger").forEach(item => {
  item.addEventListener("click", () => {
    const popupType = item.getAttribute("data-popup");
    const popupText = popupData[popupType] || "<p>No information available.</p>";
    document.getElementById("popup-text").innerHTML = popupText;
    document.getElementById("popup-overlay").classList.remove("hidden");
  });
});

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup-overlay").classList.add("hidden");
});

window.addEventListener("click", (e) => {
  const overlay = document.getElementById("popup-overlay");
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});
// Popup logic for footer items
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupClose = document.getElementById('popup-close');

document.querySelectorAll('.popup-link').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.getAttribute('data-content');
        popupText.textContent = content;
        popup.style.display = 'block';
    });
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
