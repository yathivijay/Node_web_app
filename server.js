const exp = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3333;

var app = exp();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

//middleware
app.use(exp.static(__dirname + '/public'));

//register handlers
app.get('/',(req, res)=>{
    //res.send('hello Yathi');
    res.render('welcome.hbs',{
    pageTitle:'welcome page',
    crrYear:new Date().getFullYear(),
    welcomes:'Welcome u cr'
    });
})

app.get('/about',(req, res)=>{
res.render('about.hbs',{
pageTitle:'About page',
crrYear:new Date().getFullYear()

});
})
app.listen(port, ()=>
{
  console.log(`started......${port}`)
});
