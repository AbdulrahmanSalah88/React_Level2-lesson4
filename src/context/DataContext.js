import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: "Light" };
const reducer = (firstState, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...firstState, theme: action.Value };
        default:
            return firstState;
    }
}

export function DataProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
    const Dark = (mode) => {
        dispatch({ type: "CHANGE_THEME", Value: mode });
    };


    return (
        <ThemeContexttt.Provider value={{ ...firstState, Dark }}>
            {children}
        </ThemeContexttt.Provider>
    );
}

export default ThemeContexttt;