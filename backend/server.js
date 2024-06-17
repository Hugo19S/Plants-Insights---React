// Configuração de um servidor Express com upload de arquivos utilizando Multer.
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const PORT = 3032;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração básica do CORS (permitindo acesso de qualquer origem)
app.use(cors());

// Middleware para servir arquivos estáticos da pasta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware para tratar requisições JSON e formulários enviados via URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let nameFile = "";
// Configuração do armazenamento de arquivos com Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/images'); // Define o diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    const extendFile = file.originalname.split('.')[1];
    const newNameFile = Date.now() + "_" + file.originalname.split('.')[0];
    nameFile = `${newNameFile}.${extendFile}`;
    cb(null, `${newNameFile}.${extendFile}`); // Define o nome do arquivo salvo
  },
});

// Middleware Multer configurado com as opções de armazenamento
const upload = multer({ storage });

// Rota para lidar com o upload de uma única imagem
app.post('/image', upload.single('image'), (req, res) => {
  const file = req.file;
  if (file !== undefined) {
    return res.status(200).send({
      error: false,
      message: 'File uploaded successfully',
      path: `public/images/${req.file.filename}`
    });
  } else {
    return res.status(400).send({
      error: true,
      message: 'File cannot be accepted'
    });
  }
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
