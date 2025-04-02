# AIronclad

A comprehensive web platform showcasing research on Large Language Model (LLM) vulnerabilities and security testing methodologies.

## Features

- Interactive demo of LLM vulnerabilities
- Detailed methodology documentation
- Data visualization of findings
- Responsive design for all devices
- Modern UI with smooth animations

## Tech Stack

- React.js
- Bootstrap 5
- Chart.js for data visualization
- Framer Motion for animations
- Font Awesome icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aironclad.git
cd aironclad
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── common/        # Common UI elements
│   ├── demo/          # Demo page components
│   ├── methodology/   # Methodology page components
│   └── findings/      # Findings page components
├── pages/             # Page components
├── styles/            # CSS styles
├── utils/             # Utility functions
└── assets/            # Static assets
```

## Customization

### Adding New Vulnerabilities

1. Update the vulnerability data in the Demo component
2. Add new visualization data in the Findings component
3. Update the methodology documentation as needed

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are co-located with components
- Customize the color scheme by modifying CSS variables in `:root`

## Deployment

The site is configured for deployment on GitHub Pages:

1. Build the production version:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/aironclad](https://github.com/yourusername/aironclad)
