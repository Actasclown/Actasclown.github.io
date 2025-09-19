# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based academic website using the minimal-mistakes theme, hosted on GitHub Pages. It serves as a personal academic portfolio for Yunqi He, a PhD candidate at Northwestern University.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Serve with development config
bundle exec jekyll serve --config _config.dev.yml

# Build the site
bundle exec jekyll build
```

### Asset Management
```bash
# Build and minify JavaScript assets
npm run build:js

# Watch for JavaScript changes during development
npm run watch:js
```

## Site Architecture

### Content Collections
The site uses Jekyll collections defined in `_config.yml`:
- `_publications/` - Research publications
- `_talks/` - Conference talks and presentations
- `_teaching/` - Teaching materials and courses
- `_portfolio/` - Project portfolio items
- `_posts/` - Blog posts

### Content Generation
The `markdown_generator/` directory contains Python scripts and Jupyter notebooks to generate markdown files from structured data:
- `publications.py` / `publications.ipynb` - Generates publication pages from `publications.tsv`
- `talks.py` / `talks.ipynb` - Generates talk pages from `talks.tsv`

These scripts read TSV files with structured metadata and create individual markdown files for each entry.

### Key Configuration Files
- `_config.yml` - Main Jekyll configuration with site settings, author info, and collection definitions
- `_config.dev.yml` - Development-specific overrides
- `Gemfile` - Ruby gem dependencies including github-pages

### Layout Structure
- `_layouts/` - Jekyll layouts (single, talk, archive, etc.)
- `_includes/` - Reusable template components
- `_sass/` - Sass stylesheets
- `_pages/` - Static pages (about, CV, publications list, etc.)

### Content Management
When adding new publications or talks:
1. Update the corresponding TSV file in `markdown_generator/`
2. Run the appropriate Python script to regenerate markdown files
3. Commit the generated files to deploy changes

The site is configured for GitHub Pages deployment with the github-pages gem handling Jekyll version and plugin compatibility.