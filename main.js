const blogPosts = [
    // --- ORIGINS ---
    {
        category: "Origins",
        filter: "Origins",
        title: "The Dawnmen (First Migrants)",
        content: "According to historian H. Otley Beyer, the first inhabitants were the 'Dawnmen' (cavemen). They lived about 250,000 years ago and resembled the Java Man and Peking Man. They had no knowledge of agriculture and survived by hunting and fishing. In search of food, they reached the Philippines through land bridges that connected the islands to Indonesia, and later left for destinations unknown.",
        tags: ["Beyer", "Cavemen", "Pleistocene"]
    },
    {
        category: "Origins",
        filter: "Origins",
        title: "The Aetas & The Land Bridge",
        content: "About 30,000 years ago, the Aetas (Negritos) crossed land bridges from Malaya, Borneo, and Australia until they reached places like Palawan, Mindoro, and Mindanao. They were skilled hunters and gatherers and used spears and stone tools. When the Ice Age ended and sea levels rose, the land bridges disappeared—an event that forced them to remain in the islands as the first permanent inhabitants.",
        tags: ["Aetas", "Negritos", "Geology"]
    },
    {
        category: "Migration",
        filter: "Origins",
        title: "The Seafaring Indonesians",
        content: "Because the land bridges had disappeared, the third wave of migrants—the Indonesians—were skilled in seafaring and arrived in boats. They were more advanced than the Aetas: they used tools made of stone and steel, built sturdier houses, engaged in farming and mining, used materials made of brass, and wore clothing and body ornaments.",
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
        content: "In 1962, archaeologists found a skullcap (and part of a jaw) in the Tabon Caves of Palawan. Dated to about 21,000–22,000 years ago, this 'Tabon Man' shows that humans lived in the Philippine islands very early. Jocano used this and other Southeast Asian evidence to argue for an 'Evolution Theory'—a long process of evolution and migration in the region—rather than only separate waves of migration into the Philippines.",
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
        content: "By A.D. 1000, large population centers grew in places such as Cebu, the Iloilo area, and Butuan. The presence of foreign trade goods (including high-quality ceramics) in these areas suggests they were among the major centers involved in overseas trade long before the Spaniards arrived.",
        tags: ["Cebu", "Butuan", "Visayas"]
    },
    {
        category: "Trade Ethics",
        filter: "Economy",
        title: "The 'Wholesale' Trust System",
        content: "Overseas trade often relied on local market networks. For example, Chinese merchants would sometimes wait for months while their local clients distributed goods through retail and barter systems, especially where foreign ships could not safely berth in every place. This kind of arrangement depended on ongoing relationships between visiting traders and local communities.",
        tags: ["China", "Trust", "Commerce"]
    },
    {
        category: "Global Trade",
        filter: "Economy",
        title: "The Arab Connection",
        content: "Archaeological sites on the western coast of Batangas and the northeastern coast of Mindanao have yielded high-fired ceramics dated around A.D. 1000–1100 (or earlier). Some finds include materials linked to the Arab world, including a few glass vessels. These discoveries suggest that certain Philippine ports were connected—directly or indirectly—to wider long-distance trade routes at the time.",
        tags: ["Arabia", "Glass", "Global Trade"]
    },
    {
        category: "Industry",
        filter: "Economy",
        title: "The Iron Slag Evidence",
        content: "Ancient communities did not only acquire metal from trade—they also worked it locally. Archaeologists have found iron slags (residues from iron-making) in some sites, which suggests craft specialization in producing metal tools. This implies organized local manufacturing and larger, more permanent communities with investments beyond agriculture.",
        tags: ["Metalwork", "Iron", "Manufacturing"]
    },
    {
        category: "Agriculture",
        filter: "Economy",
        title: "The Wet-Rice Revolution",
        content: "By this period, intensive wet-rice agriculture was well established in lowlands and floodplains. With growing contact with China and its metal industry, the development of intensive agricultural complexes was enhanced. The use of draft animals and the plow complex made farming more efficient, leading to optimal rice production. Rice also gained a prestige position as a staple, and different strains began to be adopted for dry regimes and introduced in swiddens in the highlands.",
        tags: ["Rice", "Farming", "Agriculture"]
    },

    // --- CULTURE ---
    {
        category: "Culture",
        filter: "Culture",
        title: "The Butuan-Tausug Connection",
        content: "Trade didn’t just move goods; it could also support wider movement and contact among peoples. Archaeological evidence suggests populations moved from northeastern to southwestern Mindanao around A.D. 1100, alongside intense trade in Asian ceramics. The noted similarity between the Butuanon language and the Tausug language is one clue often discussed in relation to these historical connections.",
        tags: ["Language", "Linguistics", "Mindanao"]
    },
    {
        category: "Archaeology",
        filter: "Culture",
        title: "The Thai Ceramic Mystery",
        content: "Archaeological evidence shows that Thai ceramics were more common in the southern Philippines, and the number progressively became less as one goes north. These wares became extremely rare in northern Luzon, reflecting differences in the quantity and distribution of foreign trade ceramics across the archipelago.",
        tags: ["Thailand", "Ceramics", "Trade"]
    },
    {
        category: "Artistry",
        filter: "Culture",
        title: "Batangas vs. Mindanao Pottery",
        content: "Local pottery styles could differ greatly by region. In the Batangas sites, archaeologists found sophisticated Metal Age types such as presentation dishes with ornate cut-out stands, goblets, and incised or impressed designs, often red-slipped and highly polished. In northeastern Mindanao, local pottery showed a more limited range in form and decoration. This suggests the two areas belonged to different local trade networks, even though they were linked to similar (or the same) Asian trade sources.",
        tags: ["Batangas", "Mindanao", "Pottery"]
    },
    {
        category: "Beliefs",
        filter: "Culture",
        title: "The Sacred Water Buffalo",
        content: "The carabao (water buffalo) was an important index of wealth and status. It was crucial for wet-rice farming, and archaeological remains show buffalo were common in sites from this period. Beyond farming, these animals were also valued for trade and prestige, and they likely played significant roles in rituals conducted by different societies.",
        tags: ["Rituals", "Carabao", "Animism"]
    },
    {
        category: "Spirituality",
        filter: "Culture",
        title: "Heirlooms for the Dead",
        content: "Trade ceramics could circulate far beyond major ports. It was common to find Ming dynasty ceramics used as heirloom pieces, even among households in mountain areas that were difficult to access. These ceramics were also sometimes interred with the dead in traditional burial grounds.",
        tags: ["Burial", "Ming Dynasty", "Heirlooms"]
    },

    // --- POLITICS ---
    {
        category: "Politics",
        filter: "Politics",
        title: "The Strategy of Alliances",
        content: "As populations grew and communities interacted more frequently, alliances began to go beyond kinship as the sole principle of organization. Groups sometimes united for larger arenas of action, such as when the peoples of Zambales allied with those of Pangasinan against the Ilocano populations. These alliances were shaped by expediency, leadership, and intergroup interactions.",
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
        content: "In the southern Philippines, political organization became more complex with the introduction of Islam and the sociological and political structures associated with it, layered over earlier Indian influences. These structures were not always adopted exactly as introduced and were often modified locally. In some cases, prestige titles (such as raja, sultan, or datu) could be used in oral traditions without the same kind of supporting structures seen elsewhere. Even so, societies influenced by Islam are described as among the most developed in terms of political and social organization.",
        tags: ["Islam", "Sultan", "Mindanao"]
    },
    {
        category: "History",
        filter: "Politics",
        title: "The Cebu-Mactan Standoff",
        content: "The reference describes how, by the time the first Spaniards arrived in 1521, some communities were large enough to require higher levels of political integration. One example mentioned is the leadership stand-off between the heads of the communities in Cebu and the island of Mactan.",
        tags: ["Lapu-Lapu", "Cebu", "Mactan"]
    },
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

        // Base card class
        article.classList.add('blog-card');

        // Color class
        // creates classes like: type-origins, type-economy, type-politics
        const typeClass = 'type-' + post.filter.toLowerCase();
        article.classList.add(typeClass);

        article.setAttribute('data-filter', post.filter);
        article.style.transitionDelay = `${index * 50}ms`;

        // Create a "Preview" version of the text
        const previewText = post.content.substring(0, 100) + '...';
        const tagsHtml = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
        const readTime = "1 min read";

        // Updated HTML to use the new classes
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
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
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