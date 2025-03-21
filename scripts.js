document.addEventListener("DOMContentLoaded", function() {
    const scriptButtonsContainer = document.getElementById('script-buttons');

    // GitHub API URL to list files in the "Scripts" folder
    const apiUrl = 'https://api.github.com/repos/Showcaser1/roblox-scripts/contents/Scripts';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Loop through the files and create buttons for .txt files
            data.forEach(item => {
                if (item.name.endsWith('.txt')) { // Only show .txt files
                    const button = document.createElement('button');
                    button.textContent = item.name;
                    button.onclick = () => downloadScript(item.download_url);
                    scriptButtonsContainer.appendChild(button);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching files from GitHub API:', error);
        });

    // Function to download the script
    function downloadScript(url) {
        window.location.href = url;
    }
});
