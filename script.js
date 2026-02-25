(function() {
      // theme toggle (light/dark) - micro interaction
      const themeToggle = document.getElementById('themeToggle');
      const body = document.body;

      // check if user prefers dark, but default light.
      themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
          body.classList.remove('dark');
          themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span> <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i>';
        } else {
          body.classList.add('dark');
          themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span> <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i>';
        }
      });

      // Simulate intersection click (just console feedback)
      const intersections = document.querySelectorAll('.intersection');
      intersections.forEach((inter, index) => {
        inter.addEventListener('click', (e) => {
          e.stopPropagation();
          alert(`🚦 Intersection ${index+1} control panel: you can adjust timing or view details. (simulated)`);
        });
      });

      // map pan/zoom simulation (buttons show message)
      const mapControls = document.querySelectorAll('.map-controls button');
      mapControls.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const action = e.currentTarget.innerHTML.includes('plus') ? 'zoom in' : 
                         e.currentTarget.innerHTML.includes('minus') ? 'zoom out' : 'fullscreen';
          alert(`🗺️ Map ${action} (simulated interaction)`);
        });
      });

      // sidebar menu active state simulation
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
        item.addEventListener('click', function() {
          menuItems.forEach(m => m.classList.remove('active'));
          this.classList.add('active');
          // additional micro feedback
        });
      });

      // extra: chip hover etc already styled
    })();
