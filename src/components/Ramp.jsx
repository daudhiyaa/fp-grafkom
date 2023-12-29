import { useRef } from "react";
import { useTrimesh } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

export function Ramp() {
  const result = useGLTF("/models/ramp.glb");

  const geometry = result.scene.children[0].geometry;

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      type: "Static",
    }),
    useRef(null)
  );
}
