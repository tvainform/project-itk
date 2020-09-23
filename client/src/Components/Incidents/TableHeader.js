import React from 'react';

const TableHeader = (props) => {
    return (
        <tr>
            <th>{props.h1}</th>
            <th>{props.h2}</th>
            <th>{props.h3}</th>
            <th>{props.h4}</th>
            <th>{props.h5}</th>
            <th>{props.h6}</th>
            <th>{props.h7}</th>
            <th>{props.h8}</th>
            <th>{props.h9}</th>
            <th>{props.h10}</th>
        </tr>
    )
}
export default TableHeader;
