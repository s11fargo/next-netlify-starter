import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <ul class="mylinks">
             <li> style="display:inline" <a href="https://fargosoftware.netlify.app/">Made by Fargo Software</a></li>
             <li> style="display:inline" <a href="https://www.linkedin.com/in/sharon-fargo-a71b1054//">Linked In</a></li>
             <li> style="display:inline" <a href="https://www.instagram.com/">Instagram</a></li>
             <li> style="display:inline" <a href="https://www.yelp.com/">Yelp</a></li>
        </ul>      
    </footer>
    </>
  )
}
