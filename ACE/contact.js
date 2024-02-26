const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail(){
    const bodyMessage = "Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${Phone.value}<br> Message: ${mess.value}";
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "Indexproject555@gmail.com",
        Password : "95D9C595E955D1FAEA23AE0541A142EE8AC2",
        To : 'Indexproject555@gmail.com',
        From : "Indexproject555@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});