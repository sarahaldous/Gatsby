import React, { useState } from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const [projectTypeFilter, setProjectTypeFilter] = useState("All")

  const handleChange = e => {
    setProjectTypeFilter(e.target.value)
  }

   const data = useStaticQuery(
        graphql`
        query {
          allAirtable  {
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
          <div className="projectCard" key={project.node.recordId}>
            <h1><a href={project.node.data.Project_Link} target="_blank" rel="noopener noreferrer">{project.node.data.Project_Name}</a></h1>
            <h3>by {project.node.data.Your_Name}</h3>
            <p>{project.node.data.Project_Type}</p>
            <p><a href={project.node.data.Link_To_Portfolio} target="blank" rel="noopener noreferrer">Portfolio</a></p>
            <p><a href={project.node.data.Screenshot} target="_blank" rel="noopener noreferrer">{project.node.data.Screenshot}</a></p>
            
            <div>
              {/* <img class="thumbnail" src={project.node.data.Screen_Shot} alt="" frameborder="0" allowFullScreen overflow="hidden"></img>   */}
            </div> 
        </div>

))
      return (
        <Layout>
          <div
            css={css`
              margin: 0 auto;
              max-width: 700px;
            `}
          >
            <div className="containsDropDown">
              <select 
                  className="dropDownMenu"
                  value={projectTypeFilter}
                  onChange={handleChange}>
                 {projectTypeOptions}
              </select>
            </div>
           
            {filteredProjects}

            <Link to={`/`}>
              <h3
                css={css`
                  
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