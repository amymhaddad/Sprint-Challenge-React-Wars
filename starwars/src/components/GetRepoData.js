import React from 'react';
import GitHubName from './GitHubName'
import GitHubFullname from './GitHubFullname'

export default function GetRepoData ({name, fullname, url}) {
    return (
        <div>
            <GitHubName name = {name}/>
            <GitHubFullname fullname={fullname} url={url}/>
        </div>
    )
}