import * as React from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import Logo from 'components/Logo/Logo';
import { Col, Row } from '../../../node_modules/antd/es/index';
import loginLogo from '../../assets/images/login.png';
export default function LoginPage() {
  return (
    <div className="main-login">
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
                  <TextField id="standard-basic" variant="standard" fullWidth label="Email" className="input-size" />
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />{' '}
                </div>
                <div>
                  <button className="btn-black" type="submit">
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
