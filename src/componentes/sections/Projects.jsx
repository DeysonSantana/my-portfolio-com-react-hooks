import Post from '../elements/Post'
import styles from './Projects.module.css'
import sitesantecweb from '../../assets/sitesantecweb.svg'
import siterestruture from '../../assets/siterestruture.svg'
import siteceilabraga from '../../assets/siteceilabraga.svg'

function Projects(){
    return (
        <div id="projects" className={styles.project}>
            <h1>Projetos</h1>
            <div>
                <Post
                site={'https://santecweb.com.br'}
                    img={sitesantecweb}
                    title={"SanTecWeb - Desenvolvimento de Sites"}
                    description={ "Minha empresa! Especialista em desenvolvimento de sites."}
                />
                <hr/>
                <Post
                site={'https://clinicaceilabraga.com.br/'}
                    img={siteceilabraga}
                    title={"Clínica Ceila Braga"}
                    description={ "Clínica Odontológica e de estética avançada. Cliente da SanTecWeb"}
                />
                <hr/>
                <Post
                site={'https://restruture.com.br/'}
                    img={siterestruture}
                    title={"Restruture"}
                    description={ "Empresa foca em consultoria e restrturação empresarial."}
                />
                <hr/>


            </div>
        </div>
    )
}

export default Projects