import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Get services
    const services = await db.service.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Get testimonials
    const testimonials = await db.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' }
    });

    // Get projects
    const projects = await db.project.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      success: true,
      data: {
        services,
        testimonials,
        projects
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    switch (type) {
      case 'contact':
        // Create new contact submission
        const contact = await db.contact.create({
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company || null,
            service: data.service || null,
            message: data.message,
            status: 'pending'
          }
        });

        return NextResponse.json({
          success: true,
          message: 'Pesan berhasil dikirim!',
          data: contact
        });

      case 'testimonial':
        // Create new testimonial (pending approval)
        const testimonial = await db.testimonial.create({
          data: {
            name: data.name,
            company: data.company,
            message: data.message,
            rating: data.rating,
            approved: false
          }
        });

        return NextResponse.json({
          success: true,
          message: 'Testimoni berhasil dikirim dan menunggu persetujuan!',
          data: testimonial
        });

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid request type' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}