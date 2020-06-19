import React from 'react';
import ReactExport from "react-export-excel";

import styled from 'styled-components';

const Table = styled.table`
width: 100%;
height: 100%;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const data = [{
    "name": "The first",
    "value": 354
}, {
    "name": "The second",
    "value": 245
}, {
    "name": "The third",
    "value": 187
}, {
    "name": "The fourth",
    "value": 123
}, {
    "name": "The fifth",
    "value": 87
}, {
    "name": "The sixth",
    "value": 45
}, {
    "name": "The seventh",
    "value": 23
}];
class RegionTable extends React.Component {

    // 순위 | 지역명 | 조회수
    // 어차피 orderBy 해서 올거임
    // [0] 이 1위
       

    // render(){
    //     return (
    //         <>
    //             <Table>
    //                 <THead>
    //                     <Tr>
    //                         <Th>순위</Th>
    //                         <Th>지역명</Th>
    //                         <Th>조회수</Th>
    //                     </Tr>
    //                 </THead>
    //                 {this.data.map( (v, index) => (
    //                     <Tr>
    //                         <Th>{index+1}</Th>
    //                         <Td>{v.name}</Td>
    //                         <Td>{v.value}</Td>
    //                     </Tr>
    //                 ))}
    //             </Table>
    //         </>
    //     );
    // }

    render() {
        return (
            <ExcelFile element={<button>엑셀로 다운로드</button>}>
                <ExcelSheet data={data} name="Region">
                    <ExcelColumn label="Region"  value="name"/>
                    <ExcelColumn label="Value"  value="value"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default RegionTable;