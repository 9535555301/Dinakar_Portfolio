## Dinakar Portfolio

This is a personalized Next.js portfolio for **Dinakar Y**, styled to match the original reference theme while updating the content, resume, and profile details to Dinakar's background.

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build Check

```bash
npm run build
```

## Important Files

- `public/Dinakar_Y_Resume.pdf`: downloadable resume
- `public/dinakar-profile.png`: profile image used in the portfolio
- `src/app/components`: portfolio sections
- `src/app/styles`: theme styles

## Deploy to Vercel

1. Push this project to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project** and import the GitHub repository.
4. Keep the default Next.js build settings.
5. Click **Deploy**.

Vercel will automatically detect:

- Build command: `next build`
- Output: Next.js default output

## Contact Form Note

The contact form currently opens the visitor's email app with a pre-filled message to avoid requiring secret keys or a backend API when deploying to Vercel.
