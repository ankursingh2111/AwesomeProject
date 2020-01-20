import xlsx from "node-xlsx";

export const parseExcel = (file) =>  {
    const obj = xlsx.parse(__dirname + '/Book.xlsx');
    console.log(obj[0].data)
    const objectMap ={};
    obj[0].data.map((ele, index)=>{
        objectMap["rowIndex"+ index] = ele[0];
    })
    return objectMap;
  };

