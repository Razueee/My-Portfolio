// JavaScript to handle responsive menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header nav");
    const toggleButton = document.createElement("button");

    toggleButton.innerHTML = '<i class="fa fa-bars"></i>';
    toggleButton.classList.add("menu-toggle");

    // Append the toggle button to the header
    document.querySelector("header").appendChild(toggleButton);

    // Event listener to toggle menu
    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close the menu when a link is clicked (for better UX)
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClasses(); // Remove active class from all tabs
            this.classList.add("active"); // Add active class to the clicked tab
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo"); // Select the logo element
    const homeSection = document.querySelector("#home"); // Home section

    // Function to toggle the visibility of the logo
    function toggleLogoVisibility() {
        const homeSectionRect = homeSection.getBoundingClientRect();
        if (homeSectionRect.top <= 0 && homeSectionRect.bottom > 0) {
            logo.classList.remove("hidden"); // Show logo
        } else {
            logo.classList.add("hidden"); // Hide logo
        }
    }    

    // Run the function on scroll and load
    window.addEventListener("scroll", toggleLogoVisibility);
    toggleLogoVisibility(); // Initial check on page load
});
