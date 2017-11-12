/* jslint esversion: 6 */
let table = new Table(data, "result");
table.drawTable();

document.querySelectorAll("input[name='inlineRadioOptions']").forEach((radio)=>{

    radio.addEventListener("change", (event) =>
    {
        let filter = new TableFilter("gender", event.target.value, "eq");
        table.filter(filter);
    });
});

$('.addRow').on('click', function(){

});
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
