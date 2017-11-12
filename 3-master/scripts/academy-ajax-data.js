/* jslint esversion: 6 */
$.get('https://jsonplaceholder.typicode.com/posts', function(data) {
  let table = new Table(data, "result");
  table.drawTable();

  // $('tr').on("click", function() {
  //   $(this).fadeOut();
  // });
});
