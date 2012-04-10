document.addEventListener( "DOMContentLoaded", function( e ){

  Butter({
    config: "../../butter-config/default.conf",
    ready: function( butter ){
      var media = butter.media[ 0 ];

      function start(){
        var track = media.addTrack( "Track1" );
        media.addTrack( "Track" + Math.random() );
        media.addTrack( "Track" + Math.random() );

        var event = track.addTrackEvent({
          type: "text",
          popcornOptions: {
            start: 0,
            end: 3,
            text: "test",
            target: "tour_area"
          }
        });

        butter.tracks[ 2 ].addTrackEvent({ 
          type: "footnote",
          popcornOptions: {
            start: 1,
            end: 2,
            text: "This is where you can put footnotes",
            target: "chapter_title"
          }
        });
      }

      media.onReady( start );
    } 
  }); //Butter
}, false );
