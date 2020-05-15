const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var tasks=[];
tasks.push("Buy food");
tasks.push("Cook food");
tasks.push("Eat food");
var workTasks=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.post("/work",function(req,res)
{
  var task=req.body.todo;
  workTasks.push(task);
  res.redirect("/work");
})
app.post("/",function(req,res)
{
  var task=req.body.todo;
  tasks.push(task);
  res.redirect("/");
})
app.get("/work",function(req,res)
{
  res.render("list",{listTitle:'Work',nextItem:workTasks});
})
app.get("/about",function(req,res)
{
  res.render("about");
})
app.get("/",function(req,res)
{
//   var weekday = new Array(7);
// weekday[0] = "Sunday";weekday[1] = "Monday";weekday[2] = "Tuesday";weekday[3] = "Wednesday";
// weekday[4] = "Thursday";weekday[5] = "Friday";weekday[6] = "Saturday";
  var today=new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day=today.toLocaleDateString("en-US", options);
  res.render("list",{listTitle:day,nextItem:tasks});
})
app.listen(3000,function()
{
  console.log("server started at port 3000");
})
