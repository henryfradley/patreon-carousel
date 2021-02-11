import styles from '../../../../styles/Themes.module.scss';


const Head = (props) => {



  return (



    <div className={styles.head}>
      <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.info}</p>
      <button>Start with this kit</button>
      </div>

      <div className={styles.themeImage}>

      </div>


    </div>
  );

};

export default Head;