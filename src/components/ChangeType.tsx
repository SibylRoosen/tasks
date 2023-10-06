import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, typeChange] = useState<QuestionType>("short_answer_question");

    function change(): void {
        if (type === "short_answer_question") {
            typeChange("multiple_choice_question");
            <div>Short Answer</div>;
        } else {
            typeChange("short_answer_question");
            <div>Multiple Choice</div>;
        }
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            <div>
                {type === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
