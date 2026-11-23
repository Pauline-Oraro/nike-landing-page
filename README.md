# Nike Landing Page

A polished, responsive product landing page inspired by Nike's modern e-commerce experience. The project is built with React, Vite, and Tailwind CSS, and presents a complete marketing journey from hero promotion and product discovery to customer reviews, special offers, newsletter signup, and footer navigation.

**Live demo:** [https://nike-landing-page-eta-lemon.vercel.app](https://nike-landing-page-eta-lemon.vercel.app)

## Features

- Responsive desktop and mobile navigation
- Interactive hero section with selectable shoe thumbnails
- Popular product showcase built from reusable data
- Super-quality and brand storytelling section
- Free-shipping and customer-service highlights
- Special promotional offer section
- Customer review cards
- Newsletter subscription form
- Multi-column footer navigation
- Centralized content constants for easy updates
- Custom Tailwind CSS theme, colors, fonts, shadows, and utilities
- Fast development and optimized production builds with Vite

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based interface |
| Vite 7 | Development server and production bundler |
| Tailwind CSS 4 | Utility-first styling and custom theme |
| JavaScript ES Modules | Application logic and page data |
| ESLint 9 | Code quality and linting |

## Project Structure

```text
nike-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/       # Interface icons
│   │   ├── images/      # Product and section imagery
│   │   └── favicon.ico
│   ├── components/      # Shared navigation and reusable UI cards
│   ├── constants/       # Navigation, products, reviews, and footer data
│   ├── sections/        # Landing-page sections
│   ├── App.css
│   ├── App.jsx          # Main section composition
│   ├── index.css        # Tailwind imports and custom theme styles
│   └── main.jsx         # React entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Page Sections

The page is composed in `src/App.jsx`:

- **Navigation** — Brand logo, anchor links, and responsive menu
- **Hero** — Main promotion, action button, shoe image, statistics, and thumbnail selection
- **Popular Products** — Featured footwear displayed through product cards
- **Super Quality** — Brand-quality and product-story presentation
- **Services** — Free shipping, secure payment, and support benefits
- **Special Offer** — Promotional campaign and call-to-action content
- **Customer Reviews** — Ratings and feedback cards
- **Subscribe** — Newsletter email form
- **Footer** — Product links, help links, company links, and contact information

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pauline-Oraro/nike-landing-page.git
cd nike-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL printed by Vite, typically:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Customization

### Product and section content

Update reusable content in:

```text
src/constants/index.js
```

This file is the best place to modify navigation links, popular products, service cards, customer reviews, and footer content.

### Images and icons

Add or replace visual assets in:

```text
src/assets/images/
src/assets/icons/
```

Import assets through:

```text
src/assets/images/index.js
src/assets/icons/index.js
```

depending on the asset group.

### Theme and layout styles

The project uses Tailwind CSS 4 directly in CSS through `src/index.css`. Custom theme values include:

- Primary and accent colors
- Pale-blue backgrounds
- Coral-red highlights
- Montserrat and Palanquin fonts
- Reusable shadow and background utilities
- Shared padding, input, and container styles

## Components

Reusable components live in `src/components/` and include:

- `Nav.jsx` — Responsive navigation
- `Button.jsx` — Shared call-to-action button
- `PopularProductCard.jsx` — Product card for the catalogue section
- `ReviewCard.jsx` — Customer feedback card
- `ServiceCard.jsx` — Service-benefit card

## Sections

Full-page sections live in `src/sections/`:

- `Hero.jsx`
- `PopularProducts.jsx`
- `SuperQuality.jsx`
- `Services.jsx`
- `SpecialOffer.jsx`
- `CustomerReviews.jsx`
- `Subscribe.jsx`
- `Footer.jsx`

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the generated bundle:

```bash
npm run preview
```

Vite writes production files to `dist/`, ready for deployment to a static hosting provider.

## Deployment

The project can be deployed on Vercel, Netlify, GitHub Pages, or another static host.

For Vercel:

1. Import the repository.
2. Select Vite as the framework preset.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

No environment variables are required for the current implementation.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Run checks:

```bash
npm run lint
npm run build
```

5. Commit and push the branch.
6. Open a pull request.

Keep components reusable and verify layouts at mobile, tablet, and desktop screen sizes.

## Author

Created by [Pauline Oraro](https://github.com/Pauline-Oraro).
