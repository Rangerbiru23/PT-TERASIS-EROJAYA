'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
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
                <Eye className="w-6 h-6 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT TERASIS EROJAYA. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan 
                pengujian laboratorium kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang 
                dijelaskan dalam kebijakan ini. Jika Anda tidak setuju dengan praktik ini, 
                mohon jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-purple-600" />
                <span>Informasi yang Kami Kumpulkan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Informasi Pribadi</h3>
                <p className="mb-3">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama lengkap dan identitas perusahaan</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat fisik perusahaan atau lokasi pengambilan sampel</li>
                  <li>Informasi pembayaran dan faktur</li>
                  <li>Detail kontak penanggung jawab proyek</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Informasi Teknis</h3>
                <p className="mb-3">Informasi teknis yang kami kumpulkan meliputi:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Alamat IP dan informasi perangkat</li>
                  <li>Jenis browser dan sistem operasi</li>
                  <li>Data penggunaan website dan waktu akses</li>
                  <li>Informasi cookie dan data analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Informasi Layanan</h3>
                <p className="mb-3">Informasi terkait layanan pengujian:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Jenis layanan pengujian yang diminta</li>
                  <li>Detail sampel yang akan diuji</li>
                  <li>Hasil pengujian dan laporan laboratorium</li>
                  <li>Riwayat pemesanan dan komunikasi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-green-600" />
                <span>Penggunaan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan informasi yang Anda berikan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Penyediaan Layanan:</strong> Untuk memproses permintaan pengujian, 
                  mengelola jadwal, dan menyediakan hasil pengujian yang akurat.
                </li>
                <li>
                  <strong>Komunikasi:</strong> Untuk menghubungi Anda terkait layanan, 
                  konfirmasi pemesanan, dan pembaruan status pengujian.
                </li>
                <li>
                  <strong>Penagihan:</strong> Untuk memproses pembayaran, mengirim faktur, 
                  dan mengelola transaksi keuangan.
                </li>
                <li>
                  <strong>Penyempurnaan Layanan:</strong> Untuk menganalisis penggunaan, 
                  meningkatkan layanan, dan mengembangkan fitur baru.
                </li>
                <li>
                  <strong>Kepatuhan Hukum:</strong> Untuk mematuhi kewajiban hukum, 
                  peraturan, dan permintaan dari pihak berwenang.
                </li>
                <li>
                  <strong>Keamanan:</strong> Untuk mendeteksi dan mencegah penipuan, 
                  penyalahgunaan, dan ancaman keamanan.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-red-600" />
                <span>Keamanan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT TERASIS EROJAYA berkomitmen untuk melindungi keamanan informasi pribadi Anda. 
                Kami telah menerapkan langkah-langkah keamanan yang sesuai untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mengenkripsi data pribadi saat transmisi dan penyimpanan</li>
                <li>Membatasi akses ke informasi pribadi hanya untuk staf yang berwenang</li>
                <li>Menggunakan firewall dan sistem keamanan yang canggih</li>
                <li>Melakukan audit keamanan secara berkala</li>
                <li>Melatih staf tentang praktik privasi dan keamanan data</li>
              </ul>
              <p className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong>Peringatan:</strong> Meskipun kami telah berupaya keras untuk melindungi data Anda, 
                tidak ada sistem yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-orange-600" />
                <span>Pembagian Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk tujuan pemasaran. Kami hanya akan membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan izin eksplisit 
                  kepada kami untuk membagikan informasi tertentu.
                </li>
                <li>
                  <strong>Penyedia Layanan:</strong> Dengan penyedia layanan pihak ketiga yang 
                  membantu kami mengoperasikan bisnis (misalnya, penyedia hosting, payment gateway).
                </li>
                <li>
                  <strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum, peraturan, 
                  atau permintaan dari pihak berwenang.
                </li>
                <li>
                  <strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan 
                  aset perusahaan (dengan syarat penerus melanjutkan kebijakan privasi ini).
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <span>Hak Anda sebagai Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sebagai pengguna layanan kami, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Akses:</strong> Hak untuk mengakses informasi pribadi yang kami simpan tentang Anda.
                </li>
                <li>
                  <strong>Koreksi:</strong> Hak untuk memperbaiki informasi pribadi yang tidak akurat.
                </li>
                <li>
                  <strong>Penghapusan:</strong> Hak untuk meminta penghapusan data pribadi Anda 
                  (dengan pengecualian tertentu sesuai hukum).
                </li>
                <li>
                  <strong>Pembatasan:</strong> Hak untuk membatasi pemrosesan data pribadi Anda.
                </li>
                <li>
                  <strong>Portabilitas:</strong> Hak untuk menerima data pribadi Anda dalam format 
                  yang terstruktur dan dapat digunakan.
                </li>
                <li>
                  <strong>Penolakan:</strong> Hak untuk menolak pemrosesan data pribadi Anda 
                  untuk tujuan tertentu.
                </li>
              </ul>
              <p className="mt-4">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email atau telepon 
                yang tersedia di halaman kontak.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-purple-600" />
                <span>Kebijakan Cookie</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Website kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website.
                </li>
                <li>
                  <strong>Cookie Performa:</strong> Membantu kami memahami bagaimana pengguna 
                  berinteraksi dengan website kami.
                </li>
                <li>
                  <strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda.
                </li>
                <li>
                  <strong>Cookie Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan 
                  (dengan persetujuan Anda).
                </li>
              </ul>
              <p>
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. 
                Namun, menonaktifkan cookie tertentu dapat memengaruhi fungsionalitas website.
              </p>
            </CardContent>
          </Card>

          {/* Changes */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-green-600" />
                <span>Perubahan Kebijakan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT TERASIS EROJAYA dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan ditandai dengan tanggal "Terakhir diperbarui" yang baru. 
                Perubahan signifikan akan diberitahukan kepada Anda melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email ke alamat yang terdaftar</li>
                <li>Pemberitahuan di website kami</li>
                <li>Pemberitahuan langsung saat Anda login</li>
              </ul>
              <p>
                Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala 
                untuk tetap informasi tentang praktik privasi kami.
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
                Jika Anda memiliki pertanyaan, kekhawatiran, atau keluhan tentang kebijakan privasi kami 
                atau praktik pengumpulan data, silakan hubungi kami:
              </p>
              <div className="bg-white p-6 rounded-lg space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">Email:</span>
                  <span>privacy@terasiserojaya.co.id</span>
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
                Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">PT TERASIS EROJAYA</h3>
            <p className="mb-6">
              Laboratorium Pengujian Terpercaya untuk Kualitas dan Keamanan Produk Anda
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