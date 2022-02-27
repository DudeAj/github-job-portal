import { useState, useEffect } from 'react';
import "./register.scss";
import { Link } from 'react-router-dom';
import { Card, FormControl, Button, Input, InputAdornment, InputLabel, Select, MenuItem } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material/';
import RegisterIcon from '../../assets/register.png';
import { registerUser } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employer');

    const error = useSelector(state => state.user.error);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, role))

    }
    return (
        <div className="loginContainer">
            <div className="Login">
                <Card sx={{ p: 2, px: 3 }}>
                    <div className="LoginIcon">
                        <img src={RegisterIcon} className="LoginIcon" />
                    </div>
                    <p>Create Account</p>
                    <span className="error">{error && error.message}</span>
                    <form onSubmit={handleSubmit}>

                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="input-password">
                                Enter Name
                            </InputLabel>
                            <Input
                                id='input-password'
                                sx={{ mb: 3 }}
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="input-email">
                                Email Address
                            </InputLabel>
                            <Input
                                id="input-email"
                                sx={{ mb: 3 }}
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                fullWidth
                            />
                        </FormControl>

                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="input-password">
                                Enter password
                            </InputLabel>
                            <Input
                                id='input-password'
                                sx={{ mb: 3 }}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                            />

                            <FormControl fullWidth margin="normal" size="small">
                                <InputLabel id="demo-simple-select-label">Workplace</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="workplace"
                                    label="Workplace"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}

                                >
                                    <MenuItem value="employer">To Hire</MenuItem>
                                    <MenuItem value="employee">Looking for Job</MenuItem>

                                </Select>
                            </FormControl>
                        </FormControl>

                        <Button fullWidth variant="contained" sx={{ my: 2 }} type="submit">Create Account</Button>
                        <div className="bottom">Already a User? <Link to='/login'>Sign in</Link></div>
                    </form>
                </Card>
            </div >
        </div >
    )
}

export default Register;