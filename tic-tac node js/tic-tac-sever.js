var http = require('http');
var url = require('url');
var fs = require('fs'); //File Server
var dt = require('./myfirstmodule');



http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
  var q = url.parse(req.url, true);
  var p = url.parse(req.url, true).query;
  // console.log(q)
  var filename = "." + q.pathname;
  let filename2 = q.pathname.substring(1);
  // console.log(q.pathname);
  // console.log(filename2);
  // console.log(dt.myDateTime("modol"));
  console.log("p.restart="+p.restart);
  // console.log("p.restart=true");
  // restart
  if (filename2 == 'tic-tac-data.json') {
    console.log("filename2=='tic-tac-data.json'");
    if (typeof p.id == 'undefined' && typeof p.restart == 'undefined') {
      console.log(`p.id= ${p.id}`);
      fs.readFile(filename, function (err, data) {

        if (err) {
          console.log("restart not working");
          res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
          return res.end("404 Not Found");
        }
        console.log("start data working");
        console.log(JSON.parse(data));
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
        res.write(data);
        return res.end();
      });
    }
    else if( p.restart == 'true'){
      console.log("restart working!");

      let restart = JSON.parse(fs.readFileSync("‏‏tic-tac-restart-data.json"));
      fs.writeFileSync(filename2, JSON.stringify(restart, null, 4));

      fs.readFile(filename, function (err, data) {
        if (err) {
          console.log("not god");
          res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
          return res.end("404 Not Found");
        }
        let content = JSON.parse(data);

        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
        res.write(data);

        return res.end();
      });
    }
    else {
      let z = true
      let data1 = JSON.parse(fs.readFileSync(filename2));

      for (let i of data1) {
        console.log(i.id);
        // console.log(toString(i.id));
        if (parseInt(p.id) == i.id) {
          console.log(`found the id ${i.id}`);
          data1[i.id - 1].activate = z
          data1[i.id - 1].playr = p.playr
        }
      }
if(dt.myDateTime(data1,p.playr)){console.log("win win win");
let find_playr = JSON.parse(fs.readFileSync("profile.json"));
for (let index = 0; index < find_playr.length; index++) {
  if(find_playr[index].name==p.name){
    find_playr[index].wins++
    fs.writeFileSync("profile.json", JSON.stringify(find_playr, null, 4));
  }
}

}
else {console.log("continu");}
      fs.writeFileSync(filename2, JSON.stringify(data1, null, 4));

      console.log("updet working");
      console.log(data1);
      console.log(`p.id:${p.id}`);
      console.log(`p.playr:${p.playr}`);
      console.log(`activate:${z}`);

      fs.readFile(filename, function (err, data) {
        if (err) {
          console.log("not god");
          res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
          return res.end("404 Not Found");
        }
        let content = JSON.parse(data);

        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
        res.write(data);

        // console.log(content);

        return res.end();
      });
    }
  } else if (filename2 == 'profile.json') {
    console.log("profile working!");
    
    if (typeof p.name == 'undefined') {
      console.log(`p.id= ${p.id}`);
      fs.readFile(filename, function (err, data) {

        if (err) {
          console.log("restart not working");
          res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
          return res.end("404 Not Found");
        }
        console.log("start profile working");
        console.log(JSON.parse(fs.readFileSync(filename2)));
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
        res.write(data);
        return res.end();
      });
    }
    else {
      let data1 = JSON.parse(fs.readFileSync(filename2));
      let object1 = { "name": p.name, "code": p.code, "wins": 0 }
      data1.push(object1)

      fs.writeFileSync(filename2, JSON.stringify(data1, null, 4));

      fs.readFile(filename, function (err, data) {

        if (err) {
          console.log("restart not working");
          res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
          return res.end("404 Not Found");
        }
        console.log("updet profile working");
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", });
        res.write(data);
        return res.end();
      });
    }
    
  }
}).listen(8080);


// function checkwin(d){
//   if(d[0])
// }

//   if(typeof q.year == 'undefined'){txt="aaaa"}
//   res.end();

// this.http.get(`http://127.0.0.1:8080/todo.json
// 
// http://localhost:8080/list.json
// 


// 
// 


// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


