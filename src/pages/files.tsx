import { graphql } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout'
import { FilesQuery } from '../../graphql-types'

interface Props {
  data: FilesQuery
}

const Files: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        <p>The current files are</p>
        <div>
          <ul>
            {data.allFile.nodes.map((node) => (
              <li key={node.name}>
                {node.name}: {node.base} {node.dir}
              </li>
            ))}
            <li>file</li>
            <li>file 23</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const filesQuery = graphql`
  query files {
    allFile {
      nodes {
        base
        dir
        name
      }
    }
  }
`

export default Files
