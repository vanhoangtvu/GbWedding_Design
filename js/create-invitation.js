// Create Invitation Form Handler

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('coupleInfoForm');
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            saveFormData();
            // Redirect to preview page
            alert('Thông tin đã được lưu!');
            window.location.href = 'my-invitations.html';
        }
    });
    
    // Load saved data if exists
    loadSavedData();
    
    // Auto-save on input change
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            autoSaveData();
        });
    });
});

function validateForm() {
    const form = document.getElementById('coupleInfoForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
            showError(field, 'Vui lòng điền thông tin này');
        } else {
            field.classList.remove('is-invalid');
            removeError(field);
        }
    });
    
    if (!isValid) {
        alert('Vui lòng điền đầy đủ các thông tin bắt buộc (*)');
    }
    
    return isValid;
}

function showError(field, message) {
    let errorDiv = field.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-danger mt-1';
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }
    errorDiv.textContent = message;
}

function removeError(field) {
    const errorDiv = field.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.remove();
    }
}

function saveFormData() {
    const formData = new FormData(document.getElementById('coupleInfoForm'));
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
            // Handle file upload - in real app, upload to server
            if (value.size > 0) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    data[key] = e.target.result;
                    localStorage.setItem('coupleInfo', JSON.stringify(data));
                };
                reader.readAsDataURL(value);
            }
        } else {
            data[key] = value;
        }
    }
    
    localStorage.setItem('coupleInfo', JSON.stringify(data));
    console.log('Form data saved:', data);
}

function autoSaveData() {
    const formData = new FormData(document.getElementById('coupleInfoForm'));
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (!(value instanceof File)) {
            data[key] = value;
        }
    }
    
    localStorage.setItem('coupleInfoDraft', JSON.stringify(data));
}

function loadSavedData() {
    const savedData = localStorage.getItem('coupleInfo') || localStorage.getItem('coupleInfoDraft');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        const form = document.getElementById('coupleInfoForm');
        
        Object.keys(data).forEach(key => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field && field.type !== 'file') {
                field.value = data[key];
            }
        });
    }
}

// Image preview functionality
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create preview if needed
                console.log('Image loaded:', file.name);
            };
            reader.readAsDataURL(file);
        }
    });
});
