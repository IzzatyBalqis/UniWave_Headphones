# 🎧 UniWave Headphones: 3D Product Landing Page

This is our interactive 3D landing page for **UniWave**, a pair of smart headphones designed specifically for university students. The site is built as a single page using **React Three Fiber**.

> 📌 **Live URL:** https://uniwaveheadphones.vercel.app/

---

## 🏷️ 1. Project Title

**UniWave Headphones: Smart Productivity Headphones for University Students**

## 👥 2. Group Members

| Name | Matric Number |
|------|---------------|
| 👩‍💻 Kristine Elle Benjamin | A23CS0095 |
| 👩‍💻 Nur Hanani Binti Ahmad | A23CS0157 |
| 👩‍💻 Izzaty Balqis Binti Sulaiman | A23CS0090 |
| 👩‍💻 Abbenisha Ann Michael Benedict | A23CS0029 |

## 💡 3. Product Concept

UniWave is a smart headphone built specifically to help university students stay productive. It combines active noise cancellation with software features designed for studying. The idea is to help students focus in noisy places like dorms, libraries, or lecture halls, without completely isolating them from what's going on around them. Our main motto is: *One Wave. Pure Focus.*

## 🎯 4. Website Objective

Our goal was to create a modern and attractive single-page landing page to showcase UniWave and its main features using interactive 3D elements. Instead of just listing features, the website uses a 3D headphone model that moves as you scroll, creating a more engaging and fun experience for visitors!

## 🎓 5. Target Users

* College and university students.
* Anyone who needs to study in noisy or shared spaces.
* Students who rely on study techniques like the Pomodoro method or who do group studies.
* Young, tech-savvy people who enjoy modern and interactive websites.

## 🛠️ 6. Tools and Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build tool** | Vite 8 |
| **3D rendering** | React Three Fiber (`@react-three/fiber`) |
| **3D helpers** | Drei (`@react-three/drei`): `useGLTF`, `PresentationControls`, `Environment`, `ContactShadows` |
| **3D engine** | Three.js |
| **3D model** | `modelHeadPhone-transformed.glb` (compressed GLTF) |
| **Styling** | Plain CSS (custom, responsive) |
| **Fonts** | Inter (Google Fonts) |
| **Linting** | ESLint (React hooks + refresh rules) |
| **Deployment** | Vercel |

## ✨ 7. Website Features

The website is a single-page scrolling site broken down into six main sections:

1. **Hero section:** Introduces the brand with our tagline and an "Explore Sound" call-to-action.
2. **Introduction:** Gives a quick overview of the product ("Built for Focus. Made for Students.").
3. **AI Focus Mute:** Highlights the real-time AI noise cancellation feature.
4. **Study Mode:** Showcases the built-in Pomodoro timer and background sounds.
5. **EchoShare:** Explains how users can share audio with up to four headphones.
6. **Outro:** A final closing statement for the brand.

*As you scroll through these sections, the 3D headphone model moves and rotates to match the text on the screen!*

## 🌐 8. React Three Fiber Implementation

* **Background Canvas:** We placed a full-screen `<Canvas>` (`Experience.jsx`) behind the scrolling text layer. This keeps the 3D model fixed in the background while the content scrolls over it.
* **Fast Loading:** The headphone is a compressed **GLTF model** loaded using `useGLTF`. We also preload it so the site loads faster.
* **Lighting & Shadows:** For lighting, we used low ambient light, a strong directional key light, a soft shadow on the floor using **`ContactShadows`**, and a **studio `Environment`** to make the reflections look realistic.
* **User Controls:** Users can click and drag to rotate the headphone thanks to **`PresentationControls`**. It snaps back to its original position when released.
* **Animations:** We animated the model's position, rotation, and scale based on which section the user is looking at. We used an array of keyframes and `lerp` inside `useFrame` to make the transitions smooth.

## 🕹️ 9. Interaction and Animation Description

* **Animations based on scrolling:** We tracked the scroll progress to trigger different keyframes. As you scroll, the headphone swings left or right (away from the text), zooms in to show details like the earcups, and centers itself for the intro and outro.
* **Interactive rotation:** Visitors can easily click and drag to look around the model.
* **Parallax effect:** The headphone slightly tilts depending on where your mouse cursor is, adding a nice 3D depth effect.
* **Floating animation:** To make the model feel less stiff, it gently floats up and down. We reduced this floating effect during the zoomed-in sections so the close-ups are easier to look at.
* **Smooth movements:** We used `lerp` to make sure all animations and transitions feel fluid, regardless of the screen's frame rate.

## 🔗 10. Live URL

👉 https://uniwaveheadphones.vercel.app/

## 📸 11. Screenshots

| Hero | Feature close-up |
|------|------------------|
| <img width="2529" height="1334" alt="hero png" src="https://github.com/user-attachments/assets/7064d26f-1624-4cfd-8006-657dd9abf2ec" /> | <img width="2523" height="1305" alt="Screenshot 2026-06-25 220842" src="https://github.com/user-attachments/assets/b01c5b25-cf9f-4170-b646-de9695d737ba" /> |

## 🏆 12. Individual Contribution

| Member | Contribution |
|--------|--------------|
| **Kristine Elle Benjamin** | Set up the React Three Fiber scene and integrated the 3D model. Built the main 3D scene (`Experience.jsx`) including the camera, lighting, drag controls, and environment. Created the GLTF headphone component (`Headphone.jsx`), added the `.glb` files, and worked on the initial layout and CSS. |
| **Izzaty Balqis Binti Sulaiman** | Handled project setup, version control, and configuration. Scaffolded the Vite/React app, set up ESLint and build configs, organized project assets, and wrote the initial README structure. Also reviewed and merged pull requests. |
| **Abbenisha Ann Michael Benedict** | Programmed the scroll animations, developed the motion effects, and wrote the content for the website. |
| **Nur Hanani Binti Ahmad** | Handled quality assurance and report documentation. Tested the website across different devices, captured screenshots, and proofread the report and presentation materials. |

## 🎉 13. Conclusion

Building the UniWave website showed us how much **React Three Fiber** can improve a standard product landing page. Instead of just a boring static page, combining 3D animations that respond to scrolling with clear text makes the product much more interesting to explore. Overall, we successfully met our goal: creating a modern, working 3D landing page that highlights UniWave's three main features (AI Focus Mute, Study Mode, and EchoShare) in a fun and interactive way!

---

## 💻 Running Locally

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
