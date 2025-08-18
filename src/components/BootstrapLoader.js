"use client";
import { useEffect } from "react";

export default function BootstrapLoader() {
    useEffect(() => {
      // Importa o Bootstrap apenas no cliente
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then(() => console.log("Bootstrap carregado"))
        .catch((err) => console.error("Erro ao carregar Bootstrap:", err));
    }, []);
  
    return null;
  }