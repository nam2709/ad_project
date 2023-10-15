const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the default port 3000, or a port specified in the environment variable

app.use(express.static(__dirname)); // Serve files from the current directory (your project directory)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
