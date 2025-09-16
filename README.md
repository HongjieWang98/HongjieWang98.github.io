Experience with vibe coding by TRAE:

Product website: https://hongjiewang98.github.io

Author: Hongjie Wang

Date: Sept 16, 2025

Note: Used Lilian Weng's blog as a design reference

Pros:
1. Fast, the website was generated within 20mins
2. Realized Blog functions:
   - Article display with clean, readable typography
   - Estimated reading time
   - Article categories/tags 
   - Search functionality 
   - Code syntax highlighting for technical articles
   - Dark/light mode toggle
3. Mimic Lilian Weng's blog style, minimalist and professional aesthetic

Cons:
1. Hard-coded for estimated time of reading, article dates
2. Infrasture can be improved(either through the TRAE LLM, or through prompt), like the footer-bottom, should be static and auto show in every pages, instead of hard-coded in every page.
3. Visual aesthetics can be improved



Prompt I used: 
[trae_blog_prompt.md](https://github.com/user-attachments/files/22372489/trae_blog_prompt.md)
# TRAE Prompt: Personal AI/ML Blog Website

## Project Overview
Create a modern, clean personal blog/website focused on AI, machine learning, and personal learning documentation. Use vibe coding principles to build something that feels intuitive and engaging.

## Core Features Required

### Blog Functionality
- **Article display** with clean, readable typography
- **Estimated reading time** for each article (calculate based on average 200-250 words per minute)
- **Article categories/tags** for AI, Machine Learning, Deep Learning, Personal Notes, etc.
- **Search functionality** to find articles by title or content
- **Responsive design** that works on desktop, tablet, and mobile

### Content Structure
- **Homepage** with recent articles and brief personal introduction
- **About page** describing your AI/ML journey and interests  
- **Blog archive** with organized article listings
- **Individual article pages** with proper formatting for code blocks, math equations, and images

### Social Integration
- **Contact section** with links to:
  - LinkedIn profile
  - GitHub profile  
  - Twitter/X profile
- Clean, professional social media icons
- Easy sharing buttons for articles

## Design Philosophy
- **Minimalist and professional** aesthetic
- **Fast loading** and performance optimized
- **Accessibility focused** with proper contrast and navigation
- **Code syntax highlighting** for technical articles
- **Math equation support** (MathJax or similar)
- **Dark/light mode toggle** (optional but nice)

## Technical Preferences
- Use modern web technologies (HTML5, CSS3, JavaScript)
- Consider using a static site generator approach for performance
- Implement clean URL structure (/blog/article-title)
- Add meta tags for SEO optimization
- Include RSS feed for subscribers

## Content Suggestions
Start with placeholder articles about:
- "Getting Started with Machine Learning"
- "My AI Learning Journey - Week 1"
- "Understanding Neural Networks: A Beginner's Guide"
- "Tools and Resources for ML Practitioners"

## Vibe Coding Notes
Focus on creating something that:
- Feels personal and authentic to your learning journey
- Has smooth, intuitive navigation
- Shows your personality while maintaining professionalism  
- Makes readers want to explore and learn alongside you
- Has that "just right" feeling when you use it

Please build this as a complete, functional website that I can immediately start using to document my AI/ML learning journey. Include sample content and make it easy for me to add new articles.
