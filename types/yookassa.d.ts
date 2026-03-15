declare module "yookassa" {
  type PaymentRequest = {
    amount: {
      value: string;
      currency: string;
    };
    confirmation: {
      type: "redirect";
      return_url: string;
    };
    capture: boolean;
    description?: string;
    metadata?: Record<string, string>;
  };

  type PaymentResponse = {
    confirmation?: {
      confirmation_url?: string;
    };
  };

  export default class YooKassa {
    constructor(config: { shopId: string; secretKey: string });
    createPayment(payment: PaymentRequest, idempotencyKey?: string): Promise<PaymentResponse>;
  }
}
