# My Portfolio

A personal portfolio website built with React and Vite. This project showcases my skills, experience, and projects in a modern, responsive web application.

**🔗 Live Demo:** [https://my-portfolio-pi-rosy-41.vercel.app/](https://my-portfolio-pi-rosy-41.vercel.app/)

## Features

- **Fast Development**: Utilizing Vite for lightning-fast HMR and optimized builds.
- **Modern React**: Built with React 19, using functional components and hooks.
- **Responsive Design**: Styled with Tailwind CSS for a seamless experience across all devices.
- **Interactive Sections**: Includes Hero, About, Projects, Experience, and Contact sections.
- **Contact Form**: Integrated with EmailJS for direct-to-email messaging.
- **Icons**: Beautifully crafted with Lucide-React.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/megwilliams1/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (optional, if using environment variables for EmailJS):

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Project Structure

```
my-portfolio/
├── public/          # Static assets (Favicons, images)
├── src/             # Source code
│   ├── components/  # Reusable UI components
│   ├── layout/      # Navbar and Footer components
│   ├── sections/    # Page sections (Hero, About, Projects, Experience, Contact)
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Entry point
├── index.html       # HTML entry point
├── package.json     # Metadata and dependencies
└── vite.config.js   # Vite configuration
```

## License

This project is licensed under the MIT License.
