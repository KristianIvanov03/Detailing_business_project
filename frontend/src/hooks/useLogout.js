import {useAuthContext} from "./useAuthContext"
import {toast} from 'react-toastify'

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type: "LOGOUT"});
        toast.success('Logout successful', {
            position: "bottom-left"
        })
    }
    return {logout}
}