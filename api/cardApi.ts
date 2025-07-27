// export interface CardType {
//   id: string;
//   name: string;
//   balance: number;
//   number: string;
//   isFrozen: boolean;
//   expiry: string;
//   cvv: string;
//   isSpendingLimitSet: boolean;
//   spendingLimit: number;
// }

// export const getAllCards = (): Promise<CardType[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: "1",
//           name: "Anup Vernekar",
//           balance: 55000,
//           number: "5647341124132020",
//           isFrozen: false,
//           expiry: "12/32",
//           cvv: "123",
//           isSpendingLimitSet: true,
//           spendingLimit: 5555,
//         },
//         {
//           id: "2",
//           name: "John Duo",
//           balance: 3000,
//           number: "7657098724132760",
//           isFrozen: true,
//           expiry: "11/30",
//           cvv: "564",
//           isSpendingLimitSet: false,
//           spendingLimit: 0,
//         },
//         {
//           id: "3",
//           name: "Karthik V K",
//           balance: 1230,
//           number: "2345907856471234",
//           isFrozen: false,
//           expiry: "12/29",
//           cvv: "564",
//           isSpendingLimitSet: false,
//           spendingLimit: 0,
//         },
//       ]);
//     }, 1000); // Simulate delay of 1s
//   });
// };

// export const createCard = (card: Omit<CardType, "id">): Promise<CardType> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const newCard = { ...card, id: Date.now().toString() };
//       resolve(newCard);
//     }, 300);
//   });
// };

// addCard: async (card: CardType): Promise<CardType> => {
//     await delay(300);
//     return { ...card };
//   },

//   toggleFreezeCard: async (cardId: string): Promise<string> => {
//     await delay(200);
//     return cardId;
//   },

//   updateSpendingLimit: async (
//     cardId: string,
//     limit: number
//   ): Promise<{ cardId: string; spendingLimit: number }> => {
//     await delay(200);
//     return { cardId, spendingLimit: limit };
//   },

import { CardType } from "../store/slices/cardSlice";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const mockCardApi = {
  getAllCards: async (): Promise<CardType[]> => {
    await delay(500);
    return [
      {
        id: "1",
        name: "Anup Vernekar",
        balance: 55000,
        number: "5647341124132020",
        isFrozen: false,
        expiry: "12/32",
        cvv: "123",
        isSpendingLimitSet: true,
        spendingLimit: 5555,
      },
      {
        id: "2",
        name: "John Duo",
        balance: 3000,
        number: "7657098724132760",
        isFrozen: true,
        expiry: "11/30",
        cvv: "564",
        isSpendingLimitSet: false,
        spendingLimit: 0,
      },
      {
        id: "3",
        name: "Karthik V K",
        balance: 1230,
        number: "2345907856471234",
        isFrozen: false,
        expiry: "12/29",
        cvv: "564",
        isSpendingLimitSet: false,
        spendingLimit: 0,
      },
    ];
  },

  addCard: async (card: CardType): Promise<CardType> => {
    await delay(300);
    return card;
  },

  toggleFreezeCard: async (cardId: string): Promise<string> => {
    await delay(200);
    return cardId;
  },

  updateSpendingLimit: async (
    cardId: string,
    spendingLimit: number
  ): Promise<{ cardId: string; spendingLimit: number }> => {
    await delay(200);
    return { cardId, spendingLimit };
  },
};
