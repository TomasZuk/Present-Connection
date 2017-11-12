/* jslint esversion: 6 */
$('.addRow').on("click", function(){
  let headers = [];

  $('th').each(function() {
      headers.push($(this).text());
  });

  headers.forEach(header => {
    let rowForm = $('#rowParameters');
    let inputRow = "<input class='form-control rowData' name='" + header + "' placeholder='" + header + "'>";
    rowForm.append(inputRow);
  });
});

$('#addNewRow').on("click", function(){
  let rowNumber = $("#newRowForm input.rowNumber").val();
  let rowData = {};

  let insertionRow = $('#result tr').get(rowNumber - 1 );

  $("#newRowForm input.rowData").each(function() {
    let headername = $(this).attr('name');
    let value = $(this).val();
    rowData[headername] = value;
  });

  let tr = $('<tr/>');
  let headers = [];

  $('th').each(function() {
      headers.push($(this).text());
  });

  headers.forEach(key => {
      let cell = $('<td/>');
      cell.text(rowData[key] || "");
      tr.append(cell);
  });

  tr.insertAfter(insertionRow);
});

$("#newRowModal").on("hidden.bs.modal", function(){
    $("#rowParameters").html("");
});
