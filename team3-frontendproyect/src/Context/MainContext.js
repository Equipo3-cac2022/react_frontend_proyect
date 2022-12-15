import {createContext} from "react";

const defaultState = {
    darkMode: true,
}

function getInitialState() {
   
    const currentState = localStorage.getItem('state');
    let data = null;
    // console.log(currentState);
   
    if (currentState == null) {
        localStorage.setItem('state', JSON.stringify(defaultState)) 
    }

    data = currentState ?  JSON.parse(currentState) : defaultState;
    return data;
}

const MainContext = createContext(getInitialState());

export default MainContext;