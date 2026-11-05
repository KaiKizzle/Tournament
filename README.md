# Vegetable Championship

A 32-vegetable double-elimination bracket where anyone with the link can vote, no account needed. The organizer opens a round, people vote, the organizer closes it and winners advance.

Hosting is GitHub Pages (static files). Votes and results live in Firebase Firestore on the free Spark plan.

## Setup (about 10 minutes)

### 1. Firebase project
1. Go to https://console.firebase.google.com and create a project (Google Analytics can stay off).
2. **Build > Firestore Database > Create database.** Pick a region (e.g. `europe-west3`, Frankfurt) and start in production mode.
3. **Firestore > Rules:** paste the contents of `firestore.rules`, replace `you@example.com` with your Google account email, and press **Publish**.
4. **Build > Authentication > Get started > Sign-in method:** enable **Anonymous** (for voters) and **Google** (for you).
5. **Project settings > General > Your apps > Web (`</>`):** register an app (no hosting needed) and copy the `firebaseConfig` object.

### 2. config.js
- Paste the config into `firebaseConfig`.
- Put the same email as in the rules into `ADMIN_EMAILS`.
- Optionally change `TOURNAMENT_NAME` or the entrants (seed order, seed 1 first).

### 3. GitHub Pages
1. Create a new public repository and upload `index.html`, `config.js`, `firestore.rules` and this README.
2. **Settings > Pages:** Source "Deploy from a branch", branch `main`, folder `/ (root)`. Your site appears at `https://<username>.github.io/<repo>/` after a minute.
3. Back in Firebase: **Authentication > Settings > Authorized domains > Add domain** and add `<username>.github.io`. (Needed for your Google sign-in.)

### 4. First run
1. Open the site, click **Organizer sign in** at the bottom and sign in with your Google account.
2. Press **Set up bracket**.
3. Press **Open voting**, share the link, and press **Close voting** when you're done. Repeat each round.

## How it behaves
- Voters are signed in anonymously in the background, one vote per match per browser. Clearing site data or using a private window gives a fresh vote, so this suits a fun community vote rather than anything with stakes.
- Votes can only be written while voting is open (enforced by the rules, not just the page).
- Closing a vote applies the majority to each match and stores the counts. Ties stay open: click the winner in the bracket or include them in the next vote.
- As organizer you can click any vegetable in a match (outside an open vote) to set or clear its result.
- Free tier limits (50k reads / 20k writes per day) are plenty for a few hundred voters.
