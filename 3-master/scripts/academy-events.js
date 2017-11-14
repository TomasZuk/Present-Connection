/* jslint esversion: 6 */
let table = new Table(data, "result");
table.drawTable();


// =========================== Filter

// document.querySelectorAll("input[name='inlineRadioOptions']").forEach((radio)=>{
//
//     radio.addEventListener("change", (event) =>
//     {
//         let filter = new TableFilter("gender", event.target.value, "eq");
//         table.filter(filter);
//     });
// });

// ======================= Ajax row fadeOut

// $(document).ajaxComplete(function () {
//   $('tr').on("click", function() {
//   $(this).fadeOut();
//   });
//
//   $('tr')
//   .on("mouseover mouseout", function() {
//     $(this).toggleClass('addPlus');
//   });
// });
//

// ============================ add new rowData
$('.addRow').on('click', function() {
  let row = new NewRow("rowParameters", "rowNumber");
  row.setParamRows();
});

$('#addNewRow').on('click', function(event) {
  event.preventDefault();
  let row = new NewRow("rowParameters", "rowNumber");
  row.drawNewRow();
  row.clearModal();
  row.successMessage();
});
