async function setup() {
  if (import.meta.env.MODE === 'test') {
    const { configureServer } = await import('./mocks/server');
    const server = await configureServer(import.meta.env.MODE);
    if (!server) return;
    beforeAll(() => {
      // Establish requests interception layer before all tests.
      server.listen();
    });

    afterAll(() => {
      // Clean up after all tests are done, preventing this
      // interception layer from affecting irrelevant tests.
      server.close();
    });
  }
}

await setup();
