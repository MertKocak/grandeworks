import React from 'react'
import "./TestCard.css"

interface TestCardProps {
    title: string;
}

const TestCard = ({ title }: TestCardProps) => (
    <div className="test-card">
        <p className="test-title">{title}</p>
        <button className="test-button">Pass test</button>
    </div>
);

export default TestCard