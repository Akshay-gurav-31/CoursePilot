
let courses = []; // This will be populated from courses.json
let userKeywords = [];
let currentPage = 1;
const resultsPerPage = 10;

const keywordInput = document.getElementById('keywordInput');
const keywordInputArea = document.getElementById('keywordInputArea');
const resultsContainer = document.getElementById('resultsContainer');
const mobileActionBtn = document.getElementById('mobileActionBtn');
const backToTopBtn = document.getElementById('backToTop');

// Star background implementation
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Star colors: Mostly white, but some varied (yellow, orange, blue, red)
const starColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#fff8dc', '#ffd700', '#ffcc99', '#ff9966', '#ccccff', '#9999ff'];

// Star properties
const stars = [];
const numStars = 800; // Even more stars for denser galaxy

class Star {
  constructor() {
    this.reset();
  }

  getColor() {
    // Bias heavily towards white (first 4 are white duplicates for higher probability)
    const rand = Math.random();
    if (rand < 0.8) { // 80% chance white
      return '#ffffff';
    } else {
      return starColors[Math.floor(Math.random() * starColors.length)]; // Otherwise, varied
    }
  }

  reset() {
    this.x = Math.random() * canvas.width * 2 - canvas.width; // Wider initial spread for depth
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.z = Math.random() * canvas.width * 2 + 1; // Start even farther for more depth
    this.size = Math.random() * 1.8 + 0.3; // Slightly varied base size for realism
    this.speed = Math.random() * 2.5 + 0.3; // Varied speed, a bit slower for immersion
    this.color = this.getColor();
    this.phase = Math.random() * Math.PI * 2; // For twinkling
    this.twinkleSpeed = Math.random() * 0.03 + 0.01; // Varied twinkle speed
    this.brightness = Math.random() * 0.5 + 0.5; // Base brightness variation
  }

  update() {
    this.z -= this.speed;
    if (this.z <= 0.1) {
      this.reset();
    }
    // Update phase for twinkling
    this.phase += this.twinkleSpeed;
  }

  draw() {
    const scale = canvas.width / this.z;
    const px = (this.x / canvas.width * 2 - 1) * scale * canvas.width / 2 + canvas.width / 2;
    const py = (this.y / canvas.height * 2 - 1) * scale * canvas.height / 2 + canvas.height / 2;
    const size = this.size * scale * this.brightness;

    // Only draw if on screen
    if (px > -50 && px < canvas.width + 50 && py > -50 && py < canvas.height + 50 && size > 0.1) {
      // Twinkling: vary size and opacity slightly for realism
      const twinkle = (Math.sin(this.phase) * 0.4 + 0.6) * this.brightness;
      const drawSize = size * twinkle;
      const opacity = twinkle * 0.8 + 0.2; // Vary opacity too

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(drawSize, 0.2), 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      // Add subtle glow for brighter/larger stars
      if (size > 1.5) {
        ctx.beginPath();
        ctx.arc(px, py, drawSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'); // Match opacity
        ctx.fill();
      }
      ctx.restore();
    }
  }
}

// Initialize stars
for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

// Animation loop with smoother trail fade
function animate() {
  // Clear with a softer fade for longer trails (more realistic motion blur)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Sort by z-depth for proper layering (farther stars smaller)
  stars.sort((a, b) => a.z - b.z);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// Load courses from JSON file
async function loadCourses() {
  try {
    const response = await fetch('courses.json');
    const data = await response.json();
    courses = data.courses.map((course, index) => ({
      id: `course-${index}`,
      title: course.title,
      url: course.url,
      provider: course.provider,
      rating: parseFloat(course.rating) || 0,
      level: course.level,
      // Create tags from title, provider, and level
      tags: [
        ...course.title.split(' '),
        course.provider,
        course.level
      ].filter(tag => tag && tag.length > 2), // Filter out short words
      // Generate approximate student count based on rating
      students: Math.floor((parseFloat(course.rating) || 4) * 10000),
      duration: 'Self-paced',
      description: `Learn ${course.title} from ${course.provider}`,
      category: 'Online Course'
    }));
    console.log(`Loaded ${courses.length} courses from courses.json`);
  } catch (error) {
    console.error('Error loading courses:', error);
    // Fallback to some default courses if JSON fails to load
    courses = [
      {
        id: 'fallback-1',
        title: 'Python for Beginners',
        url: 'https://example.com/python-course',
        provider: 'Udemy',
        rating: 4.8,
        level: 'Beginner',
        tags: ['Python', 'Programming', 'Beginner'],
        students: 50000,
        duration: '8 weeks',
        description: 'Learn Python basics including variables, loops, functions, and object-oriented programming',
        category: 'Programming'
      },
      {
        id: 'fallback-2',
        title: 'Web Development with JavaScript',
        url: 'https://example.com/js-course',
        provider: 'Coursera',
        rating: 4.7,
        level: 'Intermediate',
        tags: ['JavaScript', 'Web Development', 'Frontend'],
        students: 45000,
        duration: '10 weeks',
        description: 'Master JavaScript for building modern web applications',
        category: 'Web Development'
      }
    ];
  }
}

function initApp() {
  setupEventListeners();
  renderEmptyState();
}

function setupEventListeners() {
  keywordInput.addEventListener('keydown', handleKeywordInput);
  keywordInputArea.addEventListener('click', () => keywordInput.focus());
  if (mobileActionBtn) {
    mobileActionBtn.addEventListener('click', handleMobileAction);
  }
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });
}

function handleKeywordInput(event) {
  if (event.key === 'Enter' && keywordInput.value.trim()) {
    event.preventDefault();
    addKeyword(keywordInput.value.trim());
    keywordInput.value = '';
    rankAndDisplayCourses();
  } else if (event.key === 'Backspace' && !keywordInput.value && userKeywords.length > 0) {
    userKeywords.pop();
    renderKeywords();
    rankAndDisplayCourses();
  }
}

function handleMobileAction() {
  if (keywordInput.value.trim()) {
    addKeyword(keywordInput.value.trim());
    keywordInput.value = '';
  }
  rankAndDisplayCourses();
}

function addKeyword(keyword) {
  if (!userKeywords.includes(keyword)) {
    userKeywords.push(keyword);
    renderKeywords();
    currentPage = 1;
    rankAndDisplayCourses();
  }
}

function renderKeywords() {
  keywordInputArea.innerHTML = '';
  
  userKeywords.forEach(keyword => {
    const badge = document.createElement('div');
    badge.className = 'keyword-badge';
    badge.innerHTML = `
      ${keyword}
      <button class="remove-keyword" data-keyword="${keyword}">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    keywordInputArea.appendChild(badge);
  });
  
  keywordInputArea.appendChild(keywordInput);
  
  document.querySelectorAll('.remove-keyword').forEach(button => {
    button.addEventListener('click', () => {
      const keywordToRemove = button.getAttribute('data-keyword');
      userKeywords = userKeywords.filter(k => k !== keywordToRemove);
      renderKeywords();
      currentPage = 1;
      rankAndDisplayCourses();
    });
  });
}

function rankCourses(courses, userKeywords) {
  if (userKeywords.length === 0) {
    return [];
  }

  const normalizedUserKeywords = userKeywords.map(k => k.toLowerCase().trim());

  const rankedCourses = courses
    .map(course => {
      const matchedKeywords = [];
      let score = 0;

      // Create a combined searchable text from course properties
      const searchableText = [
        course.title,
        course.provider,
        course.level,
        ...(course.tags || [])
      ].join(' ').toLowerCase();

      normalizedUserKeywords.forEach(userKeyword => {
        // Check for exact matches
        if (searchableText.includes(userKeyword)) {
          score += 20;
          // Add matched keyword for display
          if (!matchedKeywords.includes(userKeyword)) {
            matchedKeywords.push(userKeyword);
          }
        }
        // Check for partial matches
        else {
          const words = searchableText.split(' ');
          const userWords = userKeyword.split(' ');
          let partialMatch = false;
          
          for (const word of words) {
            for (const userWord of userWords) {
              if (word.includes(userWord) || userWord.includes(word)) {
                score += 10;
                partialMatch = true;
                break;
              }
            }
            if (partialMatch) break;
          }
          
          if (partialMatch && !matchedKeywords.includes(userKeyword)) {
            matchedKeywords.push(userKeyword);
          }
        }
      });
      
      // Boost score based on rating
      const rating = parseFloat(course.rating) || 0;
      score += rating * 5;
      
      // Boost score based on popularity (students)
      const students = course.students || 0;
      score += Math.min(10, Math.floor(students / 10000));
      
      // Add some randomness for variety
      score += Math.random() * 5;

      return {
        ...course,
        relevanceScore: score,
        matchedKeywords
      };
    })
    .filter(course => course.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  return rankedCourses;
}

function rankAndDisplayCourses() {
  const rankedCourses = rankCourses(courses, userKeywords);
  
  if (userKeywords.length === 0) {
    renderEmptyState();
    return;
  }
  
  if (rankedCourses.length === 0) {
    renderNoMatchesState();
    return;
  }
  
  renderResults(rankedCourses);
}

function renderResults(rankedCourses) {
  const totalPages = Math.ceil(rankedCourses.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, rankedCourses.length);
  const paginatedCourses = rankedCourses.slice(startIndex, endIndex);
  
  resultsContainer.innerHTML = `
    <div class="results-header">
      <svg class="graduation-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h20"/>
        <path d="M12 3v18"/>
        <path d="M6 12a6 6 0 0 1 12 0"/>
        <path d="M6 12a6 6 0 0 0 12 0"/>
      </svg>
      <h2 class="results-title">Recommended for You</h2>
      <span class="course-count">${rankedCourses.length} ${rankedCourses.length === 1 ? 'course' : 'courses'}</span>
    </div>
    
    <div class="courses-grid">
      ${paginatedCourses.map((course, index) => renderCourseCard(course, startIndex + index)).join('')}
    </div>
    
    <div class="pagination-controls">
      <button id="prevPage" class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''}>
        Previous
      </button>
      <span class="pagination-info">
        Page ${currentPage} of ${totalPages}
      </span>
      <button id="nextPage" class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''}>
        Next
      </button>
    </div>
  `;
  
  // Add click event listeners to course cards
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent click when clicking on remove keyword buttons
      if (e.target.closest('.remove-keyword')) return;
      
      const url = card.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
  
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  
  if (prevBtn && !prevBtn.disabled) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderResults(rankedCourses);
      }
    });
  }
  
  if (nextBtn && !nextBtn.disabled) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderResults(rankedCourses);
      }
    });
  }
}

function renderCourseCard(course, index) {
  const relevancePercentage = Math.min(100, Math.max(10, Math.floor((course.relevanceScore / 50) * 100)));
  
  return `
    <div class="course-card" style="animation-delay: ${index * 0.1}s" data-url="${course.url}">
      <div class="course-header">
        <div class="course-rank">#${index + 1}</div>
        <div>
          <h3 class="course-title">${course.title}</h3>
        </div>
      </div>
      
      <p class="course-description">${course.description || `Learn ${course.title} from ${course.provider}`}</p>
      
      <div class="keyword-tags">
        ${(course.matchedKeywords || []).map(keyword => `
          <span class="keyword-tag">${keyword}</span>
        `).join('')}
      </div>
      
      <div class="course-footer">
        <div class="course-details">
          <div class="detail-item">
            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            <span>${course.level || 'Intermediate'}</span>
          </div>
          <div class="detail-item">
            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${course.duration || 'Self-paced'}</span>
          </div>
          <div class="provider">${course.provider || 'Online Platform'}</div>
          <div class="rating">
            <span class="star">★</span>
            <span>${course.rating || '4.5'}</span>
            <span class="students">(${(course.students || 0).toLocaleString()} students)</span>
          </div>
        </div>
        
        <div class="relevance-container">
          <div class="relevance-label">Relevance:</div>
          <div class="relevance-bar">
            <div class="relevance-progress" style="width: ${relevancePercentage}%"></div>
          </div>
          <div class="relevance-percent">${relevancePercentage}%</div>
        </div>
      </div>
    </div>
  `;
}

function renderEmptyState() {
  resultsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon-container">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          <path d="M8 12h8"/>
          <path d="M8 8h8"/>
          <path d="M8 16h4"/>
        </svg>
      </div>
      <h3 class="empty-title">Start Your Learning Journey</h3>
      <p class="empty-description">Enter keywords that interest you to get personalized course recommendations</p>
    </div>
  `;
}

function renderNoMatchesState() {
  resultsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon-container" style="background: hsla(120, 100%, 40%, 0.2)">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          <path d="M8 12h8"/>
          <path d="M8 8h8"/>
          <path d="M8 16h4"/>
        </svg>
      </div>
      <h3 class="empty-title">No matches found</h3>
      <p class="empty-description">Try different keywords or broader terms like "Python", "AI", "Web Development"</p>
    </div>
  `;
}

// Initialize the app after loading courses
document.addEventListener('DOMContentLoaded', async () => {
  await loadCourses();
  initApp();
});
