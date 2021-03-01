$("[data-tabs-item]").on("click", function () {
  let $this = $(this);
  let currentId = $this.index();
  $this
    .closest("[data-tabs]")
    .find("[data-tabs-content]")
    .removeClass("current")
    .eq(currentId)
    .addClass("current")
    .closest("[data-tabs]")
    .find("[data-tabs-item]")
    .removeClass("current")
    .eq(currentId)
    .addClass("current");
});

$("[data-tabs-prev]").on("click", function () {
  let $this = $(this);
  let currentId = $this.closest("[data-tabs-content]").index() || 1;
  $this
    .closest("[data-tabs]")
    .find("[data-tabs-content]")
    .removeClass("current")
    .eq(currentId - 1)
    .addClass("current")
    .closest("[data-tabs]")
    .find("[data-tabs-item]")
    .removeClass("current")
    .eq(currentId - 1)
    .addClass("current");
});

$("[data-tabs-next]").on("click", function () {
  let $this = $(this);
  let currentId = $this.closest("[data-tabs-content]").index();
  if (
    currentId <
    $this.closest("[data-tabs]").find("[data-tabs-content]").length - 1
  ) {
    $this
      .closest("[data-tabs]")
      .find("[data-tabs-content]")
      .removeClass("current")
      .eq(currentId + 1)
      .addClass("current")
      .closest("[data-tabs]")
      .find("[data-tabs-item]")
      .removeClass("current")
      .eq(currentId + 1)
      .addClass("current");
  }
});
