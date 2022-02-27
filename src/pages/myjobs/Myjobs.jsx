import React from 'react';
import './myjobs.scss';
import { KeyboardBackspace, AccessTime, Public } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CompanyRightInfo from '../../components/CompanyRightInfo/CompanyRightInfo';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchSelectCompanyAsync, fetchUserJobsAsync, fetchCompanyUser } from '../../store/actions';
import InfoUser from '../../components/InfoUser/InfoUser';

const Myjobs = () => {

    const dispatch = useDispatch();
    const company = useSelector(state => state.data.UserApplyJob);
    const loading = useSelector(state => state.data.loading)
    const applyInfo = useSelector(state => state.data.applyInfo);
    const userid = useSelector(state => state.user);



    useEffect(() => {
        dispatch(fetchUserJobsAsync(userid.id))
    }, [userid.id]);

    const handleClick = (id) => {
        if (userid.role === "employee") {
            dispatch(fetchSelectCompanyAsync(id))
        }
        else {
            dispatch(fetchSelectCompanyAsync(id))
            dispatch(fetchCompanyUser(id))
        }
    }

    if (loading) {
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
                    <p className="hTitle">Your Posts</p>
                    <span className="detail">
                        {company.length > 0 ? company.map(item => {
                            return <CompanyCard key={item.id} data={item} click={() => handleClick(item.companyId)} />
                        }) : <div>No Jobs Found</div>}
                    </span>
                </div>
            </div>
            {
                company.length !== 0 && Object.keys(applyInfo).length > 0 && userid.role === 'employee'
                    ? <CompanyRightInfo info={applyInfo} role={userid.role} />
                    : Object.keys(applyInfo).length > 0 ? <InfoUser position={applyInfo.position} type={applyInfo.type} /> : <div>Select Any Job To Get Started</div>
            }
        </div>
    )
}

export default Myjobs;