const wholesaleOrder=new Map();
const items=[
  {
    "name": "Velas aromáticas en frascos de vidrio",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-nov-1038"
    ],
    "text": "Velas aromáticas en frascos de vidrio.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Velas en carameleras de vidrio",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-nov-0995"
    ],
    "text": "Velas en carameleras de vidrio.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Velas en vasos de vidrio con tapa de madera",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-oct-2442"
    ],
    "text": "Velas en vasos de vidrio con tapa de madera.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Velas en cuencos de madera",
    "cat": "aromaticas",
    "categories": [
      "aromaticas",
      "souvenirs"
    ],
    "images": [
      "catalogo-oct-2456"
    ],
    "text": "Velas en cuencos de madera.",
    "presentation": "Las fotos muestran velas en cuencos. Consultá las presentaciones de esta línea."
  },
  {
    "name": "Velas en recipientes artesanales de yeso",
    "cat": "aromaticas",
    "categories": [
      "aromaticas",
      "souvenirs"
    ],
    "images": [
      "catalogo-nov-1156"
    ],
    "text": "Velas en recipientes artesanales de yeso.",
    "presentation": "Las fotos muestran recipientes con vela y mecha visibles. Consultá los modelos y presentaciones de esta línea.",
    "aliases": [
      "Velas en recipientes de yeso"
    ]
  },
  {
    "name": "Mini velas aromáticas",
    "cat": "aromaticas",
    "categories": [
      "aromaticas",
      "souvenirs"
    ],
    "images": [
      "catalogo-nov-1028"
    ],
    "text": "Mini velas aromáticas.",
    "presentation": "Las fotos muestran frascos pequeños abiertos y cerrados. Consultá las presentaciones disponibles.",
    "aliases": [
      "Mini velas aromáticas en frascos"
    ]
  },
  {
    "name": "Velas flotantes",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-nov-1075"
    ],
    "text": "Velas flotantes.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Velas con flores secas en recipientes de corazón",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-nov-1183"
    ],
    "text": "Velas con flores secas en recipientes de corazón.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Velas personalizadas con nombres y frases",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-oct-2446"
    ],
    "text": "Velas personalizadas con nombres y frases.",
    "presentation": "Las fotos muestran velas con frases. Consultá con Luna las opciones de nombres y frases para tu pedido."
  },
  {
    "name": "Velas para regalar en box y combos especiales",
    "cat": "aromaticas",
    "categories": [
      "aromaticas"
    ],
    "images": [
      "catalogo-oct-2477"
    ],
    "text": "Velas para regalar en box y combos especiales.",
    "presentation": "La fotografía muestra un box con velas. Consultá qué incluye la presentación que querés encargar."
  },
  {
    "name": "Jabones con forma de margarita",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [
      "catalogo-nov-1048"
    ],
    "text": "Jabones con forma de margarita.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad.",
    "aliases": [
      "Margaritas decorativas"
    ]
  },
  {
    "name": "Velas con forma de margaritas",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas con forma de margaritas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas en forma de flor",
    "cat": "molde",
    "categories": [
      "molde",
      "souvenirs"
    ],
    "images": [
      "catalogo-oct-2523"
    ],
    "text": "Velas en forma de flor.",
    "presentation": "La foto muestra el modelo. Consultá con Luna su presentación como souvenir.",
    "aliases": [
      "Velas en forma de flores"
    ]
  },
  {
    "name": "Velas con forma de rosas",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas con forma de rosas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas con forma de corazones",
    "cat": "molde",
    "categories": [
      "molde",
      "souvenirs"
    ],
    "images": [],
    "text": "Velas con forma de corazones.",
    "presentation": "Consultá con Luna las opciones para este modelo.",
    "aliases": [
      "Velas en forma de corazones"
    ]
  },
  {
    "name": "Velas con forma de ositos",
    "cat": "molde",
    "categories": [
      "molde",
      "souvenirs"
    ],
    "images": [],
    "text": "Velas con forma de ositos.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas con formas geométricas",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [
      "catalogo-nov-1022"
    ],
    "text": "Velas con formas geométricas.",
    "presentation": "Las fotos muestran velas de formas geométricas. Consultá cómo se presentan y qué cantidad corresponde a cada pedido."
  },
  {
    "name": "Velas decorativas de distintos tamaños",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [
      "catalogo-nov-1144"
    ],
    "text": "Velas decorativas de distintos tamaños.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Velas con motivos navideños",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas con motivos navideños.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas en forma de estrellas",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas en forma de estrellas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas en forma de arbolitos de Navidad",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas en forma de arbolitos de Navidad.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas temáticas para fechas especiales",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas temáticas para fechas especiales.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas personalizadas para eventos",
    "cat": "molde",
    "categories": [
      "molde"
    ],
    "images": [],
    "text": "Velas personalizadas para eventos.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Bandejas decorativas",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1125"
    ],
    "text": "Bandejas decorativas.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Cuencos artesanales",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1121"
    ],
    "text": "Cuencos artesanales.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Portavelas",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1062"
    ],
    "text": "Portavelas.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Portasahumerios de yeso con frases",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1076"
    ],
    "text": "Portasahumerios de yeso con frases.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad.",
    "aliases": [
      "Portasahumerios con frases"
    ]
  },
  {
    "name": "Apagavelas",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1092"
    ],
    "text": "Apagavelas metálico con mango largo.",
    "presentation": "Consultá con Luna la disponibilidad."
  },
  {
    "name": "Joyeros y alhajeros",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [],
    "text": "Joyeros y alhajeros.",
    "presentation": "Consultá con Luna las opciones para este modelo.",
    "aliases": [
      "Joyeros",
      "Alhajeros"
    ]
  },
  {
    "name": "Jaboneras de yeso con forma de concha",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1126"
    ],
    "text": "Jaboneras de yeso con forma de concha.",
    "presentation": "Consultá con Luna los colores disponibles.",
    "aliases": [
      "Jaboneras"
    ]
  },
  {
    "name": "Organizadores decorativos",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [],
    "text": "Organizadores decorativos.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Macetas artesanales",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1131"
    ],
    "text": "Macetas artesanales.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Floreros",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1067"
    ],
    "text": "Floreros.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Figuras decorativas en yeso",
    "cat": "objetos",
    "categories": [
      "objetos",
      "souvenirs"
    ],
    "images": [
      "catalogo-nov-1080"
    ],
    "text": "Figuras decorativas en yeso.",
    "presentation": "La foto muestra el modelo. Consultá con Luna su presentación como souvenir.",
    "aliases": [
      "Figuras decorativas"
    ]
  },
  {
    "name": "Adornos para mesas y estanterías",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [
      "catalogo-nov-1165"
    ],
    "text": "Adornos para mesas y estanterías.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Piezas personalizadas en diferentes colores y diseños",
    "cat": "objetos",
    "categories": [
      "objetos"
    ],
    "images": [],
    "text": "Piezas personalizadas en diferentes colores y diseños.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Margaritas aromáticas con tarjeta",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Margaritas aromáticas con tarjeta.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Bombones aromáticos de cera",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Bombones aromáticos de cera.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Tabletas aromáticas de cera",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Tabletas aromáticas de cera.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Tabletas aromáticas de yeso",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Tabletas aromáticas de yeso.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Velas souvenir con ositos",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [
      "ositos"
    ],
    "text": "Velas en recipientes con ositos y lazos celestes.",
    "presentation": "Consultá con Luna las opciones de personalización para tu evento."
  },
  {
    "name": "Jabones en bolsitas de organza",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [
      "catalogo-nov-1177"
    ],
    "text": "Jabones en bolsitas de organza.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación.",
    "aliases": [
      "Souvenirs en bolsitas de organza"
    ]
  },
  {
    "name": "Souvenirs con etiquetas, nombres y fechas personalizadas",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Souvenirs con etiquetas, nombres y fechas personalizadas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Presentaciones con flores y tarjeta",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [
      "catalogo-oct-2165"
    ],
    "text": "Presentaciones con flores y tarjeta.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Presentaciones especiales con cintas, flores secas y tarjetas",
    "cat": "souvenirs",
    "categories": [
      "souvenirs"
    ],
    "images": [],
    "text": "Presentaciones especiales con cintas, flores secas y tarjetas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Difusores aromáticos con varillas",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [
      "catalogo-nov-1009"
    ],
    "text": "Difusores aromáticos con varillas.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Difusores aromáticos para autos",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [],
    "text": "Difusores aromáticos para autos.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Aromatizadores de ambientes / textiles",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [
      "catalogo-nov-1015"
    ],
    "text": "Aromatizadores de ambientes / textiles.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación.",
    "aliases": [
      "Aromatizadores de ambientes",
      "Aromatizadores textiles"
    ]
  },
  {
    "name": "Tabletas aromáticas para espacios pequeños",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [],
    "text": "Tabletas aromáticas para espacios pequeños.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Box de velas aromáticas",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [
      "catalogo-oct-2527"
    ],
    "text": "Box de velas aromáticas.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Box de velas y artículos de decoración",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [
      "catalogo-oct-2521"
    ],
    "text": "Box de velas y artículos de decoración.",
    "presentation": "La fotografía muestra una vela con forma de flor junto a piezas decorativas dentro de un box. Consultá los componentes de cada presentación."
  },
  {
    "name": "Combos de difusores y aromatizadores",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [
      "catalogo-oct-2181"
    ],
    "text": "Combos de difusores y aromatizadores.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Sets de velas con bandejas decorativas",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [
      "catalogo-oct-2481"
    ],
    "text": "Sets de velas con bandejas decorativas.",
    "presentation": "Fotografías de referencia de la línea. Consultá con Luna los modelos y qué incluye cada presentación."
  },
  {
    "name": "Regalos para cumpleaños",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [],
    "text": "Regalos para cumpleaños.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Regalos para ocasiones especiales",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [
      "catalogo-oct-2508"
    ],
    "text": "Regalos para ocasiones especiales.",
    "presentation": "Consultá con Luna las opciones y la disponibilidad."
  },
  {
    "name": "Regalos personalizados",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [],
    "text": "Regalos personalizados.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Presentaciones especiales para empresas",
    "cat": "regalos",
    "categories": [
      "regalos"
    ],
    "images": [],
    "text": "Presentaciones especiales para empresas.",
    "presentation": "Consultá con Luna las opciones para este modelo."
  },
  {
    "name": "Cascadas de humo",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [
      "catalogo-oct-2239"
    ],
    "text": "Cascadas de humo para conos de incienso de reflujo.",
    "presentation": "Consultá las presentaciones disponibles y los accesorios incluidos."
  },
  {
    "name": "Hornitos aromáticos",
    "cat": "ambiente",
    "categories": [
      "ambiente"
    ],
    "images": [
      "catalogo-nov-1051"
    ],
    "text": "Hornitos aromáticos.",
    "presentation": "Consultá las presentaciones disponibles y los accesorios incluidos."
  }
];
const categoryNames={"aromaticas": "VELAS AROMÁTICAS", "molde": "VELAS DE MOLDE Y DECORATIVAS", "objetos": "DECORACIÓN", "souvenirs": "SOUVENIRS PERSONALIZADOS", "ambiente": "AROMATIZACIÓN DE AMBIENTES", "regalos": "BOX Y REGALOS ESPECIALES"};
const descriptions={pendientes:'Podés consultar con Luna por cualquiera de estos modelos.',souvenirs:'Souvenirs personalizados para todo tipo de eventos.',todos:'Velas aromáticas, decoración, souvenirs y regalos artesanales.',aromaticas:'Vidrio, luz y relieves para acompañar tus momentos.',molde:'Formas que invitan a mirar los detalles.',regalos:'Combinaciones para pensar en alguien especial.',objetos:'Objetos para darle una intención a tu espacio.',ambiente:'Fragancias y difusores fotografiados en el local de Luna.'};
let orderCatalogChanged=false;
const orderStorageKey='luna.wholesale.v1';let orderStorageAvailable=true;
function restoreOrder(){
    try {
        let saved;
        try { saved=JSON.parse(localStorage.getItem(orderStorageKey)||'null'); }
        catch { return; }
        if(saved?.version!==1 || !Array.isArray(saved.products))return;

        const orderNames=new Map(items.map(item=>[item.name,item.name]));
        for(const item of items)
            for(const alias of item.aliases||[])
                if(!orderNames.has(alias))orderNames.set(alias,item.name);

        for(const row of saved.products.slice(0,200)){
            if(!Array.isArray(row)||!Number.isInteger(row[1])||row[1]<1||row[1]>100000)continue;
            const name=orderNames.get(row[0]);
            if(!name){
                orderCatalogChanged=true;
                continue;
            }
            const quantity=(wholesaleOrder.get(name)||0)+row[1];
            wholesaleOrder.set(name,Math.min(quantity,100000));
            if(quantity>100000)orderCatalogChanged=true;
        }
        if(orderCatalogChanged){
            const backup=orderStorageKey+'.antes-de-revision';
            if(!localStorage.getItem(backup))localStorage.setItem(backup,JSON.stringify(saved));
            document.querySelector('#catalog-update-note').hidden=false;
        }
    } catch { orderStorageAvailable=false; }
}
function persistOrder(){try{if(wholesaleOrder.size)localStorage.setItem(orderStorageKey,JSON.stringify({version:1,products:[...wholesaleOrder]}));else localStorage.removeItem(orderStorageKey)}catch{orderStorageAvailable=false}document.querySelector('#order-storage').textContent=orderStorageAvailable?'Tu selección queda guardada en este navegador. No reserva stock ni confirma el pedido.':'Tu selección se conserva durante esta visita; este navegador no permite guardarla al recargar.'}
restoreOrder();
const normalizeSearch=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').trim();
const products=document.querySelector('#products'),dialog=document.querySelector('#detail'),motion=matchMedia('(prefers-reduced-motion: reduce)');
let activeItems=items,activeItem=null,returnFocus=null,activeFilter="todos",catalogExpanded=false;
const catalogCrops=new Set([2442,2468,2451,2497,2489,2505]);
const asset=(id,small=false)=>`assets/luna-${id}${small?'-small':''}.webp`;
function setImage(img,id,alt,sizes='(max-width:700px) 80vw,450px'){img.src=asset(id);img.srcset=`${asset(id,true)} 640w, ${asset(id)} 1200w`;img.sizes=sizes;img.alt=alt}
function openDetail(item,trigger){const photos=item.images;if(trigger)returnFocus=trigger;activeItem=item;document.querySelector('#detail-title').textContent=item.name;document.querySelector('#detail-category').textContent=item.categories.map(c=>categoryNames[c]).join(' · ');document.querySelector('#detail-text').textContent=item.text;document.querySelector('#detail-presentation').textContent=item.presentation;document.querySelector('#detail-options').textContent=item.cat==='ambiente'?'Consultá contenido, aromas, accesorios y modo de uso.':item.cat==='objetos'?'Consultá materiales, medidas y accesorios incluidos.':'Consultá aromas, medidas y opciones de cada modelo.';document.querySelector('#product-position').textContent=`${activeItems.indexOf(item)+1} / ${activeItems.length}`;document.querySelectorAll('.detail-pagination button').forEach(b=>b.disabled=activeItems.length<2);const gallery=document.querySelector('#detail-gallery');gallery.replaceChildren();function show(id,i){setImage(document.querySelector('#detail-img'),id,`${item.name}, presentación ${i+1}`);document.querySelector('#photo-caption').textContent=photos.length>1?`Presentación ${i+1} de ${photos.length}`:'Una mirada al detalle';[...gallery.children].forEach((b,n)=>{b.classList.toggle('selected',n===i);b.setAttribute('aria-pressed',String(n===i))})}if(photos.length>1)photos.forEach((id,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Ver ${item.name}, presentación ${i+1}`);b.innerHTML=`<img src="${asset(id,true)}" alt="" width="48" height="60">`;b.onclick=()=>show(id,i);gallery.append(b)});const hasPhoto=photos.length>0;dialog.classList.toggle('detail-without-photo',!hasPhoto);document.querySelector('#detail-img').hidden=!hasPhoto;document.querySelector('.zoom-open').hidden=!hasPhoto;if(hasPhoto)show(photos[0],0);else{document.querySelector('#detail-img').removeAttribute('src');document.querySelector('#detail-img').removeAttribute('srcset');document.querySelector('#detail-img').alt='';document.querySelector('#photo-caption').textContent='Sin foto disponible'}if(!dialog.open)dialog.showModal();else dialog.scrollTop=0}
function render(filter='todos',expanded=false){activeFilter=filter;catalogExpanded=expanded;const query=normalizeSearch(document.querySelector('#catalog-search').value),terms=query.split(/\s+/).filter(Boolean);const matching=items.filter(x=>(filter==='pendientes'?!x.images.length:filter==='todos'||x.categories.includes(filter))&&terms.every(term=>normalizeSearch([x.name,...(x.aliases||[]),...x.categories.map(c=>categoryNames[c])].join(' ')).includes(term))).sort((a,b)=>Number(Boolean(b.images.length))-Number(Boolean(a.images.length)));activeItems=filter==='todos'&&!expanded&&!query?matching.slice(0,6):matching;document.querySelector('#clear-search').hidden=!query;document.querySelector('#catalog-empty').hidden=matching.length>0;const more=document.querySelector('#catalog-more');more.hidden=!!query||filter!=='todos'||matching.length<=6;more.setAttribute('aria-expanded',String(expanded));more.innerHTML=expanded?'Ver menos <span>↑</span>':`Ver más productos (${matching.length-6}) <span>↓</span>`;products.replaceChildren();products.classList.toggle('filtered',filter!=='todos');activeItems.forEach((item,i)=>{const button=document.createElement('button');button.className='product';button.type='button';button.style.animationDelay=`${Math.min(i*45,225)}ms`;button.setAttribute('aria-label',`Ver detalle de ${item.name}`);button.innerHTML=`${item.images.length?`<div class="product-photo">${productPhotoMarkup(item)}<span aria-hidden="true">Acercate al detalle ↗</span></div>`:''}<div class="product-title"><h3>${item.name}</h3><span aria-hidden="true">↗</span></div><p>${item.categories.map(c=>categoryNames[c]).join(' · ')}</p>${item.images.length?'':`<small class="pending-tag">Sin foto disponible</small>`}`;button.onclick=()=>openDetail(item,button);const entry=document.createElement('article');entry.className='product-entry'+(query?'':' entrance-waiting');if(query)entry.dataset.staged='true';const whatsapp=document.createElement('a');whatsapp.className='product-whatsapp';whatsapp.href='https://wa.me/5493515639634?text='+encodeURIComponent(`Hola, Luna. Me interesa «${item.name}». ¿Me cuentan las opciones, presentación y disponibilidad?`);whatsapp.target='_blank';whatsapp.rel='noopener';whatsapp.setAttribute('aria-label',`Consultar por ${item.name} en WhatsApp`);whatsapp.innerHTML='<span>Consultar por WhatsApp</span><img src="assets/whatsapp-small.svg" width="17" height="17" alt="">';const controls=document.createElement('div');controls.className='wholesale-controls';const label=document.createElement('label');label.textContent='Cantidad';const quantity=document.createElement('input');quantity.type='number';quantity.required=true;quantity.min='1';quantity.max='100000';quantity.step='1';quantity.value=String(wholesaleOrder.get(item.name)||1);quantity.setAttribute('aria-label',`Cantidad de ${item.name}`);label.append(quantity);const add=document.createElement('button');add.type='button';add.className='order-add';add.textContent=wholesaleOrder.has(item.name)?'Actualizar cantidad':'Sumar al pedido';const direct=()=>{const q=Number(quantity.value);const valid=quantity.validity.valid&&Number.isInteger(q)&&q>0;whatsapp.href=valid?'https://wa.me/5493515639634?text='+encodeURIComponent(`¡Hola, Luna! ✨ Vi «${item.name}» en el catálogo y me encantó. ¿Te puedo encargar ${q} ${q===1?'unidad':'unidades'}?`):'#';whatsapp.setAttribute('aria-disabled',String(!valid))};quantity.addEventListener('input',direct);whatsapp.addEventListener('click',e=>{if(!quantity.checkValidity()){e.preventDefault();quantity.reportValidity()}});add.onclick=()=>{if(!quantity.reportValidity())return;wholesaleOrder.set(item.name,Number(quantity.value));refreshOrder();document.querySelector('#order-status').textContent=`${item.name}: ${quantity.value} unidades en tu selección.`;add.textContent='Agregado ✓';setTimeout(()=>{if(add.isConnected)add.textContent=wholesaleOrder.has(item.name)?'Actualizar cantidad':'Sumar al pedido'},1600)};direct();controls.append(label,add);entry.append(button,controls,whatsapp);products.append(entry)});document.querySelectorAll('[data-filter]').forEach(b=>{const current=b.dataset.filter===filter;b.classList.toggle('active',current);b.setAttribute('aria-pressed',String(current))});document.querySelector('#catalog-description').textContent=descriptions[filter];document.querySelector('#catalog-count').textContent=activeItems.length<matching.length?`${activeItems.length} de ${matching.length} propuestas`:`${activeItems.length} ${activeItems.length===1?'propuesta':'propuestas'}`}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{clearTimeout(searchTimer);render(b.dataset.filter)});document.querySelectorAll('[data-select]').forEach(a=>a.addEventListener('click',()=>{clearTimeout(searchTimer);document.querySelector('#catalog-search').value='';render(a.dataset.select)}));document.querySelector('.close').onclick=()=>dialog.close();document.querySelector('#detail-contact').onclick=()=>{returnFocus=null;dialog.close()};dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true})});dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close()});function step(direction){const index=activeItems.indexOf(activeItem);openDetail(activeItems[(index+direction+activeItems.length)%activeItems.length])}document.querySelector('#previous-product').onclick=()=>step(-1);document.querySelector('#next-product').onclick=()=>step(1);render();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const scenes=[{id:623265029,alt:'Vela de corazones apilados sobre una base decorativa',position:'50% 47%'},{id:628737162,alt:'Velas encendidas en vidrio acanalado sobre lino',position:'50% 65%'},{id:863112771,alt:'Souvenirs Luna en cuencos de madera con flores secas',position:'50% 50%'}];
let sceneVersion=0,sceneIndex=0,sceneTimer=null,scenePaused=motion.matches,sceneHovered=false,sceneFocused=false,heroVisible=false,sceneAdvanced=false;
const heroPhoto=document.querySelector('.hero-photo'),playback=document.querySelector('.hero-playback'),sceneButtons=[...document.querySelectorAll('[data-scene]')];
function stopScenes(){clearTimeout(sceneTimer);sceneTimer=null}
function scheduleScene(){stopScenes();if(!scenePaused&&!sceneHovered&&!sceneFocused&&!document.hidden&&heroVisible)sceneTimer=setTimeout(()=>changeScene((sceneIndex+1)%scenes.length),sceneAdvanced?4000:6000)}
function updatePlayback(){playback.setAttribute('aria-pressed',String(scenePaused));playback.setAttribute('aria-label',scenePaused?'Reanudar presentación':'Pausar presentación');playback.querySelector('span').textContent=scenePaused?'▶':'Ⅱ';heroPhoto.classList.toggle('slideshow-paused',scenePaused)}
async function changeScene(index){stopScenes();const request=++sceneVersion,scene=scenes[index],preload=new Image();preload.src=innerWidth>700?(scene.id===623265029?asset(scene.id):asset(scene.id+'-hero')):asset(scene.id);try{await preload.decode()}catch{scheduleScene();return}if(request!==sceneVersion)return;const img=document.querySelector('#hero-image');heroPhoto.querySelectorAll('.hero-outgoing').forEach(el=>el.remove());const outgoing=img.cloneNode(true);outgoing.removeAttribute('id');outgoing.removeAttribute('srcset');outgoing.src=img.currentSrc||img.src;outgoing.removeAttribute('fetchpriority');outgoing.removeAttribute('loading');outgoing.className='hero-outgoing';outgoing.style.objectPosition=getComputedStyle(img).objectPosition;outgoing.setAttribute('aria-hidden','true');outgoing.alt='';if(!motion.matches)heroPhoto.insertBefore(outgoing,img.nextSibling);setImage(img,scene.id,scene.alt,'(max-width:700px) 100vw,62vw');document.querySelector('#hero-desktop').srcset=(scene.id===623265029?asset(scene.id):asset(scene.id+'-hero'));img.style.objectPosition=innerWidth>700?'50% 50%':scene.position;sceneIndex=index;sceneAdvanced=true;const inset=document.querySelector(".hero-inset img");inset.src=asset(scene.id===628737162?"623265029-hero":"628737162-hero");inset.alt=scene.id===628737162?"Vela de corazones de Luna":"Velas Luna en vidrio acanalado";sceneButtons.forEach((button,i)=>{const selected=i===index;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected))});if(!motion.matches){img.animate([{opacity:0,clipPath:innerWidth<=700?'inset(0)':'inset(0 0 0 12%)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],{duration:innerWidth<=700?1500:1000,easing:'ease-in-out'});const fade=outgoing.animate([{opacity:1},{opacity:0}],{duration:innerWidth<=700?1500:1000,easing:'ease-in-out'});fade.onfinish=()=>outgoing.remove()}scheduleScene()}
sceneButtons.forEach((button,i)=>button.onclick=()=>changeScene(i));playback.onclick=()=>{scenePaused=!scenePaused;updatePlayback();scheduleScene()};heroPhoto.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){sceneHovered=true;stopScenes()}});heroPhoto.addEventListener('pointerleave',()=>{sceneHovered=false;scheduleScene()});heroPhoto.addEventListener('focusin',e=>{sceneFocused=e.target!==playback;if(sceneFocused)stopScenes()});heroPhoto.addEventListener('focusout',e=>{if(!heroPhoto.contains(e.relatedTarget)){sceneFocused=false;scheduleScene()}});document.addEventListener('visibilitychange',scheduleScene);new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;scheduleScene()},{threshold:.15}).observe(heroPhoto);motion.addEventListener('change',()=>{if(motion.matches){scenePaused=true;updatePlayback();scheduleScene()}});updatePlayback();scheduleScene();
// Prepare only the next two small, local images; original photos stay untouched.
scenes.slice(1).forEach(scene=>{const image=new Image();image.src=asset(scene.id)});
const detailImage=document.querySelector('#detail-img');detailImage.addEventListener('load',()=>{if(dialog.open&&!motion.matches)detailImage.animate([{opacity:.3},{opacity:1}],{duration:innerWidth<=700?800:450,easing:'ease-in-out'})});
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu');function closeMenu(){document.body.classList.remove('menu-open');menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú')}menuButton.onclick=()=>{const open=menu.hidden;menu.hidden=!open;document.body.classList.toggle('menu-open',open);menu.style.top=document.querySelector('header').getBoundingClientRect().bottom+'px';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')};menu.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus()}});document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});addEventListener('resize',()=>{if(innerWidth>700)closeMenu()});
let scrollScheduled=false;function scrollUpdate(){const available=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.transform=`scaleX(${available>0?Math.min(1,scrollY/available):0})`;scrollScheduled=false}addEventListener('scroll',()=>{if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(scrollUpdate)}},{passive:true});addEventListener('resize',scrollUpdate);scrollUpdate();const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>{const current=a.hash===`#${e.target.id}`;a.classList.toggle('current',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}),{rootMargin:'-20% 0px -55% 0px'});document.querySelectorAll('#colecciones,#seleccion,#nosotros,#contacto').forEach(el=>sectionObserver.observe(el));

// A different atmosphere, with the same original photographs.
const themeButton=document.querySelector('.night-toggle');
themeButton.addEventListener('click',()=>{const night=document.documentElement.dataset.theme!=='night';const apply=()=>{document.documentElement.dataset.theme=night?'night':'day';themeButton.setAttribute('aria-pressed',String(night));themeButton.setAttribute('aria-label',night?'Volver a Luna de día':'Ver Luna de noche');themeButton.querySelector('[aria-hidden]').textContent=night?'☀':'☾';themeButton.querySelector('.night-label').textContent=night?'Modo día':'Modo noche';document.querySelector('meta[name="theme-color"]').content=night?'#211d19':'#f7f3eb'};if(document.startViewTransition&&!motion.matches)document.startViewTransition(apply);else apply()});
const zoomDialog=document.querySelector('#photo-zoom'),zoomCanvas=document.querySelector('.zoom-canvas'),zoomScale=document.querySelector('#zoom-scale');
function resetZoom(){document.querySelector('.zoom-help').textContent='Fotografía original de Luna · Ampliá para explorar sus texturas.';zoomCanvas.classList.remove('is-zoomed');zoomScale.textContent='Ampliar +';zoomScale.setAttribute('aria-pressed','false');zoomCanvas.scrollTop=0;zoomCanvas.scrollLeft=0}
document.querySelector('.zoom-open').onclick=()=>{const src=document.querySelector('#detail-img');const img=document.querySelector('#zoom-image');img.src=src.src;img.alt=src.alt;resetZoom();zoomDialog.showModal()};document.querySelector('#zoom-close').onclick=()=>zoomDialog.close();zoomScale.onclick=()=>{const zoomed=zoomCanvas.classList.toggle('is-zoomed');zoomScale.textContent=zoomed?'Ajustar −':'Ampliar +';zoomScale.setAttribute('aria-pressed',String(zoomed));document.querySelector('.zoom-help').textContent=zoomed?'Desplazá la imagen para explorar los detalles.':'Fotografía original de Luna · Ampliá para explorar sus texturas.';if(!zoomed){zoomCanvas.scrollTop=0;zoomCanvas.scrollLeft=0}};zoomDialog.addEventListener('click',e=>{const r=zoomDialog.getBoundingClientRect();if(e.target===zoomDialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))zoomDialog.close()});zoomDialog.addEventListener('close',()=>document.querySelector('.zoom-open').focus({preventScroll:true}));
// Keep depth subtle and disable it entirely when reduced motion is requested.
let depthScheduled=false;function updateDepth(){const hero=document.querySelector('.hero-photo'),r=hero.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){hero.style.setProperty('--depth-shift',motion.matches?'0px':`${Math.max(-12,Math.min(12,-r.top*.035))}px`)}depthScheduled=false}addEventListener('scroll',()=>{if(!depthScheduled){depthScheduled=true;requestAnimationFrame(updateDepth)}},{passive:true});motion.addEventListener('change',updateDepth);updateDepth();

// Pointer effects are delegated so freshly filtered products behave the same way.
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
const hoverSurfaces='.product-photo,.collection-photo,.hero-photo,.gift-photo,.still-main,.still-small,.moment-photo';
let pointerFrame=0,pointerSample=null,activeSurface=null,activeMagnet=null;
function addHoverBadges(){products.querySelectorAll('.product-photo:not([data-hover-ready])').forEach(surface=>{surface.dataset.hoverReady='true';const badge=document.createElement('span');badge.className='hover-badge';badge.setAttribute('aria-hidden','true');badge.innerHTML='VER<br>DETALLE <b>↗</b>';surface.append(badge)})}
addHoverBadges();new MutationObserver(addHoverBadges).observe(products,{childList:true});
function clearSurface(){if(activeSurface){activeSurface.classList.remove('pointer-active');['--tilt-x','--tilt-y','--pan-x','--pan-y'].forEach(p=>activeSurface.style.removeProperty(p));activeSurface=null}}
function clearMagnet(){if(activeMagnet){activeMagnet.classList.remove('magnetic-active');activeMagnet.style.removeProperty('--magnet-x');activeMagnet.style.removeProperty('--magnet-y');activeMagnet=null}}
function paintPointer(){pointerFrame=0;if(!pointerSample||motion.matches)return;const {target,x,y}=pointerSample;const surface=target.closest(hoverSurfaces);if(surface!==activeSurface)clearSurface();if(surface){activeSurface=surface;const r=surface.getBoundingClientRect(),px=Math.max(0,Math.min(1,(x-r.left)/r.width)),py=Math.max(0,Math.min(1,(y-r.top)/r.height));surface.style.setProperty('--hover-x',`${px*100}%`);surface.style.setProperty('--hover-y',`${py*100}%`);surface.style.setProperty('--tilt-x',`${(0.5-py)*2.4}deg`);surface.style.setProperty('--tilt-y',`${(px-0.5)*2.4}deg`);surface.style.setProperty('--pan-x',`${(px-0.5)*-9}px`);surface.style.setProperty('--pan-y',`${(py-0.5)*-9}px`);surface.classList.add('pointer-active')}const magnet=target.closest('.button');if(magnet!==activeMagnet)clearMagnet();if(magnet){activeMagnet=magnet;const r=magnet.getBoundingClientRect();magnet.style.setProperty('--magnet-x',`${Math.max(-4,Math.min(4,(x-r.left-r.width/2)*.04))}px`);magnet.style.setProperty('--magnet-y',`${Math.max(-3,Math.min(3,(y-r.top-r.height/2)*.09))}px`);magnet.classList.add('magnetic-active')}}
document.addEventListener('pointermove',e=>{if(e.pointerType==='touch'){document.documentElement.classList.remove('mouse-effects');resetPointer();return}if(e.pointerType!=='mouse'||motion.matches)return;document.documentElement.classList.add('mouse-effects');pointerSample={target:e.target,x:e.clientX,y:e.clientY};if(!pointerFrame)pointerFrame=requestAnimationFrame(paintPointer)},{passive:true});
function resetPointer(){pointerSample=null;if(pointerFrame){cancelAnimationFrame(pointerFrame);pointerFrame=0}clearSurface();clearMagnet()}
document.documentElement.addEventListener('pointerleave',resetPointer);addEventListener('blur',resetPointer);document.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')document.documentElement.classList.remove('mouse-effects');resetPointer()},{passive:true});addEventListener('scroll',resetPointer,{passive:true});finePointer.addEventListener('change',resetPointer);motion.addEventListener('change',resetPointer);

document.querySelector('#catalog-more').onclick=()=>{const collapsing=catalogExpanded;render(activeFilter,!catalogExpanded);if(collapsing)document.querySelector('.filters').scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'start'})};


// A local consultation aid: nothing is submitted or sent by this page.
const inquiryOptions={casa:{guidance:'Elegí una pieza y consultá los aromas, medidas y presentaciones que mejor acompañen tu espacio.',message:'¡Hola, Luna! ✨ Quisiera hacer un pedido mayorista. ¿Podemos coordinarlo?'},regalo:{guidance:'Contale a Luna la ocasión y el estilo que buscás. La marca te confirma las combinaciones y presentaciones.',message:'Hola, Luna. Estoy buscando un regalo. ¿Me cuentan qué sets y presentaciones puedo consultar?'},celebracion:{guidance:'Sumá a tu mensaje la ocasión, la cantidad aproximada y la fecha. Opciones, presupuesto y plazos se confirman con Luna.',message:'Hola, Luna. Quisiera consultar por souvenirs para una celebración. La ocasión es…, necesito aproximadamente… unidades para el día… ¿Qué opciones podemos ver?'}};
let inquiryIntent='casa',inquiryPiece=null;
function updateInquiryMessage(){
 const note=document.querySelector('#inquiry-note').value.trim();
 let message=wholesaleOrder.size?'¡Hola, Luna! ✨ Vi su catálogo y quisiera encargar estos productos:\n'+[...wholesaleOrder].map(([n,q])=>`• ${n}: ${q} ${q===1?'unidad':'unidades'}`).join('\n')+'\n¿Podemos coordinar el pedido?':inquiryPiece?`¡Hola, Luna! ✨ Vi «${inquiryPiece.name}» en el catálogo y me encantó. ¿Te puedo encargar este modelo?`:inquiryOptions[inquiryIntent].message;
 if(note)message+='\n\n'+note;
 document.querySelector('#inquiry-text').textContent=message;
 document.querySelector('#whatsapp-inquiry').href='https://wa.me/5493515639634?text='+encodeURIComponent(message);
 document.querySelector('.whatsapp-float').href='https://wa.me/5493515639634?text='+encodeURIComponent(message);
}

function configureInquiry(intent='casa',piece=null){inquiryIntent=intent;inquiryPiece=piece;document.querySelectorAll('[data-inquiry]').forEach(b=>{const selected=b.dataset.inquiry===intent;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});document.querySelector('#inquiry-guidance').textContent=inquiryOptions[intent].guidance;document.querySelector('#inquiry-product').textContent=piece?`TU MENSAJE · ${piece.name}`:'ASÍ VA A LLEGAR TU MENSAJE';updateInquiryMessage()}

document.querySelectorAll('.inquiry-fields input,.inquiry-fields textarea').forEach(input=>input.addEventListener('input',updateInquiryMessage));
document.querySelectorAll('[data-inquiry]').forEach(b=>b.onclick=()=>configureInquiry(b.dataset.inquiry));document.querySelectorAll('[data-intent]').forEach(a=>a.addEventListener('click',()=>configureInquiry(a.dataset.intent)));document.querySelector('#detail-contact').addEventListener('click',()=>configureInquiry(activeItem?.cat==='regalos'?'regalo':'casa',activeItem));configureInquiry();

// Animate visible content once, instead of running offscreen animations.
const productEntrance=new IntersectionObserver(entries=>entries.forEach(entry=>{
 if(!entry.isIntersecting)return;
 const card=entry.target;productEntrance.unobserve(card);
 if(!motion.matches){card.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:innerWidth<=700?3000:2800,delay:Number(card.dataset.motionOrder||0)*100,easing:'ease-in-out',fill:'backwards'})}
 card.classList.remove('entrance-waiting');
}),{threshold:0,rootMargin:'0px 0px 100px 0px'});
function stageProducts(){products.querySelectorAll('.product-entry:not([data-staged])').forEach((card,i)=>{card.dataset.staged='true';card.dataset.motionOrder=String(i%(innerWidth<=700?2:3));if(motion.matches)card.classList.remove('entrance-waiting');else productEntrance.observe(card)})}
stageProducts();new MutationObserver(records=>{records.forEach(record=>record.removedNodes.forEach(node=>{if(node.nodeType===1)productEntrance.unobserve(node)}));stageProducts()}).observe(products,{childList:true});
products.addEventListener('focusin',e=>{const card=e.target.closest('.product-entry');if(!card)return;productEntrance.unobserve(card);card.getAnimations().forEach(a=>a.cancel());card.classList.remove('entrance-waiting')});
motion.addEventListener('change',()=>{if(motion.matches)products.querySelectorAll('.product-entry').forEach(card=>{productEntrance.unobserve(card);card.getAnimations().forEach(a=>a.cancel());card.classList.remove('entrance-waiting')})});

new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('scene-in-view',e.isIntersecting)),{threshold:.1}).observe(heroPhoto);
document.addEventListener('click',e=>{if(motion.matches||innerWidth<=700)return;const button=e.target.closest('.button');if(!button)return;const r=button.getBoundingClientRect(),pulse=document.createElement('span');pulse.className='effect-pulse';pulse.setAttribute('aria-hidden','true');pulse.style.left=`${e.detail?e.clientX-r.left:r.width/2}px`;pulse.style.top=`${e.detail?e.clientY-r.top:r.height/2}px`;button.append(pulse);pulse.animate([{opacity:.22,transform:'translate(-50%,-50%) scale(0)'},{opacity:0,transform:'translate(-50%,-50%) scale(1)'}],{duration:600,easing:'ease-out'}).onfinish=()=>pulse.remove()});

const returnTop=document.createElement('a');returnTop.className='return-top';returnTop.href='#inicio';returnTop.setAttribute('aria-label','Volver al inicio');returnTop.innerHTML='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20"></circle></svg><span aria-hidden="true">↑</span>';document.body.append(returnTop);let ringFrame=0;function updateReturnTop(){ringFrame=0;const max=document.documentElement.scrollHeight-innerHeight,progress=max>0?Math.min(1,scrollY/max):0,show=scrollY>900;returnTop.classList.toggle('visible',show);returnTop.tabIndex=show?0:-1;returnTop.setAttribute('aria-hidden',String(!show));returnTop.querySelector('circle').style.strokeDashoffset=String(125.66*(1-progress))}addEventListener('scroll',()=>{if(!ringFrame)ringFrame=requestAnimationFrame(updateReturnTop)},{passive:true});addEventListener('resize',updateReturnTop);updateReturnTop();

const souvenirVideoDialog=document.querySelector('#souvenir-video'),souvenirVideo=souvenirVideoDialog.querySelector('video');document.querySelector('.souvenir-video-open').onclick=()=>souvenirVideoDialog.showModal();document.querySelector('#close-souvenir-video').onclick=()=>souvenirVideoDialog.close();souvenirVideoDialog.addEventListener('close',()=>{souvenirVideo.pause();document.querySelector('.souvenir-video-open').focus({preventScroll:true})});

function refreshOrder(){
 const panel=document.querySelector('#pedido'),list=document.querySelector('#order-lines');panel.hidden=!wholesaleOrder.size;list.replaceChildren();
 for(const [name,count] of wholesaleOrder){const row=document.createElement('li'),title=document.createElement('span');title.textContent=name;const q=document.createElement('input');q.type='number';q.required=true;q.min='1';q.max='100000';q.step='1';q.value=count;q.setAttribute('aria-label','Cantidad seleccionada de '+name);q.oninput=()=>{if(!q.validity.valid)return;wholesaleOrder.set(name,Number(q.value));updateOrderSummary()};q.onchange=()=>q.reportValidity();const remove=document.createElement('button');remove.type='button';remove.textContent='Quitar';remove.setAttribute('aria-label','Quitar '+name+' del pedido');remove.onclick=()=>{wholesaleOrder.delete(name);refreshOrder();if(!wholesaleOrder.size)document.querySelector('#catalog-search').focus({preventScroll:true})};row.append(title,q,remove);list.append(row)}
 updateOrderSummary();
}


function updateOrderSummary(){
 persistOrder();
 const total=[...wholesaleOrder.values()].reduce((a,b)=>a+b,0);document.querySelector('#order-total').textContent=total+(total===1?' unidad · ':' unidades · ')+wholesaleOrder.size+(wholesaleOrder.size===1?' modelo':' modelos');const shortcut=document.querySelector('#order-shortcut');shortcut.hidden=!wholesaleOrder.size;shortcut.textContent='Revisar mi pedido · '+total+(total===1?' unidad ↓':' unidades ↓');updateInquiryMessage();
}

function validOrderQuantities(){for(const input of document.querySelectorAll('#order-lines input')){if(!input.reportValidity())return false}return true}
document.querySelector('#whatsapp-inquiry').addEventListener('click',e=>{if(!validOrderQuantities())e.preventDefault()});document.querySelector('.whatsapp-float').addEventListener('click',e=>{if(!validOrderQuantities())e.preventDefault()});

function productPhotoMarkup(item){const photos=item.images;if(!photos.length)return '';const id=photos[0],src=catalogCrops.has(id)?`assets/luna-${id}-catalog.webp`:asset(id,true);return `<img src="${src}" sizes="(max-width:700px) 44vw,30vw" alt="${item.name}" width="640" height="853" loading="lazy">`}


let searchTimer;
document.querySelector('#catalog-search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>render(activeFilter),180)});
document.querySelector('#clear-search').onclick=()=>{clearTimeout(searchTimer);document.querySelector('#catalog-search').value='';render(activeFilter);document.querySelector('#catalog-search').focus()};
document.querySelector('#reset-search').onclick=()=>{clearTimeout(searchTimer);document.querySelector('#catalog-search').value='';render('todos');document.querySelector('#catalog-search').focus()};
refreshOrder();
