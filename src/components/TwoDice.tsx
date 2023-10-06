import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieLeft, changeDieLeft] = useState<number>(3);
    const [dieRight, changeDieRight] = useState<number>(4);
    function rollLeft(): void {
        changeDieLeft(d6());
    }
    function rollRight(): void {
        changeDieRight(d6());
    }
    return (
        <div>
            <div>
                <span data-testid="left-die">{dieLeft}</span>
                <span data-testid="right-die">{dieRight}</span>
            </div>
            <div>
                <span>
                    <Button onClick={rollLeft}>Roll Left</Button>
                    <Button onClick={rollRight}>Roll Right</Button>
                </span>
            </div>
            <div>
                {dieLeft === 1 && dieRight === 1 ? (
                    <span>You Lose</span>
                ) : dieLeft === dieRight ? (
                    <span>You Win</span>
                ) : (
                    <span>Try Again</span>
                )}
            </div>
        </div>
    );
}
