const multer = require('multer')
const mkdirp = require('mkdirp')
const fs = require('fs');

const getDirImage = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDay();
    return `./app/public/uploads/images/${year}/${month}/${day}`
}

const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = getDirImage()
        mkdirp(dir, () => {
            cb(null, dir)
        })

    },
    filename: (req, file, cb) => {
        let filePath = getDirImage() + "/" + file.originalname;
        if (!fs.existsSync(filePath))
            cb(null, file.originalname)
        else
            cb(null, Date.now() + "" + file.originalname)
    }
})
const uploadImage = multer({
    storage: ImageStorage
});


module.exports = uploadImage;