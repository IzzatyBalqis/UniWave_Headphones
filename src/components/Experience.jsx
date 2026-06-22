import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { Headphone } from './Headphone';

export default function Experience({ scrollOffset }) {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                {/* ambient light */}
                <ambientLight intensity={0.08} />

                {/* key light */}
                <directionalLight position={[6, 8, 4]} intensity={2.5} />

                <Suspense fallback={null}>
                    <PresentationControls
                        global={false}
                        cursor={true}
                        snap={true}
                        speed={2}
                        rotation={[0, Math.PI, 0]}
                        polar={[-Math.PI / 6, Math.PI / 6]}
                        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
                    >
                        <Headphone scale={0.8} scrollOffset={scrollOffset} />
                    </PresentationControls>

                    {/* floor shadow */}
                    <ContactShadows
                        position={[0, -1.6, 0]}
                        opacity={0.6}
                        scale={5}
                        blur={2.4}
                        far={2}
                    />

                    {/* reflections */}
                    <Environment preset="studio" intensity={0.25} />
                </Suspense>
            </Canvas>
        </div>
    );
}