import { Center, VStack, Divider } from '@chakra-ui/react';
import ARCard from './components/ARCard';
import ARButtonOnly from './components/ARButtonOnly';
import WithQRCode from './components/WithQRCode';
import ARLink from './components/ARLink';
import ARCardFS from './components/ARCardFS';
import QRToAR from './components/QRToAR';

import Landing from './components/SiteLayout/Landing';
import Footer from './components/SiteLayout/Footer';
import NavBar from './components/SiteLayout/NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SampleModel from './utilis/SampleModel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/comfycouchfs">
          <Center>
            <VStack w="auto" h="auto">
              <ARCardFS
                isFS={true}
                src={SampleModel.glbLink}
                ios-src={SampleModel.glbLink}
                shadow-softness="0"
                ar-scale="fixed"
                exposure="2"
              />
            </VStack>
          </Center>
        </Route>
        <div>
          <NavBar />
          <Divider borderWidth="2px" />
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/comfycouch">
            <Center my={5} h="80vh">
              <WithQRCode
                name={SampleModel.title}
                img={SampleModel.img}
                glbLink={SampleModel.glbLink}
                usdzLink={SampleModel.usdzLink}
                SkyBox={SampleModel.skybox}
              />
            </Center>
          </Route>
          <Route path="/couchar">
            <Center my={5} h="70vh">
              <ARCard
                src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
                ios-src={SampleModel.usdzLink}
              />
            </Center>
          </Route>
          <Route path="/arbutton">
            <Center my={5} h="70vh">
              <ARButtonOnly
                src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
                ios-src={SampleModel.usdzLink}
                ar-modes="scene-viewer quick-look"
                ar
                ar-scale="auto"
                reveal="manual"
              />
            </Center>
          </Route>
          <Route path="/arlink">
            <Center my={5} h="70vh">
              <ARLink
                src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
                ios-src={SampleModel.usdzLink}
                ar-modes="scene-viewer quick-look"
                ar
                ar-scale="fixed"
                reveal="manual"
              />
            </Center>
          </Route>
          <Route path="/qrtoar">
            <Center my={5} h="70vh">
              <QRToAR
                src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
                ios-src={SampleModel.usdzLink}
                ar-modes="scene-viewer quick-look"
                ar
                ar-scale="fixed"
                reveal="manual"
              />
            </Center>
          </Route>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
