/*function subscribeUser(event){
    event.preventDefault();

    const email = document.getElementById("subscriberEmail").value;
    const isSubscribed = document.getElementById("checkbox").checked;

    if(!email || !email.includes("@")){
        Toastify({
            text: "Please enter a valid email address.",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
        }).showToast();
        return;
    }
    const subscriber = {
        email: email,
        subscribed: isSubscribed,

    }
localStorage.setItem("subscriber", JSON.stringify(subscriber));
Toastify({
    text: "Subscription successfull! You are now subscribed",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#28a745",
}).showToast();

document.getElementById("subscriberEmail").value = "";
document.getElementById("checkbox").checked = true;
}

document.getElementById('subscribeForm').addEventListener('submit', subscribeUser );


function checkSubscriptionStatus(){
    const subscriber = JSON.parse(localStorage.getItem("subscriber"));

    if(subscriber && subscriber.subscribed){
        document.getElementById("subscriberEmail").value = subscriber.email;
        document.getElementById("checkbox").checked = subscriber.subscribed;
        Toastify({
            text: "You are already subscribed with email: " + subscriber.email,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#17a2b8",
        }).showToast();
    }
}

document.addEventListener("DOMContentLoaded", checkSubscriptionStatus);*/