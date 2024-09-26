document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Prevenir o envio do formulário se houver erros
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        // Limpar mensagens de erro anteriores
        clearErrors();

        // Validar nome de usuário
        const username = document.getElementById('username').value;
        if (username.trim() === '') {
            showError('usernameError', 'O nome de usuário é obrigatório.');
            isValid = false;
        }

        // Validar e-mail
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('emailError', 'Por favor, insira um e-mail válido.');
            isValid = false;
        }

        // Validar senha
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            showError('passwordError', 'A senha deve ter pelo menos 6 caracteres.');
            isValid = false;
        }

        // Validar confirmação de senha
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'As senhas não coincidem.');
            isValid = false;
        }

        return isValid;
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Prevenir o envio do formulário se houver erros
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        // Limpar mensagens de erro anteriores
        clearErrors();

        // Validar CPF
        const cpf = document.getElementById('cpf').value;
        if (!isValidCPF(cpf)) {
            showError('cpfError', 'CPF inválido.');
            isValid = false;
        }

        return isValid;
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    function isValidCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]/g, '');

        // Verifica se o CPF possui 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // Valida o primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        if (remainder !== parseInt(cpf.charAt(9))) {
            return false;
        }

        // Valida o segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        if (remainder !== parseInt(cpf.charAt(10))) {
            return false;
        }

        return true;
    }
});
