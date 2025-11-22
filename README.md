# Zenith-Hub

Cyberware-zenithhub is a static two-page website (no backend) built with plain HTML, CSS, and JavaScript.

## What it is
- **Website entry:** `index.html` is the landing page. Opening it in a browser gives you the educational intro and the keyboard shortcut to the arcade.
- **Arcade page:** `hub.html` is the hub interface with 50+ browser-playable embeds, filters, search, and fullscreen/modal controls.
- Because everything is static, you can double-click `index.html` locally or host both files on any static host (GitHub Pages, Netlify, Vercel, etc.).

## Usage
- Open `index.html` for the educational landing view.
- Press the comma key (`,`) to jump to `hub.html`, the Cyberware arcade grid with 50+ browser-playable embeds.
- Use the sidebar filters, search, and game modal to launch a title, go fullscreen, and retry if a filter blocks the stream.

## Local preview
### Run as a website
Start the built-in static server (no dependencies) and open the local URLs:

```sh
npm start
```

- Landing page: http://localhost:4173/index.html
- Arcade hub: http://localhost:4173/hub.html

If you prefer Python instead of Node.js:

```sh
python3 -m http.server 8000
```

## Publish to a public GitHub URL (GitHub Pages)
1) Create a GitHub repository and push this project (keep `index.html` and `hub.html` in the repo root).
2) In the repository settings, open **Pages** and set the source to **Deploy from a branch** → **main** → **/(root)**.
3) Save. GitHub will build and publish at `https://<your-username>.github.io/<repo-name>/`.
   - Landing page: `https://<your-username>.github.io/<repo-name>/index.html`
   - Arcade hub: `https://<your-username>.github.io/<repo-name>/hub.html`
4) (Optional) Add a CNAME/custom domain in the Pages settings if you want a branded URL.

Because the site is fully static, no additional build steps are required for Pages—just push and enable the Pages source.
