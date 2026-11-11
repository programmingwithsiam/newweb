module.exports = async function handler(request, response) {
	const { default: app } = await import('../server/src/index.js');
	return app(request, response);
};
