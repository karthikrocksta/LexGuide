/**
 * Production-ready Core Legal Dataset (25 Real-World Items mapped accurately)
 * Incorporating Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS).
 */
const legalData = [
    { id: 1, act: "IPC", section: "302", offence: "Punishment for Murder", category: "Human Body", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.", punishment: "Death penalty or Life Imprisonment + Fine" },
    { id: 2, act: "BNS", section: "103", offence: "Punishment for Murder", category: "Human Body", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine. (Corresponds to old Section 302 IPC).", punishment: "Death penalty or Life Imprisonment + Fine" },
    { id: 3, act: "IPC", section: "307", offence: "Attempt to Murder", category: "Human Body", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever does any act with such intention or knowledge, and under such circumstances that, if he by that act caused death, he would be guilty of murder.", punishment: "Imprisonment up to 10 years + Fine; if hurt is caused, up to Life Imprisonment" },
    { id: 4, act: "BNS", section: "109", offence: "Attempt to Murder", category: "Human Body", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Consolidates individual attempt metrics. Covers acts committed with the intention or knowledge capable of causing death.", punishment: "Imprisonment up to 10 years + Fine; if physical hurt occurs, up to Life Imprisonment" },
    { id: 5, act: "IPC", section: "378", offence: "Theft", category: "Property", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever, intending to take dishonestly any moveable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.", punishment: "Imprisonment up to 3 years, or Fine, or both" },
    { id: 6, act: "BNS", section: "303", offence: "Theft", category: "Property", bailable: "Bailable", cognizable: "Cognizable", description: "Defines theft similarly to IPC but adds provisions for community service parameters for first-time petty offenses under specified sums.", punishment: "Imprisonment up to 3 years, or Fine, or community service for petty cases" },
    { id: 7, act: "IPC", section: "392", offence: "Punishment for Robbery", category: "Property", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever commits robbery shall be punished with rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine.", punishment: "Rigorous Imprisonment up to 10 years + Fine; if on highway between sunset and sunrise, up to 14 years" },
    { id: 8, act: "BNS", section: "309", offence: "Robbery", category: "Property", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Modernized structure encompassing systemic tracking of armed theft, highway interception actions, and property asset safety.", punishment: "Rigorous Imprisonment up to 10 years + Fine; extended parameters for night highways" },
    { id: 9, act: "IPC", section: "420", offence: "Cheating and dishonestly inducing delivery of property", category: "Property", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security.", punishment: "Imprisonment up to 7 years + Fine" },
    { id: 10, act: "BNS", section: "318", offence: "Cheating", category: "Property", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Replaces Section 420. Covers systemic corporate fraud, digital misrepresentations, and structural identity updates.", punishment: "Imprisonment up to 7 years + Fine" },
    { id: 11, act: "IPC", section: "124A", offence: "Sedition", category: "Public Tranquility", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever by words, either spoken or written, or by signs, or by visible representation, or otherwise, brings or attempts to bring into hatred or contempt, or excites or attempts to excite disaffection towards the Government.", punishment: "Life Imprisonment + Fine, or imprisonment up to 3 years + Fine" },
    { id: 12, act: "BNS", section: "152", offence: "Acts endangering sovereignty, unity and integrity of India", category: "Public Tranquility", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Replaces the old concept of 'sedition' with specific focus on subversive movements, secession, armed rebellion, or endangering sovereignty.", punishment: "Life Imprisonment or rigorous imprisonment up to 7 years + Fine" },
    { id: 13, act: "IPC", section: "147", offence: "Punishment for Rioting", category: "Public Tranquility", bailable: "Bailable", cognizable: "Cognizable", description: "Whoever is guilty of rioting shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.", punishment: "Imprisonment up to 2 years, or Fine, or both" },
    { id: 14, act: "BNS", section: "191", offence: "Rioting", category: "Public Tranquility", bailable: "Bailable", cognizable: "Cognizable", description: "Re-indexed framework addressing unlawful assemblies, localized disturbances, and weaponization profiles.", punishment: "Imprisonment up to 2 years, or Fine, or both" },
    { id: 15, act: "IPC", section: "354", offence: "Assault or criminal force to woman with intent to outrage her modesty", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.", punishment: "Imprisonment between 1 and 5 years + Fine" },
    { id: 16, act: "BNS", section: "74", offence: "Assault or criminal force to woman with intent to outrage her modesty", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Strict protection matrix reinforcing physical safety metrics and legal prosecution tracks for crimes targeting a woman's modesty.", punishment: "Imprisonment between 1 and 5 years + Fine" },
    { id: 17, act: "IPC", section: "304B", offence: "Dowry Death", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Where the death of a woman is caused by any burns or bodily injury or occurs otherwise than under normal circumstances within seven years of her marriage and it is shown that soon before her death she was subjected to cruelty by her husband or relative for dowry.", punishment: "Imprisonment from minimum 7 years up to Life Imprisonment" },
    { id: 18, act: "BNS", section: "80", offence: "Dowry Death", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Maintains strong deterrence frameworks against domestic cruelty, illegal down-payment coercion, and unnatural deaths of wives within 7 years of marriage.", punishment: "Imprisonment from minimum 7 years up to Life Imprisonment" },
    { id: 19, act: "IPC", section: "498A", offence: "Husband or relative of husband of a woman subjecting her to cruelty", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Whoever, being the husband or the relative of the husband of a woman, subjects such woman to cruelty shall be punished.", punishment: "Imprisonment up to 3 years + Fine" },
    { id: 20, act: "BNS", section: "85", offence: "Cruelty by husband or relatives of husband", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Transfers the core accountability clauses of 498A into safety provisions supporting institutional domestic reconciliation checks alongside immediate judicial intervention.", punishment: "Imprisonment up to 3 years + Fine" },
    { id: 21, act: "IPC", section: "323", offence: "Punishment for voluntarily causing hurt", category: "Human Body", bailable: "Bailable", cognizable: "Non-Cognizable", description: "Whoever, except in the case provided for by section 334, voluntarily causes hurt, shall be punished.", punishment: "Imprisonment up to 1 year, or Fine up to ₹1,000, or both" },
    { id: 22, act: "BNS", section: "115", offence: "Voluntarily causing hurt", category: "Human Body", bailable: "Bailable", cognizable: "Non-Cognizable", description: "Restructured fine parameters taking inflationary indexes into account for localized kinetic altercations.", punishment: "Imprisonment up to 1 year, or Fine up to ₹10,000, or both" },
    { id: 23, act: "IPC", section: "506", offence: "Punishment for criminal intimidation", category: "Public Tranquility", bailable: "Bailable", cognizable: "Non-Cognizable", description: "Whoever commits the offence of criminal intimidation shall be punished; can scale if threat is to cause death or grievous hurt.", punishment: "Imprisonment up to 2 years, or Fine, or both; up to 7 years if threat is severe" },
    { id: 24, act: "BNS", section: "351", offence: "Criminal Intimidation", category: "Public Tranquility", bailable: "Bailable", cognizable: "Non-Cognizable", description: "Re-aligned legal description addressing contemporary extortion profiles and systemic threats delivered electronically.", punishment: "Imprisonment up to 2 years, or Fine, or both" },
    { id: 25, act: "IPC", section: "375", offence: "Rape (Definition)", category: "Women & Children", bailable: "Non-Bailable", cognizable: "Cognizable", description: "Defines sexual assault criteria, non-consent parameters, and statutory limits protecting systemic bodily liberty.", punishment: "Rigorous imprisonment from minimum 10 years scaling up to Life Imprisonment" }
];

// --- State Engine ---
let appState = {
    searchQuery: "",
    selectedAct: "all",
    selectedCategory: "all",
    showOnlyFavorites: false,
    favorites: JSON.parse(localStorage.getItem("lexguide_favs")) || []
};

// --- DOM Cache Elements ---
const lawGrid = document.getElementById("law-grid");
const searchInput = document.getElementById("search-input");
const actFilter = document.getElementById("act-filter");
const categoryFilter = document.getElementById("category-filter");
const favToggleBtn = document.getElementById("favorites-toggle-btn");
const favCountBadge = document.getElementById("fav-count");
const viewTitle = document.getElementById("view-title");
const noResults = document.getElementById("no-results");
const randomBtn = document.getElementById("random-btn");
const themeToggle = document.getElementById("theme-toggle");

// --- Modal Elements ---
const detailsModal = document.getElementById("details-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBadge = document.getElementById("modal-badge");
const modalSectionTitle = document.getElementById("modal-section-title");
const modalOffence = document.getElementById("modal-offence");
const modalCategory = document.getElementById("modal-category");
const modalBailable = document.getElementById("modal-bailable");
const modalCognizable = document.getElementById("modal-cognizable");
const modalDescription = document.getElementById("modal-description");
const modalPunishment = document.getElementById("modal-punishment");

// --- Core Logic & Event Bindings ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderGrid();
    updateFavCount();

    // Event Hookups
    searchInput.addEventListener("input", (e) => {
        appState.searchQuery = e.target.value.toLowerCase().trim();
        renderGrid();
    });

    actFilter.addEventListener("change", (e) => {
        appState.selectedAct = e.target.value;
        renderGrid();
    });

    categoryFilter.addEventListener("change", (e) => {
        appState.selectedCategory = e.target.value;
        renderGrid();
    });

    favToggleBtn.addEventListener("click", () => {
        appState.showOnlyFavorites = !appState.showOnlyFavorites;
        if (appState.showOnlyFavorites) {
            favToggleBtn.classList.add("active-fav");
            viewTitle.textContent = "Bookmarked Reference Sections";
        } else {
            favToggleBtn.classList.remove("active-fav");
            viewTitle.textContent = "All Legal Sections";
        }
        renderGrid();
    });

    randomBtn.addEventListener("click", launchRandomSection);
    themeToggle.addEventListener("click", toggleThemeEngine);
    modalCloseBtn.addEventListener("click", closeModal);
    
    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === detailsModal) closeModal();
    });
});

// --- Dynamic Rendering Pipeline ---
function renderGrid() {
    lawGrid.innerHTML = "";
    
    const filteredData = legalData.filter(item => {
        const matchesSearch = 
            item.section.toLowerCase().includes(appState.searchQuery) ||
            item.offence.toLowerCase().includes(appState.searchQuery) ||
            item.description.toLowerCase().includes(appState.searchQuery) ||
            item.punishment.toLowerCase().includes(appState.searchQuery);

        const matchesAct = appState.selectedAct === "all" || item.act === appState.selectedAct;
        const matchesCategory = appState.selectedCategory === "all" || item.category === appState.selectedCategory;
        const matchesFav = !appState.showOnlyFavorites || appState.favorites.includes(item.id);

        return matchesSearch && matchesAct && matchesCategory && matchesFav;
    });

    if (filteredData.length === 0) {
        noResults.classList.remove("hidden");
        lawGrid.classList.add("hidden");
        return;
    }

    noResults.classList.add("hidden");
    lawGrid.classList.remove("hidden");

    filteredData.forEach(item => {
        const isFav = appState.favorites.includes(item.id);
        const card = document.createElement("div");
        card.className = "law-card";
        card.setAttribute("role", "button");
        card.innerHTML = `
            <div class="card-top">
                <span class="badge ${item.act.toLowerCase()}">${item.act} Sec. ${item.section}</span>
                <button class="bookmark-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Bookmark this Section">★</button>
            </div>
            <h3>${item.act} - Section ${item.section}</h3>
            <div class="offence-title">${item.offence}</div>
            <p class="desc-preview">${item.description}</p>
            <div class="card-footer">
                <span>⚖️ ${item.bailable}</span>
                <span>🛑 ${item.cognizable}</span>
            </div>
        `;

        // Card navigation bypasses structural reload
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("bookmark-btn")) {
                e.stopPropagation();
                toggleBookmark(item.id, e.target);
            } else {
                openModal(item);
            }
        });

        lawGrid.appendChild(card);
    });
}

// --- Bookmark Handling ---
function toggleBookmark(id, buttonEl) {
    const index = appState.favorites.indexOf(id);
    if (index > -1) {
        appState.favorites.splice(index, 1);
        buttonEl.classList.remove("active");
    } else {
        appState.favorites.push(id);
        buttonEl.classList.add("active");
    }
    localStorage.setItem("lexguide_favs", JSON.stringify(appState.favorites));
    updateFavCount();
    if (appState.showOnlyFavorites) renderGrid();
}

function updateFavCount() {
    favCountBadge.textContent = appState.favorites.length;
}

// --- Random Card Trigger ---
function launchRandomSection() {
    const randomIndex = Math.floor(Math.random() * legalData.length);
    openModal(legalData[randomIndex]);
}

// --- Detailed Modal Display Window ---
function openModal(item) {
    modalBadge.className = `badge ${item.act.toLowerCase()}`;
    modalBadge.textContent = `${item.act} Framework`;
    modalSectionTitle.textContent = `${item.act} - Section ${item.section}`;
    modalOffence.textContent = item.offence;
    modalCategory.textContent = item.category;
    modalBailable.textContent = item.bailable;
    modalCognizable.textContent = item.cognizable;
    modalDescription.textContent = item.description;
    modalPunishment.textContent = item.punishment;

    detailsModal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent background body roll
}

function closeModal() {
    detailsModal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// --- Dark/Light Mode Theme Architecture ---
function initTheme() {
    const activeTheme = localStorage.getItem("lexguide_theme") || "light";
    document.documentElement.setAttribute("data-theme", activeTheme);
    themeToggle.textContent = activeTheme === "dark" ? "☀️ Light" : "🌙 Dark";
}

function toggleThemeEngine() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("lexguide_theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "☀️ Light" : "🌙 Dark";
}