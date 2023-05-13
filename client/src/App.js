
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom"
import { RegisterScreen } from './Pages/RegisterScreen';
import  LoginScreen  from './Pages/LoginScreen';
import { Dashboard } from "./Pages/Dashboard";
import ForgetPassowrd from "./Pages/ForgetPassowrd";
import PasswordReset from "./Pages/PasswordReset";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import store from './app/store'
import { Provider } from 'react-redux'
import RegistrationVerification from "./Pages/RegistrationVerification";
import {ThemeProvider} from "styled-components"
import { theme } from "./Style/Themes";







function App() {



  return (
    
    <Provider store={store}>
   <Router>
    <Switch>
    <ThemeProvider theme={theme}>
    <Route path='/' exact component={HomePage}  />
    <Route path='/register' component={RegisterScreen}  />
    <Route path='/login' component={LoginScreen}  />
    <Route path='/dashboard' component={Dashboard}  />
    <Route path='/forgetpassword' component={ForgetPassowrd}  />
    <Route path='/passwordreset/:id' component={PasswordReset}  />
    <Route path='/verify/:verifyToken' component={RegistrationVerification}  />
    {/* <Route path="*" exact component={ErrorPage}  /> */}

    </ThemeProvider>
    </Switch>
   </Router>
   </Provider>
  );
}

export default App;
