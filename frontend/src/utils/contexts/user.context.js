import { reactive } from 'vue';
import { getOwnInfo } from '../../services/user.services';

export const user = reactive({
    username: null,
    display_name: null,
    email: null
});

export const loadUser = async () => {
    const { data } = await getOwnInfo();

    Object.assign(user, data);

    console.log(user)
};