document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log("Form submitted:", data);
    });
});