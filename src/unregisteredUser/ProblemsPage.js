import React from 'react';
import {useParams} from 'react-router-dom';
import HeartAttack from "./HeartAttack";
import Maindio from "./Maindio";
import Shock from "./Shock";
import Fainting from "./Fainting";

import Bleeding from "./Bleeding";
import Temperature from "./Temperature";

function ProblemsPage() {
    const {problem} = useParams();
    return (
        <div>
            {problem === 'heartattack' && <HeartAttack/>}
            {problem === 'gusenje' && <Maindio/>}
            {problem === 'shock' && <Shock/>}
            {problem === 'fainting' && <Fainting/>}
            {problem === 'bleeding' && <Bleeding/>}
            {problem === 'temperature' && <Temperature/>}
        </div>
    );
}

export default ProblemsPage;