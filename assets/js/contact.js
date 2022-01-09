function post_contact() {


    nm = document.getElementById('name').value;
    em = document.getElementById('email').value;
    msg = document.getElementById('message').value;
    db.ref('contacts').push({
        name: nm,
        email: em,
        message: msg,
    });
    // make_contact(nm, em, msg);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    alert('Done');
}

function make_contact(name, email, message) {
    div_1 = document.createElement('div');
    div_1.className = 'comment clearfix';

    div_2 = document.createElement('div');
    div_2.className = 'comment-content clearfix';

    div_3 = document.createElement('div');
    div_3.className = 'comment-author font-alt';

    nm = document.createElement('a');
    nm.appendChild(document.createTextNode(name));

    em = document.createElement('a');
    em.appendChild(document.createTextNode(email));
    br1 = document.createElement('br');
    div_3.appendChild(nm);
    div_3.appendChild(br1);
    div_3.appendChild(em);

    div_4 = document.createElement('div');
    div_4.className = 'comment-body';

    para = document.createElement('p');
    para.appendChild(document.createTextNode(message));

    div_4.appendChild(para);
    div_2.appendChild(div_3);
    div_2.appendChild(div_4);

    div_1.appendChild(div_2);

    document.getElementsByClassName("comments")[0].appendChild(div_1);
}

function fetchFromCon() {
    db.ref('contacts').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var name = childData['name'];
            var email = childData['email'];
            var message = childData['message'];

            make_contact(name, email, message);
        });
    });
}