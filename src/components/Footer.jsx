import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#5E17EB] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full transform transition-transform"
              />
              <span className="text-xl font-semibold">Humanitarismo</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Transformando vidas a través de la educación emocional y el desarrollo comunitario.
              Juntos construimos un futuro más brillante para nuestra comunidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#F6A717] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos/" className="text-gray-300 hover:text-[#F6A717] transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="https://donaronline.org/humanitarismo-comunidad/ayudanos-a-llegar-a-las-comunidades" target='_blank' className="text-gray-300 hover:text-[#F6A717] transition-colors">
                  Donar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactanos</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300">
                <a href="mailto:info@humanitarismocomunidad.org.ar"
                  className="hover:text-[#F6A717] transition-colors break-all">
                  info@humanitarismocomunidad.org.ar
                </a>
              </p>
              <p className="text-gray-300">Monte Quemado, Santiago del Estero, Argentina</p>
              <p className="text-gray-300">+54 9 11 3679 7781</p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/humanitarismocomunidad/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F6A717] transition-colors duration-300 transform">
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/HumanitarismoComunidad/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F6A717] transition-colors duration-300 transform">
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="https://wa.me/5491136797781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F6A717] transition-colors duration-300 transform">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/humanitarismo-comunidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F6A717] transition-colors duration-300 transform">
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#F6A717] mt-12 pt-8 text-center text-gray-300">
          <p className="text-sm">© {new Date().getFullYear()} Humanitarismo Comunidad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
