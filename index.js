require('dotenv').config()

const express = require('express')
const app = express()
const cors = require ('cors')
const Person = require('./models/person')

var morgan = require ('morgan')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan(function (tokens, req, res) {
	return [
		tokens.method(req, res),
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.res(req, res, 'content-length'), '-',
		tokens['response-time'](req, res), 'ms'
	].join(' ')
}))

app.get('/info', (req, res) => {
	res.send(`
		<p> Phonebook has info for ${persons.length} people </p>
		<p> ${Date()} </p>
		`)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(x => {
		res.json(x)
	})
})

app.get('/api/persons/:id', (req, res) => {
		Person.findById(req.params.id).then(person => {
			res.json(person)
		})
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
	
	if (persons.map(person => person.name).includes(body.name)){
		res.status(400).json({ "error" : "name must be unique"})
	} else if (body.name === "" || body.number === ""){
		res.status(400).json({ "error" : "either name or number empty"})
	}
	else {
		const person = new Person ({
			name: body.name,
			number: body.number,
		})
		
		person.save().then(x => {
			res.json(x)
		})
	}
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})