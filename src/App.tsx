import React from "react";
import Puck from "./Puck.jpeg";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is Sibyl Roosens Heading</h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={Puck}
                            width="400"
                            height="600"
                            alt="A picture of my cat Puck"
                        />
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <p>The animals I care about</p>
                        <ol>
                            <li>Cats</li>
                            <li>Octupuses</li>
                            <li>Nothing else</li>
                        </ol>
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
