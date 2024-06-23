import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os';

function getWifiIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    if (name.includes('Wi-Fi') || name.includes('Wireless')) {
      for (const net of interfaces[name]) {
        // Skip over non-ipv4 and internal (i.e., 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
          return net.address;
        }
      }
    }
  }
  return '0.0.0.0';
}

const host = getWifiIp();
console.log('Internal IP:', host);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: host || '0.0.0.0',
    port: 5173
  }
})
