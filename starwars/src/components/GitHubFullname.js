import React from 'react';
import styled from 'styled-components'

const Fullname = styled.p`
    font-size:15px;
    text-align: left;
    color: black;
    `;

const Url = styled.li`
    list-style-type: none;
    `
export default function GitHubLogin({fullname, url}) {
    return (
        <Fullname>
            <ul>
                <Url> 
                    <a href={url}>{fullname}</a>
                </Url>
            </ul>
        </Fullname>
    );
};