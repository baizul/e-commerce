export interface IAddItem {
  name: string;
  id: string;
  qty: number;
  jerseyNumber: string;
  price: number;
  teamName: string;
  image?: string;
  color?: string;
  size?: string;
}

export interface IIncrementCart {
  id: string;
}

export interface IDecrementCart {
  id: string;
}

export interface IRemoveItem {
  id: string;
}

export interface ICart {
  name: string;
  id: string;
  qty: number;
  jerseyNumber: string;
  price: number;
  teamName: string;
  image?: string;
  color?: string;
  size?: string;
}

export interface ICartPayload extends Array<ICart> {}
