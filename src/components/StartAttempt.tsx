import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    function start(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setActive(true);
        }
    }

    function stop(): void {
        setActive(false);
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button onClick={start} disabled={active || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!active}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={active}>
                Mulligan
            </Button>
        </div>
    );
}
