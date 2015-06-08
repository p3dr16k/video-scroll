README
======================================================

##Video-Scroll

 Simple javascript for on scroll start/stop video

##Usage

For first you must to include the jQuery library in your html page:

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>


Then you must to include the video-scroll library using:

<script type="text/javascript" src="/path/to/video-scroll/videocontroller.js"></script>

In your html page you must add the following call:


<script type="text/javascript">
$( window ).scroll(function(){
			
				controlsVideo();
			});
</script>

Now, you can embedd all the video you need using the HTML5 video tag.
All the video on the page must have assigned the class 'videoembed'.

Happy Coding!
