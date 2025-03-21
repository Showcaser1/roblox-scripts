document.addEventListener("DOMContentLoaded", function() {
    const scriptButtonsContainer = document.getElementById('script-buttons');

    // GitHub API URL to list files in the "Scripts" folder
    const apiUrl = 'https://api.github.com/repos/Showcaser1/roblox-scripts/contents/Scripts';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Loop through the files and create buttons
            data.forEach(item => {
                if (item.name.endsWith('.txt')) {
                    const button = document.createElement('button');
                    button.textContent = item.name;
                    button.onclick = () => downloadScript(item.download_url);
                    scriptButtonsContainer.appendChild(button);
                }
            });
        });

    // Function to download script
    function downloadScript(url) {
        window.location.href = url;
    }
});
