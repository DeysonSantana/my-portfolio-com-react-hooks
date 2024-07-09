import styles from '../elements/Post.module.css'
import { useState } from 'react'

function Post ({site, img, title, description}) {

    const [info, setInfo] = useState(false)

    function infoOn () {
        setInfo (true)
    }
    function infoOff () {
        setInfo (false)
    }

    return (
        <div onMouseLeave={infoOff} onMouseEnter={infoOn}  className={styles.post}>

            <div >
                <a  href={site} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt='Error' />
               </a>
            </div>

            {info === true  && (
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            )}

        </div>
    )
}

export default Post