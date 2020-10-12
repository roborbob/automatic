import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {SectionWrapper} from './styles'
import ModelView from '../components/modelView';

const SectionTwo = (props) => {
    return (
        <Parallax  y={[props.y[0],props.y[1]]}>
            <SectionWrapper responsive>
                <ModelView clip={2}/>
                <h2>Multi Task</h2>
            </SectionWrapper>
        </Parallax>
    )
}

export default SectionTwo;