<!DOCTYPE html>
<html>
<head>
    <title>Technical Skills</title>
    <style>
        body { font-family: sans-serif; }
        .skill-list { list-style-type: decimal; }
        .tool-list { list-style-type: circle; }
    </style>
</head>
<body>

    <h2>Technical Skills Inventory</h2>
    
    <ol class="skill-list">
        <li>Frontend Development
            <ul class="tool-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Styling & Frameworks
            <ul class="tool-list">
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
            </ul>
        </li>
        <li>Tools & Platforms
            <ul class="tool-list">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
            </ul>
        </li>
    </ol>

    <script>
        // JS Interaction: Alert and Prompt
        alert("Welcome to my technical skills list!");
        let userName = prompt("Please enter your name:", "Guest");
        if (userName) {
            console.log("Hello, " + userName);
        }
    </script>
</body>
</html>

