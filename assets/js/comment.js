const firebaseConfig = {
    apiKey: "AIzaSyAiGA4uwpKwrRIUngiT_SNevsAwb2vbbps",
    authDomain: "sampogoportfoliom.firebaseapp.com",
    databaseURL: "https://sampogoportfoliom-default-rtdb.firebaseio.com",
    projectId: "sampogoportfoliom",
    storageBucket: "sampogoportfoliom.appspot.com",
    messagingSenderId: "333516747950",
    appId: "1:333516747950:web:03e691b3f4c060a902e93f",
    measurementId: "G-5SZEY7JPY9"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();



function show() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;





    alert("DONE");
}

function post_comment() {


    nm = document.getElementById('name').value;
    cm = document.getElementById('comment').value;
    db.ref('comments').push({
        name: nm,
        comment: cm,
    });
    make_comment(nm, cm);
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}


function make_comment(name, comment) {

    div_1 = document.createElement('div');
    div_1.className = 'comment clearfix';

    div_2 = document.createElement('div');
    div_2.className = 'comment-content clearfix';

    div_3 = document.createElement('div');
    div_3.className = 'comment-author font-alt';

    nm = document.createElement('a');
    nm.appendChild(document.createTextNode(name));

    div_3.appendChild(nm);

    div_4 = document.createElement('div');
    div_4.className = 'comment-body';

    para = document.createElement('p');
    para.appendChild(document.createTextNode(comment));

    div_4.appendChild(para);
    div_2.appendChild(div_3);
    div_2.appendChild(div_4);

    div_1.appendChild(div_2);

    document.getElementsByClassName("comments")[0].appendChild(div_1);

}

function fetchFromDb() {
    db.ref('comments').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var name = childData['name'];

            var comment = childData['comment'];

            make_comment(name, comment);
        });
    });
}