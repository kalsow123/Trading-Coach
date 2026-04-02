self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow(self.registration.scope));
});

self.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification('Trading Coach', {
      body: e.data.body || 'Vyplň Pre-Trade Checklist!',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📋</text></svg>',
      tag: 'trading-coach-reminder',
      requireInteraction: true
    });
  }
});
