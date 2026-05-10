import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return <ProjectDetailClient project={project} nextProject={nextProject} />
}
