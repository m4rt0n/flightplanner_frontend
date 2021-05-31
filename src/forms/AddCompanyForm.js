import React, { useState } from 'react'

const AddCompanyForm = (props) => {

    const initialFormState = { id: null, name: '', code: '' }
    const [company, setCompany] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCompany({ ...company, [name]: value })
    }


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (!company.name || !company.code) return

                props.addCompany(company)
                setCompany(initialFormState)
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
            <button>Add new company</button>
        </form>
    )
}

export default AddCompanyForm