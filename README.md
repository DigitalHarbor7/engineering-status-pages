# Engineering Project Status Website Builder

A static website builder for engineering firms to showcase their project status and progress. Built with pure HTML and TailwindCSS (via CDN) for optimal performance and easy deployment on Cloudflare Pages.

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
└── templates/                    # Reusable page templates
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
