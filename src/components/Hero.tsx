
import { CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-brand-50 to-brand-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tu <span className="text-brand">Despacho Contable</span> de Confianza
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Más de 15 años brindando servicios profesionales de contabilidad, 
              auditoría y asesoría fiscal a empresas y particulares con la máxima calidad y confiabilidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-brand text-white px-8 py-3 rounded-lg hover:bg-brand-dark transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Consulta Gratuita</span>
              </button>
              <button className="border-2 border-brand text-brand px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors duration-200 font-semibold">
                Ver Servicios
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Experiencia Comprobada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Atención Personalizada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Resultados Garantizados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Profesional trabajando en contabilidad"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-brand">500+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
