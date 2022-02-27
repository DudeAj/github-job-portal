import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { logoutUser, resetState } from '../../store/actions';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
        dispatch(resetState())
    }, []);
    return <Redirect to='/login' />
}

export default Logout;