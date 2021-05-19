import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'
import EnlargedUI from '../comps/Enlarged'





export default function Test() {
  return (
    <div className={styles.base}>
     <TopBar />
     <J_Head
    title="Understand mental illness"
    subhead="Learn about the physical and mental symptoms"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/img_learn.png" 
    title="" 
    subtext=""
    routeTo=""
    Pstyle= {<div>Mental health and physical health are fundamentally linked. People living with a serious mental illness are at higher risk of experiencing a wide range of chronic physical conditions. <span className={styles.span}>To learn more, please click LEARN MORE Button.</span></div>}
    />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="BACK"
    subtext=""
    routeTo="/how_it_works"
    />
 
     <Button 
    title="LEARN MORE"
    subtext=""
    routeTo="/learn_more"
    />
    </div>
    </div>
  )
}
