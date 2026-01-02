'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Scale, Clock } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PT TERASIS EROJAYA
                </span>
              </Link>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            PT TERASIS EROJAYA - Jasa Pengujian Laboratorium Terpercaya
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: 1 Januari 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT TERASIS EROJAYA. Syarat & Ketentuan ini mengatur 
                penggunaan layanan pengujian laboratorium yang kami sediakan. Dengan 
                menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Harap baca syarat dan ketentuan ini dengan cermat sebelum menggunakan 
                layanan kami. Jika Anda tidak setuju dengan bagian mana pun dari syarat 
                dan ketentuan ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Layanan Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Deskripsi Layanan</h3>
                <p className="mb-3">
                  PT TERASIS EROJAYA menyediakan layanan pengujian laboratorium meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uji mikrobiologi untuk makanan, minuman, dan produk kesehatan</li>
                  <li>Uji kimia untuk analisis komposisi dan kontaminan</li>
                  <li>Uji fisika untuk karakteristik produk</li>
                  <li>Konsultasi teknis dan interpretasi hasil</li>
                  <li>Pelatihan dan edukasi terkait pengujian laboratorium</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Standar Layanan</h3>
                <p className="mb-3">
                  Kami berkomitmen untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menyediakan hasil pengujian yang akurat dan dapat diandalkan</li>
                  <li>Mengikuti prosedur standar yang telah tervalidasi</li>
                  <li>Menyelesaikan pengujian dalam waktu yang disepakati</li>
                  <li>Menjaga kerahasiaan hasil pengujian klien</li>
                  <li>Memberikan laporan yang jelas dan komprehensif</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-600" />
                <span>Kewajiban Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sebagai klien, Anda memiliki kewajiban berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan lengkap 
                  tentang sampel yang akan diuji.
                </li>
                <li>
                  <strong>Persyaratan Sampel:</strong> Memastikan sampel memenuhi persyaratan 
                  pengujian dan disimpan dengan benar sebelum pengiriman.
                </li>
                <li>
                  <strong>Dokumentasi:</strong> Menyediakan dokumen yang diperlukan untuk 
                  identifikasi dan pelacakan sampel.
                </li>
                <li>
                  <strong>Pembayaran:</strong> Melakukan pembayaran sesuai dengan tarif yang 
                  telah disepakati dan jadwal pembayaran.
                </li>
                <li>
                  <strong>Kerjasama:</strong> Bekerjasama dengan tim kami untuk memastikan 
                  proses pengujian berjalan lancar.
                </li>
                <li>
                  <strong>Kepatuhan:</strong> Mematuhi semua peraturan dan hukum yang berlaku 
                  terkait produk yang diuji.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pricing and Payment */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-orange-600" />
                <span>Harga dan Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Struktur Harga</h3>
                <p className="mb-3">
                  Harga layanan kami didasarkan pada:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Jenis dan kompleksitas pengujian</li>
                  <li>Jumlah sampel yang akan diuji</li>
                  <li>Waktu penyelesaian yang diminta</li>
                  <li>Persyaratan khusus tambahan</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Syarat Pembayaran</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pembayaran dapat dilakukan secara tunai, transfer bank, atau metode lain yang disepakati</li>
                  <li>Uang muka minimal 50% diperlukan untuk memulai pengujian</li>
                  <li>Pelunasan harus dilakukan sebelum pengambilan hasil atau pengiriman laporan</li>
                  <li>Keterlambatan pembayaran dapat dikenakan denda 1% per minggu</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong>Catatan:</strong> Harga dapat berubah sewaktu-waktu tanpa pemberitahuan 
                sebelumnya. Harga yang berlaku adalah harga pada saat pemesanan layanan.
              </div>
            </CardContent>
          </Card>

          {/* Turnaround Time */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <span>Waktu Pengerjaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Standar Waktu Pengerjaan</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uji mikrobiologi: 3-5 hari kerja</li>
                  <li>Uji kimia: 2-4 hari kerja</li>
                  <li>Uji fisika: 1-3 hari kerja</li>
                  <li>Pengujian komprehensif: 5-7 hari kerja</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Layanan Ekspres</h3>
                <p>
                  Layanan ekspres tersedia dengan biaya tambahan untuk waktu pengerjaan yang lebih cepat:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Waktu pengerjaan 24 jam: biaya tambahan 100%</li>
                  <li>Waktu pengerjaan 48 jam: biaya tambahan 50%</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                Waktu pengerjaan dihitung setelah sampel diterima dan persyaratan terpenuhi. 
                Hari libur nasional tidak termasuk dalam perhitungan hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <span>Pembatasan dan Penafian</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Batas Tanggung Jawab</h3>
                <p className="mb-3">
                  PT TERASIS EROJAYA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian langsung atau tidak langsung akibat penggunaan hasil pengujian</li>
                  <li>Keterlambatan yang disebabkan oleh faktor di luar kendali kami</li>
                  <li>Kerusakan sampel selama pengiriman atau penyimpanan oleh pihak ketiga</li>
                  <li>Interpretasi hasil yang tidak sesuai dengan tujuan penggunaan</li>
                  <li>Keputusan bisnis yang didasarkan pada hasil pengujian kami</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Jaminan</h3>
                <p>
                  Kami menjamin:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prosedur pengujian mengikuti standar yang telah ditetapkan</li>
                  <li>Personel yang kompeten dan terlatih</li>
                  <li>Peralatan yang terkalibrasi dan terawat dengan baik</li>
                  <li>Kerahasiaan data dan hasil pengujian klien</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span>Kerahasiaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT TERASIS EROJAYA berkomitmen untuk menjaga kerahasiaan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Semua informasi klien termasuk identitas, produk, dan hasil pengujian</li>
                <li>Formulasi dan komposisi produk yang diuji</li>
                <li>Data bisnis dan informasi strategis klien</li>
                <li>Hasil pengujian tidak akan dibagikan kepada pihak ketiga tanpa persetujuan tertulis</li>
              </ul>
              <p className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <strong>Pengecualian:</strong> Kami dapat membagikan informasi jika diwajibkan 
                oleh hukum, peraturan pemerintah, atau permintaan dari pihak berwenang.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-purple-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Hak Klien</h3>
                <p>
                  Klien memiliki hak atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hasil pengujian dan laporan yang dibuat khusus untuk mereka</li>
                  <li>Data dan informasi yang mereka berikan kepada kami</li>
                  <li>Interpretasi dan kesimpulan dari hasil pengujian</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Hak PT TERASIS EROJAYA</h3>
                <p>
                  Kami memiliki hak atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Metodologi dan prosedur pengujian yang kami kembangkan</li>
                  <li>Format laporan dan template dokumen</li>
                  <li>Pengetahuan dan keahlian teknis kami</li>
                  <li>Informasi agregat dan anonim untuk peningkatan layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <span>Terminasi dan Pembatalan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Pembatalan oleh Klien</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pembatalan dapat dilakukan dengan pemberitahuan tertulis minimal 24 jam sebelumnya</li>
                  <li>Uang muka akan dikembalikan 50% jika pembatalan dilakukan sebelum pengujian dimulai</li>
                  <li>Tidak ada pengembalian dana jika pengujian telah dimulai atau selesai</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Terminasi oleh PT TERASIS EROJAYA</h3>
                <p>
                  Kami dapat menghentikan layanan jika:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Klien melanggar syarat dan ketentuan ini</li>
                  <li>Sampel tidak memenuhi persyaratan pengujian</li>
                  <li>Ada indikasi penipuan atau kegiatan ilegal</li>
                  <li>Pembayaran tidak dilakukan sesuai kesepakatan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6 text-blue-600" />
                <span>Penyelesaian Sengketa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Setiap sengketa yang timbul dari atau terkait dengan penggunaan layanan kami 
                akan diselesaikan melalui prosedur berikut:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Negosiasi:</strong> Upaya penyelesaian secara musyawarah dan kekeluargaan
                </li>
                <li>
                  <strong>Mediasi:</strong> Jika negosiasi gagal, kedua belah pihak setuju untuk 
                  menggunakan jasa mediator independen
                </li>
                <li>
                  <strong>Arbitrase:</strong> Jika mediasi gagal, sengketa akan diselesaikan 
                  melalui arbitrase yang mengikat
                </li>
                <li>
                  <strong>Yurisdiksi:</strong> Sengketa yang tidak dapat diselesaikan melalui 
                  arbitrase akan diajukan ke pengadilan yang berwenang di Jakarta
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-green-600" />
                <span>Hukum yang Berlaku</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap ketentuan yang bertentangan dengan hukum yang 
                berlaku akan dianggap tidak sah dan tidak memengaruhi ketentuan lainnya.
              </p>
              <p>
                Klien dan PT TERASIS EROJAYA setuju untuk tunduk pada yurisdiksi 
                pengadilan di Jakarta Selatan, DKI Jakarta untuk setiap sengketa 
                yang timbul dari hubungan bisnis ini.
              </p>
            </CardContent>
          </Card>

          {/* Amendments */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-purple-600" />
                <span>Perubahan Syarat & Ketentuan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT TERASIS EROJAYA berhak mengubah syarat dan ketentuan ini dari waktu ke waktu. 
                Perubahan akan berlaku efektif setelah dipublikasikan di website kami atau 
                diberitahukan langsung kepada klien.
              </p>
              <p>
                Penggunaan layanan setelah perubahan dianggap sebagai penerimaan 
                terhadap syarat dan ketentuan yang telah diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-white p-6 rounded-lg space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">Email:</span>
                  <span>legal@terasiserojaya.co.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">Telepon:</span>
                  <span>0852-8570-3497</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-semibold">Alamat:</span>
                  <span>
                    JL. HANGTUAH NO.26, KEBAYORAN BARU<br />
                    Kel. Gunung, Kec. Kebayoran Baru<br />
                    Jakarta Selatan, DKI Jakarta
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Jam operasional: Senin - Jumat, 08:00 - 17:00 WIB
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">PT TERASIS EROJAYA</h3>
            <p className="mb-6">
              Mitra Terpercaya untuk Kualitas dan Keamanan Produk Anda
            </p>
            <Link href="/">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}