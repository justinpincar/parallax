$(function() {
  $('.parallax-x img, .parallax-y img').each(function(i, el) {
    var layer = $(el).data('layer');
    $(el).css('z-index', layer);

    $(el).data('startLeft', $(el).position().left);
    $(el).data('startTop', $(el).position().top);
  });

  var currentX = '';
  var currentY = '';
  var movementConstant = .016;
  $(document).mousemove(function(e) {
    var width = $(window).width();
    var height = $(window).height();

    var xPx = e.pageX - (width / 2);
    var yPx = e.pageY - (height / 2);

    $('.parallax-x img').each(function(i, el) {
      var speed = $(el).data('layer') * movementConstant;
      var movementX = xPx * speed;
      var newX = $(el).data('startLeft') - movementX;
      $(el).css('left', newX + 'px');
    });

    $('.parallax-y img').each(function(i, el) {
      var speed = $(el).data('layer') * movementConstant;
      var movementY = yPx * speed;
      var newY = $(el).data('startTop') - movementY;
      $(el).css('top', newY + 'px');
    });
  });
});

