import {HoursTemplateContext} from '../context/HoursTemplateContext'
import {useContext} from 'react'
export const useHoursTemplateContext = () => {
    const context = useContext(HoursTemplateContext);
    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }
    return context;
}