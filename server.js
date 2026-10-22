import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello from server!!');
});

app.post('/api/data', (req, res) => {

  const {name, course} = req.body;
  
  console.log(name);
  console.log(course);

  res.status(200).json({ message: 'Data received successfully' });

});
app.listen(3000, () => {
  console.log('Server is running');
})