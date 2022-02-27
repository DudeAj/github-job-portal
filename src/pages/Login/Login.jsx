import { useState } from 'react';
import "./login.scss";
import { Link } from 'react-router-dom';
import { Card, FormControl, Button, Input, InputAdornment, InputLabel } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material/';
import LoginIcon from '../../assets/login.png';
import { loginUser } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const error = useSelector(state => state.user.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password))
    }

    return (
        <div className="loginContainer">
            <div className="Login">
                <Card sx={{ p: 2, px: 3 }}>
                    <div className="LoginIcon">
                        <img src={LoginIcon} className="LoginIcon" />
                    </div>
                    <p>Login</p>
                    <span className="error">{error && error.message}</span>
                    <form onSubmit={handleSubmit}>
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
                        </FormControl>

                        <Button fullWidth variant="contained" sx={{ my: 2 }} type="submit">Login</Button>
                        <div className="bottom">Not a user? <Link to='/register'>Create Account</Link></div>
                    </form>
                </Card>
            </div >

            <div className="Register">
            </div>

        </div >
    )
}

export default Login;