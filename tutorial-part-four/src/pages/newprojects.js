import React, { useState } from 'react'
import Layout from "../components/layout"

const NewProjects = () => {
    const initInputs = { firstname: "", lastname: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [namesArr, setNamesArr] = useState([])

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        // alert("Here is " inputs.fullname, "'s" inputs.value, "project" )
        e.preventDefault()
        setNamesArr([...namesArr, inputs])
        setInputs(initInputs)
    }
    return (
        <Layout>
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    name="fullname" 
                    value={inputs.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"/>
              <label>
                <select 
                    value={inputs.chosenProjectType}
                    onChange={handleChange}
                    placeholder="Project Type">
                        <option value="preCourse">Pre-Course</option>
                        <option value="personalFullStack">Personal Full Stack</option>
                        <option value="reactAPI">React reactAPI</option>
                </select>
                    </label>
                <button>Submit</button>
            </form>
            <div>
            {namesArr.map(person => <h1>{person.firstname}  {person.lastname}</h1>)}
            </div>
        </div>
        </Layout>
    )
}

export default NewProjects