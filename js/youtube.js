 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
     /* div의 id 속성의 player */
    new YT.Player('player', {
     height: '360',
     width: '640',
     videoId: 'An6LvWQuj_8',
     playerVars :{
        /* 자동재생, 반복재생 설정 */ 
        autoplay: true,
        loop:true,
        playlist: 'An6LvWQuj_8'
     },
     events: {
         /* 영상 준비되면 트리거 되는 함수 */
        onReady: function(event){
            /* 음소거 */
            event.target.mute()
        },

     }

     
   });
 }
