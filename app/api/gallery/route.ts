export const dynamic = "force-static";
import { readdirSync } from 'fs';
import { join } from 'path';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const prefix = searchParams.get('prefix');
    
    const galleryDir = join(process.cwd(), 'public/gallery');
    let files = readdirSync(galleryDir)
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort();

    // Filter by prefix if provided
    if (prefix) {
      files = files.filter((file) => file.toLowerCase().startsWith(prefix.toLowerCase()));
    }

    return Response.json(files);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return Response.json([], { status: 500 });
  }
}
