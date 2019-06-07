import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
        query {


        allAirtable {
            edges {
              node {
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
      const projects = data.allAirtable.edges.map (item => {
          const project = item.node
          console.log(project)
      })
      
      return (

  <div
  
  
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <h1>props.{project.Project_Name}</h1>
    <h3>by {project.Your_Name}</h3>
    <p>{project.Project_Type}</p>

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
    {children}
  </div>
      
    )
}