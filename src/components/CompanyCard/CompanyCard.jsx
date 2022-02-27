import React from 'react';
import { Card, Button } from '@mui/material';
import "./companycard.scss";

const CompanyCard = ({ data, click }) => {
    return (
        <Card sx={{ my: 2, mx: 2, p: 1, display: "flex", height: "60px", cursor: "pointer" }} onClick={click}>
            <img className="companyLogo" src={data.logo} alt={data.company} />
            <div className="companyCard">
                <div className="cardDetail">
                    <h4 className="title">{data.position}</h4>
                    <p className="desc">{data.type}</p>
                </div>

            </div>
        </Card>
    )
}

export default CompanyCard