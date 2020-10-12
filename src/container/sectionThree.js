import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {SectionWrapper} from './styles.js'
import ModelView from '../components/modelView';

const SectionThree = (props) => {
    return (
        <Parallax  y={[props.y[0],props.y[1]]}>
            <SectionWrapper>
                <h2>Scale</h2>
                <ModelView clip={1}/>
            </SectionWrapper>
        </Parallax>
    )
}

export default SectionThree;