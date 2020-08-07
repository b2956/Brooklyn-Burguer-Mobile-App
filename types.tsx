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
  CartScreen: undefined;
};

export type OrdersParamList = {
  OrdersScreen: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type MainItemProps = {
  name: string,
  price: string,
  ingredients: string[],
  discount: number,
  imgFile: any,
  showModal: any,
  hideModal: any
};

export type CustomImageParams = {
  imageSource: any,
  styles: Object
};

export type NumericInputProps = {
  addQuantityOnPress: any,
  subtractQuantityOnPress: any,
  quantity: number,
  setItemQuantity: any
};

export type MenuItemProps = {
  imgFile: any,
  name: string,
  price: string | null,
  discount: number,
  ingredients: string[],
  showModal: any,
  hideModal: any
}

export type CartItemProps = {
  name: string,
  quantity: number,
  price: number,
  ingredients: string[],
  discount: number
}

export type CartStackParamList = {
  CartScreen: undefined
  CheckoutScreen: undefined
}

export type MessageProps = {
  userId: string,
  timeStamp: string,
  text: string
}

export type CartState = {
  cartItems: CartItemProps[],
  cartActions: cartActionsTypes
}

export type CartActionPayload = {
  item: CartItemProps
}

export type ReducerAction = {
  type: string,
  payload: CartActionPayload
}

export type cartActionsTypes = {
  addProduct: Function,
  addQuantity: Function,
  addQuantityByOne: Function,
  subtractQuantity: Function,
  removeProduct: Function,
  emptyCart: Function,
  setItemQuantity: Function
}

export type ModalItemProps = {
  imgFile: any,
  name: string,
  price: string | null,
  discount: number,
  ingredients: string[]
}

export type ItemModalProps = {
  item: ModalItemProps,
  modalVisibility: boolean,
  hideModal: any
}

export type OverlayProps = {
  modalVisibility: boolean,
  hideModal: any
}

export type OrderItem = {
  name: string,
  quantity: number,
  price: number
}

export type OrderProps = {
  id: number,
  timeStamp: Date,
  orderItems: OrderItem[],
  total: number,
  status: string,
  adress: OrderAdress,
  location: Location
}

export type OrderContext = {
  activeOrder: OrderProps,
  orderActions: {
    addOrder: Function,
    editOrderStatus: Function
  }
}

export type OrderActions = {
  type: string,
  payload: any
}

export type BuyModalProps = {
  modalVisibility: boolean,
  showModal: any,
  hideModal: any,
  addOrder: Function,
}

export type OrderAdress = {
  cep: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  complement: string,
  references: string
}

export type Location = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}
