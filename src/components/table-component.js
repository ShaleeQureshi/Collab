import React from "react";
import { Table } from "react-bootstrap";
import firebase from "firebase";

class TableComponent extends React.Component {
  getData() {
    firebase
      .database()
      .ref(this.props.node)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (var i = 0; i < Object.keys(data).length; i++) {
          this.addRow(
            Object.values(data)[i].creator,
            Object.values(data)[i].topic,
            Object.values(data)[i].link
          );
        }
      });
  }
  addRow(creator, topic, link) {
    const table = document.getElementsByTagName("table")[0];

    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const linkElm = document.createElement("a");
    const linkTest = document.createTextNode(link);

    linkElm.setAttribute("href", link);
    linkElm.setAttribute("target", "_blank");
    linkElm.appendChild(linkTest);
    cell3.appendChild(linkElm);

    cell1.innerHTML = creator;
    cell2.innerHTML = topic;
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Table striped bordered hover id="tableData" className="mt-5">
        <thead>
          <tr>
            <th>Creator</th>
            <th>Topic</th>
            <th>Link</th>
          </tr>
        </thead>
      </Table>
    );
  }
}
export default TableComponent;
