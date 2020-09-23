import React, {Component} from 'react';

const Settings = (props) => {
    return (
        <div className="tab-pane" id="settings">
            <form className="form-horizontal">
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" placeholder="Name" value={props.profile.fullName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="inputExperience" placeholder="Experience"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Settings;
