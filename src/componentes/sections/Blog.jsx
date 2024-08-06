import styles from './Blog.module.css'
import Cards from '../elements/Cards'

function Blog(){
    return (
        <div id="blog" className={styles.blog}>
            <h3>Blog</h3>
            <div>

            <Cards
                title="Além do Básico: Explorando Recursos Avançados na Tecnologia para Aprimorar seu Site"
                date="11 Dez 2023"
                tags="site, dicas, tech"
                description="A evolução constante da tecnologia digital oferece uma infinidade de recursos para aprimorar seu site, transformando-o em uma ferramenta mais..."
            />
            <Cards
                title="O que é preciso para ter um site?"
                date="17 Dez 2023"
                tags="site, dicas, tech"
                description="Então, chegou o momento e você está decidido a trazer sua empresa para o mundo digital! Parabéns, ficamos felizes por ter tomado essa decisão. Mas tenho que perguntar: porque demorou tanto?"
            />

            </div>

        </div>
    )
}

export default Blog