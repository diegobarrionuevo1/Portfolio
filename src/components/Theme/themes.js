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
    texto: "black",
    noTexto: "white",
    fondo: "#e4e4e4",
    noFondo: "#1f1e1d;",
    fuente: Fuentes
}
const DarkTheme = {
    texto: "white",
    noTexto: "#1f1e1d",
    fondo: "#1f1e1d;",
    noFondo: "#e4e4e4",
    fuente: Fuentes
}



/*
.............. EXPORTACION GENERAL 
*/

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
}

export default Themes