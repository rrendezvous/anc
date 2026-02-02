// Data extracted from reference text
// 'filter' property matches the buttons in HTML: Origins, Economy, Politics, Culture
const blogPosts = [
    // --- ORIGINS ---
    {
        category: "Origins",
        filter: "Origins",
        title: "The Dawnmen (First Migrants)",
        content: "According to historian H. Otley Beyer, the first inhabitants were the 'Dawnmen' (cavemen). Arriving about 250,000 years ago via land bridges, they resembled the famous Java Man and Peking Man. They didn't know how to farm yet and lived by hunting and fishing, eventually moving on to other places.",
        tags: ["Beyer", "Cavemen", "Pleistocene"]
    },
    {
        category: "Origins",
        filter: "Origins",
        title: "The Aetas & The Land Bridge",
        content: "About 30,000 years ago, the Aetas (Negritos) crossed land bridges from Malaya and Borneo, reaching Palawan and Mindanao. They were skilled hunters using spears. When the Ice Age ended and sea levels rose, the land bridges disappeared, trapping them here as the islands' first permanent residents.",
        tags: ["Aetas", "Negritos", "Geology"]
    },
    {
        category: "Migration",
        filter: "Origins",
        title: "The Seafaring Indonesians",
        content: "The third wave of migrants, the Indonesians, were the first to arrive by boat. They were more advanced than the previous groups: they had stone and steel tools, built sturdy houses, and knew how to mine. Most importantly, they introduced brass materials to the Philippines.",
        tags: ["Seafaring", "Brass", "Mining"]
    },
    {
        category: "Migration",
        filter: "Origins",
        title: "The Malay Innovations",
        content: "The last prehistoric migrants were the Malays, arriving over 2,000 years ago. They brought sophisticated technology that changed society: pottery, weaving, jewelry making, metal smelting, and - most crucially - the irrigation system for rice planting.",
        tags: ["Technology", "Irrigation", "Pottery"]
    },
    {
        category: "Anthropology",
        filter: "Origins",
        title: "The Tabon Cave Discovery",
        content: "In 1962, archaeologists found a skullcap in the Tabon Caves of Palawan. Dated to 22,000 years ago, this 'Tabon Man' proves people lived here much earlier than we thought. This discovery supports the 'Evolution Theory' (that we evolved locally) rather than just the 'Migration Theory.'",
        tags: ["Palawan", "Evolution", "Robert Fox"]
    },

    // --- ECONOMY ---
    {
        category: "Settlements",
        filter: "Economy",
        title: "Ancient Manila: Lamayan",
        content: "Ancient Manila wasn't in the walled city of Intramuros, but along the river in 'Lamayan' (now Sta. Ana). Because the land was swampy, this river settlement became a busy trading hub ('entrepot') for all the communities living around Laguna de Bay.",
        tags: ["Manila", "Pasig River", "Sta Ana"]
    },
    {
        category: "Demographics",
        filter: "Economy",
        title: "Population Centers of the South",
        content: "By A.D. 1000, big population centers grew in Cebu, Iloilo, and Butuan. These areas are full of high-quality ancient ceramics, which tells us they were the main hubs for international trade long before the Spaniards arrived.",
        tags: ["Cebu", "Butuan", "Visayas"]
    },
    {
        category: "Trade Ethics",
        filter: "Economy",
        title: "The 'Wholesale' Trust System",
        content: "Chinese merchants trusted Filipinos immensely. Since their large ships couldn't dock in small local ports, they would leave bulk goods with local traders and sail away. They would return months later to collect payment after the locals had sold the goods. It was a system built entirely on honor.",
        tags: ["China", "Trust", "Commerce"]
    },
    {
        category: "Global Trade",
        filter: "Economy",
        title: "The Arab Connection",
        content: "We weren't just trading with Asia. Sites in Batangas and Mindanao have yielded glass vessels traced back to the Arab world (dated A.D. 1000). This proves the ancient Philippines was already connected to the massive Indian Ocean trade network.",
        tags: ["Arabia", "Glass", "Global Trade"]
    },
    {
        category: "Industry",
        filter: "Economy",
        title: "The Iron Slag Evidence",
        content: "Ancient Filipinos didn't just buy metal tools; they made them. The discovery of 'iron slags' (waste from melting metal) proves that communities had factories dedicated to mass-producing tools. This was a complex industrial economy, not just simple farming.",
        tags: ["Metalwork", "Iron", "Manufacturing"]
    },
    {
        category: "Agriculture",
        filter: "Economy",
        title: "The Wet-Rice Revolution",
        content: "The economy boomed when locals mastered 'wet-rice agriculture' in the floodplains. Using plows and carabaos made farming much more efficient. Rice became a status symbol, and they even developed special rice strains for dry farming in the mountains.",
        tags: ["Rice", "Farming", "Innovation"]
    },

    // --- CULTURE ---
    {
        category: "Culture",
        filter: "Culture",
        title: "The Butuan-Tausug Connection",
        content: "Trade didn't just move goods; it moved people and languages. Archaeological evidence tracks a migration from Northeastern to Southwestern Mindanao around A.D. 1100. This is proven by the striking similarities between the Butuanon language and the Tausug language.",
        tags: ["Language", "Linguistics", "Mindanao"]
    },
    {
        category: "Archaeology",
        filter: "Culture",
        title: "The Thai Ceramic Mystery",
        content: "Archaeology shows a divide in trade partners. Thai ceramics are very common in the Southern Philippines but rare in the North. This suggests the South was part of a specific trade network with Thailand and Indonesia that didn't really reach Luzon.",
        tags: ["Thailand", "Ceramics", "Trade Routes"]
    },
    {
        category: "Artistry",
        filter: "Culture",
        title: "Batangas vs. Mindanao Pottery",
        content: "Local art styles were distinct. Batangas potters made fancy, polished dishes with intricate designs. Meanwhile, pottery in Mindanao was simpler. This shows that even though they traded with the same foreigners, different regions maintained their own unique artistic cultures.",
        tags: ["Pottery", "Art", "Batangas"]
    },
    {
        category: "Beliefs",
        filter: "Culture",
        title: "The Sacred Water Buffalo",
        content: "The carabao (water buffalo) was a symbol of wealth and status. It wasn't just for plowing fields; archaeological remains show they were used in important rituals and feasts. If you owned carabaos, you had power and prestige.",
        tags: ["Rituals", "Carabao", "Animism"]
    },
    {
        category: "Spirituality",
        filter: "Culture",
        title: "Heirlooms for the Dead",
        content: "Belief in the afterlife was strong. Costly Ming dynasty ceramics weren't just used for cooking; they were treasured heirlooms buried with the dead. This practice shows they believed material wealth had spiritual value in the next life.",
        tags: ["Burial", "Ming Dynasty", "Spirituality"]
    },

    // --- POLITICS ---
    {
        category: "Politics",
        filter: "Politics",
        title: "The Strategy of Alliances",
        content: "As society grew, blood ties weren't enough. Communities formed political alliances for protection. For example, the text notes an alliance between the peoples of Zambales and Pangasinan to defend against the Ilocanos. Politics was becoming strategic.",
        tags: ["Warfare", "Strategy", "Luzon"]
    },
    {
        category: "Social Structure",
        filter: "Politics",
        title: "Wisdom and Wealth",
        content: "Who became the leader? It wasn't always the son of the chief. Leadership often went to the 'assertive individual' who had three things: age, wealth, and 'sagacity' (wisdom). If you had these, your kin would support you as the leader.",
        tags: ["Leadership", "Society", "Hierarchy"]
    },
    {
        category: "Governance",
        filter: "Politics",
        title: "The Southern Sultanates",
        content: "The most organized governments appeared in the South with the arrival of Islam. This introduced titles like 'Raja' and 'Sultan.' It created a formal political hierarchy that was more complex than the barangay systems found elsewhere.",
        tags: ["Islam", "Sultan", "Mindanao"]
    },
    {
        category: "History",
        filter: "Politics",
        title: "The Cebu-Mactan Standoff",
        content: "By 1521, communities were large enough to have major political conflicts. The text highlights the 'stand-off' between the chiefs of Cebu and Mactan (Lapu-Lapu). This proves complex politics existed long before the Spanish arrived to record it.",
        tags: ["Lapu-Lapu", "Cebu", "1521"]
    }
];

// --- APP LOGIC ---

const blogContainer = document.getElementById('blog-feed');
const modal = document.getElementById('article-modal');
const closeBtn = document.querySelector('.close-btn');

// Elements inside modal
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalTags = document.getElementById('modal-tags');

// Filter Buttons
const filterBtns = document.querySelectorAll('.filter-btn');

function renderPosts() {
    blogContainer.innerHTML = '';

    blogPosts.forEach((post, index) => {
        const article = document.createElement('article');

        // 1. Add the base card class
        article.classList.add('blog-card');

        // 2. ADD THE COLOR CLASS HERE (This makes the colors work!)
        // It creates classes like: type-origins, type-economy, type-politics
        const typeClass = 'type-' + post.filter.toLowerCase();
        article.classList.add(typeClass);

        article.setAttribute('data-filter', post.filter);
        article.style.transitionDelay = `${index * 50}ms`;

        // Create a "Preview" version of the text
        const previewText = post.content.substring(0, 100) + '...';
        const tagsHtml = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
        const readTime = "1 min read";

        // 3. Updated HTML to use the new classes
        article.innerHTML = `
            <div class="card-header"></div>
            <div class="card-body">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="category">${post.category}</span>
                    <span style="font-size:0.7rem; color:#999; text-transform:uppercase;">${readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>
                    ${previewText} 
                    <span class="read-more-btn">Read More</span>
                </p>
                <div class="tag-container">${tagsHtml}</div>
            </div>
        `;

        // Click Event to Open Modal
        article.addEventListener('click', () => {
            openModal(post);
        });

        blogContainer.appendChild(article);
    });
}

// --- FILTER LOGIC ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // 2. Add active class to clicked
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.blog-card');

        cards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-filter') === filterValue) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
    });
});

function openModal(post) {
    modalCategory.textContent = post.category;
    modalTitle.textContent = post.title;
    modalText.textContent = post.content;
    modalTags.innerHTML = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => observer.observe(card));

    // Initialize Hero Particles
    initHeroParticles();

    // Initialize Navigation Effects
    initNavigation();

    // Initialize Back to Top Button
    initBackToTop();

    // Initialize Section Reveal Animations
    initSectionReveal();

    // Hide Loading Screen
    hideLoadingScreen();
});

// Hero Particles Animation
function initHeroParticles() {
    const particlesContainer = document.getElementById('hero-particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomize position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = Math.random() * -20 + '%';

        // Randomize size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Randomize animation
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Navigation Scroll Effects & Hamburger Menu
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (!navbar) return;

    // Navbar scroll effect
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when scrolled down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    if (!backToTop) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Section Reveal Animation
function initSectionReveal() {
    const sections = document.querySelectorAll('.reveal-section');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    sections.forEach(section => {
        revealObserver.observe(section);
    });
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Small delay to ensure everything is ready
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM layout after transition
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }, 800);
    }
}