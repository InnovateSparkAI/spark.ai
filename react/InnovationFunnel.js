import React from 'react';
import './InnovationFunnel.css';

const InnovationFunnel = () => {
    return (
        <div className="table">
            {/* Header Row */}
            <div className="row header">
                <div className="cell">Opportunity Explorations Stage</div>
                <div className="cell">Problem Fit stage</div>
                <div className="cell">Solution Fit stage</div>
                <div className="cell">Product Market Fit stage</div>
                <div className="cell">Scale Up stage</div>
            </div>

            {/* Continuous Improvement Row */}
            <div className="row pink-bg">
                <div className="cell description">Continuous Improvement...</div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"><div className="project">PROJECT</div></div>
                <div className="cell"></div>
            </div>

            {/* Incremental projects Row */}
            <div className="row">
                <div className="cell description">Incremental projects...</div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"><div className="project">PROJECT</div></div>
                <div className="cell"></div>
            </div>

            {/* Radical/Disruptive Projects Row */}
            <div className="row pink-bg">
                <div className="cell description">Radical/Disruptive Projects...</div>
                <div className="cell"></div>
                <div className="cell"><div className="project">PROJECT</div></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        </div>
    );
}

export default InnovationFunnel;
