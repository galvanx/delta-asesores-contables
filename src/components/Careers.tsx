
import { Briefcase, Upload } from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    linkedin: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de carrera enviado:', formData);
    // Aquí se manejaría el envío del formulario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-100 p-4 rounded-full">
              <Briefcase className="h-8 w-8 text-brand" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Estamos Contratando!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a nuestro equipo de profesionales. Buscamos contadores talentosos 
            que quieran crecer con nosotros y brindar el mejor servicio a nuestros clientes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Aplica Aquí
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input 
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input 
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input 
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input 
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn (Opcional)
                </label>
                <input 
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-colors"
                  placeholder="@tu-perfil-linkedin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Curriculum Vitae *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Arrastra y suelta tu CV aquí</p>
                  <p className="text-sm text-gray-500 mb-4">o</p>
                  <input 
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label 
                    htmlFor="cv-upload"
                    className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition-colors cursor-pointer inline-block"
                  >
                    Seleccionar Archivo
                  </label>
                  <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX hasta 5MB</p>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand text-white px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors font-semibold text-lg"
              >
                Enviar Aplicación
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
