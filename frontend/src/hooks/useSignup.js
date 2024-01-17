import {useState} from 'react';
import {useAuthContext} from './useAuthContext';
import {toast} from 'react-toastify'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (firstName, lastName, email, password, phoneNumber) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, lastName, email, password, phoneNumber})
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
            toast.error(`${json.error}`, {
                position: "bottom-left"
            })
        }
        if(response.ok){
            localStorage.setItem("user", JSON.stringify(json));
            dispatch({type:'LOGIN', payload: json});
            setIsLoading(false);
            toast.success("Registration successful", {
                position: "bottom-left"
            })
        }
    }
    return {signup, isLoading, error}
}