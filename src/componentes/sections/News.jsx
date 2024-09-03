import styles from './News.module.css'


function News(){
    return (
        <div className={styles.news}>
            <h2>Deixe seu e-mail!</h2>
            <p>Deixe seu email registrado para você receber informaçôes em primeira mão.</p>
            <form>
                <input type="email" name="email" id="email" placeholder='seu@email.com' />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default News