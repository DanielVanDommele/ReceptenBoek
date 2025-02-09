import { recipes } from "../../../data/recipes";
import { NextResponse } from "next/server";

export async function GET() {
        // get all recipes
        return new NextResponse(JSON.stringify(recipes), {
            status: 200,
        });
}

export async function POST(recipe) {
    recipes.recipes.push(recipe);
    return new NextResponse(JSON.stringify({ "result": "ok" }), {
        status: 200,
    });
}

export async function PUT(id: string, recipe) {
    const index = recipes.recipes.findIndex(r => r.id == id);
    if (index >= 0) {
        recipes.recipes[index] = recipe;
        return new NextResponse(JSON.stringify({ "result": "ok" }), {
            status: 200,
        });
    } else {
        return new NextResponse(JSON.stringify({ "result": "error" }), {
            status: 404,
        });
    }
}

export async function DELETE(id: string) {
    const index = recipes.recipes.findIndex(r => r.id == id);
    if (index >= 0) {
        recipes.recipes.splice(index, 1);
        return new NextResponse(JSON.stringify({ "result": "ok" }), {
            status: 200,
        });
    } else {
        return new NextResponse(JSON.stringify({ "result": "error" }), {
            status: 404,
        });
    }
}