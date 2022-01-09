export interface Subscription {
  id: number;
  status: 'active' | 'succeeded' | 'inactive' | 'pending';
}

export interface PaymentCard {
  id: string; // Stripe PaymentMethod ID
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
}

export interface Charge {
  amount: number;
  createdAt: string;
  id: number;
  routineTitle: string;
}

export interface GetRoutinePurchaseSecretArgs {
  routineId: number;
  paymentMethodId?: string;
}

export interface GetMembershipPurchaseSecretArgs {
  membershipId: number;
  paymentMethodId?: string;
}

export interface UpdateSubscriptionInput {
  subscriptionId: number;
  status: 'succeeded' | 'inactive';
}

export interface GetSubscriptionByMembershipResponse {
  subscriptionByMembership: Subscription;
}

export interface UpdateSubscriptionStatusResponse {
  updateSubscriptionStatus: Subscription;
}

export interface GetMyCardsResponse {
  myCards: PaymentCard[];
}

export interface RemovePaymentCardResponse {
  removeCard: PaymentCard;
}

export interface GetRoutinePurchaseSecretResponse {
  paymentIntentForRoutine: string;
}

export interface GetMembershipPurchaseSecretResponse {
  paymentIntentForMembership: string;
}
