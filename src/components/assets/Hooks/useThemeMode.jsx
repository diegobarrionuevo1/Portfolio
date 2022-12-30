import { useState } from "react"

const useThemeMode = () =>{
    const [theme, setTheme] = useState ("dark")
    let themesCondition = theme ==="light" ? "dark" : "light" 
    const changeTheme =()=>{
        setTheme(themesCondition)
    }
    return [theme,changeTheme]
}
export default useThemeMode