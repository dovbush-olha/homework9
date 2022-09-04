//task1
$(function () {
  //task1
  $("a[href^='https://']").attr("target", "_blank");

  //task2
  $("h2.head")
    .css("background-color", "green")
    .children(".inner")
    .css("fontSize", "35px");

  //task3
  let headers = $("h3");
  let div = $("h3 + div");
  [...div].forEach((v, i) => {
    headers[i].before(v);
  });

  //task4
  function countChecked() {
    let count = $("input:checked").length;
    if (count >= 3) {
      $("input[type=checkbox]").attr("disabled", "true");
    }
  }

  $("input[type=checkbox]").on("click", countChecked);
});
