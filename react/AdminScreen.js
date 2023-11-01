import React from 'react';
import './AdminScreen.css';

class AdminScreen extends React.Component {
    render() {
        return (
            <div className="admin-container">
                <h1>Admin Screen</h1>
                <a href="add-team.html" className="btn add-team">Add Team →</a>
                <a href="play.html" className="btn play">Play →</a>
            </div>
        );
    }
}

export default AdminScreen;
