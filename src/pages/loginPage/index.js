import * as React from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import Logo from 'components/Logo/Logo';
import { Col, Row } from '../../../node_modules/antd/es/index';
import loginLogo from '../../assets/images/login.png';
import { setEmail, setPassword, setAuthenticated, setErrorMessage } from '../../store/reducers/login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const { email, password, successMessage, errorMessage } = useSelector((state) => state.login || {});
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };
  const handleLogin = () => {
    // Clear previous error messages
    dispatch(setErrorMessage(''));

    // Trim email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === 'demo@galton.ai' && trimmedPassword === 'g@alton123#') {
      // Successful login
      dispatch(setAuthenticated(true));
      navigate('/dashboard/default');
    } else {
      // Handle invalid login
      dispatch(setAuthenticated(false));
      dispatch(setErrorMessage('Invalid email or password.'));
    }
  };

  return (
    <div className="main-login" role="button" tabIndex={0} onKeyPress={handleKeyPress}>
      {successMessage && <p style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>{errorMessage}</p>}

      {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}> */}
      <Row justify="center">
        <Col xxl={7} xl={10} lg={11}>
          <div className="main-center">
            <div className="mid-grid ">
              <div>
                <Logo />
                <h1> Login 🎉</h1>
                <h3>
                  {' '}
                  Enter your email and password to sign into <br /> your account.
                </h3>
                <div>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    fullWidth
                    label="Email"
                    className="input-size"
                    value={email}
                    onChange={handleEmailChange}
                  />{' '}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <button className="btn-black" type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={7} xl={10} lg={11}>
          <div className="main-cente-Logo ">
            <div>
              <h4 className="text-unlock ">
                Unlock Retail Insights with Your
                <br /> Personalised AI Data Specialist.
              </h4>
              <div className="border"></div>
              <div>
                <img src={loginLogo} alt="abc" className="login-img" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
        </Grid> */}
      {/* </Box> */}
    </div>
  );
}
