# Hugo Modal React Playground

This directory contains a React playground that runs inside your Hugo site's modal.

## Structure

```
modal-react/
├── src/
│   ├── index.js          # Entry point, exports to window
│   └── ModalContent.jsx  # Your React component
├── package.json          # Dependencies
├── webpack.config.js     # Build configuration
└── README.md            # This file
```

## Development

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Build for production**:
   ```bash
   npm run build
   ```

3. **Development mode** (watches for changes):
   ```bash
   npm run dev
   ```

## How it works

- Your React component gets bundled into `/static/js/modal-react.js`
- The modal loads React from CDN, then loads your bundle
- Your component renders inside the modal when opened

## Customizing

Edit `src/ModalContent.jsx` to build whatever you want! You have full access to:
- React 18
- Ant Design components
- Any other npm packages you install

After making changes, run `npm run build` to update the bundle.

## Current Component

Right now it just shows "Hello World!" - your playground awaits! 🎉
