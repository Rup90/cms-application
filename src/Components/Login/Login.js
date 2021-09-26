
import { Form } from "react-bootstrap";
import Card from '../../Common/Card/Card';
import Input from '../../Common/Input/Input'
import './Login.scss';

function Login() {

    return(
        <div className="Login">

            <Card>
                
                    <Form>
                        <Input type={'email'} controlId={'formEmail'} placeholder={'Enter email'} label={'Email Address'}/>

                        <Input type={'password'} controlId={'formPassword'} placeholder={'Enter password'} label={'Password'}/>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
               
            </Card>
        </div>
    )
    
}

export default Login