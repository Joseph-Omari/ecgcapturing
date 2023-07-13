import React from "react";
import { FiDownload } from 'react-icons/fa';

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Field", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch meters");
    }
    return res.json();  
  } catch (error) {
    console.log("Error loading meters: ", error);
  }
};

export default async function viewdata() {
  const {field} = await getData();

//   console.log(field);

//   const XLSX = require('xlsx')

// const convertJsonToExcel = () => {

//   const workSheet = XLSX.utils.json_to_sheet(field);
//   const workBook = XLSX.utils.book_new();

//   XLSX.utils.book_append_sheet(workBook, workSheet, "OPERATION-11-REPORT")
//   // Generate buffer
//   XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

//   // Binary string
//   XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

//   XLSX.writeFile(workBook, "studentsData.xlsx")
// }
// // convertJsonToExcel()


  return (
    <div>
      <div className="md:hidden h-[70vh] flex justify-center items-center text-red-800 text-3xl font-bold text-center">
        <h1>Viewed by Management Team Only</h1>
      </div>
  
    <div className="hidden md:block">
      <div className="p-4 mx-auto  justify-center text-center font-bold text-red-700 text-2xl">
        <h1>Report Recieved from Field</h1>
        {/* <button onClick={convertJsonToExcel()} className="bg-black">{FiDownload}</button> */}
      </div>
      <div className="bg-slate-500 p-4 space-y-2 gap-4 text-left">
        
          <table className="p-2 w-full space-y-4 text-base border-2">
            <tr className="border">
              <th>Group Number</th>
              <th>Customer Name</th>
              <th>Customer Contact</th>
              <th>Tarrif Class</th>
              <th>Activity</th>
              <th>Meter Number</th>
              <th>Readings</th>
              <th>Anomalys</th>
              <th>Flat Rate</th>
              <th>Digital Address</th>
              <th>Id Type</th>
              <th>Id Number</th>
              <th>Remarks</th>
            </tr>
            {/* <tr className="p-4 gap-4 bg-slate-300 mb-4 rounded-md">
            {field.map((meters)=>(
                <td>{meters.groupNumber}</td>
                <td>{meters.cusName}</td>
                <td>{meters.cusContact}</td>
                <td>{meters.tarrifClass}</td>
                <td>{meters.activity}</td>
                <td>{meters.meterNumber}</td>
                <td>{meters.readings}</td>
                <td>{meters.anomaly}</td>
                <td>{meters.flatRate}</td>
                <td>{meters.digitalAddress}</td>
                <td>{meters.idType}</td>
                <td>{meters.idNumber}</td>
                <td>{meters.remarks}</td>            
              ))}
            </tr> */}
        </table>
        
      </div>
    </div>
  </div>
  );
}
