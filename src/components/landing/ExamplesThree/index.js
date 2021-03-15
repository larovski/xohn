import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { Model } from "components/common";
import { Wrapper, InnerWrapper, Text } from "./styles";
import next from "assets/icons/next.svg";
import previous from "assets/icons/previous.svg";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      enableZoom={false}
      autoRotate
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

export const ExamplesThree = () => {
  const isBrowser = typeof window !== "undefined";

  return (
    <Wrapper id="examples">
      <InnerWrapper>
        <Text>Unsere Beispiele</Text>
        <img
          style={{
            height: "50px",
            marginTop: "100px",
            float: "left",
            marginLeft: "-25px",
          }}
          src={previous}
          alt=""
        />
        <img
          style={{
            height: "50px",
            marginTop: "100px",
            float: "right",
            marginRight: "-25px",
          }}
          src={next}
          alt=""
        />
      </InnerWrapper>
      {isBrowser && (
        <Canvas
          camera={{ position: [2, 0.5, 0] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 20, 5]} penumbra={1} castShadow />
          <Controls />
          <Model />
        </Canvas>
      )}
    </Wrapper>
  );
};
