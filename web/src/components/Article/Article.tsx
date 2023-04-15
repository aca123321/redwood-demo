import { Link, routes } from '@redwoodjs/router'
import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article key={article.id} className="p-3 text-gray-500">
      <header>
        <Link to={routes.article({ id: article.id })}>
          <h2 className="text-green-900">{article.title}</h2>
        </Link>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.created_at}</div>
    </article>
  )
}

export default Article
