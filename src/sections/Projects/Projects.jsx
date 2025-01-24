import styles from './ProjectsStyles.module.css'
import TerraPure from '../../assets/TerraPure.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={TerraPure} 
          link="https://github.com/znxdv/TerraPure"
          h3="TerraPure"
          p="E-Commerce App menggunakan React.Js"
        />
         <ProjectCard 
          src={TerraPure} 
          link="https://github.com/znxdv/TerraPure}"
          h3="TerraPure"
          p="E-Commerce App"
        />
         <ProjectCard 
          src={TerraPure} 
          link="https://github.com/znxdv/TerraPure}"
          h3="TerraPure"
          p="E-Commerce App"
        />
      </div>  
    </section>
  )
}

export default Projects