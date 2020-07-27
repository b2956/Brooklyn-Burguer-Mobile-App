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
  imgFile: any
};

export type CustomImageParams = {
  imageSource: any,
  styles: Object
};

export type NumericInputProps = {
  addQuantityOnPress: any,
  subtractQuantityOnPress: any,
  quantity: number
};

export type MenuItemProps = {
  imgFile: any,
  name: string,
  price: string | null,
  discount: number,
  ingredients: string[]
}