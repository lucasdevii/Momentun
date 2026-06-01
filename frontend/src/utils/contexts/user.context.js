export let user = {username: null, display_name: null, email: null};

export const setUser = ({username, display_name, email}) => {
    user = {username: username || null, display_name: display_name || null, email: email || null};
};
