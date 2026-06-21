// src/components/Headphone.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animation keyframes mapped to scroll progress (0: Hero, 1: Intro, 2: Smart ANC zoom)
const keyframes = [
    {
        pos: [1.0, -1.15, 0],
        rot: [0, Math.PI, 0], // Starts at your preferred Math.PI rotation
        scale: 0.8
    },
    {
        pos: [-1.0, -1.15, 0], // Moved slightly back from -1.3 so it isn't cut off
        rot: [0, 2 * Math.PI / 3, 0], 
        scale: 0.8
    },
    {
        pos: [1.1, -0.7, 0.8], // Shifted to the right to avoid overlapping the text, and Y adjusted to center the earcup
        rot: [0, Math.PI / 2, 0], // Turned sideways to show earcup profile
        scale: 1.25 // Zoomed in nicely but not fullscreen-blocking
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
        // Subtly reduce the float amount when zoomed-in close (Smart ANC) to keep the detailed view stable
        const floatAmount = scrollOffset > 1.2 ? 0.03 : 0.12;
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