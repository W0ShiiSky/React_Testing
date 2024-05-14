// // import logo from './logo.svg';
// import './App.css';
// // import 'aframe';
// // import 'mind-ar/dist/mindar-image-aframe.prod.js';
// // import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

function App() {
  useEffect(() => {
    // Create A-Frame scene
    const scene = document.createElement('a-scene');
    scene.setAttribute('mindar-image', 'imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.mind;');
    scene.setAttribute('color-space', 'sRGB');
    scene.setAttribute('renderer', 'colorManagement: true, physicallyCorrectLights');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    scene.setAttribute('device-orientation-permission-ui', 'enabled: false');

    // Create assets
    const assets = document.createElement('a-assets');
    const cardImage = document.createElement('img');
    cardImage.setAttribute('id', 'card');
    cardImage.setAttribute('src', 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.png');
    assets.appendChild(cardImage);

    const avatarModel = document.createElement('a-asset-item');
    avatarModel.setAttribute('id', 'avatarModel');
    avatarModel.setAttribute('src', 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/softmind/scene.gltf');
    assets.appendChild(avatarModel);

    scene.appendChild(assets);

    // Create camera
    const camera = document.createElement('a-camera');
    camera.setAttribute('position', '0 0 0');
    camera.setAttribute('look-controls', 'enabled: false');
    scene.appendChild(camera);

    // Create image target
    const imageTarget = document.createElement('a-entity');
    imageTarget.setAttribute('mindar-image-target', 'targetIndex: 0');

    const plane = document.createElement('a-plane');
    plane.setAttribute('src', '#card');
    plane.setAttribute('position', '0 0 0');
    plane.setAttribute('height', '0.552');
    plane.setAttribute('width', '1');
    plane.setAttribute('rotation', '0 0 0');
    imageTarget.appendChild(plane);

    const avatar = document.createElement('a-gltf-model');
    avatar.setAttribute('rotation', '0 0 0');
    avatar.setAttribute('position', '0 0 0.1');
    avatar.setAttribute('scale', '0.005 0.005 0.005');
    avatar.setAttribute('src', '#avatarModel');
    avatar.setAttribute('animation', 'property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate');
    imageTarget.appendChild(avatar);

    scene.appendChild(imageTarget);

    // Append scene to the document
    document.body.appendChild(scene);

    // Clean up function to remove the scene when component unmounts
    return () => {
      document.body.removeChild(scene);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
