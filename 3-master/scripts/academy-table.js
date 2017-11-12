/* jslint esversion: 6 */
class Table {
    constructor (data, tableId) {
        this.data = data;
        this.table = $('#' + tableId);
        this.headers = this.getHeaders();
        this.filters = [];
    }

    drawTable(updatedData) {
        this.resetTable();
        this.drawHeaders();
        this.drawRows(updatedData || this.data);
     }

    getHeaders()
    {
       let headers = [];
       this.data.forEach(dataItem =>
       {
           let keys = Object.keys(dataItem);
           keys.forEach(key =>
           {
                if(headers.indexOf(key) === -1)
                {
                    headers.push(key);
                }
           });
       });
       return  headers;
    }

    resetTable()
    {
        this.table.html = "";
    }

    drawHeaders() {
        let row = $('<tr/>');
        this.headers.forEach(element =>
        {
            let cell = $('<th/>');
            cell.text(element);
            row.append(cell);
        });

        this.table.append(row);
    }

    drawRow(dataItem) {
        let tr = $('<tr/>');

        this.headers.forEach(key =>
        {
            let cell = $('<td/>');
            cell.text(dataItem[key] || "");
            tr.append(cell);
        });

        this.table.append(tr);
    }

    drawRows(data)
    {
        data.forEach(dataItem =>
        {
            this.drawRow(dataItem);
        });
    }

    filter(filter)
    {
        this.filters[filter.name] = filter;

        let filteredData = this.data.filter((dataItem)=>{
            return filter.operatorMethod(dataItem[filter.name]);
        });

        this.drawTable(filteredData);
    }
}
