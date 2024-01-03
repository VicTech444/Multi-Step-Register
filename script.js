const containerStepOne = document.querySelector(`.step-one`);
const containerStepTwo = document.querySelector(`.step-two`);
const containerStepThree = document.querySelector(`.step-three`);
const numberStep = document.getElementById(`step-number`);

const ballOne = document.getElementById(`ballOne`);
const ballTwo = document.getElementById(`ballTwo`);
const ballThree = document.getElementById(`ballThree`);


const stepOne = document.getElementById(`button-stepOne`);
stepOne.addEventListener(`click`, secondStep);
const inputInformation = document.querySelectorAll(`.step-one .information input`);

function secondStep() {
    if (!inputInformation[1].validity.valueMissing) {

        if (!inputInformation[1].validity.typeMismatch) {

            if (!inputInformation[0].validity.valueMissing) {

                if (!inputInformation[0].validity.tooShort) {

                    containerStepOne.setAttribute(`hidden`, `true`);
                    containerStepTwo.removeAttribute(`hidden`, `false`);

                    numberStep.innerHTML = `2`;
                    ballOne.classList.replace(`selected`, `done-selected`);
                    ballTwo.classList.add(`selected`);

                  } else {
                    alert(`The min length to continue is ${inputInformation[0].minLength}`);
                }
            } else {
                alert(`We need a name value in order to continue`);
         }
    } else {
            alert(`I was expecting a valid email`);
    }
} else {
        alert(`We need a email value in order to continue`);
}
}

const topicChoices = document.querySelectorAll(`.topic-choices label`);
const radioButtons = document.querySelectorAll('input[type="checkbox"]');
let selectedValue = [];

radioButtons.forEach(element => {

    element.addEventListener(`change`, (e) => {

        if (e.target.checked == true) {

            e.target.labels[0].classList.toggle(`input-selected`);

            if (!selectedValue.includes(e.target.nextSibling.data)) {

                selectedValue.push(e.target.nextSibling.data);

            } else {
         }
    } else if (e.target.checked == false) {

            e.target.labels[0].classList.toggle(`input-selected`);

            if (selectedValue.includes(e.target.nextSibling.data)) {

                selectedValue.splice(selectedValue.indexOf(e.target.nextSibling.data), 1);
            }
        }
        selectedValue.sort();
    })
})

const stepTwo = document.getElementById(`button-stepTwo`);
stepTwo.addEventListener(`click`, stepThree);

const listTopics = document.querySelector(`.list-topics ul`);
const labelName = document.getElementById(`name-span`);
const labelEmail = document.getElementById(`email-span`);

const listDocumentFragment = document.createDocumentFragment();

function stepThree() {

    if (selectedValue.length < 1) {

        alert(`Minimum 1 topic in order to continue`);

    } else {

        containerStepOne.setAttribute(`hidden`, `true`);
        containerStepTwo.setAttribute(`hidden`, `true`);
        containerStepThree.removeAttribute(`hidden`, `false`);

        numberStep.innerHTML = `3`;
        ballOne.classList.replace(`selected`, `done-selected`);
        ballTwo.classList.replace(`selected`, `done-selected`);
        ballThree.classList.add(`selected`);

        const spanName = document.createElement(`SPAN`);
        spanName.textContent = inputInformation[0].value;
        labelName.appendChild(spanName);

        const spanEmail = document.createElement(`SPAN`);
        spanEmail.textContent = inputInformation[1].value;
        labelEmail.appendChild(spanEmail);

        for (let i = 0; i < selectedValue.length; i++) {

            const listItem = document.createElement(`LI`);
            const listTextItem = document.createTextNode(`${selectedValue[i]}`);
            listItem.classList.add(`c-E5E7EB`, `fw-500`);

            listItem.appendChild(listTextItem);
            listDocumentFragment.appendChild(listItem);
        }
        listTopics.appendChild(listDocumentFragment);
    }
}