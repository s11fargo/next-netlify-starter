import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <ul class="mylinks">
             <li><a href="https://www.linkedin.com/in/sharon-fargo-a71b1054" target="_blank">Linked In</a></li>
             <li><a href="https://www.yelp.com" target="_blank">Yelp</a></li>
             <li><a href="https://fargonotary.netlify.app" target="_blank">Fargo Notary</a></li>
        </ul>      
    </footer>
    </>
  )
}
