// src/components/Headphone.jsx
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animation keyframes mapped to scroll progress — one stop per section.
// The scroll tells a visual story: centered intro, swing left, two earcup
// close-ups, recenter, then an elegant floating showcase to finish.
const keyframes = [
    {
        pos: [0, -1.15, 0], // 0 Hero — centered & floated low so it clears the left-aligned logo/tagline/button
        rot: [0, Math.PI, 0], // Front-facing, full product
        scale: 0.8
    },
    {
        pos: [-1.6, -1.0, 0.2], // 1 Introduction — text sits RIGHT, so push far LEFT with open space around the copy
        rot: [0, 2 * Math.PI / 3, 0], // Three-quarter view
        scale: 1.05 // Slight zoom in
    },
    {
        pos: [1.6, -0.75, 0.3], // 2 AI Focus Mute — text sits LEFT, so move RIGHT and zoom onto the earcup
        rot: [0, Math.PI / 2, 0], // Side profile revealing the earcup
        scale: 1.3
    },
    {
        pos: [-1.6, -0.95, 0.2], // 3 Study Mode — text sits RIGHT, so move LEFT (different angle from AI Focus Mute)
        rot: [0.1, -2 * Math.PI / 3, 0], // Tilted three-quarter from the opposite side
        scale: 1.15
    },
    {
        pos: [1.6, -1.0, 0], // 4 EchoShare — text sits LEFT, so move RIGHT with generous spacing, full product
        rot: [0.05, Math.PI * 0.85, 0], // Near-front three-quarter to show the whole pair clearly
        scale: 1.0
    },
    {
        pos: [0, -1.55, 0], // 5 Final — centered & floated low beneath the centered headline, zoomed out
        rot: [0.12, Math.PI * 0.9, 0], // Gentle premium tilt
        scale: 0.85
    }
];

const getInterpolatedValue = (scroll) => {
    // Clamp scroll progress between 0 and keyframes length - 1
    const clampedScroll = Math.max(0, Math.min(scroll, keyframes.length - 1));
    const index = Math.floor(clampedScroll);
    const segmentProgress = clampedScroll - index;

    if (index >= keyframes.length - 1) {
        return keyframes[keyframes.length - 1];
    }

    const start = keyframes[index];
    const end = keyframes[index + 1];

    const pos = [
        start.pos[0] + (end.pos[0] - start.pos[0]) * segmentProgress,
        start.pos[1] + (end.pos[1] - start.pos[1]) * segmentProgress,
        start.pos[2] + (end.pos[2] - start.pos[2]) * segmentProgress
    ];

    const rot = [
        start.rot[0] + (end.rot[0] - start.rot[0]) * segmentProgress,
        start.rot[1] + (end.rot[1] - start.rot[1]) * segmentProgress,
        start.rot[2] + (end.rot[2] - start.rot[2]) * segmentProgress
    ];

    const scale = start.scale + (end.scale - start.scale) * segmentProgress;

    return { pos, rot, scale };
};

export function Headphone({ scrollOffset, ...props }) {
    const { nodes, materials } = useGLTF('/models/modelHeadPhone-transformed.glb');
    const modelRef = useRef();

    useFrame((state) => {
        if (!modelRef.current) return;

        const target = getInterpolatedValue(scrollOffset);

        // 1. FLOATING WAVE ANIMATION
        const elapsedTime = state.clock.getElapsedTime();
        // Keep the float gentle during the two earcup close-ups (AI Focus Mute + Study Mode);
        // let it float freely for the Hero, EchoShare and Final showcase shots.
        const isCloseUp = scrollOffset > 1.6 && scrollOffset < 3.6;
        const floatAmount = isCloseUp ? 0.03 : 0.12;
        const floatY = Math.sin(elapsedTime * 1.5) * floatAmount;

        // 2. SMOOTH POSITION & SCALE LERP
        modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, target.pos[0], 0.05);
        modelRef.current.position.z = THREE.MathUtils.lerp(modelRef.current.position.z, target.pos[2], 0.05);
        modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, target.pos[1] + floatY, 0.05);

        const currentScale = modelRef.current.scale.x;
        const nextScale = THREE.MathUtils.lerp(currentScale, target.scale, 0.05);
        modelRef.current.scale.set(nextScale, nextScale, nextScale);

        // 3. MOUSE PARALLAX TILT EFFECT (applied on top of scroll keyframe rotation)
        const targetRotationY = target.rot[1] + state.pointer.x * 0.25;
        const targetRotationX = target.rot[0] - state.pointer.y * 0.15;

        modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetRotationX, 0.05);
        modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotationY, 0.05);
        modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, target.rot[2], 0.05);
    });

    return (
        <group ref={modelRef} {...props} dispose={null}>
            <mesh geometry={nodes.a1.geometry} material={materials['a_1.004']} position={[0, 0.877, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.a2.geometry} material={materials['a_2.001']} position={[0, 1.438, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.a3.geometry} material={materials.a_3} position={[0, 1.418, -0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.a1001.geometry} material={materials['a_1.001']} position={[-0.01, 0.877, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.a2001.geometry} material={materials['a_2.002']} position={[0, 1.438, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.a1002.geometry} material={materials['a_1.003']} position={[0, 0.877, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </group>
    );
}

useGLTF.preload('/models/modelHeadPhone-transformed.glb');