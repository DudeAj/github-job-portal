import React from 'react';
import { Button } from '@mui/material';
import { AccessTime, Public } from '@mui/icons-material';
import ReactTimeAgo from 'react-time-ago';
import CustomDialog from '../Dialog/Dialog';
import "./companyrightinfo.scss";
import { useState } from 'react';

const CompanyRightInfo = ({ info, role, show }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(info);
    return (
        <div className="rightContainer">
            <div className="heading">
                <h2>{info.position}</h2>
                <Button variant="outlined" sx={{
                    color: '#21618C',
                    fontWeight: '700',
                    borderColor: '#21618C',
                    textTransform: 'capitalize',
                    fontSize: '12px'
                }} size="small">{info.type}</Button>
            </div>

            <div className='time'>
                <AccessTime fontSize="small" className="icon" />
                <span>{<ReactTimeAgo date={new Date(info.time)} locale="en-US" />}</span>
            </div>

            <div className="company">
                <div className="detailsContainer">
                    <img src={info.logo} alt={info.company} />
                    <div className="details">
                        <p>{info.company}</p>
                        <div className="location">
                            <Public fontSize="small" className="icon" />
                            <span>{info.country}</span>
                        </div>
                    </div>
                </div>
                {role === "employee" && show ? <Button sx={{ backgroundColor: '#26A0F1' }} onClick={handleClickOpen} variant='contained' size='medium'>Apply Now</Button> : null}
                <CustomDialog open={open} handleClose={handleClose} />

            </div>

            <div className="informations">
                <p><b>Role:</b> {info.position}</p>
                <p><b>Location:</b> {info.address}</p>
                <h3>Job Description</h3>
                <p>{info.description}</p>

                <h3>Required Technology</h3>
                {info.technology}

                <h3>Responsibility</h3>
                {info.responsibility}

                <h3>Educational Quilifications</h3>
                {info.education}

            </div>
        </div>
    )
}

export default CompanyRightInfo