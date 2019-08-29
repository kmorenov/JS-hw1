import React from 'react'
import {BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
// import PhotoInfo from "./PhotoInfo";

export default function Photo({photos, updateCounter}) {
    return <div className="col-10">
        <h2>Photos</h2>
        <div className="row">
            {
                photos.map(photo => {
                    return <div className="card m-1 w-25">
                        <img src={photo.thumbnailUrl} alt={photo.title} className="card-img-top" onClick={null}/>
                        <div className="card-body text-center">
                            <button
                                className="btn btn-primary"
                                onClick={() => updateCounter(photo)}
                            >Buy
                            </button>
                        </div>
                    </div>

                })
            }
        </div>
    </div>
}


