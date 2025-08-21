document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');
    const tipo = document.getElementById('tipo');
    const terminos = document.getElementById('terms');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validar todos los campos
        const isValid = [
            validateName(),
            validateEmail(),
            validatePassword(),
            validateConfirmPassword(),
            validateBirthdate(),
            validatePhone(),
            validateDni(),
            validateWebsite(),
            validateTipo(),
            validateTerms()
        ].every(valid => valid);
        
        if (isValid) {
            alert('Formulario enviado correctamente');
            // Aquí podrías enviar el formulario con form.submit() si no usas preventDefault()
        }
    });

    // 1. Nombre completo
    function validateName() {
        const nameInput = document.getElementById('name');
        const errorElement = document.getElementById('name-error');
        const name = nameInput.value.trim();

        if (name === '') {
            errorElement.textContent = 'El nombre es obligatorio';
            return false;
        }

        // Al menos nombre y apellido
        const parts = name.split(/\s+/).filter(part => part.length > 0);
        if (parts.length < 2) {
            errorElement.textContent = 'Debe ingresar al menos un nombre y un apellido';
            return false;
        }

        // Al menos 3 caracteres
        for (const part of parts) {
            if (part.length < 3) {
                errorElement.textContent = 'Cada nombre/apellido debe tener al menos 3 caracteres';
                return false;
            }
        }

        // Solo letras, espacios y acentos
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(name)) {
            errorElement.textContent = 'Solo se permiten letras y espacios';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 2. Email
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const errorElement = document.getElementById('email-error');
        const email = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email === '') {
            errorElement.textContent = 'El correo electrónico es obligatorio';
            return false;
        }

        if (!emailRegex.test(email)) {
            errorElement.textContent = 'Formato de correo no válido (ej: usuario@dominio.com)';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 3. Contraseña
    function validatePassword() {
        const passwordInput = document.getElementById('password');
        const errorElement = document.getElementById('password-error');
        const password = passwordInput.value;

        if (password === '') {
            errorElement.textContent = 'La contraseña es obligatoria';
            return false;
        }

        if (password.length < 8) {
            errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres';
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            errorElement.textContent = 'Debe contener al menos una mayúscula';
            return false;
        }

        if (!/[a-z]/.test(password)) {
            errorElement.textContent = 'Debe contener al menos una minúscula';
            return false;
        }

        if (!/[0-9]/.test(password)) {
            errorElement.textContent = 'Debe contener al menos un número';
            return false;
        }

        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            errorElement.textContent = 'Debe contener al menos un símbolo';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 4. Confirmar Contraseña
    function validateConfirmPassword() {
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirm_password');
        const errorElement = document.getElementById('confirm-password-error');
        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        if (confirmPassword === '') {
            errorElement.textContent = 'Por favor, confirme su contraseña';
            return false;
        }

        if (password !== confirmPassword) {
            errorElement.textContent = 'Las contraseñas no coinciden';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 5. Fecha de Nacimiento
    function validateBirthdate() {
        const birthdateInput = document.getElementById('birthdate');
        const errorElement = document.getElementById('birthdate-error');
        const dateStr = birthdateInput.value.trim();

        if (dateStr === '') {
            errorElement.textContent = 'La fecha de nacimiento es obligatoria';
            return false;
        }

        // Formatos de fecha
        let date;
        if (/^\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}$/.test(dateStr)) {
            const separator = dateStr.includes('/') ? '/' : '-';
            const parts = dateStr.split(separator);
            let day = parseInt(parts[0], 10);
            let month = parseInt(parts[1], 10) - 1; // Los meses en JS son 0-11
            let year = parseInt(parts[2], 10);

            // Ajustar años de dos dígitos
            if (year < 100) {
                year += year < 50 ? 2000 : 1900;
            }

            date = new Date(year, month, day);

            // Verificar si la fecha es válida
            if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
                errorElement.textContent = 'Fecha no válida';
                return false;
            }
        } else {
            errorElement.textContent = 'Formato no válido (use dd/mm/aaaa, dd-mm-aaaa o similar)';
            return false;
        }

        // Calcular edad
        const today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
            age--;
        }

        if (age < 18) {
            errorElement.textContent = 'Debes tener al menos 18 años';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 6. Teléfono
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const errorElement = document.getElementById('phone-error');
        const phone = phoneInput.value.trim().replace(/\D/g, ''); // Eliminar todo excepto dígitos

        // Opcional
        if (phone === '') {
            errorElement.textContent = '';
            return true;
        }

        // Debe tener exactamente 9 dígitos
        if (!/^\d{9}$/.test(phone)) {
            errorElement.textContent = 'El teléfono debe tener exactamente 9 dígitos';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 7. DNI/NIE
    function validateDni() {
        const dniInput = document.getElementById('dni');
        const errorElement = document.getElementById('dni-error');
        let dni = dniInput.value.trim().toUpperCase();

        if (dni === '') {
            errorElement.textContent = 'El DNI/NIE es obligatorio';
            return false;
        }

        // Eliminar guiones
        dni = dni.replace(/-/g, '');

        const dniRegex = /^[0-9]{8}[A-Z]$/;
        const nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

        // Validar DNI
        if (dniRegex.test(dni)) {
            const num = parseInt(dni.substr(0, 8), 10);
            const letter = dni.substr(8, 1);
            const calculatedLetter = letters.charAt(num % 23);

            if (letter !== calculatedLetter) {
                errorElement.textContent = 'La letra del DNI no es válida';
                return false;
            }
        }
        // Validar NIE
        else if (nieRegex.test(dni)) {
            const firstChar = dni.charAt(0);
            let num;

            if (firstChar === 'X') num = 0;
            else if (firstChar === 'Y') num = 1;
            else if (firstChar === 'Z') num = 2;

            num = num * 10000000 + parseInt(dni.substr(1, 7), 10);
            const letter = dni.substr(8, 1);
            const calculatedLetter = letters.charAt(num % 23);

            if (letter !== calculatedLetter) {
                errorElement.textContent = 'La letra del NIE no es válida';
                return false;
            }
        } else {
            errorElement.textContent = 'Formato de DNI/NIE no válido';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 8. Página web (opcional)
    function validateWebsite() {
        const websiteInput = document.getElementById('website');
        const errorElement = document.getElementById('website-error');
        const website = websiteInput.value.trim();

        // Opcional
        if (website === '') {
            errorElement.textContent = '';
            return true;
        }

        // Validar URL
        const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!urlRegex.test(website)) {
            errorElement.textContent = 'URL no válida (ej: https://www.dominio.com)';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // 9. Tipo de desarrollador
    function validateTipo() {
        const errorElement = document.getElementById('error-tipo');
        
        if (!tipo.value) {
            errorElement.textContent = 'Selecciona un tipo de desarrollador.';
            return false;
        }
        
        errorElement.textContent = '';
        return true;
    }

    // 10. Términos y condiciones
    function validateTerms() {
        const errorElement = document.getElementById('terms-error');

        if (!terminos.checked) {
            errorElement.textContent = 'Debes aceptar los términos y condiciones';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    // Mostrar subformulario
    function mostrarSubformulario() {
        const sub = document.getElementById("subformulario");
        const opciones = document.getElementById("opcionesTecnologia");
        sub.style.display = tipo.value ? "block" : "none";

        let opcionesHTML = "";
        if (tipo.value === "backend") {
            opcionesHTML = `
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="python"> Python</div>
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="php"> PHP</div>
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="java"> Java</div>
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="cplus"> C++</div>
            `;
        } else if (tipo.value === "frontend") {
            opcionesHTML = `
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="react"> ReactJS</div>
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="angular"> Angular</div>
                <div class="form-check"><input class="form-check-input" type="checkbox" name="tecnologia" value="vue"> Vue</div>
            `;
        } else if (tipo.value === "fullstack") {
            opcionesHTML = "<p class='text-muted'>Fullstack: todas las tecnologías.</p>";
        }
        opciones.innerHTML = opcionesHTML;
    }

    // Eventos
    tipo.addEventListener("change", function() {
        validateTipo();
        mostrarSubformulario();
    });
    
    terminos.addEventListener("change", validateTerms);

    // Validación en tiempo real
    document.getElementById('name').addEventListener('input', validateName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('confirm_password').addEventListener('input', validateConfirmPassword);
    document.getElementById('birthdate').addEventListener('input', validateBirthdate);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('dni').addEventListener('input', validateDni);
    document.getElementById('website').addEventListener('input', validateWebsite);
    
    // Inicializar el subformulario si ya hay un valor seleccionado
    if (tipo.value) {
        mostrarSubformulario();
    }
});