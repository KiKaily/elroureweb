# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/700fa6f4-7e27-46eb-bbf2-0699ed414290

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/700fa6f4-7e27-46eb-bbf2-0699ed414290) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/700fa6f4-7e27-46eb-bbf2-0699ed414290) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Firebase setup (quickstart)

1. Create a Firebase project at https://console.firebase.google.com
2. In your project settings, get the web app config values.
3. Create a `.env` file in the project root and add the following (replace values):

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

4. Install dependencies and start dev server:

```powershell
npm install
npm run dev
```

5. Use the initialized exports in `src/lib/firebase.ts` — `auth`, `db`, and `storage` are exported for convenience.

## Quick Firebase UI test

I added a simple Google sign-in component at `src/components/roure/FirebaseAuth.tsx`.

To try it:

1. Install dependencies:

```powershell
npm install
```

2. Add the VITE_FIREBASE_* vars to `.env`.

3. Import and render the component somewhere (for a quick test, add it to `src/pages/Home.tsx`):

```tsx
import FirebaseAuth from '@/components/roure/FirebaseAuth';

// inside render
<FirebaseAuth />
```

4. Start dev server and test the Google sign-in flow.

Note: You must enable Google Auth provider in the Firebase Console and add your local origin to the allowed OAuth redirect domains.

## Manual deploy to Firebase Hosting (what I prepared)

I added these files to the repo so you can deploy manually when you want:

- `firebase.json` — hosting config (serves `dist` and rewrites to index.html)
- `.firebaserc` — currently has a placeholder `YOUR_FIREBASE_PROJECT_ID`. Replace it with your real `projectId` or run `firebase use --add` locally.
- `.env.example` — copy to `.env.production` with your VITE_FIREBASE_* values before building.

When you're ready to deploy manually, run these steps locally:

1. Install Firebase CLI if you haven't:

```powershell
npm install -g firebase-tools
```

2. Login and select project (or set projectId in `.firebaserc`):

```powershell
firebase login
firebase use --add
```

3. Create `.env.production` from `.env.example` and fill values.

4. Build the site:

```powershell
npm run build
```

5. Deploy (manual, when you decide):

```powershell
firebase deploy --only hosting
```

If you want the domain `elroure.web.app` specifically, tell me your Firebase `projectId` — I can update `.firebaserc` to that id, or create a Hosting site named `elroure` in your project if you prefer (you'll need to confirm the name is available).

I will not enable any automatic deploy or CI. You control when to run `firebase deploy`.

### Create a hosting site with id `elroure` (optional)

If your project should host the exact domain `elroure.web.app` and the site id `elroure` is available, run locally:

```powershell
firebase hosting:sites:create elroure --project elroureorg
```

After creating the site, deploy to it with:

```powershell
npm run build
firebase deploy --only hosting:elroure
```

If the site id `elroure` is already taken you will see an error; in that case the default domain will be `elroureorg.web.app` (project id based).

