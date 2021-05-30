import React from 'react'

const CompanyTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.companies.length > 0 ? (
                props.companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.code}</td>
                        <td>{company.name}</td>
                        <td>
                            <button className="editButton"
                                onClick={() => { props.editRow(company) }}
                            >Edit</button>
                            <button className="deleteButton"
                                onClick={() => props.deleteCompany(company.id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No companies</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default CompanyTable