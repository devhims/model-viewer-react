## Beautiful AR compatible React Components made with Model Viewer and Chakra UI

By combining the forces of model viewer and Chakra UI, I'm creating React components to efficiently deliver AR capabalities to your web apps.

**[Under Active Development 🕛]**

Presenting 3 components that are already developed

1. Card with QR Code (check out the site link on desktop browser for preview):

```javascript
<WithQRCode
  name={name}
  img={CouchImage}
  glbLink={OfficeCouchGLB}
  usdzLink={OfficeCouchUSDZ}
  SkyBox={SkyBox}
/>
```

2. Simple AR Card

```javascript
<ARCard
  src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
  ios-src={SampleModel.usdzLink}
  exposure={currentExposure}
/>
```

3. AR Button

```javascript
<ARButtonOnly
  src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
  ios-src={SampleModel.usdzLink}
  ar-modes="scene-viewer quick-look"
  ar
  ar-scale="auto"
  reveal="manual"
/>
```
