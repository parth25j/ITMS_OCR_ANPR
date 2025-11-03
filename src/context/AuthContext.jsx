import React,{useState, createContext} from 'react'
import { useNavigate } from 'react-router'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(localStorage.getItem("token") || null)


    const login = async (email,password) =>{
        try {
            const response = await fetch("http://localhost:5137/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              });

            const data = await response.json()
           if(data.token){
            setToken(data.token)
            localStorage.setItem("token",data.token)
           }
            return data
        } catch (error) {
            console.log(`login error ${error}`)
        }
    }

    const logout = () =>{
        setToken(null)
        localStorage.removeItem('token')
    
    }
    
    return(
       <AuthContext.Provider value={{ login,token,logout }}>
        {children}
       </AuthContext.Provider>
    )
}