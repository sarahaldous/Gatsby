import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Outcomes from "./components/Outcomes/Outcomes"
import Images from "./components/Images/Images"
import Testimonial from "./components/Testimonial/Testimonial"
import Topics from "./components/Topics/Topics"
import Skills from "./components/Skills/Skills"
import NextSession from "./components/NextSession/NextSession"
import Reviews from "./components/Reviews/Reviews.js"
// import Book from "./components/Book/Book"
import V5 from "./components/V5/V5"
// import Events from "./components/Events/Events"
// import ContactForm from "./components/ContactForm/ContactForm"
// import Footer from "./components/Footer/Footer.js"
import Footer from "./components/Footer/Footer.js"
// import Footer from "../fsjs/components/Footer/Footer.js"
import data from "./data.json"
import { getFormId, getMeetingLink } from "../../utils"

function App() {
    
    const meetingLink = getMeetingLink()
    const formId = getFormId()

    return (
        <div>
            <Helmet>
                <title>V School - Full Stack JavaScript</title>
            </Helmet>

            {/* Only include the google ads tracker for the google version of the site */}
            {
                process.env.SOURCE === "g" &&
                <Helmet>
                    {/* Global site tag (gtag.js) - Google Ads: 877548562 */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-877548562"></script>
                    <script>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments)}
                            gtag('js', new Date());

                            gtag('config', 'AW-877548562');
                        `}
                    </script>
                </Helmet>
            }

            <Navbar />
            <Intro data={data.intro} />
            <Outcomes data={data.outcomes} />
            <Images data={data.images} />
            <Testimonial data={data.testimonial} />
            <Topics data={data.topics} />
            <Skills data={data.skills} />
            <NextSession data={data.nextSession} />
            <Reviews data={data.reviews} />
            {/* <Book data={data.book} meetingLink={meetingLink} /> */}
            <V5 data={data.v5} />
            {/*<Events data={data.events} />*/}
            {/* <ContactForm formId={formId} /> */}
            {/* Instagram */}
            <Footer data={data} />
        </div>
    )
}

export default App





// import React from "react"

// export default () => <h1>Hello</h1>