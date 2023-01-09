import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <ul class="mylinks">
             <li><a href="https://www.linkedin.com/in/sharon-fargo-a71b1054//" target="_blank">Linked In</a></li>
             <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
             <li><a href="https://www.yelp.com/" target="_blank">Yelp</a></li>
             <li><a href="https://fargosoftware.netlify.app/" target="_blank">Made by Fargo Software</a></li>
        </ul>      
    </footer>
    </>
  )
}
