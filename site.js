// Wait for entire page to load before adding event listeners.
window.onload = function () {

    // Select all collabsible sections using CSS selector
    var sections = document.querySelectorAll('div.collapsible');
   
    // Add click listener to each section
    for (var i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", function () {
            console.log(this); /* debug statement */
            toggleCollapsibleSection(this);
        });
    }

    function toggleCollapsibleSection(element) {
        // toggle css class to change icon.
        element.classList.toggle("collapsed");

        // find all the children of the element
        var children = element.children;

        // hide content. start loop at one to skip over h3
        for (var j = 1; j < children.length; j++) {
            if (children[j].style.display == 'none') {
                children[j].style.display = 'block';
            } else {
                children[j].style.display = 'none';
            }
        }
    }
}
