
import { Award, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precisión",
      description: "Trabajamos con la máxima exactitud en cada proceso contable."
    },
    {
      icon: Heart,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos a brindar servicios de la más alta calidad."
    }
  ];

  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ContaExpert es un despacho contable con más de 15 años de experiencia 
              en el mercado, especializado en brindar servicios integrales de contabilidad, 
              auditoría y asesoría fiscal a empresas de todos los tamaños.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo está conformado por contadores públicos certificados 
              y especialistas en diferentes áreas fiscales, comprometidos con la 
              excelencia y el crecimiento de nuestros clientes.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipo de trabajo profesional"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
