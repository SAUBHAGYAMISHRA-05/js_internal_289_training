// Event Handling Module
const EventHandler = {
    // Initialize all event listeners
    initialize: function() {
        // Initialize DOM elements first
        DOMHandler.initializeElements();
        
        // Form submit event
        const form = DOMHandler.elements.form;
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
        
        // Real-time validation events
        this.setupRealTimeValidation();
    },

    // Handle form submission
    handleFormSubmit: function(event) {
        event.preventDefault(); // Prevent page reload
        
        // Hide previous errors
        DOMHandler.hideAllErrors();
        
        // Get form data
        const formData = DOMHandler.getFormData();
        
        // Validate form
        const validationResult = Validation.validateForm(formData);
        
        if (validationResult.isValid) {
            // Show success message
            DOMHandler.showSuccessMessage();
            
            // Display output
            DOMHandler.displayOutput(formData);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                DOMHandler.resetForm();
                DOMHandler.clearOutput();
            }, 3000);
        } else {
            // Show errors
            DOMHandler.showErrors(validationResult.errors);
        }
    },

    // Setup real-time validation
    setupRealTimeValidation: function() {
        const elements = DOMHandler.elements;
        
        // Name field validation
        elements.nameInput.addEventListener('input', () => {
            if (Validation.isValidName(elements.nameInput.value)) {
                elements.nameError.style.display = 'none';
                elements.nameInput.style.borderColor = '#ddd';
            }
        });

        // Email field validation
        elements.emailInput.addEventListener('input', () => {
            if (Validation.isValidEmail(elements.emailInput.value)) {
                elements.emailError.style.display = 'none';
                elements.emailInput.style.borderColor = '#ddd';
            }
        });

        // Gender selection validation
        elements.genderInputs.forEach(input => {
            input.addEventListener('change', () => {
                elements.genderError.style.display = 'none';
            });
        });

        // Course selection validation
        elements.courseSelect.addEventListener('change', () => {
            if (Validation.isValidCourse(elements.courseSelect.value)) {
                elements.courseError.style.display = 'none';
                elements.courseSelect.style.borderColor = '#ddd';
            }
        });

        // Terms checkbox validation
        elements.termsCheckbox.addEventListener('change', () => {
            if (elements.termsCheckbox.checked) {
                elements.termsError.style.display = 'none';
            }
        });
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    EventHandler.initialize();
});