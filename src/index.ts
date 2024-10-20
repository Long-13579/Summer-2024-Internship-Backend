import fastify from 'fastify';
import mssql from 'fastify-mssql';

const server = fastify();

server.register(mssql, {
	server: '172.17.0.3',
	port: 1433,
	user: 'sa',
	password: 'dat20112011@',
	database: 'Northwind',
	options: {
		encrypt: true,
		trustServerCertificate: true,
	},
});

server.get('/ping', async (request, reply) => {
	try {
		await server.mssql.pool.connect();
		const res = await server.mssql.pool.query(
			'SELECT * FROM Suppliers',
		);
		return { users: res.recordset };
	} catch (err) {
		console.log(err);
		return err;
	}

	// return 'pong\n';
});

server.listen({ port: 8080 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
