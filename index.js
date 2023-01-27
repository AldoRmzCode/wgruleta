const express = require('express');
const app = express(); 

//principal:
app.use(express.static('index.html'));

    
app.listen(process.env.PORT || 3001, () => {
      console.log("server started on port: ", process.env.PORT || 3001);
    });