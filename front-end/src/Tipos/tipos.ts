   export type ActionType = {
      id: number;
      description: string;
    };

   export type Page = {
    id: number;
    name: string;
    linkPage: string;
    description: string;
    component: string;
    selected: boolean;
  };

  export const OPCOES_PAGINAS: Page[] = [
    {
      id: 1,
      name: "Home",
      linkPage: "/",
      description: "Página Inicial",
      component: "<Home/>",
      selected: true,
    },
    {
      id: 2,
      name: "Produtos",
      linkPage: "/Produtos",
      description: "Produtos",
      component: "<Products/>",
      selected: false,
    },
    {
      id: 3,
      name: "Usuarios",
      linkPage: "/Usuarios",
      description: "Usuários",
      component: "<Users/>",
      selected: false,
    },
    {
      id: 4,
      name: "Atividades",
      linkPage: "/Atividades",
      description: "Atividades",
      component: "<Actions/>",
      selected: false,
    },
    {
      id: 5,
      name: "Alternados",
      linkPage: "/Alternados",
      description: "Alternados",
      component: "<CmmActions/>",
      selected: false,
    },
  ];