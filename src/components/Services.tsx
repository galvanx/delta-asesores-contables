
import { Calculator, FileText, TrendingUp, Users, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidad General",
      description: "Llevamos la contabilidad completa de tu empresa con precisión y cumplimiento normativo.",
      features: ["Estados Financieros", "Conciliaciones Bancarias", "Control de Inventarios"]
    },
    {
      icon: FileText,
      title: "Asesoría Fiscal",
      description: "Te ayudamos a cumplir con todas tus obligaciones fiscales y optimizar tu carga tributaria.",
      features: ["Declaraciones de Impuestos", "Planeación Fiscal", "Representación ante SAT"]
    },
    {
      icon: TrendingUp,
      title: "Auditoría",
      description: "Servicios de auditoría interna y externa para garantizar la transparencia de tu negocio.",
      features: ["Auditoría Financiera", "Auditoría Operacional", "Dictámenes Fiscales"]
    },
    {
      icon: Users,
      title: "Nóminas",
      description: "Administración completa de nóminas y cumplimiento de obligaciones laborales.",
      features: ["Cálculo de Nóminas", "IMSS e INFONAVIT", "Finiquitos y PTU"]
    },
    {
      icon: Shield,
      title: "Consultoría Empresarial",
      description: "Asesoramiento estratégico para la toma de decisiones empresariales importantes.",
      features: ["Análisis Financiero", "Proyecciones", "Reestructuración"]
    },
    {
      icon: Clock,
      title: "Servicios Express",
      description: "Servicios rápidos para trámites urgentes y consultas específicas.",
      features: ["Consultas Rápidas", "Trámites Urgentes", "Soporte Inmediato"]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios contables y fiscales diseñados 
            para satisfacer las necesidades específicas de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-brand-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-brand-100 rounded-lg mb-6">
                  <Icon className="h-8 w-8 text-brand" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
