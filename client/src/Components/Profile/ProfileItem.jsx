import {NavLink} from "react-router-dom";
import React from "react";

const ProfileItem = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
            <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                    {props.profession}
                </div>
                <div className="card-body pt-0">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="lead"><b>{props.name}</b></h2>
                            <p className="text-muted text-sm"><b>About: </b>{props.about}</p>
                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                <li className="small"><span className="fa-li"><i
                                    className="fas fa-lg fa-building"/></span> Address: Demo Street 123, Demo City
                                    04312, NJ
                                </li>
                                <li className="small"><span className="fa-li"><i
                                    className="fas fa-lg fa-phone"/></span> Phone #: + 800 - 12 12 23 52
                                </li>
                            </ul>
                        </div>
                        <div className="col-5 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar"
                                 className="img-circle img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-right">
                        <a href="#" className="btn btn-sm bg-teal">
                            <i className="fas fa-comments"/>
                        </a>
                        <NavLink to={"/persons/" + props.id} className="btn btn-sm btn-primary">
                            <i className="fas fa-user"/> Профиль
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileItem;
