import {createContext, useReducer, useEffect} from "react";

export const HoursTemplateContext = createContext();

export const hoursTemplateReducer = (state, action) => {
    switch(action.type){
        case "START":
            return {template: action.payload}
        
        default:
            return state;
    }
}


  export const HoursTemplateContextProvider = ({children}) => {
    const [state, dispatchTemplate] = useReducer(hoursTemplateReducer, {
        template: []
    })
    

    useEffect(() => {
      const fetchTemplate = async () => {
        try {
          const response = await fetch('/api/template');
          const templateData = await response.json(); // Assuming the response is JSON
          dispatchTemplate({ type: 'START', payload: templateData });
          localStorage.setItem('template', JSON.stringify(templateData));
        } catch (error) {
          console.error('Error fetching template:', error);
        }
      };
    
      fetchTemplate();
    }, [dispatchTemplate]);
    return (
        <HoursTemplateContext.Provider value={{...state, dispatchTemplate}}>
            {children}
        </HoursTemplateContext.Provider>
    )
  }