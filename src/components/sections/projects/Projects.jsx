import React from 'react'
import { projects } from '../../../config'
import ProjectCard from '../../common/projectCard/ProjectCard'
import Title from '../../common/title/Title'
import ContainerLayout from '../../common/containerLayout/ContainerLayout'

function Projects() {
  return (
    <ContainerLayout id="projects">
      <Title title={"Projects I've build"} />
      <>
        {projects.map((project) => {
          return <ProjectCard {...project} key={project.hrefOnline} />
        })}
      </>
    </ContainerLayout>
  )
}

export default Projects
