const crypto = require("../../helper/crypto");
const database = require('../../config/database')
const secret = require("../../config/config").secret;

async function signup(req, res) {
  const {
    email,
    name,
    lastname,
    year_course,
    carrera,
    CIP,
    nacionalidad,
    facultad,
    indice,
    num_recibo,
    uid,
    fecha_creacion,
    password
  } = req.body;
  database.doCreateUserWithEmailAndPassword(email, password)
   
  // await database.value[0].auth().createUserWithEmailAndPassword(email, password)
  //   .then(resp => {
  //     console.log(`[\x1b[32m Register by ${name}\x1b[0m] -> \x1b[44mdata create\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
  //     resp.user.displayName = name + " " + lastname
  //     res.status(200).send(resp.user);
  //   }).catch(err => {
  //     res.status(422).json({ errors: err.array() });
  //   })

  }
exports.signup = signup;
