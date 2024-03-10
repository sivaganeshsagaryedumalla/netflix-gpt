export const validate = (email, passwd) => {

    const validEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(passwd);


    if (!validEmail) {
        return 'Email is invalid'
    }
    if (!validPassword) {
        return 'Password is Invalid'
    }
    return null;
}