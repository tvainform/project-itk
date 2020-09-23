import React from 'react';
import {addIncidentActionCreator, updateNewIncidentTextActionCreator} from "../../redux/incident-reducer";
import Incidents from "./Incidents";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        incidents: state.incidentPage,
        newFieldsText: state.incidentPage.newFieldsText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewIncidentText: (text)=>{
            dispatch(updateNewIncidentTextActionCreator(text))
        },
        addIncident: ()=>{
            dispatch(addIncidentActionCreator())
        }
    }
}
const IncidentsContainer = connect(mapStateToProps, mapDispatchToProps)(Incidents);

export default IncidentsContainer;
