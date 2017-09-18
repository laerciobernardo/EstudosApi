const app = require('./app')
const user = require('./modules/User/router')

console.log('UsersRouter',user);
app.use('/users',user);

app.listen(3000,() => console.log("Servidor rodando na porta 3000"));