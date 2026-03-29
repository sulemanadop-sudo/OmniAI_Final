<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OmniAI - All-In-One AI Hub</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#0f111a">
    <link rel="stylesheet" href="styles.css">
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="dark-theme">
    <div class="app-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="logo">
                <i class="fa-solid fa-bolt"></i> OmniAI
            </div>
            <nav class="nav-menu">
                <a href="#" class="nav-item active" data-target="dashboard">
                    <i class="fa-solid fa-house"></i> Dashboard
                </a>
                <a href="#" class="nav-item" data-target="resume-builder">
                    <i class="fa-solid fa-file-invoice"></i> Resume Builder
                </a>
                <a href="#" class="nav-item" data-target="script-gen">
                    <i class="fa-solid fa-video"></i> Script Generator
                </a>
                <a href="#" class="nav-item" data-target="email-writer">
                    <i class="fa-solid fa-envelope-open-text"></i> Email Writer
                </a>
                <a href="#" class="nav-item" data-target="image-enhancer">
                    <i class="fa-solid fa-image"></i> Image Enhancer
                </a>
            </nav>
            <div class="profile-section">
                <div class="avatar"><i class="fa-solid fa-user"></i></div>
                <div class="user-info">
                    <span class="name">Guest User</span>
                    <span class="plan">Free Plan</span>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Header -->
            <header class="topbar">
                <h1 id="page-title">Dashboard</h1>
                <div class="topbar-actions">
                    <button class="btn btn-upgrade"><i class="fa-solid fa-crown"></i> Upgrade to Pro</button>
                    <button class="btn-icon theme-toggle"><i class="fa-solid fa-sun"></i></button>
                </div>
            </header>

            <!-- Dashboard View -->
            <section id="dashboard" class="view-section active">
                <div class="welcome-banner glass-card">
                    <h2>Welcome to OmniAI 👋</h2>
                    <p>Your all-in-one AI toolkit. What would you like to create today?</p>
                </div>
                <div class="tools-grid">
                    <div class="tool-card glass-card" onclick="document.querySelector('[data-target=\'resume-builder\']').click()">
                        <div class="tool-icon bg-purple"><i class="fa-solid fa-file-invoice"></i></div>
                        <h3>AI Resume Builder</h3>
                        <p>Generate a professional ATS-friendly resume in seconds.</p>
                    </div>
                    <div class="tool-card glass-card" onclick="document.querySelector('[data-target=\'script-gen\']').click()">
                        <div class="tool-icon bg-pink"><i class="fa-solid fa-video"></i></div>
                        <h3>Viral Script Generator</h3>
                        <p>Write engaging scripts for Reels & TikTok instantly.</p>
                    </div>
                    <div class="tool-card glass-card" onclick="document.querySelector('[data-target=\'email-writer\']').click()">
                        <div class="tool-icon bg-blue"><i class="fa-solid fa-envelope-open-text"></i></div>
                        <h3>Smart Email Writer</h3>
                        <p>Craft perfect professional or casual emails with AI.</p>
                    </div>
                    <div class="tool-card glass-card" onclick="document.querySelector('[data-target=\'image-enhancer\']').click()">
                        <div class="tool-icon bg-green"><i class="fa-solid fa-image"></i></div>
                        <h3>Image Enhancer</h3>
                        <p>Upscale and enhance image quality automatically.</p>
                    </div>
                </div>
            </section>

            <!-- Resume Builder View -->
            <section id="resume-builder" class="view-section">
                <div class="split-layout">
                    <!-- Input Form -->
                    <div class="input-panel glass-card">
                        <h3><i class="fa-solid fa-wand-magic-sparkles"></i> Build Resume</h3>
                        <form id="form-resume">
                            <div class="form-group">
                                <label>Target Job Title</label>
                                <input type="text" placeholder="e.g. Software Engineer" required>
                            </div>
                            <div class="form-group">
                                <label>Key Skills & Experience</label>
                                <textarea placeholder="Describe your skills (e.g., Python, React, 3 years experience...)" rows="5"></textarea>
                            </div>
                            <button type="button" class="btn btn-primary btn-generate"><i class="fa-solid fa-bolt"></i> Generate Resume</button>
                        </form>
                    </div>
                    <!-- Output Preview -->
                    <div class="output-panel glass-card">
                        <h3>Live Preview</h3>
                        <div class="resume-preview empty-state">
                            <i class="fa-regular fa-file-lines fa-3x"></i>
                            <p>Your generated resume will appear here.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Script Generator View -->
            <section id="script-gen" class="view-section">
                <div class="split-layout">
                    <!-- Input Form -->
                    <div class="input-panel glass-card">
                        <h3><i class="fa-brands fa-tiktok"></i> Viral Script Generator</h3>
                        <form id="form-script">
                            <div class="form-group">
                                <label>Topic / Niche</label>
                                <input type="text" placeholder="e.g. 3 Tips for Productivity" required>
                            </div>
                            <div class="form-group">
                                <label>Tone (Optional)</label>
                                <select>
                                    <option>Funny & Engaging</option>
                                    <option>Educational / Professional</option>
                                    <option>Storytelling</option>
                                    <option>Controversial (Hook focus)</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary btn-generate"><i class="fa-solid fa-video"></i> Create Script</button>
                        </form>
                    </div>
                    <!-- Output Panel -->
                    <div class="output-panel glass-card">
                        <h3>Generated Script</h3>
                        <div class="script-preview empty-state">
                            <i class="fa-solid fa-clapperboard fa-3x"></i>
                            <p>Your viral script will appear here.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Email Writer View -->
            <section id="email-writer" class="view-section">
                 <div class="split-layout">
                    <div class="input-panel glass-card">
                        <h3><i class="fa-solid fa-envelope"></i> Smart Email Writer</h3>
                        <form id="form-email">
                            <div class="form-group">
                                <label>Who are you writing to?</label>
                                <input type="text" placeholder="e.g. My boss, a client" required>
                            </div>
                            <div class="form-group">
                                <label>What is the main goal?</label>
                                <textarea placeholder="e.g. Asking for a deadline extension" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Tone</label>
                                <select>
                                    <option>Professional</option>
                                    <option>Friendly</option>
                                    <option>Direct / Short</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary btn-generate"><i class="fa-solid fa-paper-plane"></i> Generate Email</button>
                        </form>
                    </div>
                    <div class="output-panel glass-card">
                        <h3>Email Draft</h3>
                        <div class="email-preview empty-state">
                            <i class="fa-regular fa-envelope fa-3x"></i>
                            <p>Your perfectly crafted email will appear here.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Image Enhancer View -->
            <section id="image-enhancer" class="view-section">
                <div class="single-layout glass-card text-center">
                    <h3><i class="fa-solid fa-wand-magic-sparkles"></i> AI Image Enhancer</h3>
                    <p class="subtitle">Upload a low-quality image and let AI upscale and enhance it.</p>
                    
                    <div class="upload-area">
                        <i class="fa-solid fa-cloud-arrow-up fa-4x"></i>
                        <p>Drag & drop an image here or <strong>browse</strong></p>
                        <input type="file" id="image-upload" accept="image/*" hidden>
                        <button class="btn btn-secondary mt-3" onclick="document.getElementById('image-upload').click()">Select Image</button>
                    </div>
                    
                    <div class="enhancer-results" style="display: none;">
                        <!-- Mock results area -->
                    </div>
                </div>
            </section>

        </main>
    </div>
    <script src="app.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
        }
    </script>
</body>
</html>
