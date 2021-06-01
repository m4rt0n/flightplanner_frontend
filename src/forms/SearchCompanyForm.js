import React, { useState, useEffect } from 'react'

const SearchCompanyForm = (props) => {

    const [company, setCompany] = useState(props.currentCompany)
    useEffect(() => {
        setCompany(props.currentCompany)
    }, [props])

    const handleInputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleInputChange}
            />
            <button onClick={() => props.findFlightsByCompanyName()} >Find</button>
        </form>
    )
}

export default SearchCompanyForm;