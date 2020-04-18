import { LOGIN, INITIALLIST, SETSELECTEDEMP, EMPINVIEW } from './types';
import {employees} from '../emp-details/all_emp_det';

export const login = (loginObj) => dispatch => {
    dispatch({
        type:LOGIN,
        payload:loginObj
    })
}
export const getInitialEmployees = () => dispatch => {
    dispatch({
        type:INITIALLIST,
        payload:employees
    })
}
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