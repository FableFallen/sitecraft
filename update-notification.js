// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('Service worker registered successfully');
      
      // Listen for updates
      registration.addEventListener('updatefound', function() {
        // Notify user that the site is being updated
        const notification = new Notification('Site update', {
          body: 'The site is being updated. Please wait...',
          icon: '/path/to/notification-icon.png',
          badge: '/path/to/notification-badge.png'
        });
        
        // Reload the page after the service worker has been updated
        registration.installing.addEventListener('statechange', function() {
          if (this.state === 'installed') {
            // Notify user that the site has been updated
            const notification = new Notification('Site updated', {
              body: 'The site has been updated. Click to reload.',
              icon: '/path/to/notification-icon.png',
              badge: '/path/to/notification-badge.png'
            });
            
            notification.onclick = function() {
              location.reload();
            };
          }
        });
      });
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  }
  