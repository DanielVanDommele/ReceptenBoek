export default function EditButton (props) {
    return (
            <div className="button" title="Recept bewerken" onClick={props.onClick}>
                <svg fill="none" viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M 37 7 l -4 -4 l -20 20 l 4 4 l 20 -20 l -2 -2 l -20 20 l 20 -20 Z" stroke="#000000" strokeWidth="1" />
                        <path d="M 13 23 l -2 6 l 6 -2 l -4 -4 Z" stroke="#000000" strokeWidth="1" />
                    </g>
                </svg>
          </div>
    );
};