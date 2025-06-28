import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Building } from 'lucide-react';
import { DATA } from '../../utils/data';
import { sendTelegramMessage } from '../../service/telegram.service';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState(DATA);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        (async () => {
            await sendTelegramMessage(formData);
        })()
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>

            <div
                className="py-24 relative max-w-7xl mx-auto"
            >
                <h2 className='text-4xl font-bold text-center text-white'>Enviar información<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> para cotizar</span></h2>
                <p className="text-xl text-gray-600 text-center dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Completa el formulario y recibe una propuesta personalizada.
                </p>

                <form onSubmit={handleSubmit} className='w-full lg:max-w-3xl m-auto mt-16'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="flex gap-2 items-center">
                                    <User className="h-4 w-4" />
                                    Nombre completo *
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded px-2 py-1 focus:outline-none"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="flex gap-2 items-center">
                                    <Mail className="h-4 w-4" />
                                    Email *
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded px-2 py-1 focus:outline-none"
                                placeholder="tu@email.com"
                                required
                            />
                            <p className="text-xs text-gray-600 mt-1">
                                Este email será público y será usado para contactar con usted.
                            </p>
                        </div>

                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="flex gap-2 items-center">
                                    <Phone className="h-4 w-4" />
                                    Teléfono
                                </span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="rounded px-2 py-1 focus:outline-none"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="flex gap-2 items-center">
                                    <Building className="h-4 w-4" />
                                    Empresa <span className='text-white/50'>(dejar en blanco si no aplica)</span>
                                </span>
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="rounded px-2 py-1 focus:outline-none"
                                placeholder="Nombre de tu empresa"
                            />
                            <p className="text-xs text-gray-600 mt-1">
                                Esta información será pública y será usada para contactar con usted.
                            </p>
                        </div>

                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="label-text font-medium">Tipo de proyecto *</span>
                            </label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="rounded px-2 py-3 focus:outline-none"
                                required
                            >
                                <option value="">Selecciona el tipo</option>
                                <option value="web-app">Aplicación Web</option>
                                <option value="mobile-app">Aplicación Móvil</option>
                                <option value="desktop-app">Aplicación de Escritorio</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="api">API/Backend</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>

                        <div className="grid">
                            <label className="text-md text-white">
                                <span className="label-text font-medium">Presupuesto estimado</span>
                            </label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="rounded px-2 py-3 focus:outline-none"
                            >
                                <option value="">Selecciona un rango</option>
                                <option value="under-1k">Menos de $1,000</option>
                                <option value="1k-2.5k">$1,000 - $2,500</option>
                                <option value="2.5k-5k">$2,500 - $5,000</option>
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="over-10k">Más de $10,000</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid mt-4">
                        <label className="text-md text-white">
                            <span className="flex gap-2 items-center">
                                <MessageSquare className="h-4 w-4" />
                                Descripción del proyecto *
                            </span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 rounded p-2 h-32"
                            placeholder="Describe tu proyecto, funcionalidades requeridas, objetivos, público objetivo, etc."
                            required
                        ></textarea>
                    </div>

                    <div className="grid pt-4">
                        <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300">
                            <Send className="h-5 w-5" />
                            Enviar Solicitud de Cotización
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};