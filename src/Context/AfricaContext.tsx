import React, {useContext, createContext, useState} from 'react'

const NewContext = createContext<any>(null)
interface NewContextProps {
    children: React.ReactNode
}
export const NewcontextProvider = ({children}: NewContextProps) => {
const [name, setName] = useState<string>("Tomide")
    return (
        <NewContext.Provider value={{name}}>
            {children}
        </NewContext.Provider>
    
    )
}

export const useNewContext = () => {
    const context = useContext(NewContext)
    if (context === undefined) {
        throw new Error("useNewContext must be used within a NewcontextProvider")
    }
    return context
}