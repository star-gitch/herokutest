const express = require('express')
const app = express()
const port = 3000

const {sendEmail} = require('./send-email.js');

app.get('/send-email', async (req, res) => {

  let msubject;
  let mbody; 
  if(req && req.query){
    msubject = req.query.msubject;
    mbody = req.query.mbody; 
  }

  if(msubject == undefined){
    msubject =='no subject';
  }

  if(mbody == undefined){
    mbody =='no body';
  }

  const mfrom = 'info1@sonamandhira.com';
  const mto = 'p.star.p@yandex.com';
  const mtoTempEmail= 'memod83494@zherben.com';

  let mres = await sendEmail(mfrom, mto, msubject, mbody);

  let mres2 = await sendEmail(mfrom, mtoTempEmail, msubject, mbody);

  res.send(`
  <pre>
  Result:
  ${mres}
  --------------
  Result temp email:
  ${mres2}
  <a href="/">back</a>
  </pre>`);

});

app.post('/send-email', (req, res) => {
  res.send('post not supported');

});

app.get('/', (req, res) => {
  const mhome = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>home</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  </head>
  <body>
  <form action="/send-email" method="get">
    <div class="form-group">
      <label for="msubject">Subject:</label> <input id="msubject" class="form-control" type="text" name="msubject" /> 
    </div>
    <div class="form-group">
      <label for="mbody">Body:</label> <textarea id="mbody" class="form-control" name="mbody" ></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Send Email</button>
    </div>
  </form>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
  `;
  res.send(mhome)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
