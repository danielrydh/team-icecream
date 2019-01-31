import React from 'react';
import ui from '../../../constants/ui';

const SpeakingBubble = ({ text }) => (
    <UIRow>
        <Paragraph> 
        {text}  
        </Paragraph>
    </UIRow>
) 


export default SpeakingBubble;