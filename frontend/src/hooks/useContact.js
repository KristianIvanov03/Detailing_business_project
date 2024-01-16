import {useState} from 'react'
import {toast} from 'react-toastify'

export const useContact = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const sendContact = async(name, email, message) => {
        setIsLoading(true);
        setError(false)

        const response = await fetch('/api/contact',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({name,email,message})
        })

        const json = await response.json();

        if (!response.ok){
            setError(json.error);
            isLoading(false);
            toast.error(`${json.error}`, {
                position: "bottom-left"
            })
        }

        if(response.ok){
            setIsLoading(false);
            toast.success('Message sent successfuly',{
                position:"bottom-left"
            })
        }
    }

    return {sendContact, error}
}