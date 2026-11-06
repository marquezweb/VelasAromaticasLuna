# Luna · Velas Aromáticas

Demo de catálogo para Luna Velas Aromáticas, con fotografías reales de la marca, productos, regalos y souvenirs para cualquier tipo de evento.

## Vista previa local

Requiere Node.js 18 o posterior. No necesita instalar dependencias.

```sh
node server.cjs
```

Abrir http://127.0.0.1:4173/ en el navegador. Para usar otro puerto, definir la variable de entorno `PORT`.

```sh
node --check app.js
node --check server.cjs
```

También están disponibles `npm start` y `npm run check` si tenés npm instalado. El servidor incluido es una herramienta de vista previa local. La web también puede servirse como archivos estáticos.

## Archivos

- `index.html`: estructura y contenido de la página.
- `style.css`: diseño adaptable, modo oscuro y efectos con soporte de movimiento reducido.
- `app.js`: catálogo de 24 propuestas, filtros, detalles, galería y consultas.
- `assets/`: imágenes optimizadas, logo, ícono de WhatsApp y video de souvenirs.
- `server.cjs`: servidor local sin dependencias.

## Contacto

- Instagram: https://www.instagram.com/velas.aromaticasluna/
- WhatsApp: https://wa.me/5493515639634

Cada producto permite elegir una cantidad y consultar por WhatsApp o sumarlo a una selección mayorista. Se pueden editar cantidades y quitar modelos antes de preparar una consulta conjunta. El formulario incluye datos opcionales del negocio y la localidad. La persona confirma el envío desde WhatsApp.

La selección funciona en memoria durante la visita: se reinicia al recargar y no reserva stock ni confirma pedidos. Los mínimos de compra, precios, combinaciones y plazos deben confirmarse con la marca.

## Alcance

Demo sin pagos, cuentas, base de datos ni carrito. No envía formularios ni mensajes automáticamente. Los nombres del catálogo son descriptivos; aromas, medidas, presentaciones y disponibilidad se confirman con la marca.

Las fotos y el video fueron proporcionados para esta demo. Los recursos de marca y producto conservan sus derechos correspondientes; este repositorio no otorga una licencia de reutilización sobre ellos.

No se configura despliegue automático. Subir cambios al repositorio no publica la web.
