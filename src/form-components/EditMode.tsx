import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateisStudent() {
        setisStudent(!isStudent);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="edit-mode-switch">
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </Form.Group>
            {editMode ? (
                <Form>
                    <Form.Group controlId="userName">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Group controlId="isStudentCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Is a Student"
                            checked={isStudent}
                            onChange={updateisStudent}
                        />
                    </Form.Group>
                </Form>
            ) : null}
            <div>
                <p>
                    {name} {isStudent ? " is a student" : " is not a student"}
                </p>
            </div>
        </div>
    );
}
