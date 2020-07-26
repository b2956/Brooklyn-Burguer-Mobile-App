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
  price: string,
  ingredients: string[],
  discount: number,
  imgUrl: string
};

export type CustomImageParams = {
  imageName: any,
  style: Object
}

export type NumericInputProps = {
  addQuantityOnPress: any,
  subtractQuantityOnPress: any,
  quantity: number
}
