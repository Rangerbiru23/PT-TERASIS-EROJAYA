import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST() {
  try {
    // Seed services
    const services = [
      {
        title: "Uji Mikrobiologi",
        description: "Analisis mikrobiologi untuk makanan, minuman, dan produk kesehatan dengan metode yang telah tervalidasi",
        icon: "microscope",
        category: "Mikrobiologi",
        price: "Rp 500.000 - Rp 2.500.000",
        featured: true
      },
      {
        title: "Uji Kimia",
        description: "Analisis komposisi kimia dan deteksi kontaminan pada berbagai jenis produk",
        icon: "test-tube",
        category: "Kimia",
        price: "Rp 750.000 - Rp 3.000.000",
        featured: true
      },
      {
        title: "Uji Fisika",
        description: "Pengujian sifat fisik dan karakteristik produk untuk memastikan kualitas",
        icon: "flask",
        category: "Fisika",
        price: "Rp 400.000 - Rp 1.500.000",
        featured: false
      },
      {
        title: "Uji Logam Berat",
        description: "Deteksi dan kuantifikasi logam berat dalam produk makanan dan lingkungan",
        icon: "test-tube",
        category: "Kimia",
        price: "Rp 1.000.000 - Rp 4.000.000",
        featured: true
      },
      {
        title: "Uji Pestisida",
        description: "Analisis residu pestisida pada produk pertanian dan makanan",
        icon: "microscope",
        category: "Kimia",
        price: "Rp 800.000 - Rp 3.500.000",
        featured: false
      },
      {
        title: "Uji Allergen",
        description: "Deteksi allergen makanan untuk keamanan konsumen",
        icon: "flask",
        category: "Mikrobiologi",
        price: "Rp 600.000 - Rp 2.000.000",
        featured: false
      }
    ];

    for (const service of services) {
      await db.service.upsert({
        where: { title: service.title },
        update: service,
        create: service
      });
    }

    // Seed testimonials
    const testimonials = [
      {
        name: "PT. Food Indonesia Maju",
        company: "Industri Makanan",
        message: "PT TERASIS EROJAYA telah menjadi mitra terpercaya untuk pengujian kualitas produk kami. Hasil yang akurat, layanan yang profesional, dan tim yang responsif membuat kami merasa percaya diri dengan setiap produk yang kami rilis ke pasar.",
        rating: 5,
        approved: true
      },
      {
        name: "CV. Sehat Selalu",
        company: "Industri Kosmetik",
        message: "Pelayanan yang cepat dan hasil yang dapat diandalkan. Kami sangat merekomendasikan PT TERASIS EROJAYA untuk kebutuhan pengujian laboratorium. Tim mereka sangat ahli dan selalu memberikan solusi terbaik.",
        rating: 5,
        approved: true
      },
      {
        name: "PT. Minuman Sehat Indonesia",
        company: "Industri Minuman",
        message: "Tim yang berpengalaman dan peralatan modern. Hasil uji selalu tepat waktu sesuai kebutuhan produksi kami. Komunikasi yang baik dan transparansi dalam setiap proses membuat kerjasama kita berjalan sangat lancar.",
        rating: 5,
        approved: true
      },
      {
        name: "PT. Nutrisi Prima",
        company: "Industri Suplemen",
        message: "Kualitas pengujian yang sangat baik dengan harga yang kompetitif. PT TERASIS EROJAYA membantu kami memastikan produk suplemen kami aman dan berkualitas tinggi. Sangat puas dengan layanan mereka.",
        rating: 5,
        approved: true
      },
      {
        name: "CV. Herbal Nusantara",
        company: "Industri Herbal",
        message: "Sebagai produsen produk herbal, kami membutuhkan partner yang dapat dipercaya untuk pengujian kualitas. PT TERASIS EROJAYA memberikan pelayanan terbaik dengan hasil yang akurat dan dapat dipertanggungjawabkan.",
        rating: 5,
        approved: true
      }
    ];

    for (const testimonial of testimonials) {
      await db.testimonial.create({
        data: testimonial
      });
    }

    // Seed projects
    const projects = [
      {
        title: "Uji Kualitas Produk Susu",
        description: "Pengujian komprehensif untuk produk susu formula meliputi uji mikrobiologi, kimia, dan fisika",
        image: "/api/placeholder/400/300",
        category: "Makanan & Minuman",
        completed: true
      },
      {
        title: "Validasi Metode Uji Kosmetik",
        description: "Pengembangan dan validasi metode uji untuk produk kosmetik organik",
        image: "/api/placeholder/400/300",
        category: "Kosmetik",
        completed: true
      },
      {
        title: "Monitoring Kualitas Air Minum",
        description: "Pengujian rutin kualitas air minum dalam kemasan untuk produsen nasional",
        image: "/api/placeholder/400/300",
        category: "Lingkungan",
        completed: true
      },
      {
        title: "Uji Keamanan Produk Bayi",
        description: "Pengujian keamanan produk makanan bayi sesuai standar nasional dan internasional",
        image: "/api/placeholder/400/300",
        category: "Makanan & Minuman",
        completed: true
      },
      {
        title: "Deteksi Kontaminan Produk Pertanian",
        description: "Analisis residu pestisida dan logam berat pada produk pertanian organik",
        image: "/api/placeholder/400/300",
        category: "Pertanian",
        completed: false
      },
      {
        title: "Uji Stabilitas Produk Farmasi",
        description: "Pengujian stabilitas jangka panjang untuk produk obat-obatan",
        image: "/api/placeholder/400/300",
        category: "Farmasi",
        completed: false
      }
    ];

    for (const project of projects) {
      await db.project.create({
        data: project
      });
    }

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully!",
      data: {
        services: services.length,
        testimonials: testimonials.length,
        projects: projects.length
      }
    });
  } catch (error) {
    console.error('Seed Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}