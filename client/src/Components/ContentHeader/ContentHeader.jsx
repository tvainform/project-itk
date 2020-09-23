import React, {Component} from 'react';
import {Breadcrumb} from "react-bootstrap";

const ContentHeader = (props) => {
        return (
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Персонал</h1>
                        </div>
                        <div className="col-sm-6">
                            <Breadcrumb className="breadcrumb float-sm-right">
                                <Breadcrumb.Item href={props.path}>{props.name}</Breadcrumb.Item>
                                <Breadcrumb.Item href={props.path} active>{props.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default ContentHeader;
