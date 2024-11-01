let currentUser = null;
let resources = [];

// Load resources from local storage
function loadResources() {
    const storedResources = localStorage.getItem('finveda_resources');
    if (storedResources) {
        resources = JSON.parse(storedResources);
    }
}

// Save resources to local storage
function saveResources() {
    localStorage.setItem('finveda_resources', JSON.stringify(resources));
}

// Function to create a resource element
function createResourceElement(resource, isPending = false) {
    const resourceElement = document.createElement('div');
    resourceElement.className = 'resource';
    resourceElement.innerHTML = `
        <span class="resource-category">${resource.category}</span>
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
        <div class="resource-meta">
            <span><i class="fas fa-user"></i> ${resource.submittedBy}</span>
            <span><i class="fas fa-calendar"></i> ${new Date(resource.id).toLocaleDateString()}</span>
        </div>
        <a href="${resource.url}" target="_blank" class="resource-link">View Resource</a>
        <div class="resource-actions">
            ${isPending ? `
                <button onclick="approveResource(${resource.id})"><i class="fas fa-check"></i> Approve</button>
                <button onclick="rejectResource(${resource.id})"><i class="fas fa-times"></i> Reject</button>
            ` : `
                <button onclick="rateResource(${resource.id})"><i class="fas fa-star"></i> Rate</button>
                <button onclick="bookmarkResource(${resource.id})"><i class="fas fa-bookmark"></i> Bookmark</button>
            `}
        </div>
    `;
    return resourceElement;
}

// AI Consultant Chat functionality
document.getElementById('chatForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMessage = document.getElementById('userMessage').value;
    if (!userMessage.trim()) return;

    // Add user message to chat
    addChatMessage(userMessage, 'user');
    document.getElementById('userMessage').value = '';

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage);
        addChatMessage(aiResponse, 'ai');
    }, 1000);
});

function addChatMessage(message, type) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${type}-message`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Replace with actual AI integration
    const responses = {
        'investment': 'Investment is the process of putting money into financial schemes, shares, property, or commercial ventures with the expectation of achieving a profit.',
        'insurance': 'Insurance is a way to manage your risk. When you buy insurance, you purchase protection against unexpected financial losses.',
        'retirement': 'Retirement planning is the process of determining retirement income goals, risk tolerance, and the actions and decisions necessary to achieve those goals.',
    };

    for (const [key, response] of Object.entries(responses)) {
        if (userMessage.toLowerCase().includes(key)) {
            return response;
        }
    }
    return "I can help you understand various financial concepts. Please ask about specific topics like investment, insurance, or retirement planning.";
}

// Navigation Functions
function switchPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        if (panel.id === panelId) {
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('active'), 50);
        } else {
            panel.classList.remove('active');
            setTimeout(() => panel.style.display = 'none', 500);
        }
    });

    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[id="${panelId}Btn"]`)?.classList.add('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    
    // Navigation buttons
    document.getElementById('homeBtn').addEventListener('click', () => switchPanel('resourceList'));
    document.getElementById('aiConsultantBtn').addEventListener('click', () => switchPanel('aiConsultant'));
    document.getElementById('submitBtn').addEventListener('click', () => switchPanel('resourceForm'));
    document.getElementById('moderateBtn').addEventListener('click', () => switchPanel('moderationPanel'));
});

// Initialize the application
function initApp() {
    loadResources();
    displayResources();
    displayPendingResources();
}

// Function to display resources with animation
function displayResources() {
    const resourcesContainer = document.getElementById('resources');
    resourcesContainer.innerHTML = '';
    const filteredResources = filterResources(resources.filter(r => r.status === "approved"));
    filteredResources.forEach((resource, index) => {
        const resourceElement = createResourceElement(resource);
        resourceElement.style.opacity = '0';
        resourceElement.style.transform = 'translateY(20px)';
        resourcesContainer.appendChild(resourceElement);
        setTimeout(() => {
            resourceElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            resourceElement.style.opacity = '1';
            resourceElement.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Function to display pending resources for moderation
function displayPendingResources() {
    const pendingContainer = document.getElementById('pendingResources');
    pendingContainer.innerHTML = '';
    resources.filter(r => r.status === "pending").forEach((resource, index) => {
        const resourceElement = createResourceElement(resource, true);
        resourceElement.style.opacity = '0';
        resourceElement.style.transform = 'translateY(20px)';
        pendingContainer.appendChild(resourceElement);
        setTimeout(() => {
            resourceElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            resourceElement.style.opacity = '1';
            resourceElement.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Function to create a resource element
function createResourceElement(resource, isPending = false) {
    const resourceElement = document.createElement('div');
    resourceElement.className = 'resource';
    resourceElement.innerHTML = `
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
        <p><strong>Category:</strong> ${resource.category}</p>
        <a href="${resource.url}" target="_blank">View Resource</a>
        <div class="resource-actions">
            ${isPending ? `
                <button onclick="approveResource(${resource.id})"><i class="fas fa-check"></i> Approve</button>
                <button onclick="rejectResource(${resource.id})"><i class="fas fa-times"></i> Reject</button>
            ` : `
                <button onclick="rateResource(${resource.id})"><i class="fas fa-star"></i> Rate</button>
                <button onclick="bookmarkResource(${resource.id})"><i class="fas fa-bookmark"></i> Bookmark</button>
            `}
        </div>
    `;
    return resourceElement;
}

// Function to submit a new resource
document.getElementById('submitResourceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newResource = {
        id: Date.now(),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        url: document.getElementById('url').value,
        category: document.getElementById('category').value,
        status: "pending",
        submittedBy: currentUser
    };
    resources.push(newResource);
    saveResources();
    this.reset();
    displayPendingResources();
    showNotification('Resource submitted for moderation!');
    switchPanel('resourceList');
});

// Function to filter resources
function filterResources(resourceList) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    
    return resourceList.filter(resource => 
        (resource.title.toLowerCase().includes(searchTerm) || 
         resource.description.toLowerCase().includes(searchTerm)) &&
        (category === '' || resource.category === category)
    );
}

// Event listeners for search and filter
document.getElementById('searchInput').addEventListener('input', displayResources);
document.getElementById('filterCategory').addEventListener('change', displayResources);

// Functions for resource actions
function rateResource(id) {
    // Implement rating functionality
    showNotification('Rating saved!');
}

function bookmarkResource(id) {
    // Implement bookmark functionality
    const resource = resources.find(r => r.id === id);
    if (resource) {
        resource.bookmarked = !resource.bookmarked;
        saveResources();
        displayResources();
        showNotification(resource.bookmarked ? 'Resource bookmarked!' : 'Bookmark removed!');
    }
}

function approveResource(id) {
    const resource = resources.find(r => r.id === id);
    if (resource) {
        resource.status = "approved";
        saveResources();
        displayResources();
        displayPendingResources();
        showNotification('Resource approved!');
    }
}

function rejectResource(id) {
    resources = resources.filter(r => r.id !== id);
    saveResources();
    displayPendingResources();
    showNotification('Resource rejected!');
}

// User authentication
document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple authentication (in a real app, this would involve server-side validation)
    if (username && password) {
        currentUser = username;
        document.getElementById('userInfo').innerHTML = `<i class="fas fa-user"></i> ${currentUser}`;
        switchPanel('resourceList');
        if (username === 'admin') {
            document.getElementById('moderateBtn').style.display = 'inline-block';
        }
        showNotification('Welcome, ' + currentUser + '!');
    }
});

// Function to switch between panels with animation
function switchPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        if (panel.id === panelId) {
            panel.style.display = 'block';
            setTimeout(() => {
                panel.classList.add('active');
            }, 50);
        } else {
            panel.classList.remove('active');
            setTimeout(() => {
                panel.style.display = 'none';
            }, 500); // Match this to the CSS transition time
        }
    });

    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[id="${panelId}Btn"]`)?.classList.add('active');
}

// Event listeners for navigation buttons
document.getElementById('homeBtn').addEventListener('click', () => switchPanel('resourceList'));
document.getElementById('submitBtn').addEventListener('click', () => switchPanel('resourceForm'));
document.getElementById('moderateBtn').addEventListener('click', () => switchPanel('moderationPanel'));

// Function to show notifications with animation
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.getElementById('notificationContainer').appendChild(notification);

    // Trigger reflow to ensure the animation plays
    notification.offsetHeight;

    notification.style.animation = 'slideIn 0.5s ease forwards, fadeOut 0.5s ease 2.5s forwards';

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to initialize the application
function initApp() {
    loadResources();
    displayResources();
    displayPendingResources();

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('header').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', initApp);

// Implement infinite scrolling for resources
let page = 1;
const resourcesPerPage = 10;

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMoreResources();
    }
});

function loadMoreResources() {
    const start = page * resourcesPerPage;
    const end = start + resourcesPerPage;
    const newResources = resources.slice(start, end);

    if (newResources.length > 0) {
        newResources.forEach(resource => {
            const resourceElement = createResourceElement(resource);
            document.getElementById('resources').appendChild(resourceElement);
        });
        page++;
    }
}