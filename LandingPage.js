<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Landing Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 50px;
        }
        .button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem vindo a minha Landing Page</h1>
        <p>Click the button below to see a message:</p>
        <button class="button" onclick="showMessage()">Click Me</button>
        <p id="message"></p>
    </div>
    <script>
        function showMessage() {
            document.getElementById('message').innerText = 'Hello, this is your message!';
        }
    </script>
</body>
</html>