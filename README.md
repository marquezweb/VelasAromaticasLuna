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
- `app.js`: catálogo de 63 líneas de productos, filtros, detalles, galería y consultas.
- `assets/`: imágenes optimizadas, logo, ícono de WhatsApp y video de souvenirs.
- `server.cjs`: servidor local sin dependencias.

## Contacto

- Instagram: https://www.instagram.com/velas.aromaticasluna/
- WhatsApp: https://wa.me/5493515639634

Cada producto permite elegir una cantidad y consultar por WhatsApp o sumarlo a una selección mayorista. Se pueden editar cantidades y quitar modelos antes de preparar una consulta conjunta. El recorrido tiene dos pasos: elegir modelos y cantidades en el catálogo, y revisar la selección en contacto antes de abrir WhatsApp. Solo se ofrece una nota opcional; no se piden datos personales ni del negocio. La persona confirma el envío desde WhatsApp.

La selección de modelos y cantidades se guarda localmente en este navegador y se recupera al recargar. No se guarda la nota de la consulta. Si el almacenamiento no está disponible, funciona durante la visita y lo informa. No reserva stock ni confirma pedidos. Los mínimos de compra, precios, combinaciones y plazos deben confirmarse con la marca.

## Alcance

Demo sin pagos, cuentas, base de datos ni carrito. No envía formularios ni mensajes automáticamente. Los nombres del catálogo siguen la lista de Luna; aromas, medidas, presentaciones y disponibilidad se confirman con la marca.

Las fotos y el video fueron proporcionados para esta demo. Los recursos de marca y producto conservan sus derechos correspondientes; este repositorio no otorga una licencia de reutilización sobre ellos.

La web es estática y compatible con GitHub Pages. Si Pages está habilitado en el repositorio, los cambios de la rama configurada pueden actualizar el sitio publicado.

## Actualización de noviembre

Fotografías seleccionadas de Contenido noviembre y oferta de productos proporcionada por la marca. Ver `PRODUCTOS-LUNA.md` y `assets/NOVIEMBRE-SOURCES.json`. Los nombres y rubros siguen la lista de Luna. Se agregan Cascadas de humo, confirmado por el cliente, y Hornitos aromáticos, documentado en una publicación de la marca. No se asignan medidas, fragancias ni mínimos sin confirmar.

Las fichas incluyen 38 líneas con fotografías asignadas, 23 con foto vacía y 2 con referencias marcadas como imágenes a confirmar. El filtro rojo reúne estas 25 fichas pendientes de validación. Ver `FOTOS-PENDIENTES-LUNA.md`.

El buscador filtra por nombre de producto y categoría, ignora tildes y mayúsculas y funciona junto con los filtros del catálogo.
