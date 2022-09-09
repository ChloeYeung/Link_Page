//State
import { useState } from 'react';

// File
import { links } from '../links';

import React from 'react'

export default function AddList() {
    //State
    const [linkState, setLinkState] = useState(links);
    const [addLink, setLink] = useState({});

    //add link function
    let handleAddTitle = function (event) {
        let addTitle = { ...addLink, title: event.target.value }
        setLink(addTitle);
        console.log(addLink);
        console.log(linkState);
    }

    let handleAddDescription = function (event) {
        let addDescription = { ...addLink, description: event.target.value }
        setLink(addDescription);
        console.log(addLink);
    }

    let handleAddUrl = function (event) {
        let addUrl = { ...addLink, url: event.target.value }
        setLink(addUrl);
        console.log(addLink);
    }

    let handleSubmit = function () {
        let a = [];
        a = addLink;
        let originUrl = linkState;
        setLinkState(originUrl.concat(a));
        console.log(linkState);
    }

    return (
        <div>

            <form className="d-flex align-self-center justify-content-center">
                <label> Title <input name="title" type="text" onChange={handleAddTitle} /> </label>
                <label> Description <input name="description" type="text" onChange={handleAddDescription} /> </label>
                <label> URL <input name="url" type="text" onChange={handleAddUrl} /> </label>

            </form>
            <button onClick={handleSubmit} className="btn btn-primary˝"> Add Link</button>

        </div>
    )
}
