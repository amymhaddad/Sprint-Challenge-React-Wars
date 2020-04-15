import React from 'react';
import styled from 'styled-components'

const Name = styled.h3`
    font-size: 25px;
    text-align: left;
    color: black;
    `;
    
export default function GetHubName({name}) { 
    return (
        <Name>
            {name}
        </Name>
    );
};