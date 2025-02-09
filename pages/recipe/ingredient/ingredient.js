export default function Ingredient (props) {
    return (
        <div 
            className="ingredient">
            <div>{props.type}</div>:<span>&nbsp;</span>
            { props.qty > 0 ? <span>{props.qty || ''}<span>&nbsp;</span></span> : <span></span> }
            <span>{props.unit}</span>
        </div>
    );
};