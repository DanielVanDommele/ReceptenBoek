export default function CancelButton (props) {
    return (
            <div className="button" title="Annuleren" onClick={props.onClick}>
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <line x1="5" y1="5" x2="15" y2="15" stroke="#000000" strokeWidth="2" />
                        <line x1="5" y1="15" x2="15" y2="5" stroke="#000000" strokeWidth="2" />
                    </g>
                </svg>
          </div>
    );
};