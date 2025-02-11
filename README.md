# Digital Harbor - Project Status Page Builder

A website builder service that creates and maintains custom-branded project status pages for engineering firms. Each firm gets their own branded subdomain (e.g., coastal-eng.mydigitalharbor.com) to showcase their projects and keep stakeholders informed.

## Key Features

- Custom-branded pages for each engineering firm
- Easy-to-update project status and timeline information
- Mobile-responsive design
- Simple note-taking system for quick updates
- Cloudflare Pages hosting for fast, reliable delivery

## Project Structure

```
├── marketing/              # Main marketing website
│   ├── index.html        # Landing page
│   └── assets/           # Marketing site assets
├── templates/             # Templates for firm sites
│   └── firm-site/        # Base template for each firm
│       ├── index.html    # Homepage template
│       ├── projects/    # Project page templates
│       └── assets/      # Base assets for firm sites
├── firms/                 # Active firm sites
│   ├── coastal-eng/     # Example firm site
│   └── urban-builders/  # Example firm site
└── notes/                 # Content update notes
    ├── TEMPLATE.md      # Template for new notes
    ├── coastal-eng/     # Notes for Coastal Engineering
    └── urban-builders/  # Notes for Urban Builders
```

## Project Notes System

The `notes/` directory contains markdown files for tracking project and firm updates. These notes are used to generate website content.

1. To add a new project's notes:
   - Copy `notes/TEMPLATE.md` to `notes/projects/<project-name>.md`
   - Fill in the project information and updates

2. Notes structure:
   - Project Information (name, firm, progress, etc.)
   - Recent Updates (dated entries)
   - Upcoming Milestones
   - Issues/Concerns
   - Additional Notes

## Adding New Content

1. For a new firm:
   - Create a new directory under `firms/`
   - Copy the firm template and customize
   - Create a notes file in `notes/firms/`

2. For a new project:
   - Create a new project page under `projects/`
   - Link it from the respective firm's page
   - Create a notes file in `notes/projects/`

## Development

This is a static website built with HTML, CSS, and minimal JavaScript. No build process required.

## Deployment

Deploy to Cloudflare Pages by pushing to the main branch.