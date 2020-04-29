import { LOGIN, INITIALLIST, SETSELECTEDEMP, EMPINVIEW, APIURL } from './types';
import {employees} from '../emp-details/all_emp_det';
import  axios  from 'axios'

export const login = (loginObj) => dispatch => {
    dispatch({
        type:LOGIN,
        payload:loginObj
    })
}
export const getInitialEmployees = () => dispatch => {
    axios.get(`${APIURL}/allEmployees`).then(
        res => {
            res.data.forEach(obj=>{
                obj.availability = obj.availability.toLowerCase()==='true';
            })
            dispatch({
                type: INITIALLIST,
                payload: res.data
            })
        })
};
export const setSelectedEmp = (selectedEmp) => dispatch => {
    dispatch({
        type:SETSELECTEDEMP,
        payload:selectedEmp
    })
}

export const setEmpInView = (employees) => dispatch => {
    dispatch({
        type:EMPINVIEW,
        payload:employees
    })
}