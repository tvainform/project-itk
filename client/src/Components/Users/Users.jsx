import React from 'react'
import userPhoto from "../../assets/images/default-user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <section className="content">
            {/* Default box */}
            <div className="card card-solid">
                <div className="card-body pb-0">
                    <div className="row d-flex align-items-stretch">
                        {
                            props.users.map(u =>
                                <div key={u.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                    <div className="card bg-light">
                                        <div className="card-header text-muted border-bottom-0">
                                            {props.profession}
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead"><b>{u.name}</b></h2>
                                                    <p className="text-muted text-sm"><b>About: </b>{props.about}
                                                    </p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i
                                                            className="fas fa-lg fa-building"/></span> Address: Demo
                                                            Street 123, Demo City
                                                            04312, NJ
                                                        </li>
                                                        <li className="small"><span className="fa-li"><i
                                                            className="fas fa-lg fa-phone"/></span> Phone #: + 800 -
                                                            12 12 23 52
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src={u.photos != null ? u.photos.small : userPhoto}
                                                         alt="user-avatar"
                                                         className="img-circle img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                {u.followed ?
                                                    <button disabled={props.followingInProgress} className="btn btn-sm btn-success" onClick={() => {
                                                        props.toggleFollowingProgress(true);
                                                        usersAPI.follow(u.id)
                                                    }}><i className="fas fa-bell"/> Отписаться</button> :
                                                    <button disabled={props.followingInProgress} className="btn btn-sm btn-warning" onClick={() => {
                                                        usersAPI.unfollow(u.id)
                                                    }}><i className="far fa-bell"/> Подписаться</button>
                                                }

                                                <NavLink to={"/profile/" + u.id}
                                                         className="btn btn-sm btn-primary">
                                                    <i className="fas fa-user"/> Профиль
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <nav aria-label="Contacts Page Navigation">
                        <ul className="pagination justify-content-center m-0">
                            {pages.map(p => {
                                return <li className={props.currentPage === p ? 'active page-item' : 'page-item'}>
                                    <NavLink onClick={(e) => {
                                        props.onPageChanged(p);
                                    }} className="page-link" to="#">{p}</NavLink></li>
                            })}
                        </ul>
                    </nav>
                </div>
                {/* /.card-footer */}
            </div>
            {/* /.card */}
        </section>)
}

export default Users;
