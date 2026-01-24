# GitHub Pages Deployment Guide

## Quick Deploy

```bash
npm run deploy
```

This command will:
1. Build the site with static export (`npm run build`)
2. Create `.nojekyll` file in the `/out` folder
3. Deploy the `/out` folder to `gh-pages` branch
4. Push to GitHub

## First-Time Setup

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/krishnikbarman/portfolio-website-for-developer.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/krishnikbarman/portfolio-website-for-developer`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### 3. Deploy Your Site
```bash
npm run deploy
```

Your site will be live at:
**https://krishnikbarman.github.io/portfolio-website-for-developer/**

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Important Notes

### BasePath Configuration
The site is configured with `basePath: '/portfolio-website-for-developer'` in `next.config.mjs`. This is required for GitHub Pages.

**If you rename your repository**, update these in `next.config.mjs`:
```javascript
basePath: '/your-new-repo-name',
assetPrefix: '/your-new-repo-name',
```

### For Vercel or Custom Domain
If deploying to Vercel or using a custom domain, remove or comment out `basePath` and `assetPrefix` in `next.config.mjs`:

```javascript
// basePath: '/portfolio-website-for-developer',
// assetPrefix: '/portfolio-website-for-developer',
```

## Troubleshooting

### Issue: 404 on GitHub Pages
- Ensure `.nojekyll` file exists in the `gh-pages` branch
- Check that GitHub Pages is set to deploy from `gh-pages` branch
- Wait 1-2 minutes after deployment

### Issue: Assets not loading
- Verify `basePath` matches your repository name
- Check that `images: { unoptimized: true }` is set in `next.config.mjs`

### Issue: Resume download not working
- Ensure `Krishnik_Barman_Resume.pdf` is in the `/public` folder
- The file will be accessible at `/portfolio-website-for-developer/Krishnik_Barman_Resume.pdf`

## Local Testing

To test the production build locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000/portfolio-website-for-developer/`
