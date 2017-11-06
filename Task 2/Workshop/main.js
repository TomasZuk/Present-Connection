/* jshint: es 6 */
/* jslint esversion: 6 */
class Table {
    constructor(data, tableName) {
        this.data = data;
        this.tableHtml = tableName;
        this.printHeaderNames();
        this.printRows();
    }

    printHeaderNames() {
        let header = [];
        let i = 0;
        let maxIndex = 0;
        let ind = 0;

        return this.data.map((keys) => {
          let keynames = Object.keys(keys);
            // Object.keys(keys);
          // });
          while (keynames[i]) {
            // console.log(keynames[i]);
            header = [...header , keynames[i]];
            // header.concat(keynames[i]);
            ind = i;
            i++;
          }
          header.forEach(function(head){
            let maxIndex = head;
          });
          console.log(ind);
          // let tableData = document.createElement('th');
          // return (document.querySelector('tr:last-child').appendChild(tableData).innerHTML = value);

          // console.log(keys);
          // for (let element of keyNames) {
          //   console.log(element);
          //
          // }

        // console.log(typeof(uniqueItems));
        // let uniqueItems = Array.from(header);



            // return header.map((header) => {
            //     let tableHead = document.createElement('tr');
            //     this.tableHtml.appendChild(tableHead);
            //
            //     let dataKey = Object.keys(header);
            //
            //     return dataKey.map((value) => {
            //         let tableData = document.createElement('th');
            //         return (document.querySelector('tr:last-child').appendChild(tableData).innerHTML = value);
            //     });
            // });
        });
    }

    printRows() {
        return this.data.map((item) => {
            let tableRow = document.createElement('tr');
            this.tableHtml.appendChild(tableRow);

            let dataValue = Object.values(item);

            return dataValue.map((value) => {
                let tableData = document.createElement('td');
                return (document.querySelector('tr:last-child').appendChild(tableData).innerHTML = value);
            });
        });
    }

}


let table = new Table(data, document.querySelector('#result'));
