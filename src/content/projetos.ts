export type Projeto = {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string[];
  publico?: string;
  responsavel?: string;
  rede?: string;
  /** Precisa bater com um dos `label` em `galeriaCategorias`
   *  (src/content/institucional.ts), pra puxar as fotos certas. */
  galeriaLabel: string;
  /** Vídeo opcional exibido no topo da página do projeto. */
  video?: string;
};

export const projetos: Projeto[] = [
  {
    slug: "mercado-solidario",
    nome: "Mercado Solidário",
    resumo:
      "Distribuição de alimentos, roupas e itens de higiene para famílias e pessoas em situação de vulnerabilidade.",
    descricao: [
      "O Mercado Solidário nasceu do projeto Mão Amiga, quando um grupo de voluntários passou a percorrer as ruas durante as madrugadas mais frias, distribuindo marmitas, sopas, roupas, cobertores e produtos de higiene pessoal a pessoas em situação de rua.",
      "Com o tempo, o trabalho cresceu e passou a incluir também a distribuição de cestas básicas para famílias em situação de insegurança alimentar da comunidade — crianças, idosos, mães solo, desempregados e pessoas em situação de vulnerabilidade.",
      "Mais do que entregar alimentos, o Mercado Solidário existe para oferecer acolhimento, atenção, cuidado e uma palavra de esperança a cada pessoa atendida.",
    ],
    galeriaLabel: "Mercado Solidário",
    video: "/videos/projetos/mercado-solidario.mp4",
  },
  {
    slug: "krav-maga",
    nome: "Krav Maga",
    resumo:
      "Aulas de artes marciais como instrumento de disciplina, saúde, integração e proteção social.",
    descricao: [
      "O projeto de Krav Maga é aberto para toda a comunidade, com turmas unissex, e usa a prática marcial como ferramenta de disciplina, autoconfiança, saúde física e integração social.",
      "Mais do que uma modalidade de defesa pessoal, o projeto busca afastar crianças, adolescentes e adultos da exposição à violência e às ruas, oferecendo um ambiente de proteção, pertencimento e desenvolvimento pessoal.",
    ],
    publico: "Aberto para toda a comunidade, público unissex",
    responsavel: "Ir. Wesley e Irª. Raquel",
    rede: "@ass.ceusabertos",
    galeriaLabel: "Krav Maga",
  },
  {
    slug: "bale",
    nome: "Balé",
    resumo:
      "Aulas de balé para crianças da comunidade, unindo arte, disciplina e desenvolvimento.",
    descricao: [
      "O projeto de Balé oferece aulas gratuitas para crianças da comunidade, usando a dança como instrumento de expressão, disciplina, coordenação motora e autoestima.",
      "Além da técnica, as aulas são um espaço de acolhimento e convivência, com apresentações que celebram o desenvolvimento de cada aluna ao longo do ano.",
    ],
    publico: "Crianças da comunidade",
    responsavel: "Miss. Samara Carneiro",
    rede: "@ass.ceusabertos",
    galeriaLabel: "Balé",
  },
  {
    slug: "cursos",
    nome: "Cursos",
    resumo:
      "Cursos de formação ministerial, preparando pessoas para servir nos diferentes chamados da igreja.",
    descricao: [
      "Os cursos oferecidos pela Associação Cristã Céus Abertos têm como objetivo formar e capacitar pessoas para servir nos ministérios da igreja, aprofundando o conhecimento bíblico e desenvolvendo o chamado de cada um.",
      "As turmas são voltadas aos cinco ministérios: pastorado, evangelista, profecia, adoração e mestre — preparando líderes e voluntários para exercer essas funções com maturidade espiritual e responsabilidade.",
      "Mais do que ensinar conteúdo, os cursos existem para formar pessoas comprometidas com o Reino de Deus e prontas para servir à igreja e à comunidade.",
    ],
    galeriaLabel: "Cursos",
  },
  {
    slug: "associacao-ceus-abertos",
    nome: "Associação Céus Abertos",
    resumo:
      "Registros gerais de eventos, encontros e ações realizadas pela associação ao longo do tempo.",
    descricao: [
      "Além das frentes específicas de atuação, a Associação Cristã Céus Abertos realiza encontros, eventos e ações que reúnem voluntários, famílias e a comunidade em torno da mesma missão: levar dignidade, acolhimento e esperança a quem mais precisa.",
      "Aqui você encontra registros desses momentos — celebrações, mutirões, confraternizações e outras ações que fazem parte da história da associação.",
    ],
    galeriaLabel: "Associação Céus Abertos",
  },
];
