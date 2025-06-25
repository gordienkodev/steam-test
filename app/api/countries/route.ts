import { Country } from '@/types';
import { NextResponse } from 'next/server';

let cached: Country[] | null = null;

export async function GET() {
    if (!cached) {
        const res = await fetch(
            'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json'
        );
        if (!res.ok) return new NextResponse('Failed to fetch countries', { status: 500 });
        cached = await res.json();
    }

    return NextResponse.json(cached);
}
