import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';



const Home = () => {

  const [index, setIndex] = useState(0)


  const setClassName = function(num) {
    if (num === index) {
      return styles.listItemHover
    } else {
      return styles.listItem
    }
  }

  const convertUrl = function(string) {
    const url = string.split(' ').join('').toLowerCase().replace(/[^\w\s!?]/g,'');
    return url;
  }

  const User = (props) => {
    return (
      <li>
        <Link href="/themes/[id]" as={`/themes/${convertUrl(props.value)}`}>
          <p className={setClassName(props.num)} onMouseEnter={() => {
          setIndex(props.num)}}>{props.value}
          </p>
        </Link>
      </li>
    )
  }

  const users = ['Podcasters', 'Video Creators', 'Musicians', 'Visual Artists', 'Communities', 'Writers & Journalists', 'Gaming Creators', 'Nonprofits', 'Tutorials and Education', 'Creators-of-all-kinds'];
  const currentImage = `https://henryportfolio.s3-us-west-2.amazonaws.com/${index}.jpg`
  const userList = users.map(user =>
    <User value={user} num={users.indexOf(user)} key={users.indexOf(user)} />
  )


  return (
    <div>
      <div className={styles.head}>
        <h1>Who uses Patreon?</h1>
        <h3>If you’re ready to take your work to the next level and willing to open your heart to your audience, Patreon is for you.</h3>
      </div>
      <div className={styles.carousel}>
        <div className={styles.image}>
          <img src={currentImage}></img>
         </div>
        <ul className={styles.userList}>
        {userList}
        </ul>
      </div>
    </div>
  );
};

export default Home;
