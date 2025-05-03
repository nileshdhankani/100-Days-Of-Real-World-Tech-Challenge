const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === "ValidationError") {
        const formatted = {};
        for (let field in err.errors) {
            formatted[field] = err.errors[field].message;
        }
        return res.status(400).json({ error: "Validation Failed", details: formatted });
    }

    res.status(500).json({
        error: err.message || "Server Error",
    });
};

module.exports = errorHandler;
