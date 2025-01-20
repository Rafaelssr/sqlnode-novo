const dotenv = require('dotenv');
dotenv.config();

const app = require('../app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`o servidor está escutando a porta ${PORT}!`);
  console.log("Acessar http://localhost:3001");
});

