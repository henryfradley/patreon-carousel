import styles from '../../../styles/Themes.module.scss';


const Footer = (props) => {

  return (
    <div className={styles.footer}>
      <img></img>
      <div>
        <h1>Patreon for {props.data.for}</h1>
        <p>200,000+ creators use Patreon to run their creative membership business</p>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default Footer;