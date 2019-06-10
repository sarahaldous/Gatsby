import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default () => {
  
   
   const data = useStaticQuery(
        graphql`
        query {
          allAirtable {
              edges {
                node {
                  recordId 
                  data {
                    Your_Name
                    Project_Type
                    Project_Name
                    Project_Link
                    Link_To_Portfolio
                  }
                }
              }
            }
          }
        `

      )
      console.log(data)
      const projects = data.allAirtable.edges.map (project => (
          <div key={project.node.recordId}>
            <h1><a href={project.node.data.Project_Link} target="_blank">{project.node.data.Project_Name}</a></h1>
            <h3>by {project.node.data.Your_Name}</h3>
            <p>{project.node.data.Project_Type}</p>
          </div>
        )
      )
      
      return (
        <Layout>
          <div
            css={css`
              margin: 0 auto;
              max-width: 700px;
              padding: ${rhythm(2)};
              padding-top: ${rhythm(1.5)};
            `}
          >
            {projects}

            <Link to={`/`}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(2)};
                  display: inline-block;
                  font-style: normal;
                `}
              >
              </h3>
            </Link>
            <Link
              to={`/about/`}
              css={css`
                float: right;
              `}
            >
              About
            </Link>
           
          </div>
    
        </Layout>
      )
}