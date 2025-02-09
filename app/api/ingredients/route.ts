import { recipes } from "../../../data/recipes";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
        // get all recipes
        const id = await request.text();
        const recipe = recipes.recipes.find(r => r.id == id);

        return new NextResponse(JSON.stringify(recipe.ingredients), {
            status: 200,
        });
}

export async function POST(request: Request) {
    const data = await request.json();
    const recipe = recipes.recipes.find(r => r.id == data.id);
    recipe.ingredients.push(data.ingredient);
    return new NextResponse(JSON.stringify({ "result": "ok" }), {
        status: 200,
    });
}

export async function PUT(request: Request) {
    const data = await request.json();
    const recipe = recipes.recipes.find(r => r.id == data.id);
    recipe.ingredients[data.index] = data.ingredient;
    return new NextResponse(JSON.stringify({ "result": "ok" }), {
        status: 200,
    });
}

export async function DELETE(request: Request) {
    const data = await request.json();
    const recipe = recipes.recipes.find(r => r.id == data.id);
    recipes.recipes.splice(data.index, 1);
    return new NextResponse(JSON.stringify({ "result": "ok", "index": index, "id": id }), {
        status: 200,
    });
}