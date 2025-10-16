# 🎓 CoursePilot

### Intelligent Course Recommendation System

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)](https://github.com/Akshay-gurav-31/CoursePilot.git)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Team](#team)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)

---

## 🌟 Overview

**CoursePilot** is a sophisticated, lightweight course recommendation engine that delivers personalized learning paths through intelligent keyword analysis. Built entirely with vanilla JavaScript, this zero-dependency application combines performance with an immersive user experience.

### Problem Statement

In today's vast educational landscape, learners struggle to discover relevant courses aligned with their interests. CoursePilot solves this by providing smart, keyword-driven recommendations that map user interests to curated learning paths.

---

## ✨ Key Features

### 🎯 Intelligent Recommendations
- **Advanced Matching Algorithm**: Multi-factor scoring system considering tag relevance, course ratings, and enrollment metrics
- **100+ Course Database**: Comprehensive collection spanning programming, data science, design, cloud computing, and more
- **Real-time Filtering**: Instant results as you refine your interests

### 🎨 Immersive Interface
- **Galaxy Background**: Dynamic Canvas-based starry sky with 800+ twinkling stars and realistic depth simulation
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations and transitions

### 🚀 Performance
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks, no bloat
- **Optimized Rendering**: Efficient DOM manipulation with hardware-accelerated animations
- **Cross-browser Support**: Compatible with all modern browsers

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and Canvas API for animations |
| **CSS3** | Advanced styling, flexbox/grid layouts, and responsive design |
| **Vanilla JavaScript** | Core logic, recommendation algorithm, and DOM manipulation |

**Architecture Philosophy**: Lightweight, dependency-free, and performance-first

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

```bash
# Clone the repository
git clone https://github.com/Akshay-gurav-31/CoursePilot.git

# Navigate to project directory
cd CoursePilot-main

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

That's it! No build process, no npm install, no configuration files.

### Quick Start

1. **Enter Keywords**: Type interests like "Python", "Web Development", or "AI"
2. **Press Enter**: Each keyword becomes a searchable badge
3. **Explore Results**: Browse personalized recommendations ranked by relevance
4. **Paginate**: Navigate through multiple pages of course suggestions
5. **Refine**: Remove keywords by clicking the × badge to adjust results

---

## 🏗️ Architecture

### Recommendation Algorithm

The ranking system employs a multi-dimensional scoring approach:

```
Score = (Tag Match Weight × 3) + (Rating Weight × 2) + (Popularity Weight) + Random Factor
```

**Factors Considered**:
- **Direct Tag Matching**: Exact keyword matches in course tags
- **Partial Matching**: Substring and related keyword detection
- **Quality Metrics**: Course ratings (0-5 scale)
- **Social Proof**: Student enrollment numbers
- **Diversity**: Randomization to prevent echo chambers

### Course Data Structure

Each course entry contains:
- Title, description, and category
- Difficulty level (Beginner, Intermediate, Advanced)
- Duration and provider information
- Rating and student enrollment statistics
- Pricing details
- Rich tag array for matching

### Responsive Breakpoints

| Device | Breakpoint | Adaptations |
|--------|------------|-------------|
| Mobile | < 768px | Single column, action buttons, optimized touch targets |
| Tablet | 768px - 1024px | Two-column grid, adaptive spacing |
| Desktop | > 1024px | Multi-column layout, keyboard shortcuts |

### Canvas Animation System

**Star Field Rendering**:
- 800 stars with randomized properties
- Z-depth simulation for 3D parallax effect
- Variable opacity twinkling (0.2 - 1.0 range)
- Color spectrum: white, blue-white, warm white
- Motion trails for enhanced depth perception

---

## 👥 Team

| Member | Role |
|--------|------|
| **Ravsaheb Bansode** | Core Developer |
| **Akshay Gurav** | Core Developer |
| **Swapnil Gurav** | Core Developer |
| **Rohan Sutar** | Core Developer |

---

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Android 10+ | ✅ Fully Supported |

---

## 🤝 Contributing

We welcome contributions from the community!

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/EnhancedAlgorithm

# Commit your changes
git commit -m 'feat: improve recommendation accuracy'

# Push to the branch
git push origin feature/EnhancedAlgorithm

# Open a Pull Request
```

**Contribution Guidelines**:
- Maintain vanilla JavaScript approach (no frameworks)
- Follow existing code style and conventions
- Ensure cross-browser compatibility
- Update documentation for new features

---

## 📊 Course Categories

<details>
<summary>View All Categories (Click to expand)</summary>

- Programming Languages (Python, JavaScript, Java, Go, Rust, C++, etc.)
- Web Development (React, Vue, Angular, HTML/CSS, Node.js, etc.)
- Mobile Development (React Native, Flutter, Swift, Kotlin)
- Data Science & Analytics
- Machine Learning & Artificial Intelligence
- UI/UX Design (Figma, Adobe XD)
- Cloud Computing (AWS, Azure, Google Cloud)
- DevOps & CI/CD (Docker, Kubernetes)
- Cybersecurity
- And more...

</details>

---

## 📄 License

This project is proprietary software developed by the CoursePilot development team.  
**All rights reserved. © 2025**

---

## 🎯 Project Highlights

- 🎨 **Zero dependencies** - Pure vanilla JavaScript implementation
- ⚡ **High performance** - Optimized rendering and efficient algorithms
- 📱 **Fully responsive** - Seamless experience across all devices
- 🌌 **Immersive design** - Unique galaxy-themed interface
- 🎓 **100+ courses** - Comprehensive, curated learning database

---

<div align="center">

**[⬆ Back to Top](#-coursepilot)**

Made with 💚 by the CoursePilot Team

</div>
