import React, { useEffect } from 'react';
import CouchImage from '../assets/Couch.png';
import PlaceIcon from '../assets/3diconWhite.png';
import OfficeCouchGLB from '../assets/Office_Couch.glb';
import OfficeCouchUSDZ from '../assets/Office_Couch.usdz';
import SkyBoxImage from '../assets/spruit_sunrise_1k_HDR.hdr';

const SampleModel = {
  name: 'Comfy Couch',
  img: CouchImage,
  glbLink: OfficeCouchGLB,
  usdzLink: OfficeCouchUSDZ,
  loading: 'eager',
  reveal: 'auto',
  alt: 'A 3d model display',
  link: 'https://cosmoreal.io/',
  arModes: 'scene-viewer quick-look',
  exposure: '2',
  ar: true,
  arScale: 'fixed',
  shadowIntensity: '1',
};

export default SampleModel;
