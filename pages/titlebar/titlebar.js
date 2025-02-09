import Title from "./title";
import AddButtonRecipe from "../button/addbuttonrecipe";

export default function TitleBar () {
    return (
        <div 
        className="header">
            <Title />
            <AddButtonRecipe />
        </div>
    );
};