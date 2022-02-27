import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const CustomDialog = ({ open, handleClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");

    const userid = useSelector(state => state.user.id);
    const company = useSelector(state => state.data.companyInfo);

    const applyJob = () => {
        setStatus("")
        axios.post('/api/jobs/apply', {
            userId: userid,
            companyId: company.id,
            employerID: company.userId,
            logo: company.logo,
            position: company.position,
            companyName: company.company,
            type: company.type,
            name: name,
            email: email,
            message: desc,

        }).then(res => {
            setStatus(res.data.message);
            handleClose()


        }).catch(err => {
            setStatus(err.response.data.message);
        })

    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Fill all the details to apply for Jobs"}
            </DialogTitle>
            <DialogContent>
                <span style={{ color: "red" }}>{status}</span>
                <TextField id="outlined-basic" label="Name" variant="outlined" size="small" fullWidth sx={{ my: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
                <TextField id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic" label="About yourself" rows={4} size="small" variant="outlined" multiline fullWidth sx={{ mb: 2 }} value={desc} onChange={(e) => setDesc(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={applyJob} autoFocus>
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog