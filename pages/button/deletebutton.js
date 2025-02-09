export default function DeleteButton () {
    return (
            <div className="button" title="Verwijderen">
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="10" cy="10" r="8" stroke="#FF0000" strokeWidth="2" />
                        <line x1="5" y1="5" x2="15" y2="15" stroke="#FF0000" strokeWidth="3" />
                        <line x1="15" y1="5" x2="5" y2="15" stroke="#FF0000" strokeWidth="3" />
                    </g>
                </svg>
          </div>
    );
};