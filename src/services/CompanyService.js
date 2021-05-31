import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8081/company/";

class CompanyService {

    getAllCompanies() {
        return axios.get(COMPANY_API_BASE_URL + '/getall');
    }

    saveCompany(companyCode, companyName) {
        return axios.post(COMPANY_API_BASE_URL + '/save?' + 'code=' + companyCode, 'name=' + companyName)
    }

    getCompanyById(companyId) {
        return axios.get(COMPANY_API_BASE_URL + '/getbyid/' + companyId)
    }

    updateCompany(companyId, companyCode, companyName) {
        return axios.put(COMPANY_API_BASE_URL + '/update/'  + companyId + '?' + 'code=' + companyCode, 'name=' + companyName)
    }

    deleteCompany(companyId) {
        return axios.delete(COMPANY_API_BASE_URL + '/delete/' + companyId)
    }

    findFlightsByCompanyName(companyName){
        return axios.get(COMPANY_API_BASE_URL+'/getallflights?'+'name=' + companyName)
    }

}
export default new CompanyService()