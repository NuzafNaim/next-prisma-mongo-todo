// URL: http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


// ===========================
// =   Get Selected By ID    =
// ===========================


export const GET = async (request, {params}) => {
    try {

        const { id } = params;
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return NextResponse.json(
                { message: "Not Found", error },
                { status: 404 }
            )
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: "Post Error", error}, {status:500})
        
    }
}



// ===========================
// =       Update Post       =
// ===========================



export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const { title, description } = body;

        const { id } = params;

        const updatePost = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })

        if (!updatePost) {
            return NextResponse.json(
                { message: "Not Found", error },
                { status: 404 }
            )
        }
        return NextResponse.json(updatePost);

    } catch (error) {
        return NextResponse.json({message: "updatePost Error", error}, {status:500})
        
    }
}



// ===========================
// =       Delete Post       =
// ===========================



export const DELETE = async (request, {params}) => {
    try {

        const { id } = params;
        await prisma.post.delete({
            where: {
                id
            }
        });

        return NextResponse.json("Post Deleted");
    } catch (error) {
        return NextResponse.json({message: "Deleted Error", error}, {status:500})
        
    }
}