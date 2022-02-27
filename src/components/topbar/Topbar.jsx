import './topbar.scss';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { } from '../../store/actions';

const Topbar = () => {
    const role = useSelector(state => state.user.role);
    return (
        <div className="topbar">
            <p><span>Github</span> Jobs</p>
            <div>
                {role === "employer"
                    ? <>
                        <Link to="/my-jobs"><Button variant='text'>Jobs</Button></Link>
                        <Link to="/add"><Button variant='text'>Post Jobs</Button></Link>
                        <Link to="/logout"><Button variant='text'>Logout</Button></Link>
                    </>
                    : <>
                        <Link to="/my-jobs"><Button variant='text'>Applied Jobs</Button></Link>
                        <Link to="/logout"><Button variant='text'>Logout</Button></Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Topbar