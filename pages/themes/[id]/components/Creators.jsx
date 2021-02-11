import styles from '../../../../styles/Themes.module.scss';

const CreatorBox = (props) => {

  return (
    <div className={styles.creatorBox}>
      <div className={styles.topImage}>
        <div className={styles.circleImage}></div>
      </div>

      <h1>{props.data.name}</h1>
      <p>is creating {props.data.about}</p>
    </div>
  )
}



const Creators = (props) => {



  const creators = props.data.creators;

  const creatorList = creators.map(creator => {
    return <CreatorBox key={creators.indexOf(creator)} data={creator} />
  })


  return (
    <div className={styles.creators}>
      <h1>Creators using these benefits</h1>
      <div className={styles.creatorList}>
        {creatorList}

      </div>
    </div>

  )
}

export default Creators;