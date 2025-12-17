class FormValidator {
    constructor() {
        this.errors = {
            name: '',
            email: '',
            gender: '',
            course: '',
            terms: ''
        };
    }

    validateName(name) {
        if (!name || name.trim() === '') {
            this.errors.name = 'Name is required';
            return false;
        }
        if (name.trim().length < 2) {
            this.errors.name = 'Name must be at least 2 characters';
            return false;
        }
        this.errors.name = '';
        return true;
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email || email.trim() === '') {
            this.errors.email = 'Email is required';
            return false;
        }
        
        if (!emailRegex.test(email)) {
            this.errors.email = 'Please enter a valid email address';
            return false;
        }
        
        this.errors.email = '';
        return true;
    }

    validateGender(gender) {
        if (!gender) {
            this.errors.gender = 'Please select your gender';
            return false;
        }
        this.errors.gender = '';
        return true;
    }

    validateCourse(course) {
        if (!course) {
            this.errors.course = 'Please select a course';
            return false;
        }
        this.errors.course = '';
        return true;
    }

    validateTerms(terms) {
        if (!terms) {
            this.errors.terms = 'You must agree to the terms and conditions';
            return false;
        }
        this.errors.terms = '';
        return true;
    }

    validateAll(formData) {
        const isValidName = this.validateName(formData.name);
        const isValidEmail = this.validateEmail(formData.email);
        const isValidGender = this.validateGender(formData.gender);
        const isValidCourse = this.validateCourse(formData.course);
        const isValidTerms = this.validateTerms(formData.terms);

        return isValidName && isValidEmail && isValidGender && 
               isValidCourse && isValidTerms;
    }

    getErrors() {
        return this.errors;
    }

    clearAllErrors() {
        this.errors = {
            name: '',
            email: '',
            gender: '',
            course: '',
            terms: ''
        };
        return this.errors;
    }
}