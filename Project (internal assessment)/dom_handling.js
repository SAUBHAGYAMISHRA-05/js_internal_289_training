class DOMHandler {
    constructor() {
        this.form = document.getElementById('registrationForm');
        this.outputSection = document.getElementById('outputSection');
        this.resetBtn = document.getElementById('resetBtn');
        this.validator = new FormValidator();
        
        this.cacheElements();
        this.bindEvents();
    }

    cacheElements() {
        this.elements = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            gender: document.querySelectorAll('input[name="gender"]'),
            course: document.getElementById('course'),
            terms: document.getElementById('terms'),
            
            // Error elements
            nameError: document.getElementById('nameError'),
            emailError: document.getElementById('emailError'),
            genderError: document.getElementById('genderError'),
            courseError: document.getElementById('courseError'),
            termsError: document.getElementById('termsError'),
            
            // Output elements
            outputName: document.getElementById('outputName'),
            outputEmail: document.getElementById('outputEmail'),
            outputGender: document.getElementById('outputGender'),
            outputCourse: document.getElementById('outputCourse'),
            outputTime: document.getElementById('outputTime')
        };
    }

    bindEvents() {
        // Real-time validation
        this.elements.name.addEventListener('blur', () => this.validateField('name'));
        this.elements.email.addEventListener('blur', () => this.validateField('email'));
        this.elements.course.addEventListener('change', () => this.validateField('course'));
        this.elements.terms.addEventListener('change', () => this.validateField('terms'));
        
        // Gender radio buttons
        this.elements.gender.forEach(radio => {
            radio.addEventListener('change', () => this.validateField('gender'));
        });

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Reset button
        this.resetBtn.addEventListener('click', () => this.resetForm());
    }

    getFormData() {
        const gender = Array.from(this.elements.gender).find(radio => radio.checked);
        
        return {
            name: this.elements.name.value.trim(),
            email: this.elements.email.value.trim(),
            gender: gender ? gender.value : null,
            course: this.elements.course.value,
            terms: this.elements.terms.checked
        };
    }

    validateField(field) {
        const formData = this.getFormData();
        
        switch(field) {
            case 'name':
                this.validator.validateName(formData.name);
                break;
            case 'email':
                this.validator.validateEmail(formData.email);
                break;
            case 'gender':
                this.validator.validateGender(formData.gender);
                break;
            case 'course':
                this.validator.validateCourse(formData.course);
                break;
            case 'terms':
                this.validator.validateTerms(formData.terms);
                break;
        }
        
        this.displayError(field);
    }

    displayError(field) {
        const errors = this.validator.getErrors();
        const errorElement = this.elements[`${field}Error`];
        
        if (errorElement) {
            errorElement.textContent = errors[field];
            errorElement.style.display = errors[field] ? 'block' : 'none';
            
            // Add error class to input
            const inputElement = this.elements[field];
            if (inputElement) {
                if (errors[field]) {
                    inputElement.style.borderColor = '#e53935';
                } else {
                    inputElement.style.borderColor = '';
                }
            }
        }
    }

    displayAllErrors() {
        const errors = this.validator.getErrors();
        
        Object.keys(errors).forEach(field => {
            this.displayError(field);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const formData = this.getFormData();
        const isValid = this.validator.validateAll(formData);
        
        if (!isValid) {
            this.displayAllErrors();
            return;
        }
        
        this.showOutput(formData);
    }

    showOutput(formData) {
        // Hide form
        this.form.style.display = 'none';
        
        // Update output elements
        this.elements.outputName.textContent = formData.name;
        this.elements.outputEmail.textContent = formData.email;
        this.elements.outputGender.textContent = formData.gender;
        this.elements.outputCourse.textContent = formData.course;
        
        // Add timestamp
        const now = new Date();
        this.elements.outputTime.textContent = now.toLocaleString();
        
        // Show output section
        this.outputSection.classList.remove('hidden');
        
        // Scroll to output
        this.outputSection.scrollIntoView({ behavior: 'smooth' });
    }

    resetForm() {
        // Clear form
        this.form.reset();
        
        // Clear errors
        this.validator.clearAllErrors();
        this.clearErrorDisplay();
        
        // Reset styles
        this.form.style.display = 'block';
        this.outputSection.classList.add('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    clearErrorDisplay() {
        const errorElements = [
            'nameError', 'emailError', 'genderError', 
            'courseError', 'termsError'
        ];
        
        errorElements.forEach(element => {
            if (this.elements[element]) {
                this.elements[element].textContent = '';
                this.elements[element].style.display = 'none';
            }
        });
        
        // Reset input borders
        ['name', 'email', 'course'].forEach(field => {
            if (this.elements[field]) {
                this.elements[field].style.borderColor = '';
            }
        });
    }
}