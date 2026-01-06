## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

* **Node.js** (v18.0.0 or higher)
* **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/KosumovicToni/mutans.git
cd mutans

```


2. **Install dependencies:**
```bash
npm install
# or
pnpm install

```

### Development

Start the development server:

```bash
npm run dev

```

## 🚢 Deployment

This project is configured to be deployed using `@sveltejs/adapter-static`.

To create a production-ready build:

```bash
npm run build
```

You can preview the production build with `npm run preview`.



## 🛠️ Project Structure

```text
mutans/
├── src/
│   ├── lib/          # Reusable components and logic
│   ├── routes/       # File-based routing (pages & API)
│   ├── app.d.ts      # TypeScript definitions
│   └── app.html      # HTML entry point
├── static/           # Static assets (images, fonts, etc.)
├── svelte.config.js  # SvelteKit configuration
└── vite.config.ts    # Vite configuration

```

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.