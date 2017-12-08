var req = require.context('./', true, /\.vue$/);
req.keys().forEach(req);