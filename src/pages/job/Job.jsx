import './job.scss';
import { KeyboardBackspace, AccessTime, Public } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanyDataAsync } from '../../store/actions';
import ReactTimeAgo from 'react-time-ago';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useState } from 'react';
import CustomDialog from '../../components/Dialog/Dialog';
import { useParams } from 'react-router-dom';
import CompanyRightInfo from '../../components/CompanyRightInfo/CompanyRightInfo';


const Job = (props) => {

    const params = useParams();
    const dispatch = useDispatch();
    const info = useSelector(state => state.data.companyInfo);
    const role = useSelector(state => state.user.role);

    useEffect(() => {
        dispatch(fetchCompanyDataAsync(params.id))
    }, []);


    if (Object.keys(info).length === 0) {
        return <Spinner />;
    }
    if (info.id !== props.history.location.state.id) {
        return <Spinner />;
    }

    return (
        <div className="job">
            <div className="leftContainer">
                <div className="content">
                    <Link to='/' className="back">
                        <KeyboardBackspace />
                        <span>Back To Safety</span>
                    </Link>
                    <p className="hTitle">How To Apply</p>
                    <span className="detail">
                        Please email a copy of your resume and online portfolio to <a href={`mailto:${info.email}`}>{info.email}</a> &amp; CC <a href={`mailto:${info.ccemail}`}>{info.ccemail}</a>
                    </span>
                </div>
            </div>
            <CompanyRightInfo info={info} role={role} show />
        </div>
    )
}

export default Job