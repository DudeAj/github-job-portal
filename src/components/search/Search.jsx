import { Button, Card } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';
import { useState } from 'react';
import './search.scss';


const Search = ({ handleChange }) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(input);
    }

    return (
        <Card>
            <div className="container">
                <div className="background">
                    <form onSubmit={handleSubmit} className="input-area">
                        <Card sx={{
                            display: "flex",
                            width: "100%",
                            padding: "3px",
                        }}>

                            <div className="leftContainer">
                                <WorkOutline className="icon" size="small" />
                                <input type="text" placeholder="Title, Companies, expertise or benefits" value={input} onChange={(e) => setInput(e.target.value)} />
                            </div>
                            <Button type="submit" sx={{ fontSize: '14px', textTransform: 'capitalize', padding: '8px 50px' }} size="medium" variant="contained">Search</Button>
                        </Card>
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default Search