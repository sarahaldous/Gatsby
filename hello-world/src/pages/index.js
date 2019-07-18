import React from "react"
import {Link} from "gatsby"

import Layout from '../components/layout'

const Index = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>Just doing some Gatsby stuff here.</h2>
            <h3>You can contact us here: <Link to="/contact"> Contact Page </Link></h3>
        </Layout>
    )
}
// import Paragraph from "../components/paragraph"
{/* <link href="https://fonts.googleapis.com/css?family=Cousine&display=swap" rel="stylesheet"></link> 
// font-family: 'Cousine', monospace;
<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
</link>
// font-family: 'Ubuntu', sans-serif;
<link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet"></link>
// font-family: 'Righteous', cursive; */}

// export default () => 
//  (
//     <div style={{ backgroundColor: `#DEB887`, color: `black`, fontFamily: `Cousine` }}>
//         {/* <Link to="/contact/">Contact</Link> */}
//         <Header headerText="Hello, Monkeys!" arbitraryPhrase="You are Wonderful!"/>
//         <paragraph paragraphText="So many words"/>
//         <p>What a world.</p>
//         <img src="https://source.unsplash.com/random/400x200" alt="" />
//         <Footer />
//         </div>
//   )
  export default Index
