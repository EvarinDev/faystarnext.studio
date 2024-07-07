'use client';
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"
import { useGLTF, Float, Text } from "@react-three/drei";
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export function FloatingShape() {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothMouse = {
        x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
        y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 })
    }

    const manageMouse = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth
        const y = clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouse)
        return () => window.removeEventListener("mousemove", manageMouse)
    }, [])

    return (
        <Canvas style={{ background: "#e0e0e2" }} orthographic camera={{ position: [0, 0, 200], zoom: 10 }}>
            <Model mouse={smoothMouse} />
            <Environment preset="studio" />
        </Canvas>
    )
}
function Model({ mouse }: { mouse: any }) {
    const [activeShape, setActiveShape] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            if (activeShape == 11) {
                setActiveShape(1)
            }
            else {
                setActiveShape(activeShape + 1)
            }
        }, 2000)
    }, [activeShape])

    const { nodes } = useGLTF("/models/floating_shapes4.glb");
    return (
        <group>
            <Mesh node={nodes.Sphere001} multiplier={2.4} mouse={mouse} isActive={activeShape == 1} />
            <Mesh node={nodes.Sphere002} multiplier={2.4} mouse={mouse} isActive={activeShape == 2} />
            <Mesh node={nodes.Cylinder002} multiplier={1.2} mouse={mouse} isActive={activeShape == 3} />
            <Mesh node={nodes.Sphere003} multiplier={1} mouse={mouse} isActive={activeShape == 4} />
            <Mesh node={nodes.Cylinder003} multiplier={1.8} mouse={mouse} isActive={activeShape == 5} />
            <Mesh node={nodes.Cylinder005} multiplier={1.8} mouse={mouse} isActive={activeShape == 6} />
            <Mesh node={nodes.Cube002} multiplier={2} mouse={mouse} isActive={activeShape == 7} />
            <Mesh node={nodes.Cylinder006} multiplier={1.2} mouse={mouse} isActive={activeShape == 8} />
            <Mesh node={nodes.Cylinder007} multiplier={1.6} mouse={mouse} isActive={activeShape == 9} />
            <Mesh node={nodes.Cylinder009} multiplier={1.8} mouse={mouse} isActive={activeShape == 10} />
            <Mesh node={nodes.Sphere} multiplier={1.5} mouse={mouse} isActive={activeShape == 11} />
            <Font />
        </group>
    );
}

function Font() {
    const src = '/fonts/PPNeueMontreal-Bold.otf'
    const textOption = {
        color: "darkblue",
        anchorX: "center" as const,
        anchorY: "middle" as const
    }
    return (
        <group>
            <Text font={src} position={[0, 0, -.1]} fontSize={50} {...textOption}>
            NT
            </Text>
        </group>
    )
}

useGLTF.preload("/models/floating_shapes4.glb");

function Mesh({ node, multiplier, mouse, isActive }: { node: any, multiplier: number, mouse: any, isActive: boolean }) {
    const { geometry, material, position, scale, rotation } = node;
    const a = multiplier / 2;
    const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - a, rotation.x + a]);
    const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - a, rotation.y + a]);
    const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier * 2, position.x + multiplier * 2]);
    const positionY = useTransform(mouse.y, [0, 1], [position.y + multiplier * 2, position.y - multiplier * 2])

    const getRandomMultiplier = () => {
        return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    }

    return (
        <Float>
            <motion.mesh
                castShadow={true}
                receiveShadow={true}
                geometry={geometry}
                material={material}
                position={position}
                rotation={rotation}
                scale={scale}
                rotation-y={rotationX}
                rotation-x={rotationY}
                position-x={positionX}
                position-y={positionY}
                animate={{ rotateZ: isActive ? rotation.z + getRandomMultiplier() : null }}
                transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
            />
        </Float>
    )
}