// ============================================
// CONFIGURACIÓN DEL CLIENTE
// Este es el único archivo que se modifica al dar de alta un nuevo cliente.
// El resto del código (index.html) es genérico y lee sus datos de aquí.
// ============================================

const CLIENT_CONFIG = {
  // --- Identidad del negocio ---
  businessName: "Eurocar-Motor",        // Nombre que aparece en PDFs, contratos, etc.
  clientName: "Yuriy",                  // Nombre del propietario, usado en el saludo del dashboard

  // --- Datos de contacto ---
  phone: "+34 692 92 22 99",           // Con prefijo internacional
  phoneDisplay: "692 92 22 99",         // Como se muestra en pantalla
  whatsapp: "+34 692 92 22 99",         // Número de WhatsApp de contacto
  address: "Carrer les Minetes, 100, Polígono Industrial, 08130",
  city: "Santa Perpètua de Mogoda",
  email: "",                            // Vacío por ahora

  // --- Conexión a Supabase (base de datos del cliente) ---
  supabaseUrl: "https://rxmokcdynbmkhtirdpcf.supabase.co",
  supabaseKey: "sb_publishable_jG5mA8o9eVvMEIVBAJop2A_XA9EI4cu",
  bucket: "vehiculos-fotos",            // Bucket de Supabase Storage para fotos

  // --- Web y catálogo ---
  catalogUrl: "https://eurocarmotor.com/catalogo/",
  catalogTitle: "Furgonetas y vehículos comerciales de ocasión",
  catalogHero: "Furgonetas y vehículos de ocasión, listos para ti",
  catalogColor: "#16255C",
  catalogMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.8!2d2.1889!3d41.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd5c5c5c5c5c%3A0x0!2sSanta+Perp%C3%A8tua+de+Mogoda!5e0!3m2!1ses!2ses!4v1234567890",
};
