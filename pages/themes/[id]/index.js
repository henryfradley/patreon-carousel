import { useState } from 'react';
import { useRouter } from 'next/router'
import themeData from '../../../data/themeData.js';
import Head from './components/Head.jsx';
import Tiers from './components/Tiers.jsx';
import Benefits from './components/Benefits.jsx';
import Creators from './components/Creators.jsx';
import Footer from './components/Footer.jsx';
import styles from '../../../styles/Themes.module.scss';

const Themes = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(themeData[`${id}`]);



  return (

    <div className={styles.themes}>
        <Head data={data} />
        <Tiers data={data} />
        <Benefits data={data} />
        <Creators data={data} />
        <Footer data={data} />
    </div>
  )
}

export default Themes;
