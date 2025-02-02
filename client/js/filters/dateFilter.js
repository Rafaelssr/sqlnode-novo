myApp.filter("formatDate", function ($filter) {
  return function (input) {
    const date = new Date(input);
    return $filter("date")(date, "MMM d, y");
  };
});
