export default () => ({
  seo: {
    enabled: true,
  },
  documentation: {
    enabled: true,
    config: {
      info: {
        title: "My API",
        description: "API documentation with Swagger / OpenAPI 3",
        version: "1.0.0",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Local server" },
      ],
      externalDocs: {
        description: "Find more info here",
        url: "https://docs.myapi.com",
      },
    },
  },
});
