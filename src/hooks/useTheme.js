import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    // if outside scope of context throw error
    if ( context === undefined ){
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    return context
}