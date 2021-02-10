import data from '../../data/themeData.js';
import Head from './components/Head.jsx';
import Tiers from './components/Tiers.jsx';
import Benefits from './components/Benefits.jsx';
import styles from '../../styles/Themes.module.scss';


const Themes = () => {



  return (

    <div className={styles.themes}>
      <Head data={data} />
      <Tiers data={data} />
      <Benefits data={data} />



    </div>
  )
}

export default Themes;
