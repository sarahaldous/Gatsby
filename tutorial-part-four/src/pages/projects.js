import React, { useState } from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const Projects = () => {
  const [projectTypeFilter, setProjectTypeFilter] = useState("All")

  const handleChange = e => {
    setProjectTypeFilter(e.target.value)
  }

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

      const projectTypes = ["All", ...Array.from(new Set(data.allAirtable.edges.map(project => project.node.data.Project_Type)))]
 
      const projectTypeOptions = projectTypes.map(function(type) {
        return <option value={type}>{type}</option>
        
      }) 
      
     const filteredProjects =
      data.allAirtable.edges.filter(project => project.node.data.Project_Type === projectTypeFilter || projectTypeFilter === "All")
        .map(project => (
          <div key={project.node.recordId}>
          <h1><a href={project.node.data.Project_Link} target="_blank" rel="noopener noreferrer">{project.node.data.Project_Name}</a></h1>
          <h3>by {project.node.data.Your_Name}</h3>
          <p>{project.node.data.Project_Type}</p>
          <div>
            <img class="thumbnail" src={project.node.data.Screen_Shot} alt="" frameborder="0" allowfullscreen overflow="hidden"></img>  
          </div> 
        </div>

))
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
              <select 
                  value={projectTypeFilter}
                  // onChange={handleChange}
                  onChange={handleChange}>
                 {projectTypeOptions}
              </select>
           
            {filteredProjects}

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
            ></Link>
              
           
          </div>
    
        </Layout>
      )
}

export default Projects 