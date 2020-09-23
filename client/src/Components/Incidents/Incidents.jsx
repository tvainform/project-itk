import React from 'react';
import {Button, Card, Table} from "react-bootstrap";
import * as XLSX from "xlsx";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


const Incidents = (props) => {
    let IncidentTableHeaderList = props.incidents.incidentTableHeader.map(el =>
        <TableHeader key={el.id}
                     h1={el.h1}
                     h2={el.h1}
                     h3={el.h1}
                     h4={el.h1}
                     h5={el.h1}
                     h6={el.h1}
                     h7={el.h1}
                     h8={el.h1}
                     h9={el.h1}
                     h10={el.h1}
        />
    );
    let IncidentElements = props.incidents.incidentData.map(el =>
        <TableBody key={el.id}
                   d1={el.d1}
                   d2={el.d2}
                   d3={el.d3}
                   d4={el.d4}
                   d5={el.d5}
                   d6={el.d6}
                   d7={el.d7}
                   d8={el.d8}
                   d9={el.d9}
                   d10={el.d10}
        />

    );
    const handleUpload = (e) => {
        e.preventDefault();

        let files = e.target.files, f = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header: 1});
            console.log(dataParse);
            //setFileUploaded(dataParse);
        };
        reader.readAsBinaryString(f)
    }


    let onAddIncident = () => {
        props.addIncident();
    }

    let onIncidentChange = (e) => {
        let text = e.target.value;
        props.updateNewIncidentText(text);
    }
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Card>
                                <div className="card-header">
                                    <h3 className="card-title"></h3>
                                    <Button onClick={onAddIncident}>Добавить заявку</Button><br/>
                                    <input type="text" onChange={onIncidentChange} value={props.newFieldsText}/>

                                </div>
                                {/*<!-- /.card-header -->*/}
                                <div className="card-body">
                                    <Table responsive="true" autoWidth="false" id="example1"
                                           className="table table-bordered table-striped">
                                        <thead>
                                        {IncidentTableHeaderList}
                                        </thead>
                                        <tbody>
                                        {IncidentElements}
                                        </tbody>
                                        <tfoot>
                                        {IncidentTableHeaderList}
                                        </tfoot>
                                    </Table>
                                </div>
                                {/*<!-- /.card-body -->*/}
                            </Card>
                            {/*<!-- /.card -->*/}
                        </div>
                        {/* <!-- /.col -->*/}
                    </div>
                    {/*<!-- /.row -->*/}
                </div>
                {/*<!-- /.container-fluid -->*/}
            </section>
            {/*<!-- /.content -->*/}
        </div>
    );
}
export default Incidents;
