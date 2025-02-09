import DeleteButton from "../../button/deletebutton.js"

export default function IngredientEdit (props) {
    
    let ingredient = props.ingredient;
    let index = props.index;
    
    function onEditType(e) {
        ingredient.type = e.target.value;
        props.onEdit(ingredient, index);
    }    
    function onEditQty(e) {
        ingredient.qty = e.target.value;
        props.onEdit(ingredient, index);
    }     
    function onEditUnit(e) {
        ingredient.unit = e.target.value;
        props.onEdit(ingredient, index);
    }        
    return (
        <div 
            className="ingredient">
            <input
                type="text"
                name="ingredientType"
                className="recipe-edit-field"
                size="20"
                defaultValue={ingredient.type}
                onChange={onEditType} />:
                <span>&nbsp;&nbsp;</span>
            <input
                type="text"
                name="ingredientQuantity"
                className="recipe-edit-field num-input"
                size="3"
                defaultValue={ingredient.qty || ''}
                onChange={onEditQty} />
                <span>&nbsp;&nbsp;</span>
            <input
                type="text"
                name="ingredientUnit"
                className="recipe-edit-field"
                size="8"
                defaultValue={ingredient.unit}
                onChange={onEditUnit} />
            <DeleteButton onClick={() => props.onDelete(index)} />
        </div>
    );
};