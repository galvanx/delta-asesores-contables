import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Aquí sustituimos el icono y texto por una imagen de logo */}
              <img
                src="DELTA.png"
                alt="Delta Asesores Contables"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu despacho contable de confianza con más de 15 años de experiencia 
              brindando servicios profesionales de contabilidad y asesoría fiscal.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand" />
                <span className="text-gray-300">+52 (81) 8315-3956</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand" />
                <span className="text-gray-300">info@deltaasesores.com.mx</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand" />
                <span className="text-gray-300">
                  C. Cam. de los Kiwis 621, San Jerónimo 4o. Sector, 64630 Monterrey,
                  N.L.
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-gray-300 hover:text-brand transition-colors">Contabilidad General</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-brand transition-colors">Asesoría Fiscal</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-brand transition-colors">Auditoría</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-brand transition-colors">Nóminas</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-brand transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-brand transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-brand transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-brand transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand transition-colors">Recursos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ContaExpert. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-brand text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-brand text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
