import React from 'react'
import ProfileInfo from "./ProfileInfo";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (<ProfileInfo profile={props.profile}/>)
}

export default Profile;
