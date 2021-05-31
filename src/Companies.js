import React, { useState, useEffect } from 'react';
import CompanyTable from './tables/CompanyTable';
import AddCompanyForm from './forms/AddCompanyForm';
import EditCompanyForm from './forms/EditCompanyForm';
import CompanyService from './services/CompanyService';


const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, code: '', name: '' }
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  useEffect(() => {
    getCompanies();
  }, []);

  const refreshList = () => {
    getCompanies();
    setCurrentCompany(null);
  }

  const getCompanies = () => {
    CompanyService.getAllCompanies().then(response => {
      setCompanies(response.data);
      console.log(response.data);
    })
      .catch(e => {
        console.log(e);
      });
  };

  const editRow = (company) => {
    setEditing(true)
    console.log(company)
    setCurrentCompany({ id: company.id, code: company.companyCode, name: company.companyName })
  }

  const addCompany = (company) => {
    CompanyService.saveCompany(company.code, company.name).then(response => {
      console.log(response.data);
      refreshList();
    }).catch(e => {
      console.log(e);
    });
  }

  const deleteCompany = (id) => {
    setEditing(false)
    CompanyService.deleteCompany(id).then(response => {
      console.log(response.data);
      refreshList();
    })
  }

  const updateCompany = (id, updatedCompany) => {
    setEditing(false)
    CompanyService.updateCompany(id, updatedCompany.code, updatedCompany.name)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
  }

  return (
    <div className="container">
      <h2>Companies</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit company</h2>
              <EditCompanyForm
                setEditing={setEditing}
                currentCompany={currentCompany}
                updateCompany={updateCompany}
              />
            </div>
          ) : (
            <div>
              <h2>Add company</h2>
              <AddCompanyForm addCompany={addCompany} />
            </div>
          )}
          <div className="flex-large">
            <h2>View company</h2>
            <CompanyTable companies={companies} editRow={editRow} deleteCompany={deleteCompany} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;