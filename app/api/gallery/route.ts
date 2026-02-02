import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');

    try {
        const files = fs.readdirSync(galleryDir);
        const images = files.filter(file =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        ).map(file => `/gallery/${file}`);

        return NextResponse.json(images);
    } catch (error) {
        console.error('Failed to read gallery directory:', error);
        return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
    }
}
