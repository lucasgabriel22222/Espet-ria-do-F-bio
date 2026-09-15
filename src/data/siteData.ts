export interface MenuItem {
  id: string;
  name: string;
  category: 'espetos-tradicionais' | 'espetos-gourmet' | 'porcoes' | 'acompanhamentos' | 'bebidas';
  categoryLabel: string;
  description: string;
  price: number;
  badge?: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  city: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: 'Star' | 'Users' | 'UtensilsCrossed' | 'Zap';
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Beer' | 'Clock' | 'Smartphone' | 'ShieldCheck' | 'Sparkles';
}

export const siteData = {
  name: "Espetaria do Fábio",
  segment: "Espetaria, Petiscaria e Gastronomia de Boteco / Churrasco",
  tagline: "Espetos artesanais na brasa, petiscos variados e cerveja gelada em Arapongas",
  phone: "+55 43 99913-0154",
  phoneRaw: "+5543999130154",
  whatsappNumber: "5543999130154",
  cep: "86709-510",
  address: "Esquina com R. Pomba Asa Branca, R. Sabiá Coleira - Conj. Novo Centauro, Arapongas - PR, 86709-510, Brasil",
  shortAddress: "R. Sabiá Coleira esq. com R. Pomba Asa Branca, Novo Centauro, Arapongas - PR",
  city: "Arapongas - PR",
  openingHoursText: "Quarta a Domingo: 18h às 23h30",
  scheduleDays: "Quarta a Domingo",
  scheduleHours: "18:00 às 23:30",
  googleRating: 4.7,
  googleReviewCount: 327,
  instagramHandle: "@espetariadofabio",
  instagramUrl: "https://instagram.com/espetariadofabio",
  googleMapsUrl: "https://maps.google.com/?q=R.+Sabi%C3%A1+Coleira,+Arapongas+-+PR,+86709-510",
  googleMapsEmbed: "https://www.google.com/maps?q=R.+Sabi%C3%A1+Coleira,+Arapongas+-+PR,+86709-510&output=embed",
  
  // Quick WhatsApp link generator
  getWhatsAppUrl: (customText?: string) => {
    const text = customText || "Olá! Vim pelo site e gostaria de ver o cardápio e fazer um pedido.";
    return `https://wa.me/5543999130154?text=${encodeURIComponent(text)}`;
  },

  getItemOrderUrl: (itemName: string, price: number) => {
    const text = `Olá! Gostaria de pedir o item: ${itemName} (R$ ${price.toFixed(2).replace('.', ',')}) visto no site da Espetaria do Fábio.`;
    return `https://wa.me/5543999130154?text=${encodeURIComponent(text)}`;
  },

  // Check if restaurant is open right now based on day of week and hour
  isOpenNow: (): { isOpen: boolean; statusText: string; detail: string } => {
    try {
      // Brazil Timezone UTC-3
      const now = new Date();
      // adjust to UTC-3
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brTime = new Date(utc - (3600000 * 3));
      const day = brTime.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
      const hour = brTime.getHours();
      const minute = brTime.getMinutes();
      const timeDecimal = hour + (minute / 60);

      // Open: Wednesday (3) through Sunday (0), from 18:00 to 23:30
      // Note: Sunday is 0, Wed=3, Thu=4, Fri=5, Sat=6
      const isOpenDay = day === 0 || (day >= 3 && day <= 6);
      const isOpenHours = timeDecimal >= 18.0 && timeDecimal <= 23.5;

      if (isOpenDay && isOpenHours) {
        return {
          isOpen: true,
          statusText: "Aberto Agora",
          detail: "Atendendo no local e delivery até 23h30"
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fechado no Momento",
          detail: "Abre hoje às 18h (Quarta a Domingo)"
        };
      }
    } catch {
      return {
        isOpen: true,
        statusText: "Atendimento Quarta a Domingo",
        detail: "18h às 23h30"
      };
    }
  },

  stats: [
    {
      id: "stat-1",
      value: "4.7 / 5.0",
      label: "Nota no Google",
      sublabel: "Baseado em 327 avaliações reais",
      iconName: "Star"
    },
    {
      id: "stat-2",
      value: "+320",
      label: "Avaliações no Google",
      sublabel: "Clientes satisfeitos em Arapongas",
      iconName: "Users"
    },
    {
      id: "stat-3",
      value: "+15 Opções",
      label: "Cortes e Porções",
      sublabel: "Espetos na brasa e petiscos de boteco",
      iconName: "UtensilsCrossed"
    },
    {
      id: "stat-4",
      value: "Entrega Rápida",
      label: "Delivery & Retirada",
      sublabel: "Pedido sem fila direto no WhatsApp",
      iconName: "Zap"
    }
  ] as StatisticItem[],

  categories: [
    { id: "todos", label: "Todos os Itens" },
    { id: "espetos-tradicionais", label: "Espetos Tradicionais" },
    { id: "espetos-gourmet", label: "Espetos Gourmet" },
    { id: "porcoes", label: "Porções & Petiscos" },
    { id: "acompanhamentos", label: "Acompanhamentos" },
    { id: "bebidas", label: "Cervejas & Bebidas" }
  ],

  menuItems: [
    // Espetos Tradicionais
    {
      id: "esp-carne",
      name: "Espeto de Alcatra na Brasa",
      category: "espetos-tradicionais",
      categoryLabel: "Espetos Tradicionais",
      description: "Cubos nobres de alcatra macia, temperados no sal grosso especial e assados no braseiro ao ponto desejado.",
      price: 15.00,
      badge: "Mais Pedido",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-frango-bacon",
      name: "Espeto de Frango com Bacon",
      category: "espetos-tradicionais",
      categoryLabel: "Espetos Tradicionais",
      description: "Suculentos pedaços de peito de frango envolvidos em fatias selecionadas de bacon defumado crocante.",
      price: 14.50,
      badge: "Campeão de Vendas",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-linguica",
      name: "Espeto de Linguiça Toscana",
      category: "espetos-tradicionais",
      categoryLabel: "Espetos Tradicionais",
      description: "Linguiça toscana artesanal de receita especial, assada lentamente com crosta dourada e interior suculento.",
      price: 13.00,
      badge: "Tradicional",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-queijo",
      name: "Espeto de Queijo Coalho",
      category: "espetos-tradicionais",
      categoryLabel: "Espetos Tradicionais",
      description: "Queijo coalho tostado na brasa com crosta crocante dourada. Acompanha melaço de cana opcional.",
      price: 14.00,
      badge: "Crocante & Dourado",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-coracao",
      name: "Espeto de Coração de Frango",
      category: "espetos-tradicionais",
      categoryLabel: "Espetos Tradicionais",
      description: "Corações de frango criteriosamente limpos e marinados em ervas finas e especiarias da casa.",
      price: 14.00,
      badge: "Tempero da Casa",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
    },

    // Espetos Gourmet
    {
      id: "esp-picanha",
      name: "Espeto Nobre de Picanha",
      category: "espetos-gourmet",
      categoryLabel: "Espetos Gourmet",
      description: "Corte nobre com capa de gordura perfeita, selado na brasa alta com flor de sal para máxima maciez.",
      price: 24.00,
      badge: "Chef Special",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-medalhao",
      name: "Medalhão Especial de Carne com Bacon",
      category: "espetos-gourmet",
      categoryLabel: "Espetos Gourmet",
      description: "Corte selecionado de carne bovina envolto em fita de bacon defumado crocante, suculência incomparável.",
      price: 22.00,
      badge: "Mais Pedido",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-cupim",
      name: "Espeto de Cupim Manteiga",
      category: "espetos-gourmet",
      categoryLabel: "Espetos Gourmet",
      description: "Cupim casqueirado de cozimento lento artesanal, desmanchando na boca com finalização no braseiro.",
      price: 22.00,
      badge: "Derrete na Boca",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "esp-pao-alho",
      name: "Pão de Alho Artesanal Especial",
      category: "espetos-gourmet",
      categoryLabel: "Espetos Gourmet",
      description: "Pão recheado com pasta de alho artesanal da casa, queijo cremoso e gratinado na grelha.",
      price: 11.00,
      badge: "Imbatível",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80"
    },

    // Porções e Petiscos de Boteco
    {
      id: "porc-batata-bacon",
      name: "Batata Frita com Queijo e Bacon",
      category: "porcoes",
      categoryLabel: "Porções & Petiscos",
      description: "Porção farta e crocante coberta com blend generoso de queijo derretido e cubos crocantes de bacon.",
      price: 36.00,
      badge: "Porção Generosa",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "porc-frango-passarinho",
      name: "Frango a Passarinho Crocante",
      category: "porcoes",
      categoryLabel: "Porções & Petiscos",
      description: "Pedaços suculentos e bem crocantes de frango, temperados e finalizados com alho frito dourado e cheiro verde.",
      price: 39.00,
      badge: "Crocante & Sequinho",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "porc-calabresa",
      name: "Calabresa Acebolada na Chapa",
      category: "porcoes",
      categoryLabel: "Porções & Petiscos",
      description: "Calabresa defumada fatiada puxada na brasa com cebolas douradas caramelizadas. Acompanha fatias de pão.",
      price: 34.00,
      badge: "Boteco Raiz",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "porc-mandioca",
      name: "Mandioca Cremosa Frita",
      category: "porcoes",
      categoryLabel: "Porções & Petiscos",
      description: "Mandioca selecionada, macia por dentro e dourada por fora. Acompanha molho especial de alho da casa.",
      price: 28.00,
      badge: "Receita Própria",
      image: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=800&q=80"
    },

    // Acompanhamentos
    {
      id: "acomp-farofa",
      name: "Farofa Caseira Crocante na Manteiga",
      category: "acompanhamentos",
      categoryLabel: "Acompanhamentos",
      description: "Farofa artesanal tostada na manteiga de garrafa com pedacinhos de bacon e cebola crocante.",
      price: 8.00,
      badge: "Receita da Casa",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "acomp-vinagrete",
      name: "Vinagrete Especial da Casa",
      category: "acompanhamentos",
      categoryLabel: "Acompanhamentos",
      description: "Tomate fresco cortado fininho, cebola roxa, cheiro verde e azeite extravirgem no equilíbrio exato.",
      price: 8.00,
      badge: "Fresco Todo Dia",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "acomp-molhos",
      name: "Trio de Molhos Artesanais",
      category: "acompanhamentos",
      categoryLabel: "Acompanhamentos",
      description: "Nosso famoso molho de alho cremoso, barbecue artesanal defumado e molho verde picante de ervas.",
      price: 9.00,
      badge: "Exclusividade",
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
    },

    // Bebidas
    {
      id: "beb-litrao",
      name: "Cervejas Litrão Trincando de Gelada",
      category: "bebidas",
      categoryLabel: "Cervejas & Bebidas",
      description: "Amstel, Brahma Duplo Malte ou Original no litrão servidas no balde com gelo na temperatura perfeita.",
      price: 15.00,
      badge: "Trincando de Gelada",
      image: "https://images.unsplash.com/photo-1608270544850-ff5345a55734?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "beb-long-neck",
      name: "Cervejas Long Neck Especiais",
      category: "bebidas",
      categoryLabel: "Cervejas & Bebidas",
      description: "Heineken, Stella Artois, Corona Extra e Eisenbahn estupidamente geladas prontas para beber.",
      price: 11.00,
      badge: "Gelada",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "beb-refrigerantes",
      name: "Refrigerantes & Sucos Naturais",
      category: "bebidas",
      categoryLabel: "Cervejas & Bebidas",
      description: "Coca-Cola Original e Zero, Guaraná Antarctica, Sucos integrais de polpa e Água Mineral com/sem gás.",
      price: 6.50,
      badge: "Refrescante",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
    }
  ] as MenuItem[],

  differentiators: [
    {
      id: "diff-1",
      title: "Carnes Selecionadas na Brasa",
      description: "Cortes de primeira qualidade preparados no braseiro de carvão no ponto exato, garantindo suculência e sabor autêntico.",
      iconName: "Flame"
    },
    {
      id: "diff-2",
      title: "Cerveja no Ponto Certo",
      description: "Cervejas litrão e long necks servidas trincando de geladas, na temperatura ideal para acompanhar o seu churrasco.",
      iconName: "Beer"
    },
    {
      id: "diff-3",
      title: "Agilidade no Atendimento",
      description: "Ambiente aconchegante para reunir família e amigos, com preparo rápido para consumo no local, entrega ou retirada.",
      iconName: "Clock"
    },
    {
      id: "diff-4",
      title: "Pedido Sem Complicação",
      description: "Peça direto pelo WhatsApp sem precisar baixar aplicativos pesados ou enfrentar cadastros demorados. Rápido e prático.",
      iconName: "Smartphone"
    },
    {
      id: "diff-5",
      title: "Molhos & Acompanhamentos Próprios",
      description: "Receitas exclusivas da casa: molho de alho cremoso, vinagrete fresco do dia, farofa na manteiga e pão de alho especial.",
      iconName: "Sparkles"
    },
    {
      id: "diff-6",
      title: "Custo-Benefício & Porções Fartas",
      description: "Espetos bem servidos e porções generosas preparadas com ingredientes de procedência comprovada e preço justo.",
      iconName: "ShieldCheck"
    }
  ] as DifferentialItem[],

  testimonials: [
    {
      id: "dep-1",
      name: "Marcos Aurélio",
      rating: 5,
      text: "Melhor espetinho de Arapongas! Carne super macia, ponto perfeito e a cerveja vem trincando de gelada. Atendimento excelente.",
      city: "Arapongas - PR",
      date: "Avaliação recente no Google",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "dep-2",
      name: "Camila Rossi",
      rating: 5,
      text: "Porções muito bem servidas e preço justo. Pedimos pelo WhatsApp para retirar e ficou pronto super rápido. Recomendo demais!",
      city: "Arapongas - PR",
      date: "Avaliação recente no Google",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "dep-3",
      name: "Fernando Souza",
      rating: 5,
      text: "Ambiente top para tomar uma com os amigos. O espeto de medalhão com bacon e o pão de alho são imbatíveis.",
      city: "Arapongas - PR",
      date: "Avaliação recente no Google",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ] as Testimonial[],

  faqs: [
    {
      id: "faq-1",
      question: "Vocês fazem entrega (Delivery) ou apenas consumo no local?",
      answer: "Atendemos tanto para consumo no nosso espaço quanto para entregas via delivery e retirada no balcão agendada pelo WhatsApp."
    },
    {
      id: "faq-2",
      question: "Como faço para fazer um pedido ou reservar mesa?",
      answer: "É só clicar em qualquer botão do site para abrir nosso WhatsApp direto. Você envia seu pedido ou solicitação de reserva em segundos."
    },
    {
      id: "faq-3",
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix, cartões de débito e crédito, e dinheiro."
    },
    {
      id: "faq-4",
      question: "Qual o horário de atendimento?",
      answer: "Abrimos de Quarta a Domingo, das 18h às 23h30."
    },
    {
      id: "faq-5",
      question: "Quais são os espetos mais pedidos da casa?",
      answer: "Nossos campeões de vendas são o Espeto de Picanha, Medalhão de Frango com Bacon, Queijo Coalho com Melaço e o Pão de Alho Especial."
    }
  ] as FAQItem[]
};
