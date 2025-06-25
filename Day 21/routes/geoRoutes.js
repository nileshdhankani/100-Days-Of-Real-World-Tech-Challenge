const express = require('express');
const geoip = require('geoip-lite');

const router = express.Router();

router.get('/location', (req, res) => {
  // Get IP address
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Lookup location
  const geo = geoip.lookup(ip);

  if (!geo) {
    return res.status(404).json({ message: 'Could not determine location' });
  }

  res.json({
    ip,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    ll: geo.ll, // lat/lon
  });
});

module.exports = router;
