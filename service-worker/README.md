https://github.com/vite-pwa/vite-plugin-pwa/issues/35#issuecomment-797942573

Until there is a decent plugin for making an app a PWA for Vite, I'm completely rolling my own service worker and compiling it separately from Vite

The following npm packages were added to support this process and can be removed once there is better support:
"@babel/core": "^7.0.0",
"@babel/preset-env": "^7.22.20",
"@rollup/plugin-babel": "^6.0.4",
"@rollup/plugin-commonjs": "^25.0.5",
"@rollup/plugin-node-resolve": "^15.2.3",
"@rollup/plugin-replace": "^5.0.3",
"@rollup/plugin-terser": "^0.4.4",
