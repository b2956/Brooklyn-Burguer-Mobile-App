export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Menu: undefined;
  Pedidos: undefined;
  Chat: undefined;
  Carrinho: undefined;
};

export type MenuParamList = {
  MenuScreen: undefined;
};

export type PedidosParamList = {
  PedidosScreen: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type MainItemParams = {
  name: string,
  price: number,
  ingredients: string[],
  discount: number
}
