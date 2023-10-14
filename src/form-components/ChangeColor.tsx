import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "yellow",
        "orange",
        "green",
        "teal",
        "blue",
        "indigo",
        "magenta"
        // Add more colors if needed
    ];

    const [chosenColor, setChosenColor] = useState<string | null>(null);

    const handleColorChange = (color: string) => {
        setChosenColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        inline
                        label={
                            <>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "20px",
                                        backgroundColor: color,
                                        marginTop: "10px",
                                        display: "inline-block",
                                        padding: "10px"
                                    }}
                                />
                                {color}
                            </>
                        }
                        id={`color-${color}`}
                        checked={chosenColor === color}
                        onChange={() => handleColorChange(color)} //{(e) => setChosenColor(e.target.value)} this method passed the test but did not work on the websight
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "250px",
                    height: "50px",
                    backgroundColor: chosenColor || "white",
                    marginTop: "10px",
                    display: "inline-block",
                    padding: "10px"
                }}
            >
                {"You have chosen " + chosenColor + "." || "No color selected"}
            </div>
        </div>
    );
}
