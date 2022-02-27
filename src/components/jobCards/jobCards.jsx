import "./jobcards.scss";
import ReactTimeAgo from 'react-time-ago';
import { Card, Button } from '@mui/material';
import { AccessTime, Public } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';

const JobCards = (props) => {

    const history = useHistory();
    const buttonStyle = {
        color: '#21618C',
        fontWeight: '700',
        borderColor: '#21618C',
        textTransform: 'capitalize',
        fontSize: '12px'
    };

    return (
        <Card sx={{ display: 'flex', p: 1, mt: 1 }} onClick={() => history.push({ pathname: `jobinfo/${props.data.id}`, state: { id: props.data.id } })}>
            <div className="cardContainer">

                <img src={props.data.logo} alt="image2" />
                <div className="cardContent">
                    <p>{props.data.company}</p>
                    <h3>{props.data.position}</h3>
                    <div className="infoBottom">
                        <Button variant="outlined" style={buttonStyle} size="small">{props.data.type}</Button>
                        <div className="miniInfo">
                            <div className="location">
                                <Public fontSize="small" className="icon" />
                                <span>{props.data.country}</span>
                            </div>
                            <div className="postTime">
                                <AccessTime fontSize="small" className="icon" />
                                <span>{props.data ? <ReactTimeAgo date={new Date(props.data.time)} locale="en-US" /> : null}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    )
}

export default JobCards