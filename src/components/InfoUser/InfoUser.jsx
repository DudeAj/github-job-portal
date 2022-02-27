import React from 'react';
import { Button } from '@mui/material';
import './infouser.scss';
import { useSelector } from 'react-redux';

const InfoUser = ({ info, position, type }) => {
    // console.log(position);
    const allCompanyUser = useSelector(state => state.data.AllCompanyUser);

    return (
        <div className="rightContainer">
            <div className="heading">
                <h2>{position}</h2>
                <Button variant="outlined" sx={{
                    color: '#21618C',
                    fontWeight: '700',
                    borderColor: '#21618C',
                    textTransform: 'capitalize',
                    fontSize: '12px'
                }} size="small">{type}</Button>
            </div>

            <div className="UserInformation">
                {allCompanyUser.map(item => {
                    return <div className="infoUser" key={item.id}>
                        <div><b>Name:</b> {item.name}</div>
                        <div><b>Email:</b> {item.email}</div>
                        <div><b>Message:</b> {item.message}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default InfoUser