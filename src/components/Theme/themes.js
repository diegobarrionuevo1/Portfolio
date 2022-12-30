/*
----------FUENTES
*/

const Fuentes = {
    Ubuntu : `'Ubuntu', sans-serif;`,
    Italiana : `'Italiana', serif;`
}
/*
-------------TEMAS
*/

const LightTheme = {
    texto: "#1f1e1d",
    noTexto: "white",
    fondo: "#e4e4e4",
    noFondo: "#1f1e1d;",
    fuente: Fuentes,
    blurFondo:"#00000016"
}
const DarkTheme = {
    texto: "white",
    noTexto: "#1f1e1d",
    fondo: "#1f1e1d;",
    noFondo: "#e4e4e4",
    fuente: Fuentes,
    blurFondo:"#f6f6f610"
}



/*
.............. EXPORTACION GENERAL 
*/

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
}

export default Themes