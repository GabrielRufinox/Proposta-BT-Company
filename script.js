  // Mostrar nome dos arquivos selecionados com feedback visual aprimorado
        document.getElementById('logo-upload').addEventListener('change', function(e) {
            const files = e.target.files;
            const parent = this.closest('.file-upload');
            
            // Remove display anterior se existir
            const oldDisplay = parent.querySelector('.file-display');
            if (oldDisplay) oldDisplay.remove();
            
            if (files.length > 0) {
                const fileNames = Array.from(files).map(f => f.name).join(', ');
                const display = document.createElement('div');
                display.className = 'file-display';
                display.innerHTML = `<span class="file-display-icon">✓</span> ${files.length} arquivo(s) selecionado(s)`;
                parent.appendChild(display);
                
                // Mudar cor da borda do upload
                parent.style.borderColor = '#2D5F4C';
                parent.style.backgroundColor = '#F0F9F4';
            } else {
                parent.style.borderColor = '#E5E5E5';
                parent.style.backgroundColor = '#F8F8F8';
            }
        });
        
        document.getElementById('photos-upload').addEventListener('change', function(e) {
            const files = e.target.files;
            const parent = this.closest('.file-upload');
            
            // Remove display anterior se existir
            const oldDisplay = parent.querySelector('.file-display');
            if (oldDisplay) oldDisplay.remove();
            
            if (files.length > 0) {
                const display = document.createElement('div');
                display.className = 'file-display';
                display.innerHTML = `<span class="file-display-icon">✓</span> ${files.length} foto(s) selecionada(s)`;
                parent.appendChild(display);
                
                // Mudar cor da borda do upload
                parent.style.borderColor = '#2D5F4C';
                parent.style.backgroundColor = '#F0F9F4';
            } else {
                parent.style.borderColor = '#E5E5E5';
                parent.style.backgroundColor = '#F8F8F8';
            }
        });
        
        // Validação e feedback visual no envio
        document.getElementById('briefingForm').addEventListener('submit', function(e) {
            const submitBtn = document.querySelector('.submit-button');
            
            // Adiciona spinner e muda texto
            submitBtn.innerHTML = '<span class="loading-spinner"></span> ENVIANDO...';
            submitBtn.disabled = true;
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Proteção adicional contra spam (honeypot)
        const honeypot = document.querySelector('input[name="_honey"]');
        if (honeypot) {
            honeypot.value = ''; // Garante que está vazio
        }