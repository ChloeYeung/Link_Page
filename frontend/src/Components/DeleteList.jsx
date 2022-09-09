import React from 'react'

export default function DeleteList() {

    let handleDeleteLink = function (i) {
        let newObject = [...linkState];
        newObject.splice(i, 1);
        setLinkState(newObject);
    }
    return (
        <div>

            <button onClick={() => { handleDeleteLink(i) }} className='btn btn-warning'>
                Delete Link
            </button>
        </div>
    )
}
