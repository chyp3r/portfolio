import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home.js"
import TeknofestSaglik from '../pages/TeknofestSaglik.js';
import TeknofestKKTC25 from '../pages/TeknofestKKTC25.js';
import Enyaroyis from '../pages/Enyaroyis.js';
import HocusFocus from '../pages/HocusFocus.js';
import LostSpell from '../pages/LostSpell.js';
import AlZCUR from '../pages/ALZCUR.js';
import Vitabyte from '../pages/Vitabyte.js';
import Raf from '../pages/RAF.js';
import DeneyapAi from "../pages/DeneyapAi.js"
import DeneyapAdvance from '../pages/DeneyapAdvanceRobotic.js';
import DeneyapAero from '../pages/DeneyapAeroSpace.js';
import DeneyapCyber from '../pages/DeneyapCyber.js';
import DeneyapDesign from '../pages/DeneyapDesign.js';
import DeneyapElectronic from '../pages/DeneyapElectronic.js';
import DeneyapEnergy from '../pages/DeneyapEnergyTech.js';
import DeneyapMaterial from '../pages/DeneyapMaterial.js';
import DeneyapMobil from '../pages/DeneyapMobilApp.js';
import DeneyapRobotic from '../pages/DeneyapRobotic.js';
import DeneyapSoftware from '../pages/DeneyapSoftware.js';
import QuantumShift from '../pages/QuantumShift.js';
import BBM103 from '../pages/BBM103.js';
import BBM104 from '../pages/BBM104.js';

import TeknofestSaglik24 from '../pages/TeknofestSaglik24.js';
import TeknofestUlasim24 from '../pages/TeknofestUlasim24.js';
import CBRN from '../pages/CBRN.js';
import TeknofestSaglik25 from '../pages/TeknofestSaglik25.js';
import BBM203 from '../pages/BBM203.js';
import BBM204 from '../pages/BBM204.js';

import KF24 from '../pages/KF24.js';

export const MyRouter = () => {
    return(
    <Routes>
        <Route path="" element={<Home></Home>} />
        <Route path="projects/kf24" element={<KF24></KF24>} />
        <Route path="projects/teknofesthealthai23" element={<TeknofestSaglik></TeknofestSaglik>} />
        <Route path="projects/kktc25" element={<TeknofestKKTC25></TeknofestKKTC25>} />
        <Route path="projects/teknofesthealthai25" element={<TeknofestSaglik25></TeknofestSaglik25>} />
        <Route path="projects/cbrn" element={<CBRN></CBRN>} />
        <Route path="projects/teknofesttrasportationai24" element={<TeknofestUlasim24></TeknofestUlasim24>} />
        <Route path="projects/teknofesthealth24" element={<TeknofestSaglik24></TeknofestSaglik24>} />
        <Route path="projects/enyaroyis" element={<Enyaroyis></Enyaroyis>} />
        <Route path="projects/quantumshift" element={<QuantumShift></QuantumShift>} />
        <Route path="projects/hocusfocus" element={<HocusFocus></HocusFocus>} />
        <Route path="projects/lostspell" element={<LostSpell></LostSpell>} />
        <Route path="/projects/alzcur" element={<AlZCUR></AlZCUR>} />
        <Route path="projects/vitabyte" element={<Vitabyte></Vitabyte>} />
        <Route path="projects/raf" element={<Raf></Raf>} />
        <Route path="deneyap/ai" element={<DeneyapAi></DeneyapAi>} />
        <Route path="deneyap/softwaretech" element={<DeneyapSoftware></DeneyapSoftware>} />
        <Route path="deneyap/advancerobotic" element={<DeneyapAdvance></DeneyapAdvance>} />
        <Route path="deneyap/energytech" element={<DeneyapEnergy></DeneyapEnergy>} />
        <Route path="deneyap/robotic" element={<DeneyapRobotic></DeneyapRobotic>} />
        <Route path="deneyap/cybersecurity" element={<DeneyapCyber></DeneyapCyber>} />
        <Route path="deneyap/electronicprogramming" element={<DeneyapElectronic></DeneyapElectronic>} />
        <Route path="deneyap/aerospacetech" element={<DeneyapAero></DeneyapAero>} />
        <Route path="deneyap/materialscience" element={<DeneyapMaterial></DeneyapMaterial>} />
        <Route path="deneyap/mobilapp" element={<DeneyapMobil></DeneyapMobil>} />
        <Route path="deneyap/design" element={<DeneyapDesign></DeneyapDesign>} />
        <Route path="bbm/103" element={<BBM103></BBM103>} />
        <Route path="bbm/104" element={<BBM104></BBM104>} />
        <Route path="bbm/203" element={<BBM203></BBM203>} />
        <Route path="bbm/204" element={<BBM204></BBM204>} />
        
    </Routes>
    );
}