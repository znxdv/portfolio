import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return ( 
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind Css" />
      </div>
    </section>
  )
}

export default Skills
