module.exports = {
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
    order: [],
    after: ["parser", "router"],
  },
  settings: {
    timer: {
      enabled: true,
    },
    cors: {
      enabled: true,
      origin: [
        "http://localhost:3000",
        "https://pin-my-map-backend.herokuapp.com",
        "pinmymap.netlify.app",
      ],
    },
  },
};
