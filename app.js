document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation / Tab Switching
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            
            navItems.forEach(n => n.classList.remove('active'));
            viewSections.forEach(v => v.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            if(targetId === 'dashboard') pageTitle.textContent = 'Dashboard';
            if(targetId === 'resume-builder') pageTitle.textContent = 'Resume Builder';
            if(targetId === 'script-gen') pageTitle.textContent = 'Script Generator';
            if(targetId === 'email-writer') pageTitle.textContent = 'Email Writer';
            if(targetId === 'image-enhancer') pageTitle.textContent = 'Image Enhancer';
        });
    });

    // 2. Theme Toggle
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if(document.body.classList.contains('light-theme')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            document.body.classList.remove('dark-theme');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            document.body.classList.add('dark-theme');
        }
    });

    // 3. Real AI Generation Fetch Requests
    const executeAIGeneration = async (button, targetSelector, endpoint, payload) => {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="spinner"></span> Generating...';
        button.disabled = true;

        const outputPanel = document.querySelector(targetSelector);
        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            const emptyState = outputPanel.querySelector('.empty-state');
            if(emptyState) emptyState.style.display = 'none';
            
            const prevOutput = outputPanel.querySelector('.generated-content-box');
            if(prevOutput) prevOutput.remove();

            const contentBox = document.createElement('div');
            contentBox.className = 'generated-content-box';
            
            if (!response.ok) {
                contentBox.innerHTML = data.error || "Something went wrong.";
                contentBox.style.borderLeftColor = "#ef4444"; // Red for error
            } else {
                contentBox.innerHTML = data.result;
                contentBox.style.borderLeftColor = "var(--accent-primary)";
            }
            
            outputPanel.appendChild(contentBox);

        } catch (error) {
            console.error(error);
            alert("Failed to connect to OmniAI backend server. Is it running?");
        } finally {
            button.innerHTML = originalText;
            button.disabled = false;
        }
    };

    // Events for Generators
    document.querySelector('#form-resume .btn-generate').addEventListener('click', (e) => {
        const form = document.querySelector('#form-resume');
        const inputs = form.querySelectorAll('input, textarea');
        executeAIGeneration(e.currentTarget, '#resume-builder .output-panel', '/api/resume', {
            jobTitle: inputs[0].value,
            skills: inputs[1].value
        });
    });

    document.querySelector('#form-script .btn-generate').addEventListener('click', (e) => {
        const form = document.querySelector('#form-script');
        const topic = form.querySelector('input').value;
        const tone = form.querySelector('select').value;
        executeAIGeneration(e.currentTarget, '#script-gen .output-panel', '/api/script', {
            topic, tone
        });
    });

    document.querySelector('#form-email .btn-generate').addEventListener('click', (e) => {
        const form = document.querySelector('#form-email');
        const recipient = form.querySelectorAll('input')[0].value;
        const goal = form.querySelectorAll('textarea')[0].value;
        const tone = form.querySelectorAll('select')[0].value;
        executeAIGeneration(e.currentTarget, '#email-writer .output-panel', '/api/email', {
            recipient, goal, tone
        });
    });

});
