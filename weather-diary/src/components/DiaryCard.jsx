import React, { useState } from "react";

function DiaryCard({ date, content, index, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(content);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setNewContent(content);
        setIsEditing(false);
    };

    const handleSaveClick = () => {
        onUpdate(index, newContent);
        setIsEditing(false);
    };

    return (
        <div
            style={{
                padding: "1rem",
                border: "1px solid #ccc",
                marginBottom: "1rem",
            }}
        >
            <p>
                <strong>{date}</strong>
            </p>

            {isEditing ? (
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    rows={5}
                    cols={50}
                />
            ) : (
                <p>{content}</p>
            )}

            {isEditing ? (
                <>
                    <button onClick={handleSaveClick}>저장</button>
                    <button onClick={handleCancelClick}>취소</button>
                </>
            ) : (
                <button onClick={handleEditClick}>수정</button>
            )}
        </div>
    );
}

export default DiaryCard;
