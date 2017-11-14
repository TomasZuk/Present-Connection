/* jslint esversion: 6 */
class NewRow {

  constructor(rowParamsId, rowNumber){
    this.rowParam = $('#' + rowParamsId);
    this.rowNumber = $("input." + rowNumber);
    this.headers = this.getHeaders();
  }

  getHeaders(){
    let headers = [];

    $('th').each(function() {
        headers.push($(this).text());
    });
    return headers;
  }

  setParamRows() {
    this.headers.forEach(header => {
      let inputRow = $("<input/>");
      inputRow.addClass("form-control rowData");
      inputRow.attr({
        name:header,
        placeholder:header
      });
      this.rowParam.append(inputRow);
    });
  }

  getInsertionRow() {
    let rowNumber = this.rowNumber.val();
    let insertionRow = $('#result tr').get(rowNumber - 1 );
    return insertionRow;
  }

  getParamData(){
    let rowData = {};

    $("input.rowData").each(function() {
      let headername = $(this).attr('name');
      let value = $(this).val();
      rowData[headername] = value;
    });
    return rowData;
  }

  drawNewRow() {
    let rowData = this.getParamData();
    let insertionRow = this.getInsertionRow();

    let tr = $('<tr/>');
    this.headers.forEach(key => {
      let cell = $('<td/>');
      cell.text(rowData[key] || "");
      tr.append(cell);
    });

    tr.insertAfter(insertionRow);
  }

  clearModal() {
      $('#newRowModal').fadeOut(0);
      this.rowParam.html('');
      this.rowNumber.val('');
  }

  successMessage() {
    $('#messages').html('');
    let message = "Nauja eilutė sėkmingai pridėta!";
    let messageDiv = $('<div>' + message + '</div>');
    $('#messages').append(messageDiv);
    messageDiv.addClass('alert-success');
  }

}
