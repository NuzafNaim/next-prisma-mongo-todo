// URL: http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



// ===========================
// =       Create Post       =
// ===========================



export const POST = async (request) => {
    try {
        const body = await request.json();
        const { title, description } = body;

        const newPost = await prisma.post.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json(newPost);
    } catch (error) {
        return NextResponse.json({message: "Post Error", error}, {status:500})
        
    }
}


// ===========================
// =       View Post       =
// ===========================


export const GET = async () => {
    try {
        const viewPosts = await prisma.post.findMany();

        return NextResponse.json(viewPosts);
    } catch (error) {
        return NextResponse.json({message: "Post Error", error}, {status:500})
        
    }
}
