export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 
 * @param {String password, String passwordConfirm, String email, String username } data 
 * @returns 
 */
export const registerValidate = (data) => {
    const { password, passwordConfirm, email, username } = data;
    let errors = {
        email: [],
        username: [],
        password: [],
        passwordConfirm: [],
        all: []
    };

    if (typeof password !== 'string' || typeof passwordConfirm !== 'string' || typeof email !== 'string' || typeof username !== 'string') {
        errors.all.push('Informações inválidas.');
        return errors;
    }

    if (!isValidEmail(email)) {
        errors.emailErrors.push('Email inválido.');
    }

    if (password !== password.trim()) {
        errors.passwordErrors.push('A senha não pode ter espaços.');
    }

    if (password !== passwordConfirm) {
        errors.passwordConfirmErrors.push('As senhas não coincidem.');
    }

    if (password.trim().length < 7) {
        errors.passwordErrors.push('A senha deve conter 7 ou mais caracteres.');
    }

    if (username.trim().length < 5) {
        errors.usernameErrors.push('O nome deve conter 5 ou mais caracteres.');
    }

    return errors;
};