import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: '16px',
        marginBottom: '8px',
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        border: '1px solid #ddd',
        cursor: 'grab',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
}

function DnDGame() {
    const questions = ["What is the capital of France?", "What is 2 + 2?", "What color is the sky?"];
    const answers = ["Paris", "4", "Blue"];

    const [items] = useState(questions.map((question, index) => ({
        id: `question-${index}`,
        question,
        answer: answers[index],
    })));

    const [options, setOptions] = useState([...answers]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = options.indexOf(active.id);
            const newIndex = options.indexOf(over.id);
            setOptions((opts) => arrayMove(opts, oldIndex, newIndex));
        }
    };

    const handleSubmit = () => {
        let score = 0;
        items.forEach((item) => {
            const userAnswer = options[items.findIndex(i => i.answer === item.answer)];
            if (item.answer === userAnswer) {
                score++;
            }
        });

        alert(`Your score is: ${score}/${items.length}`);
    };

    return (
        <div>
            <h1>Drag and Drop Quiz</h1>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={options} strategy={verticalListSortingStrategy}>
                    {options.map((option, index) => (
                        <div key={index} style={{ marginBottom: "16px" }}>
                            <strong>{items[index].question}</strong>
                            <div style={{ marginTop: "8px" }}>
                                <SortableItem id={option}>
                                    {option}
                                </SortableItem>
                            </div>
                        </div>
                    ))}
                </SortableContext>
            </DndContext>
            <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px" }}>
                Submit
            </button>
        </div>
    );
}

export default DnDGame;
