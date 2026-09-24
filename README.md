# Portafolio de Jorge León

Sitio web profesional de Jorge Enrique León Mera, Ingeniero de Infraestructura TI.

## 📋 Descripción

Portafolio responsivo construido con HTML, CSS y JavaScript puro (sin dependencias externas). Alojado en AWS S3 + CloudFront con despliegue automático via GitHub Actions.

## 🚀 Características

- **Responsivo**: Funciona perfectamente en mobile, tablet y desktop
- **Rápido**: Optimizado para performance
- **Seguro**: Alojado en HTTPS con certificado SSL
- **Actualización automática**: CI/CD con GitHub Actions
- **Sin dependencias**: Solo HTML, CSS, JavaScript vanilla

## 📁 Estructura

```
portfolio/
├── index.html       # Página principal
├── styles.css       # Estilos (con variables CSS)
├── script.js        # Interactividad
├── README.md        # Este archivo
└── .gitignore       # Archivos ignorados por Git
```

## 🛠️ Desarrollo local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

2. Abre en tu navegador:
```bash
# Opción 1: Abre directamente el archivo
open index.html

# Opción 2: Usa un servidor local (Python 3)
python3 -m http.server 8000
# Luego abre http://localhost:8000
```

## 🔧 Personalización

### Cambiar datos personales

Edita `index.html` y busca los siguientes puntos:

- **Email**: Busca `mailto:jorge@example.com`
- **LinkedIn**: Busca el enlace de LinkedIn
- **GitHub**: Busca el enlace de GitHub
- **Descripción**: Modifica las secciones de "Sobre mí" y "Proyectos"

### Cambiar colores

En `styles.css`, modifica las variables:
```css
:root {
    --primary-color: #2563eb;        /* Azul principal */
    --secondary-color: #1e40af;      /* Azul secundario */
    --text-color: #1f2937;           /* Color del texto */
    --light-bg: #f9fafb;             /* Fondo claro */
}
```

## 🚢 Despliegue en AWS

Consulta el tutorial: `aws-deployment-guide.md`

Servicios utilizados:
- **S3**: Hosting del sitio estático
- **CloudFront**: CDN para velocidad y seguridad
- **Route 53**: DNS management
- **ACM**: Certificados SSL/TLS
- **GitHub Actions**: Despliegue automático

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ Tiempo de carga: <1s (con CloudFront)
- ✅ Responsividad: Mobile-first
- ✅ SEO: Optimizado

## 📝 Licencia

Todos los derechos reservados © 2024 Jorge León

## 🤝 Contacto

- Email: jorge@example.com
- LinkedIn: [Jorge León](https://linkedin.com/in/jorgeleon)
- GitHub: [@jorgeleon](https://github.com/jorgeleon)
- Ubicación: Guayaquil, Ecuador
