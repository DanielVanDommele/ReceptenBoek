import DeleteButton from "../../button/deletebutton.js"

export default function IngredientEdit (props) {
    function onEditType() {
        console.log('onEditType', arguments);
    }    
    function onEditQty() {
        console.log('onEditQty', arguments);
    }     
    function onEditUnit() {
        console.log('onEditUnit', arguments);
    }        
    return (
        <div 
            className="ingredient">
            <input
                type="text"
                name="ingredientType"
                className="recipe-edit-field"
                size="20"
                value={props.type}
                onChange={onEditType} />:
                <span>&nbsp;&nbsp;</span>
            <input
                type="text"
                name="ingredientQuantity"
                className="recipe-edit-field num-input"
                size="3"
                value={props.qty || ''}
                onChange={onEditQty} />
                <span>&nbsp;&nbsp;</span>
            <input
                type="text"
                name="ingredientUnit"
                className="recipe-edit-field"
                size="8"
                value={props.unit}
                onChange={onEditUnit} />
            <DeleteButton />
        </div>
    );
};