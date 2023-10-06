import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "New Years", emoji: "🥳" },
        { name: "St. Patrick's Day", emoji: "☘️" },
        { name: "Fourth of July", emoji: "🎆" },
        { name: "Holloween", emoji: "👻" },
        { name: "Thanksgiving", emoji: "🦃" }
    ];
    const [curHol, setCurHol] = useState(holidays[0].name);
    function advanceAlphabet(): void {
        const alph = holidays.map((holiday) => holiday.name).sort();
        const curr = alph.indexOf(curHol);
        if (curr !== -1 && curr < alph.length - 1) {
            setCurHol(alph[curr + 1]);
        } else {
            setCurHol(alph[0]);
        }
    }
    function advanceYear(): void {
        if (
            holidays.findIndex((h) => h.name === curHol) ===
            holidays.length - 1
        ) {
            setCurHol(holidays[0].name);
        } else {
            setCurHol(
                holidays[holidays.findIndex((h) => h.name === curHol) + 1].name
            );
        }
    }
    return (
        <div>
            <p>Holiday: {holidays.find((h) => h.name === curHol)?.emoji}</p>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
