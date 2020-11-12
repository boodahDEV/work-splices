const { Router } = require("express");
const router = new Router();
const database = require('../config/database')


router.post("/register", async (req, res) => {
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
    fecha_creacion,
    password
  } = req.body;
  database.doCreateUserWithEmailAndPassword(email, password).then(resp => {
    console.log(`[\x1b[32m Register by '${name}'\x1b[0m] -> \x1b[44mdata create on auth!\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    resp.user.sendEmailVerification();
    database.firestore.collection('ESTUDIANTES').doc('' + resp.user.uid).set({
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
      is_validate: false,
      fecha_creacion
    }).then(respuesta => {
      console.log(`[\x1b[32m Register by '${name}'\x1b[0m] -> \x1b[44mdata create on firestore!\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
      res.status(200).send(respuesta)
    }).catch(err => {
      res.status(422).send({ status: err })
    })
  }).catch(err => {
    res.status(422).send({ status: err })
  })

}); // fin de la ruta /signup


router.post("/login", async (req, res) => { // Finds the validation errors in this request and wraps them in an object with handy functions
  const {
    email,
    password
  } = req.body;

  await database.doSignInWithEmailAndPassword(email, password).then(resp => {
    if (resp.user.emailVerified == false) {
      res.status(422).send({ status: "Error, favor de validar el correo antes!" })
    } else {
      res.status(200).send({
        email: resp.user.email,
        emailValidate: resp.user.emailVerified,
        uid: resp.user.uid,
      })
    }
  }).catch(err => {
    res.status(422).send({ status: err })
  })

}); // fin de /signup

router.get('/faculty', (req, res) => { // ESTA URL RETORNA TODAS LAS FACULTADES REGISTRADA EN EL SISTEMA
  database.firestore.collection('FACULTAD').get().then(respuesta => {
    var objeto = []
    respuesta.forEach(i => {
      i.data()
      objeto.push([i.id, i.data().nombre_facultad, i.data().limite_fondos])
    })
    console.log("[\x1b[32m Get data from '/FACULTAD'\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.");
    res.send(objeto)
  })
})

router.post("/projects/:id", async (req, res) => { // ESTA URL ES PARA TRAER proyectos en especifico

})
router.post("/projects", async (req, res) => { // ESTA URL ES PARA TRAER TODOS LOS proyectos ALMACENADOS

})
router.post("/idea/:id", async (req, res) => { // ESTA URL ES PARA TRAER ideas en especifico

})
router.post("/idea", async (req, res) => { // ESTA URL ES PARA TRAER TODOS Las ideas disponible ALMACENADOS

})

router.put("/projects/:id", (req, res) => { // ESTA ACTUALIZA LA INFO DE UN PRODUCTOS EN ESPECIFICO

})

router.get("/user-info/:id", (req, res) => {
  // AQUI ES PARA CARGAR A LA BASE DE DATOS UN BUFFER DE PRODUCTOS.
  database.firestore.collection('ESTUDIANTES').doc(req.params.id).get().then(resp => {
    console.log(`[\x1b[32m Get data from '${req.params.id}'\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    res.status(200).send(resp.data())
  }).catch(err => {
    res.status(422).send({ status: err })
  })
})

module.exports = router; // al final exporto las rutas al index principal
