function fest1(){
   
        document.getElementById('main-menu').style.display='none';
       // document.getElementById('loaderAnime').style.display='none';
        document.getElementById('mainHeading').style.display='none';
        document.getElementById('smallheading').style.display='block';
        document.getElementById('alma').style.display='block';
        document.getElementById('wiss').style.display='none';
        document.getElementById('ashwamedha').style.display='none';
        document.getElementById('allcomments').style.display='none';

       
        
   
    document.getElementById('loaderAnime').style.display='block';
  }
  function fest2(){
   
    document.getElementById('main-menu').style.display='none';
   // document.getElementById('loaderAnime').style.display='none';
    document.getElementById('mainHeading').style.display='none';
    document.getElementById('smallheading').style.display='block';
    document.getElementById('alma').style.display='none';
    document.getElementById('wiss').style.display='block';
    document.getElementById('aahwamedha').style.display='none';
    document.getElementById('allcomments').style.display='none';

   
    

document.getElementById('loaderAnime').style.display='block';
}
function fest3(){
   
  document.getElementById('main-menu').style.display='none';
 // document.getElementById('loaderAnime').style.display='none';
  document.getElementById('mainHeading').style.display='none';
  document.getElementById('smallheading').style.display='block';
  document.getElementById('alma').style.display='none';
  document.getElementById('wiss').style.display='none';
  document.getElementById('ashwamedha').style.display='block';
  document.getElementById('allcomments').style.display='none';

 
  

document.getElementById('loaderAnime').style.display='block';
}

function goHome(){
  document.getElementById('allcomments').style.display='none';
      document.getElementById('main-menu').style.display='block';
      document.getElementById('loaderAnime').style.display='none';
      document.getElementById('mainHeading').style.display='block';
      document.getElementById('smallheading').style.display='none';
      document.getElementById('alma').style.display='none';
      document.getElementById('wiss').style.display='none';
      document.getElementById('ashwamedha').style.display='none';
     

      
      // document.getElementById('submainResults').innerHTML="Experience sharing Form";
      
 
  document.getElementById('loaderAnime').style.display='block';
}
function commentf(){
  document.getElementById('allcomments').style.display='block';
  document.getElementById('main-menu').style.display='none';

  document.getElementById('mainHeading').style.display='none';
  document.getElementById('smallheading').style.display='block';
  document.getElementById('alma').style.display='none';
  document.getElementById('wiss').style.display='none';
  document.getElementById('ashwamedha').style.display='none';
 

}



    // Initialize Firebase - be sure to use your own code, this connects to my database.
    // Initialize Firebase
    const config = {
    apiKey: "AIzaSyACsjJ6TS9o2_I0vF60jRuTHz8xixcZaqE",
    authDomain: "test-17b7b.firebaseapp.com",
    projectId: "test-17b7b",
    storageBucket: "test-17b7b.appspot.com",
    messagingSenderId: "830846858243",
    appId: "1:830846858243:web:5a7515cde310c366db0a36"
    };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
     firebase.initializeApp(config);
    //Rootref is the whole database.
    const rootRef = firebase.database().ref();
    //commentsRef is just the pageCountsNode
    const commentsRef = rootRef.child('comments');
    //Listen for click on Submit Comment button, and post comment.
    document.getElementById("btnSubmitComment").addEventListener("click", function () {
        //Replace line breaks in comment with br tags.
        var newcomment = document.getElementById('txComment').value.replace(/\n/g, "<br>");
        //Define a new, keyed post.
        var newPostRef = commentsRef.push();
        //Fill tne new keyed post with data
        newPostRef.set({
            name: document.getElementById('tbName').value.trim(),
            comment: newcomment.trim(),
            frompage: location.pathname,
            when: firebase.database.ServerValue.TIMESTAMP
        });
    });

    function showpastcomments() {
        var showat = document.getElementById('pastcomments');
        //Get comments whose from page equals this page's pathname.
        var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
        commentsRef.once('value', function (snapshot) {
            snapshot.forEach(function (itemSnapshot) {
                //Get the object for one snapshot
                var itemData = itemSnapshot.val();
                var comment = itemData.comment;
                var name = itemData.name;
                var when = new Date(itemData.when).toLocaleDateString("en-us");
                showat.innerHTML += "<li>" + comment + "<span> -- " + name + " (" + when +
                    ")</span></li>";
                   
            })
        })
        
       
    }
    //Called when page first opens and also after Submit button click to show all comments for this page.
    showpastcomments()
   