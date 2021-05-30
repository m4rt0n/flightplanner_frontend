import React, { useState, useEffect } from 'react'

const EditCompanyForm = (props) => {
    const [company, setCompany] = useState(props.currentCompany)

    useEffect(() => {
        setCompany(props.currentCompany)
    }, [props])

    const handleInputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target

        setCompany({ ...company, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                props.updateCompany(company.id, company)
            }}
        >

            <label>Code</label>
            <input
                type="text"
                name="code"
                value={company.code}
                onChange={handleInputChange}
            />
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleInputChange}
            />
 <button>Update company</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
        </form>
    )
}

export default EditCompanyForm