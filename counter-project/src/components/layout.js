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
        <div className="siteTitle"
            css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)}
            ;
            `}
        >
        <h1>{data.site.siteMetadata.title}</h1>
            <div className="navbar">
                <Link to={`/`}>
                    <h3
                            css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                            color: orange;
                            `}
                        >  Home         
                    </h3>
                </Link>
                <Link to={`/counter/`}>
                    <h3
                            css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                            color: cornflowerBlue;
                            `}
                        >  Counter         
                    </h3>
                </Link>
                <Link to={`/hooks-counter`}>
                    <h3
                            css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                            color: seaGreen;
                            `}
                        >  Hooks Counter         
                    </h3>
                </Link>
            </div>
            {children}
    </div>
    )
}