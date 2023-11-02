// Cette ligne importe le module path, qui est utilisé pour gérer les chemins de fichiers et de répertoires dans Node.js.
const path = require("path");
// Cette ligne importe le module multer, qui est un middleware Node.js pour gérer le téléchargement de fichiers, y compris les images.
const multer = require("multer");

// Cette partie configure le stockage des fichiers téléchargés. Plus précisément, elle utilise le type de stockage diskStorage de Multer, ce qui signifie que les fichiers téléchargés seront stockés sur le disque dur du serveur.
// La configuration spécifie le répertoire de destination où les fichiers seront enregistrés et le nom du fichier à enregistrer. Le nom du fichier comprend le nom du champ de fichier (file.fieldname), un timestamp (Date.now()), et l'extension du fichier d'origine (path.extname(file.originalname)).
const fileStorage = multer.diskStorage({
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname));
    }
})

// Cette partie configure l'instance Multer pour le téléchargement de fichiers. Elle utilise la configuration de stockage fileStorage définie précédemment. De plus, elle définit des limites, en particulier une limite de taille maximale de fichier de 1 000 000 octets (1 Mo) et un filtre de fichier qui autorise uniquement les fichiers avec les extensions .png et .jpg.
const uploadImage= multer({
    storage:fileStorage,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("Please upload un jpg ou png batard"));
        }
        cb(undefined, true);
        }
    })

    module.exports = {fileStorage , uploadImage}