# Engineering Project Status Website Builder

A centralized website builder for managing multiple engineering firms' project status pages. Built with pure HTML and TailwindCSS (via CDN) for optimal performance and easy deployment on Cloudflare Pages.

## Project Structure

```
.
├── index.html                    # Marketing homepage
├── assets/                       # Static assets (images, css)
├── firms/                        # Engineering firm project pages
│   ├── urban-engineering/        # Example firm
│   │   └── public-library/      # Example project
│   └── coastal-engineering/      # Another example firm
│       └── beach-restoration/   # Example project
├── templates/                    # Reusable page templates
└── updates/                      # Raw project updates from firms
    ├── urban-engineering/        # Updates for this firm
    │   └── public-library/      # Updates for this project
    │       └── YYYY-MM-DD.txt   # Date-stamped update files
    └── coastal-engineering/      # Updates for this firm
        └── beach-restoration/   # Updates for this project
```

## Update Process

The website uses a two-step process for managing project updates:

1. **Collecting Updates**
   - Firms send project updates via email
   - Updates are saved as text files in the `updates/<firm-name>/<project-name>/` directory
   - Each update file is named with the date: `YYYY-MM-DD.txt`

2. **Publishing Updates**
   - Raw updates are processed and formatted for the web
   - Formatted updates are integrated into the appropriate project status page
   - Each project page maintains a chronological history of updates

### Update File Format

Update files should follow this format:

```txt
Date: YYYY-MM-DD
Project: Project Name
Type: [Progress Update|Milestone|Delay|Issue|Resolution]

Update Content:
[The actual update text goes here]

Action Items:
- Item 1
- Item 2

Next Steps:
- Step 1
- Step 2
```

## Development

To run the site locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Adding New Projects

1. Create a new directory under `firms/<engineering-firm-name>/<project-name>/`
2. Copy the template from `templates/project-status.html`
3. Update the content as needed
4. Deploy

## Deployment

This site is designed to be deployed on Cloudflare Pages. Simply:

1. Push your changes to your repository
2. Connect your repository to Cloudflare Pages
3. Configure the build settings:
   - No build command needed (static site)
   - Build output directory: `.` (root directory)

## License

MIT License
