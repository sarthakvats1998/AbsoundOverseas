import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WallPanels from './components/WallPanels';
import AcousticCeilings from './components/AcousticCeilings';
import SeatingSystems from './components/SeatingSystems';
import AcousticDoors from './components/AcousticDoors';
import StageSystems from './components/StageSystems';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import SlatedPanel from './components/SlatedPanel';
import MelamianoPanel from './components/MelamianoPanel';
import StretchFabricPanel from './components/StretchFabricPanel';
import PerforatedPanel from './components/PerforatedPanel';
import SlitPanel from './components/ClassicPanel';
import GlassStoff from './components/GlassStoff';
import PetPanel from './components/PetPanel';
import WoodWoolPanel from './components/WoodWoolPanel';
import StoffPanel from './components/StoffPanel';
import GypsumBoard from './components/GypsumBoard';
import AbsoftTile from './components/AbsoftTile';
import CalciLite from './components/CalciLite';
import MetalCeiling from './components/MetalCeiling';
import Door from './components/Door';
import Abt01 from './components/Abt01';
import Abt02 from './components/Abt02';
import Abtwp03 from './components/Abtwp03';
import Abpb04 from './components/Abpb04';
import Abpb05 from './components/Abpb05';
import Abr06 from './components/Abr06';
import Abr07 from './components/Abr07';
import Abpb08 from './components/Abpb08';
import Abt09 from './components/Abt09';
import Abpwp10 from './components/Abpwp10';
import Abpb11 from './components/Abpb11';
import ParCan from './components/ParCan';
import Blinder from './components/Blinder';
import FresnelSpot from './components/FresnelSpot';
import ParLight from './components/ParLight';
import ProfileLight from './components/ProfileLight';
import MovingHead from './components/MovingHead';
import Cyclorama from './components/Cyclorama';
import CompanyFooter from './components/CompanyFooter';
import FooterCopyright from './components/FooterCopyright';
import ScrollToTop from './hooks/ScrollToTop';
import Curtain from './components/Curtain';
import WoodenFloor from './components/WoodenFloor';
import CycloramaScreen from './components/CycloramaScreen';
import SideWings from './components/SideWings';
import Proscenium from './components/Proscenium';
import SideLadder from './components/SideLadder';
import MotorizedLightBar from './components/MotorizedLightBar';
import LayInTiles from './components/LayInTiles';
import TeeGrid from './components/TeeGrid';
import ClipInTiles from './components/ClipInTiles';
import MetalBaffleCeiling from './components/MetalBaffleCeiling';
import LinearCeiling from './components/LinearCeiling';
import OpenCellCeiling from './components/OpenCellCeiling';
import GiWallAndCeiling from './components/GiWallAndCeiling';
import ProductCards from './components/ProductCards';

function App(props) {

  return (
    <Router>
      <ScrollToTop />
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<ProductCards />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/wallPanels" element={<WallPanels />} />
          <Route path="/acousticCeilings" element={<AcousticCeilings />} />
          <Route path="/seatingSystems" element={<SeatingSystems />} />
          <Route path="/acousticDoors" element={<AcousticDoors />} />
          <Route path="/stageSystems" element={<StageSystems />} />
          <Route path="/wallPanels/melamianoPanel" element={<MelamianoPanel />} />
          <Route path="/wallPanels/slatedPanel" element={<SlatedPanel />} />
          <Route path="/wallPanels/stretchFabricPanel" element={<StretchFabricPanel />} />
          <Route path="/wallPanels/perforatedPanel" element={<PerforatedPanel />} />
          <Route path="/wallPanels/slitPanel" element={<SlitPanel />} />
          <Route path="/wallPanels/petPanel" element={<PetPanel />} />
          <Route path="/wallPanels/woodWoolPanel" element={<WoodWoolPanel />} />
          <Route path="/wallPanels/stoffPanel" element={<StoffPanel />} />
          <Route path="/wallPanels/gypsumBoard" element={<GypsumBoard />} />
          <Route path="/wallPanels/glassStoff" element={<GlassStoff/>} />
          <Route path="/acousticCeilings/melamianoPanel" element={<MelamianoPanel />} />
          <Route path="/acousticCeilings/perforatedPanel" element={<PerforatedPanel />} />
          <Route path="/acousticCeilings/slitPanel" element={<SlitPanel />} />
          <Route path="/acousticCeilings/gypsumBoard" element={<GypsumBoard />} />
          <Route path="/acousticCeilings/absoftTile" element={<AbsoftTile />} />
          <Route path="/metalCeilings" element={<MetalCeiling />} />
          <Route path="/acousticCeilings/calciLite" element={<CalciLite />} />
          <Route path="/acousticDoors/door" element={<Door />} />
          <Route path="/seatingSystems/abt01" element={<Abt01 />} />
          <Route path="/seatingSystems/abt02" element={<Abt02 />} />
          <Route path="/seatingSystems/abtwp03" element={<Abtwp03 />} />
          <Route path="/seatingSystems/abpb04" element={<Abpb04 />} />
          <Route path="/seatingSystems/abpb05" element={<Abpb05 />} />
          <Route path="/seatingSystems/abr06" element={<Abr06 />} />
          <Route path="/seatingSystems/abr07" element={<Abr07 />} />
          <Route path="/seatingSystems/abpb08" element={<Abpb08 />} />
          <Route path="/seatingSystems/abt09" element={<Abt09 />} />
          <Route path="/seatingSystems/abpwp10" element={<Abpwp10 />} />
          <Route path="/seatingSystems/abpb11" element={<Abpb11 />} />
          <Route path="/stageSystems/parCan" element={<ParCan />} />
          <Route path="/stageSystems/blinder" element={<Blinder />} />
          <Route path="/stageSystems/fresnelSpot" element={<FresnelSpot />} />
          <Route path="/stageSystems/parLight" element={<ParLight />} />
          <Route path="/stageSystems/profileLight" element={<ProfileLight />} />
          <Route path="/stageSystems/movingHead" element={<MovingHead />} />
          <Route path="/stageSystems/cyclorama" element={<Cyclorama />} />
          <Route path="/stageSystems/curtains" element={<Curtain />} />
          <Route path="/stageSystems/woodenFloor" element={<WoodenFloor />} />
          <Route path="/stageSystems/cycloramaScreen" element={<CycloramaScreen />} />
          <Route path="/stageSystems/sideWings" element={<SideWings />} />
          <Route path="/stageSystems/proscenium" element={<Proscenium />} />
          <Route path="/stageSystems/sideLadder" element={<SideLadder />} />
          <Route path="/stageSystems/motorizedLightBar" element={<MotorizedLightBar />} />
          <Route path="/metalCeilings/layInTiles" element={<LayInTiles />} />
          <Route path="/metalCeilings/teeGrid" element={<TeeGrid />} />          
          <Route path="/metalCeilings/clipInTiles" element={<ClipInTiles />} />
          <Route path="/metalCeilings/metalBaffleCeiling" element={<MetalBaffleCeiling />} />
          <Route path="/metalCeilings/linearCeiling" element={<LinearCeiling />} />
          <Route path="/metalCeilings/openCellCeiling" element={<OpenCellCeiling />} />
          <Route path="/metalCeilings/giCeilingAndWall" element={<GiWallAndCeiling />} />
        </Routes>
      </main>
      <footer>
        <CompanyFooter/>
        <FooterCopyright/>
      </footer>
    </Router>
  );
}

export default App;
