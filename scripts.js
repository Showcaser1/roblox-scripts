document.addEventListener("DOMContentLoaded", function() {
    const scriptButtonsContainer = document.getElementById('script-buttons');

    // Manually list your scripts here
    const scripts = [
        { name: "script1.txt", url: "https://github.com/Showcaser1/roblox-scripts/raw/main/Scripts/script1.txt" },
        { name: "script2.txt", url: "https://github.com/Showcaser1/roblox-scripts/raw/main/Scripts/script2.txt" },
        { name: "anotherScript.txt", url: "https://github.com/Showcaser1/roblox-scripts/raw/main/Scripts/anotherScript.txt" }
    ];

    // Loop through the scripts and create buttons
    scripts.forEach(script => {
        const button = document.createElement('button');
        button.textContent = script.name;
        button.onclick = () => downloadScript(script.url);
        scriptButtonsContainer.appendChild(button);
    });

    // Function to download the script
    function downloadScript(url) {
        window.location.href = url;
    }
});
