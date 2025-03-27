document.addEventListener("DOMContentLoaded", () => {
    /* ============================= */
    /* 1. EFFET FADE-IN AU SCROLL */
    /* ============================= */
    const fadeInElements = document.querySelectorAll(".fade-in");

    if (fadeInElements.length > 0) {
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        fadeInElements.forEach(el => fadeInObserver.observe(el));
    }

    /* ============================= */
    /* 2. EFFET PARALLAX */
    /* ============================= */
    const parallaxElements = document.querySelectorAll(".parallax");

    if (parallaxElements.length > 0) {
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    /* ============================= */
    /* 3. EFFET HOVER SUR IMAGES */
    /* ============================= */
    document.querySelectorAll(".hover-zoom").forEach(img => {
        img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
        img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
    });

    /* ============================= */
    /* 4. ANIMATION DE CHARGEMENT (LOADER) */
    /* ============================= */
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.style.display = "none";
            document.body.classList.remove("loading");
            document.body.style.overflow = "auto"; // Réactive le scroll après chargement
        });
    }

    /* ============================= */
    /* 5. BOUTON "RETOUR EN HAUT" */
    /* ============================= */
    const scrollToTopButton = document.getElementById("scrollToTop");

    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ============================= */
    /* 6. FORMULAIRE DE RÉSERVATION */
    /* ============================= */
    const reservationForm = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (reservationForm && confirmationMessage) {
        reservationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            confirmationMessage.style.display = "block";
            setTimeout(() => {
                confirmationMessage.style.display = "none";
            }, 3000);
        });
    }

    /* ============================= */
    /* 7. CARROUSEL D'IMAGES */
    /* ============================= */
        const gallery = document.querySelector(".gallery-images");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const images = document.querySelectorAll(".gallery-images img");
        let currentIndex = 0;
        const imageWidth = 310; // Largeur d'une image + marge
        const maxIndex = images.length - 1;
    
        function updateGallery() {
            const offset = -currentIndex * imageWidth;
            gallery.style.transform = `translateX(${offset}px)`;
        }
    
        if (prevBtn && nextBtn && gallery) {
            nextBtn.addEventListener("click", () => {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Revenir à la première image
                }
                updateGallery();
            });
    
            prevBtn.addEventListener("click", () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = maxIndex; // Aller à la dernière image
                }
                updateGallery();
            });
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        const routeBtn = document.getElementById("routeBtn");
    
        if (routeBtn) {
            routeBtn.addEventListener("click", () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
    
                        // Remplace ici par l'adresse exacte de CASA MIA trouvée sur Google Maps
                        const mapsURL = `https://www.google.com/maps/dir/46.1996032,5.2133888/45.9577744,5.3335067/@45.9577723,5.3331581,19.25z/data=!4m5!4m4!1m1!4e1!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D`;
    
                        window.open(mapsURL, "_blank"); // Ouvre Google Maps dans un nouvel onglet
                    }, () => {
                        alert("La géolocalisation a été refusée. Activez-la pour voir l'itinéraire.");
                    });
                } else {
                    alert("La géolocalisation n'est pas supportée par votre navigateur.");
                }
            });
        }
    });
