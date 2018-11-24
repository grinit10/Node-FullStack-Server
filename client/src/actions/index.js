import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchuser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
}