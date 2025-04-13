import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "./ui/input"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="col-span-4">
            <h3 className="font-bold text-primary text-xl mb-4">Desa Manud Jaya</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nikmati pengalaman liburan yang tenang, asri, dan penuh budaya di Desa Manud Jaya. Berbagai pilihan wisata dan akomodasi mulai dari homestay tradisional hingga villa mewah siap menyambut Anda!
            </p>
            <h4 className="font-medium text-[#0B2E29] text-lg mb-1">Tetap Terupdate</h4>
            <div className="flex gap-2">
              <Input placeholder='Masukkan Email Anda' />
              <Button>Kirim</Button>

            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-3 place-items-center">
            <div>

              <h3 className="font-medium mb-4">Navigasi Cepat</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Wisata
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy & Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-3">
            <h3 className="font-medium mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>+62 852-1234-5678</li>
              <li>info@desamanudjaya.com</li>
              <li>Desa Manud Jaya</li>
              <li>Kabupaten Manud</li>
              <li>Indonesia</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2">
            <h3 className="font-medium mb-4">Follow us on</h3>
            <div className="flex space-x-4">
              <Link href="#" className="inline-flex justify-center items-center rounded-full bg-white  w-8 h-8 hover:text-primary">
                <Image src='/assets/socials/facebook.svg' width={16} height={16} />
              </Link>
              <Link href="#" className="inline-flex justify-center items-center rounded-full bg-white  w-8 h-8 hover:text-primary">
                <Image src='/assets/socials/Youtube.svg' width={16} height={16} />
              </Link>
              <Link href="#" className="inline-flex justify-center items-center rounded-full bg-white  w-8 h-8 hover:text-primary">
                <Image src='/assets/socials/Instagram.svg' width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#002E27] text-white py-3 text-center text-sm">© 2025 Desa Manud Jaya – Semua Hak Dilindungi.</div>
    </footer>
  )
}

