//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//2. Add overlay
$('body').append($overlay);
//2.1 An image to overlay
$overlay.append($image);
//2.2 A caption
$overlay.append($caption);

//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  //1.2 Update overlay with the image linked in the link
  $image.attr('src', imageLocation);
  //1.3 Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('title');
  $caption.text(captionText);

  //1.1 Show the overlay.
  $overlay.show();
});

//3. When overlay is clicked
$overlay.click(function() {
    //3.1 Hide the overlay
    $overlay.hide();
});
