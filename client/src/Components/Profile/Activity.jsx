import React, {Component} from 'react';

class Activity extends Component {
    render() {
        return (
            <div className="active tab-pane" id="activity">
                <div className="post">
                    <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg"
                             alt="user image"/>
                        <span className="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" className="float-right btn-tool"><i className="fas fa-times"/></a>
                        </span>
                        <span className="description">Shared publicly - 7:30 PM today</span>
                    </div>
                    <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                    </p>

                    <p>
                        <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1"/> Share</a>
                        <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1"/> Like</a>
                        <span className="float-right">
                          <a href="#" className="link-black text-sm">
                            <i className="far fa-comments mr-1"/> Comments (5)
                          </a>
                        </span>
                    </p>
                    <input className="form-control form-control-sm" type="text" placeholder="Type a comment"/>
                </div>
                <div className="post clearfix">
                    <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg"
                             alt="User Image"/>
                        <span className="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" className="float-right btn-tool"><i className="fas fa-times"/></a>
                        </span>
                        <span className="description">Sent you a message - 3 days ago</span>
                    </div>
                    <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                    </p>

                    <form className="form-horizontal">
                        <div className="input-group input-group-sm mb-0">
                            <input className="form-control form-control-sm" placeholder="Response"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-danger">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="post">
                    <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user6-128x128.jpg"
                             alt="User Image"/>
                        <span className="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" className="float-right btn-tool"><i className="fas fa-times"/></a>
                        </span>
                        <span className="description">Posted 5 photos - 5 days ago</span>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-6">
                            <img className="img-fluid" src="../../dist/img/photo1.png" alt="Photo"/>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-3" src="../../dist/img/photo2.png" alt="Photo"/>
                                        <img className="img-fluid" src="../../dist/img/photo3.jpg" alt="Photo"/>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-3" src="../../dist/img/photo4.jpg" alt="Photo"/>
                                        <img className="img-fluid" src="../../dist/img/photo1.png" alt="Photo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>
                        <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1"/> Share</a>
                        <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1"/> Like</a>
                        <span className="float-right">
                          <a href="#" className="link-black text-sm">
                            <i className="far fa-comments mr-1"/> Comments (5)
                          </a>
                        </span>
                    </p>

                    <input className="form-control form-control-sm" type="text" placeholder="Type a comment"/>
                </div>
            </div>
    );
    }
    }

    export default Activity;
