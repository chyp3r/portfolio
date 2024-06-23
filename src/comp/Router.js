import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home.js"
import TeknofestSaglik from '../pages/TeknofestSaglik.js';
import TeknofestUydu from '../pages/TeknofestUydu.js';
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

import TeknofestYT24 from '../pages/TeknofestIYT24.js';
import TeknofestPsikoloji24 from '../pages/TeknofestPsikoloji24.js';
import TeknofestSaglik24 from '../pages/TeknofestSaglik24.js';
import TeknofestUlasim24 from '../pages/TeknofestUlasim24.js';

export const MyRouter = () => {
    return(
    <Routes>
        <Route path="" element={<Home></Home>} />
        <Route path="projects/teknofesthealthai23" element={<TeknofestSaglik></TeknofestSaglik>} />
        <Route path="projects/teknofestsatelite24" element={<TeknofestUydu></TeknofestUydu>} />
        <Route path="projects/teknofesthuman24" element={<TeknofestYT24></TeknofestYT24>} />
        <Route path="projects/teknofestpsychology24" element={<TeknofestPsikoloji24></TeknofestPsikoloji24>} />
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

    </Routes>
    );
}