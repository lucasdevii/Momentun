import { isValidEmail } from "../modules/user/user.service.js";

/**
 * 
 * @param {String password, String passwordConfirm, String email, String username} data 
 * @returns Retorna um Array de erros no formato: [{message: '', type: ''}, ...], se não tiver erros, retorna Array vazio []
 */
export const registerValidateForm = (data) => {
    const { password, passwordConfirm, email, username } = data;
    let errors = [];

    if (typeof password !== 'string' || typeof passwordConfirm !== 'string' || typeof email !== 'string' || typeof username !== 'string') {
        errors.push({ message: 'Informações inválidas.', type: 'all' });
        return errors;
    }

    if (!isValidEmail(email)) {
        errors.push({ message: 'Email inválido.', type: 'email' });
    }

    if (password !== password.trim()) {
        errors.push({ message: 'A senha não pode ter espaços.', type: 'password' });
    }

    if (password !== passwordConfirm) {
        errors.push({ message: 'As senhas não coincidem.', type: 'passwordConfirm' });
    }

    if (password.trim().length < 7) {
        errors.push({ message: 'A senha deve conter 7 ou mais caracteres.', type: 'password' });
    }

    if (username.trim().length < 5) {
        errors.push({ message: 'O nome deve conter 5 ou mais caracteres.', type: 'username' });
    }

    return errors;
};