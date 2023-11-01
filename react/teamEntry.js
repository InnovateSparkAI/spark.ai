import React, { useState } from 'react';
import './TeamEntry.css';

const TeamEntry = () => {
    const [teamName, setTeamName] = useState('');
    const [engineLink, setEngineLink] = useState('');
    const [funnelLink, setFunnelLink] = useState('');

    const googleSpreadsheetPattern = /https:\/\/docs\.google\.com\/spreadsheets\/d\/[a-zA-Z0-9-_]+/;

    const validateLinks = () => {
        if (!engineLink.match(googleSpreadsheetPattern) || !funnelLink.match(googleSpreadsheetPattern)) {
            alert("Please enter valid Google Spreadsheet links.");
            return false;
        }
        return true;
    };

    return (
        <div className="team-container">
            <h1>Team Entry</h1>
            <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="Team Name" />
            <input type="text" value={engineLink} onChange={e => setEngineLink(e.target.value)} placeholder="Innovate Engine Link" />
            <input type="text" value={funnelLink} onChange={e => setFunnelLink(e.target.value)} placeholder="Innovation Funnel Link" />
            <a href="add-another-team.html" onClick={validateLinks} className="btn add-team">Add Another Team →</a>
            <a href="finish.html" onClick={validateLinks} className="btn finish">Finish</a>
        </div>
    );
}

export default TeamEntry;
