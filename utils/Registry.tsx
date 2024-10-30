import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addCompany(company:number) {

    const companies = await AsyncStorage.getItem('companies');
    const companiesArray = companies ? JSON.parse(companies) : [];

    if(companiesArray.indexOf(company) === -1) companiesArray.push(company);
    await AsyncStorage.setItem('companies', JSON.stringify(companiesArray));    
 }

 export async function getCompanies() {
    const companies = await AsyncStorage.getItem('companies');
    const companiesArray = companies ? JSON.parse(companies) : [];
    return companiesArray;
 }

 export async function clearCompanies() {
    await AsyncStorage.removeItem('companies');
 }