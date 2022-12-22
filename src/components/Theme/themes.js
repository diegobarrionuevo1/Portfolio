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
    texto: "white",
    noTexto: "black",
    fondo: "#1f1e1d;",
    noFondo: "#e4e4e4",
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