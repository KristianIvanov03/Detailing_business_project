import {createContext, useReducer, useEffect} from "react";

export const HoursTemplateContext = createContext();

export const hoursTemplateReducer = (state, action) => {
    switch(action.type){
        case "START":
            return {template: action.payload}
        case "REMOVE":
            return removeHour(state, action.payload);
        case 'ADD':
            return addHour(state, action.payload);
        default:
            return state;
    }
}
const removeHour = (state, { day, timeSlot }) => {
    const updatedTemplate = { ...state.template };
  
    // Find the index of the day
    const dayIndex = updatedTemplate.findIndex(appointment => appointment.day === day);
  
    // If the day is found
    if (dayIndex !== -1) {
      // Remove the specified time slot from the timeslots array
      updatedTemplate[dayIndex].timeSlots = updatedTemplate[dayIndex].timeSlots.filter(
        slot => slot !== timeSlot
      );
  
      // If there are no more time slots for that day, remove the entire day
      if (updatedTemplate[dayIndex].timeSlots.length === 0) {
        updatedTemplate.splice(dayIndex, 1);
      }
    }
  
    return { template: updatedTemplate };
};
const addHour = (state, { day, timeSlot }) => {
    const updatedTemplate = { ...state.template };
  
    // Find the index of the day
    const dayIndex = updatedTemplate.findIndex(appointment => appointment.day === day);
  
    // If the day is found
    if (dayIndex !== -1) {
      // Add the specified time slot to the timeslots array
      updatedTemplate[dayIndex].timeSlots.push(timeSlot);
    } else {
      // If the day is not found, create a new day with the specified time slot
      updatedTemplate.push({ day, timeSlots: [timeSlot] });
    }
  
    return { template: updatedTemplate };
  };

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