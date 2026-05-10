import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'
import BlogDetailClient from './BlogDetailClient'

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogDetail({ params }) {
  const post = blogs.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  // Get next and previous posts for navigation
  const currentIndex = blogs.findIndex((p) => p.slug === params.slug)
  const nextPost = blogs[(currentIndex + 1) % blogs.length]
  const prevPost = blogs[(currentIndex - 1 + blogs.length) % blogs.length]

  return <BlogDetailClient post={post} nextPost={nextPost} prevPost={prevPost} />
}
