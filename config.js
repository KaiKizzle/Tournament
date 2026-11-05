// 1) Paste your Firebase web app config here
//    (Firebase console > Project settings > General > Your apps > SDK setup and configuration > Config).
//    These values are safe to publish; access is controlled by firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyDO8IZhZlXo1_NuCewVdJ3zHfRVsUHDZhM",
  authDomain: "tournament-70181.firebaseapp.com",
  projectId: "tournament-70181",
  storageBucket: "tournament-70181.firebasestorage.app",
  messagingSenderId: "150471129544",
  appId: "1:150471129544:web:8aaa6f6c57f02a6cb7e8fd"
};

// 2) The Google account(s) allowed to open/close votes and set results.
//    Must match the email(s) in firestore.rules.
export const ADMIN_EMAILS = ["kai.mergener@gmail.com"];

// 3) Bracket name and the 32 entrants in seed order (seed 1 first).
//    Used once, when you press "Set up bracket".
export const TOURNAMENT_NAME = "Vegetable Championship";
export const DEFAULT_ENTRANTS = [
  "Potato", "Tomato", "Onion", "Carrot", "Cucumber", "Lettuce", "Garlic", "Broccoli",
  "Bell Pepper", "Cabbage", "Spinach", "Corn", "Sweet Potato", "Cauliflower", "Zucchini", "Green Bean",
  "Pea", "Celery", "Eggplant", "Pumpkin", "Kale", "Leek", "Asparagus", "Radish",
  "Beetroot", "Brussels Sprout", "Chili Pepper", "Turnip", "Artichoke", "Parsnip", "Okra", "Bok Choy"
];

