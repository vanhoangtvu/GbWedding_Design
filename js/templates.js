// Templates Page Handler

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSearch();
});

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const templateCards = document.querySelectorAll('.template-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            templateCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    const templateCards = document.querySelectorAll('.template-card');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        templateCards.forEach(card => {
            const templateName = card.querySelector('.template-name').textContent.toLowerCase();
            if (templateName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Preview template
function previewTemplate(templateId) {
    console.log('Preview template:', templateId);
    // Map template ID to actual template file
    const templateFiles = {
        1: 'invitation-template-2.html',
        2: 'invitation-template-2.html',
        3: 'invitation-template-3.html',
        4: 'invitation-template-4.html',
        5: 'invitation-template-5.html',
        6: 'invitation-template-6.html'
    };
    
    const templateFile = templateFiles[templateId];
    if (templateFile) {
        window.open(templateFile, '_blank');
    }
}

// Use template - redirect to create invitation page
function useTemplate(templateId) {
    console.log('Use template:', templateId);
    // Save selected template ID
    localStorage.setItem('selectedTemplate', templateId);
    // Redirect to create invitation page
    window.location.href = 'create-invitation.html?template=' + templateId;
}
