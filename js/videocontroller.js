/*=======================================================================
*FILE:         videocontroller.js
*
*DESCRIPTION:  Simple javascript for on scroll start/stop video
*REQUIREMENTS: jQuery 1.5.1 or higher
*AUTHOR:	   Patrick Facco, 
*VERSION:  	   1.0
*CREATED:      15/11/2014 10:33:46 CEST
*LICENSE:      GNU/GPLv3
*========================================================================
* 
*/


var CLASSNAME = "videoembed";


/**
 * Check in an element is in view
 * @param elem the element to check
 * @return true if element is in the view, false otherwise
 */
function inView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/**
 * If video is visualized play it, pause otherwise
 */
function controlsVideo()
{
    var videos = document.getElementsByClassName(CLASSNAME);
    
    for(var i = 0; i < videos.length; i++)
    {
        if(inView('#' + videos[i].getAttribute('id')))
        {
            videos[i].play();
        }
        else
        {
            videos[i].pause();
        }
    }
}
