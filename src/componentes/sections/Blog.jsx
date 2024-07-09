import styles from './Blog.module.css'
import Cards from '../elements/Cards'

function Blog(){
    return (
        <div id="blog" className={styles.blog}>
            <h3>Blog</h3>
            <div>

            <Cards
                title="Making a design system from scratch"
                date="12 Feb 2030"
                tags="Design, Pattern"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <Cards
                title="Making a design system from scratch"
                date="12 Feb 2030"
                tags="Design, Pattern"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            </div>

        </div>
    )
}

export default Blog