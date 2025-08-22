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
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        "audience",
        { name: "my_custom_field", type: "boolean", label: "My custom field" },
      ],
      contentTypes: ["api::page.page"],
      defaultContentTypes: "api::page.page",
      contentTypesNameFields: {
        "api::page.page": ["title"],
      },
      pathDefaultFields: {
        "api::page.page": ["slug"],
      },
      allowedLevels: 2,
    },
  },
  "strapi-import-export": {
    enabled: true,
    config: {
      contentTypes: ["api::page.page"],
    },
  },
});
