import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      created_at
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id} className="p-3 text-gray-500">
          <header>
            <h2 className="text-green-900">{article.title}</h2>
          </header>
          <p>{article.body}</p>
          <div>Posted at: {article.created_at}</div>
        </article>
      ))}
    </>
  )
}
