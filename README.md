# UniWave Headphones — 3D Product Landing Page

A single-page, interactive **3D technology product landing page** built with **React Three Fiber**, showcasing *UniWave* — smart productivity headphones designed for university students.

> 📌 **Live URL:** `<ADD-YOUR-DEPLOYED-LINK-HERE>`

---

## 1. Project Title

**UniWave Headphones — Smart Productivity Headphones for University Students**

## 2. Group Members

| Name | Matric Number |
|------|---------------|
| Kristine Elle Benjamin | A23CS0095 |
| Nur Hanani Binti Ahmad | A23CS0157 |
| Izzaty Balqis Binti Sulaiman | A23CS0090 |
| Abbenisha Ann Michael Benedict | A23CS0029 |

## 3. Product Concept

UniWave is a **productivity-first smart headphone** aimed at university students. It blends
active noise control with study-focused software features to help students concentrate in
noisy environments — dorms, lecture halls, libraries — while still staying connected to the
moments that matter. The product is positioned around one promise: *One Wave. Pure Focus.*

## 4. Website Objective

To design, develop, and deploy a **modern, visually appealing single-page landing page** that
presents the UniWave product and its core features through **interactive 3D content**. The site
uses a scroll-driven 3D headphone model to guide the user through the product story, turning a
standard feature list into an engaging, cinematic experience.

## 5. Target Users

- University and college students
- Learners who study in noisy or shared environments
- Students who use focus techniques (e.g. Pomodoro) and group study sessions
- Younger, tech-oriented buyers who respond to interactive, modern web experiences

## 6. Tools and Technologies Used

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| 3D rendering | React Three Fiber (`@react-three/fiber`) |
| 3D helpers | Drei (`@react-three/drei`) — `useGLTF`, `PresentationControls`, `Environment`, `ContactShadows` |
| 3D engine | Three.js |
| 3D model | `modelHeadPhone-transformed.glb` (compressed GLTF) |
| Styling | Plain CSS (custom, responsive) |
| Fonts | Inter (Google Fonts) |
| Deployment | `<Netlify / Vercel / GitHub Pages>` |

## 7. Website Features

The page is a single scrolling experience divided into six sections:

1. **Hero** — Brand intro with tagline and call-to-action ("Explore Sound").
2. **Introduction** — "Built for Focus. Made for Students." product overview.
3. **AI Focus Mute** — On-device AI that mutes distracting sounds in real time.
4. **Study Mode** — Built-in Pomodoro timer with curated ambient soundscapes.
5. **EchoShare** — Share one audio stream across up to four headphones.
6. **Final / Outro** — Closing brand statement.

Each section pairs concise copy with a synchronized 3D camera move on the headphone model.

## 8. React Three Fiber Implementation

- A fixed full-screen `<Canvas>` (`Experience.jsx`) sits **behind** the scrolling HTML layer, so
  the 3D model stays visible while text scrolls over it.
- The headphone is loaded as a compressed **GLTF model** via `useGLTF` and preloaded for fast first paint.
- Lighting uses a low ambient light, a strong directional key light, a soft **`ContactShadows`**
  floor, and a **studio `Environment`** for realistic reflections.
- **`PresentationControls`** lets the user **drag to rotate** the headphone within constrained
  polar/azimuth limits, snapping back when released.
- The model's position, rotation, and scale are animated **per scroll section** using a keyframe
  array and linear interpolation, updated every frame inside `useFrame` with smooth `lerp` easing.

## 9. Interaction and Animation Description

- **Scroll-driven storytelling:** Scroll progress (`scrollY / innerHeight`) maps to six keyframes.
  The headphone swings left/right opposite to the text, zooms into the earcup for hardware-focused
  features, and recenters for the hero and outro — creating a continuous visual narrative.
- **Drag to rotate:** Users can grab and rotate the model directly (PresentationControls).
- **Mouse parallax:** The model subtly tilts toward the cursor for a sense of depth.
- **Idle float:** A gentle sine-wave float keeps the product alive; the float is dampened during
  the close-up sections so detail shots stay steady.
- **Smooth easing:** All transitions use frame-rate-independent `lerp` for fluid motion.

## 10. Live URL

`<ADD-YOUR-DEPLOYED-LINK-HERE>`

## 11. Screenshots

> Add screenshots after deploying. Suggested shots: Hero, AI Focus Mute close-up, EchoShare, Final.

| Hero | Feature close-up |
|------|------------------|
| `<screenshot-1.png>` | `<screenshot-2.png>` |

## 12. Individual Contribution

> Adjust the contributions below to reflect what each member actually did.

| Member | Contribution |
|--------|--------------|
| Kristine Elle Benjamin | `<e.g. 3D model integration & R3F scene setup>` |
| Nur Hanani Binti Ahmad | `<e.g. scroll animation & keyframe story>` |
| Izzaty Balqis Binti Sulaiman | `<e.g. layout, styling & responsive design>` |
| Abbenisha Ann Michael Benedict | `<e.g. content, deployment & documentation>` |

## 13. Conclusion

UniWave demonstrates how **React Three Fiber** can turn a product landing page into an immersive,
interactive experience. By combining a scroll-driven 3D narrative with clean, focused copy, the
site communicates the product's value proposition more memorably than a static page could. The
project met its objective: a modern, deployable, single-page 3D landing page that accurately
represents the UniWave product and its three core features — AI Focus Mute, Study Mode, and EchoShare.

---

## Running Locally

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```
