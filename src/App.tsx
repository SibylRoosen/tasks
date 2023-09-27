import React from "react";
import Puck from "./Puck.jpeg";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
=======
>>>>>>> upstream/task-state
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
<<<<<<< HEAD
>>>>>>> eb40f3eb8827e668c1949ca0c9c13db2f52fe4b4
=======
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> upstream/task-state
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
<<<<<<< HEAD
>>>>>>> eb40f3eb8827e668c1949ca0c9c13db2f52fe4b4
=======
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
