const checkSession = (req, res, next) => {
  try {
    const { headers } = req;
    if (!headers) {
      return res.status(401).json({ error: "la peticion no tiene headers" });
    }
    const headerAuth = headers.authorization || null;
    if (!headerAuth) {
      return res.status(401).json({ error: "no tienes autorizacion" });
    }

    // token Bearer [token]
    const token = headerAuth.split(" ").pop(); // token

    if (!token) {
      return res.status(401).json({ error: "no tienes token" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { checkSession };
