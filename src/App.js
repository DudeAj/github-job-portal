import './App.scss';
import Main from './pages/main/Main';
import Job from './pages/job/Job';
import Add from './pages/add/Add';
import Login from './pages/Login/Login';
import Logout from './pages/logout/logout';
import MyJobs from './pages/myjobs/Myjobs';
import Register from './pages/Register/Register';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import axios from 'axios';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserInfo } from './store/actions';
import history from './config/history';
import { Modal } from '@mui/material';
import Spinner from './components/UI/Spinner/Spinner';
function App() {

  const token = localStorage.getItem('jobToken');
  axios.defaults.baseURL = "https://github-server-setup.herokuapp.com/";
  //axios.defaults.baseURL = "http://localhost:9000";
  axios.defaults.headers = { 'auth-token': token }
  const dispatch = useDispatch();

  const error = useSelector(state => state.data.error);
  const userinfo = useSelector(state => state.user);

  useEffect(() => {
    if (token) {

      dispatch(loadUserInfo(token));

    } else {

      history.push('/login');
    }

  }, [token]);


  return (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      {userinfo.id !== null
        ?
        < >
          <Topbar />
          <Route path="/" exact component={Main} />
          <Route path="/jobinfo/:id" component={Job} />
          <Route path="/add" component={Add} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/my-jobs" component={MyJobs} />
          <Footer />
        </> : null}
    </Switch>
  );
}
export default App;
