import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/KarhikShekar_Client_Final_draft/',
    plugins: [
      react({
        exclude: /node_modules/,
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      minify: 'esbuild',
      esbuildOptions: {
        drop: ['console', 'debugger'],
      },
      // Enable code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks
            'react-vendor': ['react', 'react-dom'],
            'mui-vendor': ['@mui/material', '@mui/icons-material'],
            'animation-vendor': ['motion', 'gsap'],
            'three-vendor': ['three'],
          },
          // Optimize chunk file names
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
      // Enable source maps for production debugging (optional)
      sourcemap: false,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      // Enable compression
      middlewareMode: false,
    },
    optimizeDeps: {
      // Pre-bundle dependencies for faster dev startup
      include: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/icons-material',
        'motion',
        'gsap',
      ],
    },
    // Enable performance hints
    performance: {
      hints: 'warning',
    },
  };
});
