/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  
     {
       resolve: `gatsby-source-airtable`,
       options: {
         apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
         tables: [
           {
             baseId: `Test`,
             tableName: `EventPlanning`,
             tableView: `EntireSchedule`, // optional
            //  queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            //  mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
             tableLinks: [`Activity`, `EventLocation`, `PotentialTopic&Themes`, `SponsorCompanies`] // optional, for deep linking to records across tables.
            //  tableName: process.env.AIRTABLE_TABLE_NAME,
            //  defaultValues: {
            //    //currently does not accept null / undefined. use empty string instead
            //    //and perform your conditional logic on name_of_field.length > 0 ? condition_1 : condition_2
            //    NAME_OF_FIELD_THAT_WILL_OTHERWISE_NOT_BE_RETURNED_IF_ALL_VALUES_ARE_BLANK: ""
            //    //... etc
            //  }
            },
          //  {
          //    baseId: `YOUR_AIRTABLE_BASE_ID`,
          //    tableName: `YOUR_TABLE_NAME`,
          //    tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //   //  can leave off queryName, mapping or tableLinks if not needed
          // }
         ]
        }
      }
  ]
}