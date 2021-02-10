import styles from '../../../styles/Themes.module.scss';


const BenefitsBox = (props) => {
  return (
    <div className={styles.benefitsBox}>
      <img></img>
      <h3>{props.data.title}</h3>
      <p>{props.data.detail}</p>


    </div>
  )
}

const Benefits = (props) => {

  const benefits = props.data.benefits;
  console.log(benefits)


  const benefitsList = benefits.map(benefit => {
    return <BenefitsBox data={benefit} key={benefits.indexOf(benefit)}/>
  })

  return (
    console.log(benefits),
    <div className={styles.benefits}>
      <h1>Benefits in this kit</h1>
      <h3>Easy to edit, customize, and personalize for your page. You can always edit your tiers even after you launch.</h3>
      <div className={styles.benefitsList}>
      {benefitsList}
      </div>
    </div>

  )
}

export default Benefits;