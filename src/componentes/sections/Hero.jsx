import styles from './Hero.module.css'


function Hero(){
    return (
        <div className={styles.hero}>
            <h1>Olá, eu sou Deyson<br></br> Desenvolvedor Web</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br></br>
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam<br></br> consequat sunt nostrud amet.</p>
                <button>Download resumo</button>
        </div>
    )
}

export default Hero