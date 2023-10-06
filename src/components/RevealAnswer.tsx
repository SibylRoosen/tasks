import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipAnswer(): void {
        setVisible(!visible);
    }
    return (
        <div>
            {visible && <div>42</div>}
            <Button onClick={flipAnswer}>Reveal Answer</Button>
        </div>
    );
}
