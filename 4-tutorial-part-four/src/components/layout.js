import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

return (
    <div 
        css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(1.5)};
        `}
    >
          <h3
            css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            
            `}
      >
          {data.site.siteMetadata.title}
      </h3>
        <Link 
            to={`/`}
            css={css`
                float: right;
                color: rgb(192, 28, 64);
                margin-right: 5%;
                margin-left: 5%;
                &:hover {
                    color: teal;
                }
        `}
        >
                Home
      
        </Link>
        <Link
            to={`/about/`}
            css={css`
                float: right;
                color: rgb(192, 28, 64);
                &:hover {
                    color: teal;
                }
            `}
        >
            About
            </Link>
            {children}
    </div>
    )
}