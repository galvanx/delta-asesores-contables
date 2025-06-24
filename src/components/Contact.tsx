
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 1234-5678",
      link: "tel:+525512345678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@contaexpert.com",
      link: "mailto:info@contaexpert.com"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Reforma 123, Col. Centro, CDMX",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para una 
            consulta gratuita y descubre cómo podemos impulsar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-brand transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-brand-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Listo para comenzar?
              </h3>
              <p className="text-gray-600 mb-6">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte 
                a optimizar tus procesos contables y fiscales.
              </p>
              <button className="w-full bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors font-semibold">
                Agendar Consulta Gratuita
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input 
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-colors"
                  placeholder="+52 (55) 1234-5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors font-semibold"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
