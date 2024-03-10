document.addEventListener("DOMContentLoaded", function() {
    let typingTimer;
    const typingInterval = 5000; // Time in milliseconds (2 seconds)
    const deleteInterval = 10000; // Time in milliseconds (5 seconds)

    const contentTextarea = document.getElementById('content');

    // Event listener for keyup event
    contentTextarea.addEventListener('keyup', function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(clearContent, typingInterval);
    });

    // Function to clear content
    function clearContent() {
        contentTextarea.value = ''; // Clear the text area content
    }

    // Set timer to clear content after 5 seconds of inactivity
    setTimeout(clearContent, deleteInterval);
});
