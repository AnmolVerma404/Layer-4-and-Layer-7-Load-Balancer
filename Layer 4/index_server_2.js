const app = require('express')();
const port = process.env.PORT || 5555;

app.get('/*', (req, res) => {
	res.send(`Served by ${port}`);
});

app.listen(port, () => {
	console.log(`Listining on http://localhost:${port}`);
});
