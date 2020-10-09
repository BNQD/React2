const express = require('express')
const app = express()

app.use(express.json())

let persons = [

    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
	res.send(`
		<p> Phonebook has info for ${persons.length} people </p>
		<p> ${Date()} </p>
		`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
		const id = Number(req.params.id)
		const person = persons.filter(person => person.id === id)
		res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	console.log(persons)
	persons = persons.filter(person => person.id !== id)
	res.status(204).end()
})

app.post('/api/persons', (req, res) => {
	const body = req.body
	console.log(body)
	
	const generateID = () => {
		const max_id = persons.length > 0 ? Math.max(...persons.map(x => x.id)) : 0
		return max_id + 1
	}
	
	if (persons.map(person => person.name).includes(body.name)){
		res.json({ "error" : "name must be unique"})
	} else if (body.name === "" || body.number === ""){
		res.json({ "error" : "either name or number empty"})
	}
	else {
		const person = {
		name: body.name,
		number: body.number,
		id: generateID(),
		}
		
		persons = persons.concat(person)
		
		res.json(person)
	}
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})