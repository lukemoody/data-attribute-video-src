/**
 * Get video src from data-attribute
 * Control when video src is loaded depending on screen size
 */
window.onload = function () {

  // Don't get video src on mobile devices, images to be loaded instead
  if (window.matchMedia("(max-width: 767px)").matches) {
    // console.log('Do not download video src');
    return null;
  }
  // Get video src for screen sizes above 767px
  else {

    // video-data-src attribute to be applied to video source
    let videos = document.querySelectorAll('.js-video');
    const dataSrc = 'data-video-src';

    // Loop over all video tags and generate src attribute with correct data
    for (let i = 0; i < videos.length; i++) {
      videos[i].querySelector('source').setAttribute('src', videos[i].querySelector('source').getAttribute(dataSrc));

      // Reload the video element after changing the source
      videos[i].load();
    }

  }

};
