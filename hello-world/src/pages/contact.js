import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"

const Contact = () => {
    return (
        <Layout>
             <p>Send us a message!</p>
        <button>Submit</button>
        <p>Or just go shopping <a href="https://www.amazon.com/" target="_blank" >on Amazon</a></p>
        </Layout>
    )
}

export default Contact
// export default () => {
//     return (
//     <div style={{ color: `teal`}}>
//         {/* <Link to="/">Home</Link> */}
//         {/* <Header headerText="Contact" /> */}
//         <Header />
//         <p>Send us a message!</p>
//         <button>Submit</button>
//         <p>Or just go shopping <a href="https://www.amazon.com/" target="_blank" >on Amazon</a></p>
//         <Footer />
//     </div>
// )
//     }