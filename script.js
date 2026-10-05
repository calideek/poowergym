// MOBILE MENU

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


// SELECT MEMBERSHIP PLAN

function selectPlan(plan) {

    alert(
        "You selected the " +
        plan +
        " membership plan!"
    );

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// BMI CALCULATOR

function calculateBMI() {

    const weight =
        Number(document.getElementById("weight").value);

    const height =
        Number(document.getElementById("height").value);

    const result =
        document.getElementById("bmiResult");


    if (weight <= 0 || height <= 0) {

        result.innerHTML =
            "Please enter valid weight and height.";

        return;
    }


    const heightMeter = height / 100;

    const bmi =
        weight / (heightMeter * heightMeter);


    let status;


    if (bmi < 18.5) {

        status = "Underweight";

    } else if (bmi < 25) {

        status = "Normal Weight";

    } else if (bmi < 30) {

        status = "Overweight";

    } else {

        status = "Obese";
    }


    result.innerHTML =
        "Your BMI: " +
        bmi.toFixed(1) +
        "<br>" +
        status;
}


// CONTACT FORM

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.innerHTML =
                "Please fill in all fields.";

            return;
        }


        formMessage.innerHTML =
            "Message sent successfully! Thank you " +
            name +
            ".";


        document
            .getElementById("contactForm")
            .reset();
    });