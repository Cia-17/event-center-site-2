const buttons = document.querySelectorAll(".faq-btn");


buttons.forEach(button => {
    button.addEventListener("click", function() {

        const answer = this.parentNode.nextElementSibling;
        answer.classList.toggle("show-answer");

    });
});

