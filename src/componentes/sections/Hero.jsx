import styles from './Hero.module.css'


function Hero(){
    return (
        <div className={styles.hero}>
            <h1>Olá, eu sou Deyson<br></br> Desenvolvedor Web</h1>
            <p>Especialista na criação de websites! Com ❤️ e tecnologia ajudo você e sua empresa a ter presença digital através da criação de sites
            </p>
                <button> <a href="http://santecweb.com.br/quem-somos" target="_blank" rel="noopener noreferrer">Download resumo</a></button>
        </div>
    )
}

export default Hero