import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardType = {
  id: string;
  name: string;
  balance: number;
  number: string;
  isFrozen: boolean;
  expiry: string;
  cvv: string;
  isSpendingLimitSet: boolean;
  spendingLimit: number;
};

type CardState = {
  cards: CardType[];
  loading: boolean;
};

const initialState: CardState = {
  cards: [],
  loading: false,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchCards: (state) => {
      state.loading = true;
    },
    fetchCardsSuccess: (state, action: PayloadAction<CardType[]>) => {
      state.cards = action.payload;
      state.loading = false;
    },
    fetchCardsFailure: (state) => {
      state.loading = false;
    },
    addCard: (state, action: PayloadAction<CardType>) => {
      state.cards.unshift(action.payload);
    },
    toggleFreezeCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        card.isFrozen = !card.isFrozen;
      }
    },
    updateSpendingLimit: (
      state,
      action: PayloadAction<{ cardId: string; spendingLimit: number }>
    ) => {
      const { cardId, spendingLimit } = action.payload;
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        card.spendingLimit = spendingLimit;
        card.isSpendingLimitSet = !card.isSpendingLimitSet;
      }
    },
  },
});

export const {
  fetchCards,
  fetchCardsSuccess,
  fetchCardsFailure,
  addCard,
  toggleFreezeCard,
  updateSpendingLimit,
} = cardSlice.actions;
export default cardSlice.reducer;
