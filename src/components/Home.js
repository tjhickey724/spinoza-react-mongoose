import NavBar from "./NavBar"
import { Button, Form } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <NavBar />
            <div>
                <p>Home Page Here</p>

                <div>Join Class</div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Class Pin#</Form.Label>
                        <Form.Control placeholder="enter class pin" />
                        <Form.Text className="text-muted">
                            Please refer to your instructor for pin number
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Join
                    </Button>
                </Form>

                <div>Create New Class</div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Class Name</Form.Label>
                        <Form.Control />

                        <Form.Label>Class Code</Form.Label>
                        <Form.Control placeholder="enter class code"/>

                        <Form.Label>Class Semester</Form.Label>
                        <Form.Control />

                        <Form.Label>Restrict users email of this class to this domain name (leave it blank if you want any google email to use your class)</Form.Label>
                        <Form.Control placeholder="enter domain name"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </>
    )
}