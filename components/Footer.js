import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a class="footer-links" href="https://fargosoftware.netlify.app/">Made by Fargo Software</a>
        <a class="footer-links" href="https://www.linkedin.com/in/sharon-fargo-a71b1054//">Linked In</a>
        <a class="footer-links" href="https://www.instagram.com/">Instagram</a>
        <a class="footer-links" href="https://www.yelp.com/">Yelp</a>
      </footer>
    </>
  )
}
