function hideWhenClicked(element) {
  let $target = $(element.target)
  $target.hide()
}

$('#hide_this').click(hideWhenClicked)
