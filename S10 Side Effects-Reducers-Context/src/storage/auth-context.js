import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;