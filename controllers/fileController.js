const path = require('path');
const File = require('../models/file');

const fileController = {
    viewFile: async (req, res) => {
        try {
            const { fileId } = req.params;

            const file = await File.findById(fileId);

            const filePath = path.join(__dirname, '../uploads', file.name);

            res.sendFile(filePath);
        } catch (error) {
            return res.status(500).json({
                message: 'Error retrieving file',
                error: error.message,
            });
        }
    }
}

module.exports = fileController;