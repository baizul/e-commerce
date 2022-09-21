export interface ISAVE_PAYMENTDETAILS {
  defaultPaymentMethod?: string;
  CreditCardsData?: {
    id?: string;
    CardHolderName?: string;
    CardNumber?: number;
    ExpDate?: string;
    Cvv?: number;
  }[];
}
