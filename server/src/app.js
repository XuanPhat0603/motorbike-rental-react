import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3000;

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Home',
        message: 'Hello World',
    });
});

app.listen(port, () => {
    console.log(`Server is running is port ${port}`)
});