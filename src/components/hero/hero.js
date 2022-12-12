import './hero.css'

const Hero = ()=> {
    return (
        <section className='hero_container'>
            <div className='renglon_superior'>
                <span className='fuente_italiana hero_grande'>Barrionuevo Diego,</span>
            </div>
            <div className='renglon_medio'>
                <span className='fuente_ubuntu hero_grande'>Full Stack </span>
            </div>
            <div className='renglon_inferior'>       
                <span className='fuente_ubuntu hero_grande'>Developer</span>
                <span className='fuente_italiana hero_pequeño'>Trainee</span>
            </div>
        </section>
    )
}

export default Hero