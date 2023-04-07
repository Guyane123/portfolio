const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("post", postSchema);
