module.exports = (router) => {
  console.log("Router : ",router)
  router
    .get("/",function(req,res){
      res.send(JSON({"Message":"Get Reg"}))
    })
    .post("/",function(req,res){
      res.send(JSON({"Message":"Post Reg"}))
    })
}