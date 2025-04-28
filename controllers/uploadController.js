const File = require('../models/file');

const uploadController = {
    uploadSingleFile: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            const filePath = req.file.path;

            const newFile = new File({
                name: req.file.filename,
                path: filePath,
                type: req.file.mimetype,
                size: req.file.size,
            });

            await newFile.save();

            return res.status(200).json({
                message: 'File uploaded successfully',
                newFile
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading file', error });
        }

    }
}

module.exports = uploadController;