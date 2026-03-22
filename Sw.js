self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : { titulo: "Nuevo mensaje", cuerpo: "" };
  event.waitUntil(
    self.registration.showNotification(data.titulo, {
      body: data.cuerpo,
      vibrate: [200, 100, 200],
      tag: "mensaje-" + Date.now()
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});