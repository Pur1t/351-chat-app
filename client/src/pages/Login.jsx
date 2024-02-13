import { Alert, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LuUser2 } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { Helmet } from "react-helmet";

const Login = () => {
    const {
      loginInfo,
      updateLoginInfo,
      loginError,
      loginUser,
      isLoginLoading,
    } = useContext(AuthContext);

    return (
      <>
        <Helmet>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');
        
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }

              body {
                  margin: 0;
                  font-family: "Nunito", sans-serif;
                  -webkit-font-smoothing: antialiased;
                  -mos-osx-font-smoothing: grayscale;
                  display: flex; 
                  justify-content: center;
                  align-items: center; 
                  min-height: 100vh;
                  
                  background-size: cover;
                  background-position: center;
              }

              code {
                  font-family: source-code-pro, Menlo, Monacom Consolas, 'Courier New', 'Monospace';
              }

              .wrapper {
                  width: 420px;
                  background: transparent;
                  margin: 20px 0 15;
                  border: 2px solid rgba(0, 0, 0, .2);
                  box-shadow: 0 0 10px;
                  backdrop-filter: blur(5px);
                  color: #fff;
                  border-radius: 10px;
                  padding: 30px 40px;
              }

              .wrapper h1 {
                  font-size: 36px;
                  text-align: center;
              }

              .wrapper .input-box {
                  position: relative;
                  width: 100%;
                  height: 50%;
                  margin: 30px 0;
              }

              .input-box .form-control:not(active) {
                  width: 100%;
                  height: 100%;
                  background: transparent;
                  border: 2px solid rgba(255, 255, 255, .2);
                  outline: none;
                  border-radius: 40px;
                  font-size: 16px;
                  color: #fff;
                  padding: 20px 45px 20px 20px;
              }

              .input-box input::placeholder {
                  color: #fff;
              }

              .input-box .form-control:focus {
                  color: #fff;
              }

              .input-box .icon {
                  position: absolute;
                  right: 20px;
                  top: 50%;
                  transform: translateY(-50%);
                  font-size: 16px;
              }

              .wrapper .remember-forgot {
                  display: flex;
                  justify-content: space-between;
                  font-size: 14.5px;
                  margin: -15px 0px 15px;
              }

              .remember-forgot label input {
                  accent-color: #fff;
                  margin-right: 4px;
              }

              .remember-forgot a {
                  color: #fff;
                  text-decoration: none;
              }

              .remember-forgot a:hover {
                  text-decoration: underline;
              }

              .wrapper button {
                  width: 100%;
                  height: 45px;
                  background: #fff;
                  border: none;
                  outline: none;
                  border-radius: 40px;
                  box-shadow: 0 0 10px rgba (0, 0, 0, .1);
                  cursor: pointer;
                  font-size: 16px;
                  color: #333;
                  font-weight: 700;
              }

              .wrapper .register-link {
                  font-size: 14.5px;
                  text-align: center;
                  margin: 20px 0 15px;
              }

              .register-link p a {
                  color: #fff;
                  text-decoration: none;
                  font-weight: 600;
              }

              .register-link p a:hover {
                  text-decoration: underline;
              }

              .alert {
                  padding: 15px;
                  margin-bottom: 20px;
                  border-radius: 4px;
                  color: #000;
                  text-transform: uppercase;
                  font-size: 12px;
                  margin: 15px 0 0 0;
                  padding: 5px;
              }

              .navbar {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  padding: 10px 100px;
                  background-color: #fff;
                  backdrop-filter: blur(10px);
              }

              .navbar-nav {
                  display: flex;
                  list-style: none;
                  justify-content: flex-end;
              }
            `}
          </style>
        </Helmet>
        <Form onSubmit={loginUser} className="form">
          <div className="wrapper">
            <h1>Login</h1>
            <div className="input-box">
              <Form.Control
                className="form-input-box"
                type="email"
                placeholder="JohnDoe123@gmail.com"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <LuUser2 className="icon" />
            </div>

            <div className="input-box">
              <Form.Control
                className="input-box"
                type="password"
                placeholder="JohnDoe123!@#"
                onChange={(e) =>
                  updateLoginInfo({
                    ...loginInfo,
                    password: e.target.value,
                  })
                }
              />
              <LuLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forget password?</a>
            </div>

            <Button variant="primary" type="submit">
              {isLoginLoading ? "Getting you in..." : "Login"}
            </Button>
            {loginError?.error && (
              <Alert variant="danger" className="alert-danger">
                <p>{loginError?.message}</p>
              </Alert>
            )}

            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </Form>
      </>
    );
}

export default Login;
