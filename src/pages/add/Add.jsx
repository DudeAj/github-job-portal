import './add.scss';
import { KeyboardBackspace, AccessTime, Public } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';


const Add = (props) => {

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
                        Please email a copy of your resume and online portfolio to
                    </span>
                </div>
            </div>
            <div className="rightContainer">
                <div className="heading">
                    <h2>Post A New Job</h2>
                </div>
                <p>Get Ready To Boost your Origanization by hiring professionals from around the world</p>
                <Alert severity="info">Please All the details carefully you are not allowed to change after posting</Alert>
                <div className="form-data">
                    <AddForm />
                </div>

            </div>
        </div>
    )
}

export default Add;