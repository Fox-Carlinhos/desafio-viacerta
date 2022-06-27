import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

createServer({
  models: {
    consult: Model,
  },

  seeds(server) {
    server.db.loadData({
      consults: [
        {
          id: 1,
          email: "joaosiqueira@gmail.com",
          name: "Joao Siqueira",
          cpf: "055.373.570-54",
        },
        {
          id: 2,
          email: "carlosalberto.cfjr@gmail.com",
          name: "Carlos Alberto Jr",
          cpf: "999.999.999-99",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/consults", () => {
      return this.schema.all("consult");
    });

    this.post("/consults", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("consult", data);
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
