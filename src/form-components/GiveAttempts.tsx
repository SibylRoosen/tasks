import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    function useAttempt(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }
    function addAttempts(): void {
        const parsedAttempt = parseInt(request);
        if (!isNaN(parsedAttempt) && parsedAttempt > 0) {
            setAttempts(attempts + parsedAttempt);
            setRequest("");
        }
    }
    return (
        <div>
            <h4>Give Attempts</h4>
            <p>Attempts Left: {attempts}</p>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={addAttempts}>gain</Button>
        </div>
    );
}
