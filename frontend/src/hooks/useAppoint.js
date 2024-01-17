import {useState} from 'react';
import {useAuthContext} from './useAuthContext'
import {toast} from 'react-toastify'


export const useAppoint = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {user} = useAuthContext();

    const appoint = async(day, hour) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/appointment', {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ day, hour })
        })

        const json = await response.json();

        if (!response.ok){
            setError(json.error)
            setIsLoading(false);
            toast.error(`${json.error}`, {
                position: "bottom-left"
            })

        }
        if (response.ok){
            setIsLoading(false);
            toast.success('Appointment successful',{
                position:"bottom-left"
            })
        }
    }

    return {appoint, isLoading, error};
}