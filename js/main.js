/* ==========================================================================
   ÓPTICA ENDRES — Main Interactive Logic & Real Catalog Data
   ========================================================================== */

const WHATSAPP_NUMBER = "5551997389804";

function getWhatsAppUrl(message) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

/* --------------------------------------------------------------------------
   1. REAL PRODUCT CATALOG (OS MAIS VENDIDOS — GRAU & SOLARES)
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  // ARMAÇÕES DE GRAU
  {
    id: "rx-3447v-black",
    category: "grau",
    brand: "Ray-Ban",
    name: "Ray-Ban Round Metal Clássico",
    code: "0RX3447VL 2503 53",
    material: "Metal Ultraleve • Aro Redondo",
    img1: "imagens/prod_grau_rayban_round.avif",
    img2: "imagens/prod_grau_rayban_round_2.avif",
    highlight: "Mais Vendido"
  },
  {
    id: "rx-0316v-clubmaster",
    category: "grau",
    brand: "Ray-Ban",
    name: "Ray-Ban Mega Clubmaster",
    code: "0RX0316V 2000 50",
    material: "Acetato & Metal • Ícone Retrô",
    img1: "imagens/prod_grau_rayban_clubmaster.avif",
    img2: "imagens/prod_grau_rayban_clubmaster_2.avif",
    highlight: "Clássico"
  },
  {
    id: "rx-3447v-gold",
    category: "grau",
    brand: "Ray-Ban",
    name: "Ray-Ban Round Metal Dourado",
    code: "0RX3447VL 2500 53",
    material: "Metal Dourado • Conforto Anatômico",
    img1: "imagens/prod_grau_rayban_gold.avif",
    img2: "imagens/prod_grau_rayban_gold_2.avif",
    highlight: "Destaque"
  },
  {
    id: "rx-5430-acetate",
    category: "grau",
    brand: "Ray-Ban",
    name: "Ray-Ban Acetato Contemporâneo",
    code: "0RX5430 8356 51",
    material: "Acetato Premium • Ideal Multifocal",
    img1: "imagens/prod_grau_rayban_acetate.avif",
    img2: "imagens/prod_grau_rayban_acetate_2.avif",
    highlight: "Conforto"
  },
  {
    id: "pr-vpr07v",
    category: "grau",
    brand: "Prada",
    name: "Armação Prada Symbole VPR07V",
    code: "VPR07V • Coleção Milano",
    material: "Acetato Italiano de Alta Densidade",
    img1: "imagens/prod_grau_prada_vpr07v.png",
    img2: "imagens/prod_grau_prada_vpr07v_2.png",
    highlight: "Alta Moda"
  },
  {
    id: "pr-17zv",
    category: "grau",
    brand: "Prada",
    name: "Prada Heritage Tartaruga",
    code: "0PR 17ZV 15J1O1",
    material: "Acetato Esculpido • Design Italiano",
    img1: "imagens/prod_grau_prada_17zv.avif",
    img2: "imagens/prod_grau_prada_17zv_2.avif",
    highlight: "Exclusivo"
  },
  {
    id: "pr-a05v",
    category: "grau",
    brand: "Prada",
    name: "Prada Geometric Couture",
    code: "0PR A05V 17N1O1",
    material: "Acetato Nobre • Hastes Icônicas",
    img1: "imagens/prod_grau_prada_a05v.avif",
    img2: "imagens/prod_grau_prada_a05v_2.avif",
    highlight: "Novo"
  },
  {
    id: "dg-1346",
    category: "grau",
    brand: "Dolce & Gabbana",
    name: "Dolce & Gabbana Gold Rim",
    code: "0DG1346 1311 57",
    material: "Metal Banhado • Elegância Siciliana",
    img1: "imagens/prod_grau_dg_1346.avif",
    img2: "imagens/prod_grau_dg_1346_2.avif",
    highlight: "Luxo"
  },
  {
    id: "dg-3398",
    category: "grau",
    brand: "Dolce & Gabbana",
    name: "Dolce & Gabbana Cat-Eye Sartorial",
    code: "0DG3398 3091",
    material: "Acetato Italiano • Feminino Sofisticado",
    img1: "imagens/prod_grau_dg_3398.avif",
    img2: "imagens/prod_grau_dg_3398_2.avif",
    highlight: "Mais Vendido"
  },
  {
    id: "mu-01vv",
    category: "grau",
    brand: "Miu Miu",
    name: "Miu Miu Regard Oval",
    code: "0MU 01VV 08Q1O1 52",
    material: "Acetato Ultrafino • Ícone de Passarela",
    img1: "imagens/prod_grau_miumiu_01vv.avif",
    img2: "imagens/prod_grau_miumiu_01vv_2.avif",
    highlight: "Trend Alert"
  },
  {
    id: "mu-07xv",
    category: "grau",
    brand: "Miu Miu",
    name: "Miu Miu Wander Cat-Eye",
    code: "0MU 07XV 08Q1O1 53",
    material: "Acetato com Logo Miu Miu em Metal",
    img1: "imagens/prod_grau_miumiu_07xv.avif",
    img2: "imagens/prod_grau_miumiu_07xv_2.avif",
    highlight: "Desejado"
  },
  {
    id: "vo-5577l",
    category: "grau",
    brand: "Vogue",
    name: "Vogue Eyewear Glam Black",
    code: "0VO5577L W44 53",
    material: "Acetato Leve • Design Italiano",
    img1: "imagens/prod_grau_vogue_5577.avif",
    img2: "imagens/prod_grau_vogue_5577_2.avif",
    highlight: "Versátil"
  },
  {
    id: "ty-2148u",
    category: "grau",
    brand: "Tory Burch",
    name: "Tory Burch New York Classic",
    code: "0TY2148U 2004 52",
    material: "Acetato & Detalhes Dourados",
    img1: "imagens/prod_grau_toryburch_2148.avif",
    img2: "imagens/prod_grau_toryburch_2148_2.avif",
    highlight: "Elegante"
  },
  {
    id: "ve-3365u",
    category: "grau",
    brand: "Versace",
    name: "Versace Medusa Couture",
    code: "0VE3365U 5263 54",
    material: "Acetato com Medalhão Medusa",
    img1: "imagens/prod_grau_versace_3365.avif",
    img2: "imagens/prod_grau_versace_3365_2.avif",
    highlight: "Grife"
  },
  {
    id: "ea-1027",
    category: "grau",
    brand: "Emporio Armani",
    name: "Emporio Armani Executive",
    code: "0EA1027 3001 55",
    material: "Metal & Fibra • Leveza Absoluta",
    img1: "imagens/prod_grau_armani_1027.avif",
    img2: "imagens/prod_grau_armani_1027_2.avif",
    highlight: "Executivo"
  },
  {
    id: "ox-8139",
    category: "grau",
    brand: "Oakley",
    name: "Oakley Pitchman R O-Matter™",
    code: "0OX8139 813903 50",
    material: "O-Matter™ & Hastes em Aço",
    img1: "imagens/prod_grau_oakley_8139.avif",
    img2: "imagens/prod_grau_oakley_8139_2.avif",
    highlight: "Performance"
  },

  // ÓCULOS DE SOL (SOLARES)
  {
    id: "rb-3548-hex",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Hexagonal Polarizado",
    code: "RB3548 Polarizado",
    material: "Lentes Cristal Polarizadas • Proteção UV400",
    img1: "imagens/prod_sol_rayban_hexagonal.png",
    img2: "imagens/prod_sol_rayban_hexagonal_2.png",
    highlight: "Polarizado"
  },
  {
    id: "rb-1971-square",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Square 1971",
    code: "RB1971 Square",
    material: "Armação Metálica • Lentes Degradê",
    img1: "imagens/prod_sol_rayban_square1971.png",
    img2: "imagens/prod_sol_rayban_square1971_2.png",
    highlight: "Ícone 70s"
  },
  {
    id: "rb-4165-justin",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Justin Polarizado",
    code: "RB4165 Polarizado",
    material: "Acabamento Emborrachado • Lente Polarizada",
    img1: "imagens/prod_sol_rayban_justin.png",
    img2: "imagens/prod_sol_rayban_justin_2.png",
    highlight: "Mais Vendido"
  },
  {
    id: "rb-4171-erika",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Érika Polarizado",
    code: "RB4171L Polarizado",
    material: "Frente Aveludada & Hastes Metálicas",
    img1: "imagens/prod_sol_rayban_erika.png",
    img2: "imagens/prod_sol_rayban_erika_2.png",
    highlight: "Polarizado"
  },
  {
    id: "rb-3025-aviator",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Aviator Flash Lenses",
    code: "0RB3025 112/17",
    material: "Metal Dourado • Lente Espelhada Cristal",
    img1: "imagens/prod_sol_rayban_aviator.avif",
    img2: "imagens/prod_sol_rayban_aviator_2.avif",
    highlight: "Lendário"
  },
  {
    id: "rb-0840s-mega",
    category: "sol",
    brand: "Ray-Ban",
    name: "Ray-Ban Mega Wayfarer",
    code: "0RB0840S 6826J5",
    material: "Acetato Bold • Aceita Lentes de Grau",
    img1: "imagens/prod_sol_rayban_mega.avif",
    img2: "imagens/prod_sol_rayban_mega_2.avif",
    highlight: "Lançamento"
  },
  {
    id: "mu-b05s",
    category: "sol",
    brand: "Miu Miu",
    name: "Miu Miu Runway Rimless",
    code: "0MU B05S 16K20I",
    material: "Design Vanguardista • Logo Dourado",
    img1: "imagens/prod_sol_miumiu_b05s.avif",
    img2: "imagens/prod_sol_miumiu_b05s_2.avif",
    highlight: "Alta Moda"
  },
  {
    id: "mu-11ws",
    category: "sol",
    brand: "Miu Miu",
    name: "Miu Miu Symbole Tortoise",
    code: "0MU 11WS 14L20I",
    material: "Acetato Esculpido • Proteção Solar Total",
    img1: "imagens/prod_sol_miumiu_11ws.avif",
    img2: "imagens/prod_sol_miumiu_11ws_2.avif",
    highlight: "Exclusivo"
  },
  {
    id: "be-4476",
    category: "sol",
    brand: "Burberry",
    name: "Burberry London Check",
    code: "0BE4476 300274",
    material: "Acetato Tartaruga • Elegância Britânica",
    img1: "imagens/prod_sol_burberry_4476.avif",
    img2: "imagens/prod_sol_burberry_4476_2.avif",
    highlight: "Luxo"
  },
  {
    id: "be-4335",
    category: "sol",
    brand: "Burberry",
    name: "Burberry Heritage Square",
    code: "0BE4335 39298G",
    material: "Design Britânico • Aceita Grau Solar",
    img1: "imagens/prod_sol_burberry_4335.avif",
    img2: "imagens/prod_sol_burberry_4335_2.avif",
    highlight: "Sofisticado"
  },
  {
    id: "vo-5642su",
    category: "sol",
    brand: "Vogue",
    name: "Vogue Eyewear Solar Chic",
    code: "0VO5642SU W44/81",
    material: "Lentes Polarizadas • Estilo Contemporâneo",
    img1: "imagens/prod_sol_vogue_5642.avif",
    img2: "imagens/prod_sol_vogue_5642_2.avif",
    highlight: "Polarizado"
  },
  {
    id: "ea-4129",
    category: "sol",
    brand: "Emporio Armani",
    name: "Emporio Armani Milano Sun",
    code: "0EA4129 504287",
    material: "Acabamento Fosco • Lentes UV400",
    img1: "imagens/prod_sol_armani_4129.avif",
    img2: "imagens/prod_sol_armani_4129_2.avif",
    highlight: "Clássico"
  },
  {
    id: "oo-9265",
    category: "sol",
    brand: "Oakley",
    name: "Oakley Latch Prizm™",
    code: "0OO9265 926568",
    material: "Tecnologia Prizm™ • Alto Contraste Visual",
    img1: "imagens/prod_sol_oakley_9265.avif",
    img2: "imagens/prod_sol_oakley_9265_2.avif",
    highlight: "Prizm™"
  }
];

/* --------------------------------------------------------------------------
   2. BRAND STORIES DOSSIER DATA (From /marcas on opticaendres.com.br)
   -------------------------------------------------------------------------- */
const BRAND_STORIES = {
  vogue: {
    name: "Vogue Eyewear",
    logo: "imagens/brand_vogue.png",
    founded: "Fundada em 1973",
    origin: "Itália 🇮🇹",
    audience: "Feminino & Unissex Contemporâneo",
    intro: "A Vogue Eyewear rapidamente se estabeleceu como uma marca líder no mercado de óculos, graças à sua capacidade de oferecer produtos de alta qualidade a preços acessíveis. A marca se destaca por sua atenção aos detalhes, design inovador e compromisso com a satisfação do cliente, combinando estilo, conforto e qualidade.",
    styles: "Reconhecida por capturar as últimas tendências da moda, oferece uma ampla gama de estilos que vão desde o clássico e elegante até o moderno e ousado — incluindo armações oversized, detalhes brilhantes e colaborações com celebridades que definem as tendências da temporada.",
    materials: "Vasta seleção de armações em acetato italiano, metal leve e combinações de materiais que valorizam a beleza e a individualidade."
  },
  miumiu: {
    name: "Miu Miu",
    logo: "imagens/brand_miumiu.png",
    founded: "Fundada em 1993 por Miuccia Prada",
    origin: "Itália 🇮🇹",
    audience: "Alta Moda & Expressão Vanguardista",
    intro: "A Miu Miu se destaca por sua abordagem inovadora e experimental à moda. Seus óculos são frequentemente vistos como peças de arte, com designs que desafiam as convenções e celebram a originalidade para quem busca luxo, estilo e atitude.",
    styles: "Conhecida por seus designs femininos, irreverentes e vanguardistas. Seus óculos apresentam uma estética única que combina elementos clássicos e modernos, com detalhes marcantes, cores sofisticadas e formatos geométricos e ovais icônicos.",
    materials: "Acetato nobre esculpido, metais preciosos e combinações artesanais que valorizam a criatividade e a expressão pessoal."
  },
  tiffany: {
    name: "Tiffany & Co.",
    logo: "imagens/brand_tiffany.png",
    founded: "Fundada em 1837 por Charles Lewis Tiffany",
    origin: "Nova York, EUA 🇺🇸",
    audience: "Luxo Atemporal & Alta Joalheria Óptica",
    intro: "A Tiffany & Co. é uma marca lendária com uma história rica em design e inovação. Seus óculos são feitos com os mais altos padrões de qualidade, utilizando materiais nobres e técnicas de fabricação artesanais, combinando luxo, estilo e tradição.",
    styles: "Sinônimo de elegância, sofisticação e requinte. Os modelos mais icônicos incluem armações inspiradas na alta joalheria da maison, com acabamentos impecáveis e o inconfundível toque do azul Tiffany.",
    materials: "Seleção refinada de armações em acetato premium, detalhes em metais nobres e design ergonômico de extremo bom gosto."
  },
  oakley: {
    name: "Oakley",
    logo: "imagens/brand_oakley.png",
    founded: "Fundada em 1975 por James Jannard",
    origin: "Califórnia, EUA 🇺🇸",
    audience: "Esporte, Performance & Lifestyle",
    intro: "A Oakley revolucionou o mercado de óculos com suas tecnologias inovadoras, como as lentes Prizm™, que melhoram o contraste e a clareza visual em diferentes condições de luz. Compromisso absoluto com qualidade, desempenho e engenharia óptica.",
    styles: "Designs esportivos e casuais consagrados mundialmente, incluindo ícones como Holbrook, Latch, Radar e Jawbreaker, além de armações de grau técnicas de alta durabilidade.",
    materials: "Construção em O Matter™ (material exclusivo ultraleve e resistente a impactos), titânio e apoios nasais Unobtainium® de alta aderência."
  },
  prada: {
    name: "Prada Milano",
    logo: "imagens/brand_prada.png",
    founded: "Fundada em 1913 em Milão",
    origin: "Itália 🇮🇹",
    audience: "Sofisticação Italiana & Design Arquitetônico",
    intro: "Referência absoluta na moda mundial, a Prada traduz sua herança milanesa em armações de grau e óculos solares que equilibram linhas arquitetônicas, inovação estética e excelência artesanal.",
    styles: "Da icônica linha Prada Symbole com hastes geométricas tridimensionais aos modelos clássicos em acetato tartaruga e preto profundo, perfeitos para lentes multifocais e solares com grau.",
    materials: "Acetato italiano de altíssima pureza e ligas metálicas ultraleves com acabamento polido à mão."
  },
  rayban: {
    name: "Ray-Ban",
    logo: "imagens/brand_rayban.png",
    founded: "Fundada em 1937",
    origin: "EUA / Itália",
    audience: "Clássico Atemporal & Ícones Globais",
    intro: "A marca de óculos mais reconhecida do planeta, presente há décadas nas vitrines da Óptica Endres com coleções completas de armações receituárias e solares polarizados.",
    styles: "Berço de lendas como Aviator, Wayfarer, Clubmaster, Round Metal, Hexagonal, Justin e Érika — todos disponíveis na Óptica Endres Moinhos com possibilidade de lentes de grau originais ou digitais.",
    materials: "Cristal mineral óptico, lentes polarizadas de alta definição, fibra de nylon e metais anticorrosivos."
  }
};

/* --------------------------------------------------------------------------
   3. RENDER CATALOG & FILTERING
   -------------------------------------------------------------------------- */
let activeCategory = "all";
let activeBrand = "all";
let searchQuery = "";

function renderCatalog() {
  const grid = document.getElementById("productsGrid");
  const countEl = document.getElementById("catalogCount");
  if (!grid) return;

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchBrand = activeBrand === "all" || p.brand.toLowerCase() === activeBrand.toLowerCase();
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q);
    return matchCat && matchBrand && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Exibindo ${filtered.length} modelo${filtered.length === 1 ? "" : "s"} em destaque`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 56px 24px; background: #fff; border-radius: 24px; border: 1px solid rgba(18,62,104,0.1);">
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 8px;">Procurando um modelo específico?</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Temos centenas de modelos adicionais em nossa loja física na Rua 24 de Outubro, 919. Consulte nossa equipe pelo WhatsApp!</p>
        <a href="${getWhatsAppUrl('Olá! Estou procurando um modelo específico de óculos na Óptica Endres Moinhos.')}" target="_blank" rel="noopener" class="btn btn--emerald">Consultar Estoque via WhatsApp</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((p) => {
      const catLabel = p.category === "grau" ? "Armação de Grau" : "Óculos Solar";
      const catClass = p.category === "grau" ? "product-badge--grau" : "product-badge--sol";
      const waMsg = `Olá! Vi no site da Óptica Endres o modelo *${p.name}* (Ref: ${p.code}) e gostaria de saber disponibilidade e valores.`;

      return `
        <article class="product-card" data-product-id="${p.id}">
          <div class="product-card__badges">
            <span class="product-badge ${catClass}">${catLabel}</span>
            <span class="product-badge" style="background: rgba(56,178,136,0.14); color: var(--endres-emerald-dark);">${p.highlight}</span>
          </div>
          <div class="product-card__stage" onclick="openQuickView('${p.id}')" title="Clique para ampliar">
            <img src="${p.img1}" alt="${p.name} - Ângulo 1" class="product-card__img product-card__img--primary" loading="lazy">
            <img src="${p.img2}" alt="${p.name} - Ângulo 2" class="product-card__img product-card__img--secondary" loading="lazy">
          </div>
          <div class="product-card__angles">
            <button type="button" class="angle-dot active" onclick="switchCardAngle(this, false)">Vista 1</button>
            <button type="button" class="angle-dot" onclick="switchCardAngle(this, true)">Vista 2</button>
          </div>
          <div class="product-card__body">
            <div class="product-card__brand">${p.brand}</div>
            <h3 class="product-card__title">${p.name}</h3>
            <div class="product-card__code">Ref: ${p.code} • ${p.material}</div>
            <div class="product-card__actions">
              <a href="${getWhatsAppUrl(waMsg)}" target="_blank" rel="noopener" class="btn-product-wa">
                <span>Consultar no WhatsApp</span>
              </a>
              <button type="button" class="btn-product-zoom" onclick="openQuickView('${p.id}')" aria-label="Ampliar modelo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

window.switchCardAngle = function (btn, showSecond) {
  const card = btn.closest(".product-card");
  if (!card) return;
  const dots = card.querySelectorAll(".angle-dot");
  dots.forEach((d) => d.classList.remove("active"));
  btn.classList.add("active");
  if (showSecond) {
    card.classList.add("show-angle-2");
  } else {
    card.classList.remove("show-angle-2");
  }
};

window.filterByCategory = function (cat) {
  activeCategory = cat;
  document.querySelectorAll(".category-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  renderCatalog();
  const catalogSection = document.getElementById("colecoes");
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/* --------------------------------------------------------------------------
   4. PRODUCT QUICK-VIEW MODAL
   -------------------------------------------------------------------------- */
window.openQuickView = function (productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  const waMsg = `Olá! Gostaria de informações sobre o modelo *${product.name}* (Código: ${product.code}) que vi no site da Óptica Endres.`;

  content.innerHTML = `
    <div class="quickview-grid">
      <div>
        <div class="quickview-stage">
          <img id="quickViewMainImg" src="${product.img1}" alt="${product.name}">
        </div>
        <div style="display: flex; justify-content: center; gap: 12px; margin-top: 14px;">
          <button type="button" class="btn btn--outline btn--sm" onclick="document.getElementById('quickViewMainImg').src='${product.img1}'">Ângulo Principal</button>
          <button type="button" class="btn btn--outline btn--sm" onclick="document.getElementById('quickViewMainImg').src='${product.img2}'">Segundo Ângulo</button>
        </div>
      </div>
      <div>
        <span class="section-tag">${product.brand} • ${product.category === "grau" ? "Armação de Grau" : "Óculos de Sol"}</span>
        <h3 style="font-family: var(--font-display); font-size: 2rem; line-height: 1.15; margin-bottom: 8px;">${product.name}</h3>
        <p style="font-family: monospace; color: var(--text-muted); margin-bottom: 16px;">Referência Oficial: ${product.code}</p>
        <p style="color: var(--text-secondary); font-size: 0.94rem; margin-bottom: 20px;">
          ${product.material}. Disponível na <strong>Óptica Endres Moinhos</strong> com garantia de autenticidade, ajuste personalizado gratuito e possibilidade de montagem com lentes digitais de alta precisão.
        </p>
        <div style="background: var(--bg-ivory); padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-subtle); font-size: 0.84rem; margin-bottom: 22px;">
          <strong>🎁 Benefício Exclusivo:</strong> Use o cupom <code>PROMOENDRES</code> para ganhar <strong>R$ 75 OFF</strong> na sua primeira compra em nossa loja física.
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="${getWhatsAppUrl(waMsg)}" target="_blank" rel="noopener" class="btn btn--emerald" style="width: 100%;">
            Reservar ou Consultar no WhatsApp
          </a>
          <a href="${getWhatsAppUrl(waMsg + ' Também quero orçar com minhas lentes de grau.')}" target="_blank" rel="noopener" class="btn btn--outline" style="width: 100%;">
            Orçar Este Modelo + Lentes de Grau
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
};

window.closeModal = function (modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove("open");
};

/* --------------------------------------------------------------------------
   5. BRAND DOSSIER TABS (/marcas)
   -------------------------------------------------------------------------- */
function renderBrandDossier(brandKey) {
  const data = BRAND_STORIES[brandKey];
  const panel = document.getElementById("dossierPanel");
  if (!data || !panel) return;

  document.querySelectorAll(".dossier-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.brandkey === brandKey);
  });

  panel.innerHTML = `
    <div class="dossier-panel__header">
      <img src="${data.logo}" alt="${data.name}" class="dossier-panel__logo">
      <div class="dossier-meta-badges">
        <span class="dossier-meta-badge">${data.founded}</span>
        <span class="dossier-meta-badge">${data.origin}</span>
        <span class="dossier-meta-badge">${data.audience}</span>
      </div>
    </div>
    <div class="dossier-section-block">
      <h4>Sobre a Grife</h4>
      <p>${data.intro}</p>
    </div>
    <div class="dossier-section-block">
      <h4>Principais Modelos & Estilos Icônicos</h4>
      <p>${data.styles}</p>
    </div>
    <div class="dossier-section-block" style="margin-bottom: 28px;">
      <h4>Variedade de Armações & Materiais</h4>
      <p>${data.materials}</p>
    </div>
    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <button type="button" class="btn btn--primary btn--sm" onclick="selectBrandInCatalog('${data.name.split(' ')[0]}')">
        Ver Modelos ${data.name.split(' ')[0]} no Catálogo
      </button>
      <a href="${getWhatsAppUrl(`Olá! Gostaria de conhecer os modelos disponíveis da marca ${data.name} na Óptica Endres Moinhos.`)}" target="_blank" rel="noopener" class="btn btn--outline btn--sm">
        Consultar Disponibilidade via WhatsApp
      </a>
    </div>
  `;
}

window.selectBrandInCatalog = function (brandName) {
  const pill = Array.from(document.querySelectorAll(".brand-pill")).find((el) =>
    el.dataset.brand.toLowerCase().includes(brandName.toLowerCase())
  );
  if (pill) {
    pill.click();
  }
  const catalogEl = document.getElementById("colecoes");
  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
};

/* --------------------------------------------------------------------------
   6. INTERACTIVE LENS CONSULTANT WIZARD (/lentes)
   -------------------------------------------------------------------------- */
let selectedLensNeed = "Lentes Multifocais Digitais (Voltz Free Form / Varilux / Zeiss / Rodenstock)";

window.selectLensOption = function (btn, needText) {
  selectedLensNeed = needText;
  document.querySelectorAll(".lens-option-btn").forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
};

window.sendLensConsultation = function () {
  const msg = `Olá! Estou no site da Óptica Endres e gostaria de uma consultoria especializada para: *${selectedLensNeed}*. Posso enviar foto da minha receita médica por aqui?`;
  window.open(getWhatsAppUrl(msg), "_blank", "noopener");
};

/* --------------------------------------------------------------------------
   7. COUPON COPY & R$ 75 OFF REGISTRATION
   -------------------------------------------------------------------------- */
window.copyPromoCoupon = function (btnEl) {
  const code = "PROMOENDRES";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).catch(() => {});
  }
  const originalHTML = btnEl.innerHTML;
  btnEl.innerHTML = "✓ CUPOM COPIADO: PROMOENDRES";
  setTimeout(() => {
    btnEl.innerHTML = originalHTML;
  }, 2600);
};

window.handleCouponSubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("couponName")?.value || "";
  const email = document.getElementById("couponEmail")?.value || "";
  const feedback = document.getElementById("couponFeedback");
  if (feedback) {
    feedback.style.display = "block";
    feedback.innerHTML = `
      <strong>Obrigado por se cadastrar, ${name}!</strong><br>
      Seu cupom <strong>PROMOENDRES</strong> de <strong>R$ 75 OFF na primeira compra</strong> está ativo e vale por 30 dias para compras em nossa loja da <strong>Óptica Endres Moinhos</strong> (Rua 24 de Outubro, 919).
      <div style="margin-top: 10px;">
        <a href="${getWhatsAppUrl(`Olá! Me cadastrei no site (${email}) para usar o cupom PROMOENDRES de R$ 75 OFF na Óptica Endres Moinhos!`)}" target="_blank" rel="noopener" style="text-decoration: underline; color: var(--endres-emerald-light); font-weight: 700;">
          Clique aqui para validar também direto pelo WhatsApp →
        </a>
      </div>
    `;
  }
};

/* --------------------------------------------------------------------------
   8. CONTACT FORM HANDLER
   -------------------------------------------------------------------------- */
window.handleContactSubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value || "";
  const phone = document.getElementById("contactPhone")?.value || "";
  const subject = document.getElementById("contactSubject")?.value || "Orçamento / Dúvida";
  const message = document.getElementById("contactMessage")?.value || "";

  const waText = `Olá, equipe Óptica Endres Moinhos!\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Assunto:* ${subject}\n*Mensagem:* ${message}`;
  window.open(getWhatsAppUrl(waText), "_blank", "noopener");
};

/* --------------------------------------------------------------------------
   9. INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Sticky header shadow
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 24);
    }
  });

  // Mobile Menu & "Mais" Dropdown Handling
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  const navDropdown = document.getElementById("navDropdown");
  const navDropdownBtn = document.getElementById("navDropdownBtn");
  const navOpenPolicies = document.getElementById("navOpenPolicies");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        if (navDropdown) navDropdown.classList.remove("is-open");
      });
    });
  }

  if (navDropdown && navDropdownBtn) {
    navDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navDropdown.classList.toggle("is-open");
      navDropdownBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove("is-open");
        navDropdownBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (navOpenPolicies) {
    navOpenPolicies.addEventListener("click", () => {
      const modal = document.getElementById("policyModal");
      if (modal) modal.classList.add("open");
      if (mainNav) mainNav.classList.remove("open");
      if (navDropdown) navDropdown.classList.remove("is-open");
    });
  }

  // Category Tabs
  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeCategory = tab.dataset.cat;
      document.querySelectorAll(".category-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderCatalog();
    });
  });

  // Brand Filter Pills
  document.querySelectorAll(".brand-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeBrand = pill.dataset.brand;
      document.querySelectorAll(".brand-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Brand Dossier Tabs
  document.querySelectorAll(".dossier-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      renderBrandDossier(tab.dataset.brandkey);
    });
  });

  // Close modals on backdrop click or Escape
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach((m) => m.classList.remove("open"));
    }
  });

  // Initial renders
  renderCatalog();
  renderBrandDossier("vogue");
});

