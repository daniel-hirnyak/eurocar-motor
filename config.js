// ============================================
// CONFIGURACIÓN DEL CLIENTE
// Este es el único archivo que se modifica al dar de alta un nuevo cliente.
// El resto del código (index.html) es genérico y lee sus datos de aquí.
// ============================================

const CLIENT_CONFIG = {
  // --- Identidad del negocio ---
  businessName: "Eurocar Motor",        // Nombre que aparece en PDFs, contratos, etc.

  // --- Conexión a Supabase (base de datos del cliente) ---
  supabaseUrl: "https://rxmokcdynbmkhtirdpcf.supabase.co",
  supabaseKey: "sb_publishable_jG5mA8o9eVvMEIVBAJop2A_XA9EI4cu",
};
