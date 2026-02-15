import React from 'react';

const MatchInfo = ({ extras, partnerships }) => {
    return (
        <div className="card">
            <div className="flex-row" style={{ marginBottom: '8px' }}>
                <span className="label">Extras</span>
                <span>
                    {extras.wides}wd, {extras.noBalls}nb, {extras.byes}b, {extras.legByes}lb
                    <span style={{ marginLeft: '8px', color: 'var(--text-secondary)' }}>
                        (Total: {extras.wides + extras.noBalls + extras.byes + extras.legByes})
                    </span>
                </span>
            </div>
        </div>
    );
};

export default MatchInfo;
