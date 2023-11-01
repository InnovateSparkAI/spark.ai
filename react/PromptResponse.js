import React from 'react';
import './PromptResponse.css';

class PromptResponse extends React.Component {
    render() {
        return (
            <div className="response-container">
                <h1>Prompt Response</h1>
                <div className="toggle">
                    <span>Team : One Trust</span>
                    <button>next ></button>
                </div>
                <div className="toggle">
                    <span>Project : Build Asian Netflix</span>
                    <button>next ></button>
                </div>
                <textarea placeholder="Prompt"></textarea>
                <label htmlFor="optimistic">Optimistic</label>
                <input type="range" id="optimistic" min="1" max="100" defaultValue="50" />
                <button className="btn">Get Response</button>
                <textarea placeholder="Response"></textarea>
                <button className="btn">Send Response</button>
            </div>
        );
    }
}

export default PromptResponse;
