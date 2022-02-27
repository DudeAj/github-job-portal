import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import {
    TextField,
    Select,
    MenuItem,
    Button,
    InputLabel,
    FormControl,
    CircularProgress,
    Modal,
    Alert
} from '@mui/material';
import './addform.scss';
import { setError } from '../../store/actions'

const AddForm = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.id);
    const [loading, setLoading] = useState(false);
    const error = useSelector(state => state.data.error);
    const [status, setStatus] = useState("");

    const [formValue, setFormValue] = useState({
        logo: "",
        company: "",
        position: "",
        workplace: "Remote",
        email: "",
        ccemail: "",
        address: "",
        country: "",
        type: "Full-Time",
        description: "",
        education: "",
        responsibility: "",
        technology: "",
        userid: userId
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };

    const SubmitJob = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("/api/jobs/add-job", formValue);
            setStatus(response.data.message)
            setLoading(false);
        }
        catch (error) {
            setStatus(error.response.data.message)
            dispatch(setError(error.response.data))
            setLoading(false);
        }
    }
    return (
        <form onSubmit={SubmitJob} className="contactContainer">
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Logo Link"
                size="small"
                name="logo"
                onChange={handleChange}
                helperText="Link Company Logo Link"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Company"
                name="company"
                size="small"
                onChange={handleChange}
                helperText="Please Enter Company Name"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Position"
                name="position"
                onChange={handleChange}
                size="small"
                helperText="Opening For"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Mail"
                size="small"
                onChange={handleChange}
                name="email"
                rows={4}
                helperText="contact Email"
                margin="normal"
                inputProps={{ inputMode: 'email' }}
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="CC Email"
                size="small"
                onChange={handleChange}
                name="ccemail"
                rows={4}
                helperText="Cc Mail"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Address"
                onChange={handleChange}
                size="small"
                name="address"
                helperText="Please Enter Addresss"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Country"
                onChange={handleChange}
                size="small"
                name="country"
                helperText="Please Enter Country"
                margin="normal"
            />

            <FormControl
                fullWidth
                margin="normal"
                size="small"
            >
                <InputLabel id="jobtype-label">Job Type</InputLabel>
                <Select
                    labelId="jobtype-label"
                    label="Job type"
                    name='type'
                    value={formValue.type}
                    onChange={handleChange}


                >
                    <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                    <MenuItem value={"Part=Time"}>Part-Time</MenuItem>

                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" size="small">
                <InputLabel id="demo-simple-select-label">Workplace</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="workplace"
                    label="Workplace"
                    value={formValue.workplace}
                    onChange={handleChange}

                >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="On-Site">On-site</MenuItem>
                    <MenuItem value="Office">Office</MenuItem>

                </Select>
            </FormControl>

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Description"
                size="small"
                name="description"
                onChange={handleChange}
                multiline
                rows={6}
                helperText="Job Description"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Education"
                size="small"
                multiline
                onChange={handleChange}
                name="education"
                rows={4}
                helperText="Required Education"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Responsibility"
                size="small"
                name="responsibility"
                onChange={handleChange}
                multiline
                rows={4}
                helperText="What are the Responsibility"
                margin="normal"
            />

            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required Technology"
                size="small"
                name="technology"
                onChange={handleChange}
                multiline
                rows={4}
                helperText="Required Technology You Need To Know"
                margin="normal"
            />

            <Modal
                open={loading}
                onClose={() => setLoading(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'grid', placeItems: 'center' }}
            >
                {error ? <div>{error.message}</div> : <CircularProgress color="secondary" />}
            </Modal>
            {error
                ? <Alert severity="warning">{error.message}</Alert>
                :
                status
                    ? <Alert severity="success">{status}</Alert>
                    : null

            }
            <Button type="submit" variant="contained" size="large">Post JoB</Button>

        </form >
    )
}

export default AddForm;