import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currChoice, setCurrChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(event.target.value);
    }
    const isCorrect = currChoice === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="correctChoice">
                <Form.Label>Select your Choice</Form.Label>
                <Form.Select value={currChoice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
