import { createContext, useContext, useState } from "react"
import {usersData} from '../../data'

// Invoke createContext hook
export const AppContext = createContext()

// Custom Hook
export const useShareContext = () => useContext(AppContext)

export const UserContext = ({children}) => {
    const [data, setData] = useState(usersData)

    // Logic to remove each user
    const hanldeRemoveUser = (id) => {
        setData((data) => {
            return data.filter((user) => user.id !== id)
        })
    }
    return (
        <AppContext.Provider value={{data,hanldeRemoveUser}}>
            {children}
        </AppContext.Provider>
    )
}