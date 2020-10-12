import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {SectionWrapper} from './styles.js'
import ModelView from '../components/modelView';

const SectionOne = (props) => {

    return (
        <Parallax  y={[props.y[0],props.y[1]]}>
            <SectionWrapper >
                    <h2>Customise</h2>
                    <ModelView clip={0}/>
            </SectionWrapper>
        </Parallax>

    )
}

export default SectionOne;