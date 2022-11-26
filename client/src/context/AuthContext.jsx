import { createContext, useReducer } from "react";

const initData = {
    isLoginIn: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, ...action.payload};
    
        default:
            break;
    }
}

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initData);
    return <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;