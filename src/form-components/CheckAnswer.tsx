import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAns, setUserAns] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        setUserAns(answer);
        setIsCorrect(answer === expectedAnswer ? true : false);
    }
    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control value={userAns} onChange={updateAnswer} />
            </Form.Group>
            <div>
                {isCorrect === true && <span>✔️</span>}
                {isCorrect === false && <span>❌</span>}
            </div>
        </div>
    );
}
