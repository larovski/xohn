import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Model = props => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/models/vitra.glb", setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};
