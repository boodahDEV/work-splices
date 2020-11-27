const { Router } = require("express");
const router = new Router();
const database = require('../config/database')
const { v4: uuidv4 } = require('uuid');


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
      equipo: new Array(),
      ideas: new Array(),
      comentarios: new Array(),
      proyectos: new Array(),
      donaciones: new Array(),
      configuraciones: new Array(),
      indice,
      num_recibo,
      is_validate: false,
      fecha_creacion
    }).then(respuesta => {
      console.log(`[\x1b[32m Register by '${name}'\x1b[0m] -> \x1b[44mdata create on firestore!\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
      res.status(200).send(respuesta)
    }).catch(err => {
      res.status(200).send({
        status: "error",
        info: err.message
      })
    })
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })

}); // fin de la ruta /signup


router.post("/login", async (req, res) => { // Finds the validation errors in this request and wraps them in an object with handy functions
  const {
    email,
    password
  } = req.body;

  await database.doSignInWithEmailAndPassword(email, password).then(resp => {
    if (resp.user.emailVerified == false) {
      res.status(200).send({
        status: "error",
        info: "Error, favor de validar el correo antes!"
      })
    } else {
      res.status(200).send({
        email: resp.user.email,
        emailValidate: resp.user.emailVerified,
        uid: resp.user.uid,
      })
    }
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })

}); // fin de /signup

router.get('/faculty', (req, res) => { // ESTA URL RETORNA TODAS LAS FACULTADES REGISTRADA EN EL SISTEMA
  database.firestore.collection('FACULTAD').get().then(respuesta => {
    var objeto = []
    respuesta.forEach(i => {
      objeto.push([i.id, i.data().nombre_facultad, i.data().limite_fondos])
    })
    console.log("[\x1b[32m Get data from '/FACULTAD'\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.");
    res.send(objeto)
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.get("/projects/:id", async (req, res) => { // ESTA URL ES PARA TRAER proyectos en especifico
  // AQUI ES PARA CARGAR A LA BASE DE DATOS UN BUFFER DE PRODUCTOS.
  let datos = {}
  database.firestore.collection('PROYECTO').doc(req.params.id).get().then(resp => {
    console.log(`[\x1b[32m Get data from ['${req.params.id}']\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    datos = resp.data()
    res.status(200).send(datos)
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.get("/projects/", async (req, res) => { // ESTA URL ES PARA TRAER todos los proyectos
  database.firestore.collection('PROYECTO').get().then(resp => {
    console.log(`[\x1b[32m Get data from '/PROYECTO'\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    var objeto = []
    resp.forEach(i => {
      objeto.push([i.id, i.data()])
    })
    res.status(200).send(objeto)
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.post("/projects", async (req, res) => {
  let uid = "PRO-"+ uuidv4();
  database.firestore.collection('PROYECTO').doc(""+uid).set(req.body).then(resp => {
    console.log(`[\x1b[32m Create PROJECT by [${req.body.id_creador}]\x1b[0m] -> \x1b[44mdata create on firestore!\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    res.status(200).send({
      status: "ok",
      info: "El proyecto fue creador con exito!",
      uid: uid
    })
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })

})

router.put("/user-info/:id", async (req, res) => {
  database.firestore.collection('ESTUDIANTES').doc(req.params.id).update(req.body).then(resp => {
    console.log(`[\x1b[32m Update data to user [${req.params.id}]\x1b[0m] -> \x1b[44mdata update\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    res.status(200).send({
      status: "ok",
      info: "Tus datos fueron actualizados con exito!"
    })
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.post("/teams", async (req, res) => { // ESTA URL ES PARA TRAER TODOS LOS proyectos ALMACENADOS

  database.firestore.collection('EQUIPO').get().then(resp => {
    var objeto = []
    resp.forEach(x => {
      objeto.push([x.id, x.data().nombre,
      x.data().ideas,
      x.data().proyectos,
      x.data().integrantes,
      x.data().id_lider_equipo,
      x.data().fecha_creacion
      ])
    })
    console.log(`[\x1b[32m Get all data from EQUIPOS\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    res.status(200).send(objeto)
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.post("/idea/:id", async (req, res) => { // ESTA URL ES PARA TRAER ideas en especifico

})
router.post("/idea", async (req, res) => { // ESTA URL ES PARA TRAER TODOS Las ideas disponible ALMACENADOS

})

router.put("/projects/:id", (req, res) => { // ESTA ACTUALIZA LA INFO DE UN PRODUCTOS EN ESPECIFICO

})

router.get("/user-info/:id", (req, res) => {
  // AQUI ES PARA CARGAR A LA BASE DE DATOS UN BUFFER DE PRODUCTOS.
  let datos = {}
  database.firestore.collection('ESTUDIANTES').doc(req.params.id).get().then(resp => {
    console.log(`[\x1b[32m Get data from ['${req.params.id}']\x1b[0m] -> \x1b[44mdata extracted\x1b[0m -> \x1b[33mSuccessfully\x1b[0m.`);
    datos = resp.data()
    res.status(200).send(datos)
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})

router.get("/logout", (req, res) => {
  database.doSignOut().then(resp => {
    res.status(200).send({ status: resp })
  }).catch(err => {
    res.status(200).send({
      status: "error",
      info: err.message
    })
  })
})
module.exports = router; // al final exporto las rutas al index principal
