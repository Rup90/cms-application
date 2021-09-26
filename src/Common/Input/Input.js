import { Form } from "react-bootstrap";
import './Input.scss'

function Input(props) {
    return(
        // <input type={props.type} className="form-control"/>

        <Form.Group className="mb-3" controlId={props.controlId}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
}

export default Input;