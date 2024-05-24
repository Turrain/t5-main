import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
    },
    build: {
        lib: {
            entry: 'src/main.tsx',
            name: 'ModuleComponent',
            fileName: (format) => `module-component.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
