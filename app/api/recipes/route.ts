import { recipes } from "../../../data/recipes";
import { NextResponse } from "next/server";

export async function GET() {
        // get all recipes
        return new NextResponse(JSON.stringify(recipes), {
            status: 200,
        });
}

export async function POST(request: Request) {
    const reqRecipe = await request.json();
    recipes.recipes.push(reqRecipe);
    return new NextResponse(JSON.stringify({ "result": "ok" }), {
        status: 200,
    });
}

export async function PUT(request: Request) {
    const reqRecipe = await request.json();
    const index = recipes.recipes.findIndex(r => r.id == reqRecipe.id);
    if (index >= 0) {
        recipes.recipes[index] = reqRecipe;
        return new NextResponse(JSON.stringify({ "result": "ok", "index": index }), {
            status: 200,
        });
    } else {
        return new NextResponse(JSON.stringify({ "result": "error", "index": index }), {
            status: 404,
        });
    }
}

export async function DELETE(request: Request) {
    const id = await request.text();
    const index = recipes.recipes.findIndex(r => r.id == id);
    if (index >= 0) {
        recipes.recipes.splice(index, 1);
        return new NextResponse(JSON.stringify({ "result": "ok", "index": index, "id": id }), {
            status: 200,
        });
    } else {
        return new NextResponse(JSON.stringify({ "result": "error", "index": index, "id": id }), {
            status: 404,
        });
    }
}