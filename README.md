# Portfolio

Simple, fast static portfolio built with HTML, CSS, and JavaScript.

## Structure
- `index.html`: Main page with sections for Home, Projects, About, Contact
- `styles.css`: Theme and responsive styles
- `script.js`: Smooth scrolling, mobile nav, footer year
- `assets/`: Images (create this folder and add screenshots)

## Customize
1. Open `index.html` and replace placeholder text: Your Name, links, and contact.
2. Add your fitness tracker screenshot to `assets/fitness-tracker-cover.png` (or update the src).
3. Update project links for Live Demo and Source Code.
4. Edit `styles.css` for colors if desired (see `:root` variables).

## Deploy

### GitHub Pages
1. Create a repo and push this folder.
2. In repo Settings → Pages → Build and deployment → Source: `Deploy from a branch`.
3. Select `main` branch, `/ (root)`. Save. Your site will be live at `https://<username>.github.io/<repo>/`.

### Netlify
1. Login to Netlify and click “Add new site” → “Import an existing project”.
2. Connect your Git repo and select the repo.
3. Build command: none. Publish directory: `/`.

### Vercel
1. Login to Vercel and click “New Project”.
2. Import your repo. Framework preset: `Other`.
3. Output directory: `/`.

## Optional: Custom Domain
Point your domain’s DNS to your chosen host. Follow host docs:
- GitHub Pages: `https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site`
- Netlify: `https://docs.netlify.com/domains-https/custom-domains/`
- Vercel: `https://vercel.com/docs/projects/domains`


