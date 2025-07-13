import { NextResponse } from 'next/server';
import { generateCVPDF } from '../../lib/generatePDF';

export async function GET() {
  try {
    // Generate PDF buffer
    const buffer = await generateCVPDF();

    // Return PDF as response
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Gary_Magyar_CV.pdf"',
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error generating CV PDF:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : error);
    return NextResponse.json(
      {
        error: 'Failed to generate CV PDF',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
