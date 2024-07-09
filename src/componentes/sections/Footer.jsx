import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa"
import styles from './Footer.module.css'


function Footer(){
    return (
        <div className={styles.footer} id="contato">
            <ul>
                <li> <a href="https://www.facebook.com/santecweb.ds"><FaFacebook size={30}></FaFacebook></a></li>
                <li><a href="https://www.instagram.com/santecweb_ds/"><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href="https://santecweb.com.br/"><FaTwitter size={30}></FaTwitter></a></li>
                <li><a href="https://www.linkedin.com/in/deyson-santana-b4322a149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={30}></FaLinkedin></a></li>
            </ul>
            <div>
                  <p>Copyright ©2024 All rights reserved</p>
            </div>
          
        </div>
    )
}

export default Footer