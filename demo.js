
function refreshData() {
    const firstname = document.getElementById("first-name").value; //firstname
    const lastname = document.getElementById("last-name").value; //lastname
    const birthday = document.getElementById("birthdate").value; //birthday
    const lieunaissance = document.getElementById("birth-place").value; //place of born
    const address = document.getElementById("address").value; //address
    const town = document.getElementById("city").value; //city
    const zipcode = document.getElementById("post-code").value; //zipcode
 
    var data = {
        f: firstname,
        l: lastname,
        b: birthday,
        p: lieunaissance,
        a: address,
        c: town,
        z: zipcode,
        r: 'reason'
    }

    var reasons = ['travail', 'achats', 'enfants', 'sport_animaux', 'sante', 'famille', 'handicap', 'convocation', 'missions']

    reasons.forEach(reason => {
        data['r'] = reason;
        console.log('Reason:' + reason);
        document.querySelector("#generation-link-" + reason + " > a").href = window.location.origin + "/generate.html#" + serialize(data);
        document.querySelector("#generation-link-" + reason + " > a").innerText = reason;
    });

}

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}
