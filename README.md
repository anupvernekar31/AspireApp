# 💳 Aspire Wallet

A mobile wallet app built with **React Native**, **Expo Router**, **Redux Toolkit**, and **Redux-Saga**. This application simulates debit card management, including card freezing, spending limits, and card generation using a mock API.

---

## 📱 Features

- View and manage multiple debit cards
- Toggle card freeze status
- Set and clear weekly spending limits
- Add new cards
- Carousel UI for cards
- Expo-compatible (runs on Android, iOS)

---

## ⚙️ Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/anupvernekar31/AspireApp.git
   cd AspireApp

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

Make sure you open the simulator/emulator you want to run the application on.
You can run the app on different platforms using the following commands:

- **iOS** (simulator or Expo Go):

  ```bash
  npm run ios
  ```

- **Android** (emulator or Expo Go):
  ```bash
  npm run android
  ```
  > This will generate a QR code on terminal. You can scan it and see on ur physical device(optional)

> This opens the app on the last used simulator/ emulator. If u want to run the app on Particular simulator first open the desired simulator and then run the above command.

> ✅ Make sure you have the Expo Go app installed on your mobile device for physical testing, or use Android Studio / Xcode for emulator-based testing.

---

## 📦 Project Structure

```
.
├── app/                  # Expo Router pages (including tabs and screens)
├── assets/               # Static images and fonts
├── components/           # Reusable UI components
├── constants/            # Colors
├── store/                # Redux Toolkit + Sagas setup
│   ├── slices/           # Redux slices (cards)
│   ├── sagas/            # Saga workers & watchers
│   └── index.ts          # Store config
├── api/                  # Mock API functions
├── hooks/                # Custom hooks
└── README.md             # This file
```

---

## 🔌 Mock API Endpoints

All data is powered by **client-side mock functions** — no real backend needed.

Located in:

```
/api/cardApi.ts
```

Example:

```ts
export const getAllCards = (): Promise<CardType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Mark Henry",
          number: "5647341124132020",
          balance: 55000,
          expiry: "12/07",
          cvv: "123",
          isFrozen: false,
          isSpendingLimitSet: true,
          spendingLimit: 5000,
        },
        ...
      ]);
    }, 1000);
  });
};
```

---

## 🧪 Manual Testing Instructions

- **Cards**: There are 3 different cards already added. The Menu items below the card is with respect to the card you are currently seeing.

- **Freeze Card**: Toggle the "Freeze card" switch. Card opacity changes and status displays as "Frozen".
- **Spending Limit**:
  - Toggle **ON** to navigate to the spending limit screen and set an amount.
  - Toggle **OFF** to immediately clear the limit in Redux.
- **Add Card**:

  - You will get a button on "Home Screen" to add a new card. A Modal will appear where u can add card Holder Name and proceed. Now u can go to the Debit cards tab and the new card will be added in the start of carousel.

- **Card Number Masking**: Card numbers are partially masked with dots.

---

## 📚 Technologies Used

- **React Native (v0.79)**
- **Expo SDK 53**
- **Expo Router**
- **Redux Toolkit**
- **Redux Saga**
- **TypeScript**
- **react-native-reanimated-carousel** (for carousel)
- **react-native-uuid** (for unique card IDs)

---

## 🛠 Scripts

```json
"start": "expo start",
"android": "expo start --android",
"ios": "expo start --ios",
"web": "expo start --web",
"lint": "expo lint"
```
