
module.exports = () => {
 // loginRoutes        : require('./admin/auth/login')(router)
  registrationRoutes = require('./admin/auth/registration')
  console.log(registrationRoutes)
  
   // .use('/auth/login', loginRoutes)
 //   .use('/auth/registration', registrationRoutes);
}