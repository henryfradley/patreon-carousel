import styles from '../../../../styles/Themes.module.scss';



const Includes = (props) => {
  return (
    <div className={styles.includes}>
      {props.info}
    </div>
  )
}



const TierBox = (props) => {

  const includes = props.details.includes
  const includesList = includes.map(info => {
    return <Includes info={info} key={includes.indexOf(info)}/>
  })

  return (
    <div className={styles.tierBox}>
      <img></img>
      <h1>Patron pays ${props.details.price} per month</h1>
      <p>{props.details.info}</p>
      <div className={styles.includesList}>
        {includesList}
      </div>

    </div>
  )
}




const Tiers = (props) => {

  const tierData = props.data.tiers
  const tierBoxes = tierData.map(tier => {
    return <TierBox details={tier} key={tierData.indexOf(tier)} />
  })

  return (
    <div className={styles.tiers}>
      <div>
        <h1>Get started now with fully customizable tiers and benefits</h1>
        <h3>Start now and personalize later to make a membership your patrons will love.</h3>
      </div>
      <div className={styles.boxHolder}>
        {tierBoxes}
      </div>
    </div>
  );

};

export default Tiers;