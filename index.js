// const fs=require('fs')
// const textIn=fs.readFileSync("mytext.txt",'utf-8');
// console.log(textIn);         //synchronous
// const textOut = `This  is what we know ${textIn}`;
// fs.writeFileSync("output.txt",textOut)
// console.log("written");

// const fs=require('fs');
// fs.readFile('mytext.txt','utf-8',(err,data)=>{
//     console.log(data);   //Asynchronous
// })
// console.log("Hello");

// const fs=require('fs');
// const http=require('http');
// const url=require('url');
// const slug=require('slugify');

// const data=fs.readFileSync(`${__dirname}/data.json`,'utf-8');
// const dataObj=JSON.parse(data);

// console.log(slug('Fresh Avacardos',{lower:true}),"here is my slug");
// const server = http.createServer((req,res)=>{
//     const pathName=req.url;
//    if(pathName==="/" || pathName==="/overview")
//    {
//     res.end('this is the overview')
//    }
//    else if(pathName==='/product')
//    {
//     res.end('this is product')
//    }
//    else if(pathName==='/api')
//    {
//     console.log(dataObj,"here is my dataObj");
//     res.writeHead(200,{
//         "Content-type":'application/json'
//     })
//     res.end(data);
//    }
//    else{
//     res.writeHead(404,{
//         'Content-type': 'text/html',
//         'my-own-header' : 'hello world'
//     })
//     res.end('<h1>Page not found</h1>');
//    }
// });
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listenning');
// })

// const fs = require('fs');

// setTimeout(()=>console.log("Timer 1 finished"),0);
// setTimeout(()=>console.log("Timer 2 finished"),3000);

// setImmediate(()=>console.log("Immediate 1 finished"));

// fs.readFile('text-file.txt',()=>{
//     console.log('I/O Finished');
// })

// console.log('Top level code');

// const http=require('http');
// const EventEmitter=require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("newSale",()=>{
//     console.log("There was a new sale");
// })

// myEmitter.on("newSale",()=>{
//     console.log("Customer name jonas");
// })

// myEmitter.emit("newSale");

// const server=http.createServer();

// server.on("request",(req,res)=>{
//     console.log("Request received");
//     res.end("Request received");
// })

// server.on("request",(req,res)=>{
// console.log("another request");
// })

// server.on("close",(req,res)=>{
//     console.log("server closed");
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("waiting for request");
// })

// const fs = require("fs");
// const server = require("http").createServer();

// server.on("request", (req, res) => {
//   // fs.readFile("mytext.txt",(err,data)=>{
//   //     if(err)
//   //     console.log(err);
//   //     res.end(data);
//   // })   // solution-1

// //   const readable = fs.createReadStream("mytext.txt");
// //   readable.on("data", (chunk) => {
// //     res.write(chunk);
// //   });
// //   readable.on("end",()=>{
// //     res.end();
// //   })
// //   readable.on("error",(err)=>{
// //     console.log(err);
// //     res.statusCode(500);
// //     res.end("file not found");
// //   })    //solution-2

// const readable=fs.createReadStream("mytext.txt");
// readable.pipe(res);

// });

// server.listen("8000", "127.0.0.1", () => {
//   console.log("Listening....");
// });

// const Calc = require('./test-module-1')

// const calc1 = new Calc();
// console.log(calc1.add(2,5));

// const Calc2=require('./test-module-2');

// console.log(Calc2.add(576,686));

//--------------------------------------------------call backs
// const fs = require("fs");
// const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//         if(err) return console.log(err.message);
//       console.log(res.body.message);
//       fs.writeFile('dog-img.txt',res.body.message,err=>{
//         console.log('Random dog image saved to file');
//       })
//     });
// });

//--------------------------------------------------Promise--------------------

// const fs = require("fs");
// const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`).then(res =>{
//         if(err) return console.log(err.message);
//         console.log(res.body.message);
//         fs.writeFile('dog-img.txt',res.body.message,err=>{
//           console.log('Random dog image saved to file');
//         })
//     }).catch(err=>console.log(err.message))
// });

//----------------------------------------------Building a promise-------------------------

// const fs = require("fs");
// const superagent = require("superagent");

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject(err);
//       resolve("success");
//     });
//   });
// };

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed : ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     return writeFilePro("dog-img-txt", res.body.message);
//   })
//   .then(() => {
//     console.log("Random dog image saved to file!");
//   })
//   .catch((err) => console.log(err.message));

//-----------------------------------------------------Async Await--------------------------------------------------

// const fs = require("fs");
// const superagent = require("superagent");

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject(err);
//       resolve("success");
//     });
//   });
// };

// const getDogPic = async () => {
//     try{
//         const data = await readFilePro(`${__dirname}/dog.txt`);
//         console.log(`Breed : ${data}`);
//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         console.log(res.body.message);
//         await writeFilePro("dog-img-txt", res.body.message);
//         console.log("Random dog image saved to file!");
//     }catch (err){
//     console.log(err);
//     }
// }

// getDogPic();

//----------------------------------------------------------All Promises----------------------------------------------

// const fs = require("fs");
// const superagent = require("superagent");

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject(err);
//       resolve("success");
//     });
//   });
// };

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed : ${data}`);
//     const res1Pro = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res2Pro = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res3Pro = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
//     const imgs = all.map((elem) => {
//       return elem.body.message;
//     });
//     console.log(imgs.join('\n'));
//     await writeFilePro("dog-img-txt", imgs.join("\n"));
//     console.log("Random dog image saved to file!");
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDogPic();

//------------------------------------------------------------Basic routing with express---------------------------------

// const express = require("express");

// const app=express();

// app.get('/',(req,res)=>{
// //   res.status(200).send("Here is my server")
// res.status(200).json({message:"Hello there brother",app:"value"})
// })

// app.post('/',(req,res)=>{
//     res.status(200).send("Posted")
// })

// const port = 3000;

// app.listen(port,()=>{
//     console.log("App running on port");
// })

//------------------------------------------------------------Handling get request---------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status:"success",
//     result:tours.length,
//     data:{
//         tours:tours
//     }
//   });
// });

// app.post("/api/v1/tours",(req,res)=>{

// })

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//------------------------------------------------------------Handling post request---------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status:"success",
//     result:tours.length,
//     data:{
//         tours:tours
//     }
//   });
// });

// app.post("/api/v1/tours",(req,res)=>{
//      const newId = tours[tours.length-1].id+1;
//      const newTour = Object.assign({id:newId}, req.body);
//      tours.push(newTour);
//      fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             data:{
//                 tour:newTour
//             }
//         }
//        )
//      })
// })

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//------------------------------------------------------------Respond to URL Parameter---------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status:"success",
//     result:tours.length,
//     data:{
//         tours:tours
//     }
//   });
// });

// app.post("/api/v1/tours",(req,res)=>{
//      const newId = tours[tours.length-1].id+1;
//      const newTour = Object.assign({id:newId}, req.body);
//      tours.push(newTour);
//      fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             data:{
//                 tour:newTour
//             }
//         }
//        )
//      })
// })

// app.get(`/api/v1/tours/:id`,(req,res)=>{
//     const id=req.params.id * 1;
//     const tour=tours.find(el=>el.id===id);
//     if(!tour)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         res.status(200).json({
//             status:"success",
//             data:{
//                 tour
//             }
//         })
//     }

// })

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//---------------------------------------------- Handling Patch----------------------------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status:"success",
//     result:tours.length,
//     data:{
//         tours:tours
//     }
//   });
// });

// app.post("/api/v1/tours",(req,res)=>{
//      const newId = tours[tours.length-1].id+1;
//      const newTour = Object.assign({id:newId}, req.body);
//      tours.push(newTour);
//      fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             data:{
//                 tour:newTour
//             }
//         }
//        )
//      })
// })

// app.get(`/api/v1/tours/:id`,(req,res)=>{
//     const id=req.params.id * 1;
//     const tour=tours.find(el=>el.id===id);
//     if(!tour)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         res.status(200).json({
//             status:"success",
//             data:{
//                 tour
//             }
//         })
//     }

// })

// app.patch("/api/v1/tours/:id",(req,res)=>{

//     if(req.params.id *1 > tours.length)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         let newTourObj;
//         for(let i=0;i<tours.length;i++){
//             if(tours[i].id===req.params.id *1){
//             newTourObj = Object.assign({id:req.params.id *1}, req.body);
//                tours[i]=newTourObj;
//             }
//           }

//        fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             data:{
//                 tour:newTourObj
//             }
//         }
//        )
//      })
//     }

// })

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//-------------------------------------------------------------Handling Delete-----------------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status:"success",
//     result:tours.length,
//     data:{
//         tours:tours
//     }
//   });
// });

// app.post("/api/v1/tours",(req,res)=>{
//      const newId = tours[tours.length-1].id+1;
//      const newTour = Object.assign({id:newId}, req.body);
//      tours.push(newTour);
//      fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             data:{
//                 tour:newTour
//             }
//         }
//        )
//      })
// })

// app.get(`/api/v1/tours/:id`,(req,res)=>{
//     const id=req.params.id * 1;
//     const tour=tours.find(el=>el.id===id);
//     if(!tour)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         res.status(200).json({
//             status:"success",
//             data:{
//                 tour
//             }
//         })
//     }

// })

// app.patch("/api/v1/tours/:id",(req,res)=>{

//     if(req.params.id *1 > tours.length)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         let newTourObj;
//         for(let i=0;i<tours.length;i++){
//             if(tours[i].id===req.params.id *1){
//             newTourObj = Object.assign({id:req.params.id *1}, req.body);
//                tours[i]=newTourObj;
//             }
//           }

//        fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             message:"tour updated",
//             data:{
//                 tour:newTourObj
//             }
//         }
//        )
//      })
//     }

// })

// app.delete("/api/v1/tours/:id",(req,res)=>{
//     if(req.params.id *1 > tours.length)
//     res.status(404).json({status:"fail",message:"Id not found"})
//     else {
//         let index;
//         for(let i=0;i<tours.length;i++){
//             if(tours[i].id===req.params.id*1){
//             index=i;
//             }
//           }
//        tours.splice(index,1);
//        fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
//        res.status(201).json(
//         {
//             status:"success",
//             message:"tour deleted"
//         }
//        )
//      })
//     }
// })

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//-------------------------------------------------Refactor Code ------------------------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// };

// const getTourById = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id);
//   if (!tour) res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     res.status(200).json({
//       status: "success",
//       data: {
//         tour,
//       },
//     });
//   }
// };

// const postTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     let newTourObj;
//     for (let i = 0; i < tours.length; i++) {
//       if (tours[i].id === req.params.id * 1) {
//         newTourObj = Object.assign({ id: req.params.id * 1 }, req.body);
//         tours[i] = newTourObj;
//       }
//     }

//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       (err) => {
//         res.status(201).json({
//           status: "success",
//           message: "tour updated",
//           data: {
//             tour: newTourObj,
//           },
//         });
//       }
//     );
//   }
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     let index;
//     for (let i = 0; i < tours.length; i++) {
//       if (tours[i].id === req.params.id * 1) {
//         index = i;
//       }
//     }
//     tours.splice(index, 1);
//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       (err) => {
//         res.status(201).json({
//           status: "success",
//           message: "tour deleted",
//         });
//       }
//     );
//   }
// };

// app.route("/api/v1/tours").get(getAllTours).post(postTour);
// app.route('/api/v1/tours/:id').get(getTourById).patch(updateTour).delete(deleteTour);

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//------------------------------------------Creating out ow middleware---------------------------------------------------

// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// app.use((req,res,next)=>{
//     console.log("Hello from middleware");
//     next();
// })

// app.use((req,res,next)=>{
//    req.requestTime = new Date().toISOString();
//    next();
// })

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     requestedAt:req.requestTime,
//     data: {
//       tours: tours,
//     },
//   });
// };

// const getTourById = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id);
//   if (!tour) res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     res.status(200).json({
//       status: "success",
//       data: {
//         tour,
//       },
//     });
//   }
// };

// const postTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     let newTourObj;
//     for (let i = 0; i < tours.length; i++) {
//       if (tours[i].id === req.params.id * 1) {
//         newTourObj = Object.assign({ id: req.params.id * 1 }, req.body);
//         tours[i] = newTourObj;
//       }
//     }

//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       (err) => {
//         res.status(201).json({
//           status: "success",
//           message: "tour updated",
//           data: {
//             tour: newTourObj,
//           },
//         });
//       }
//     );
//   }
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     res.status(404).json({ status: "fail", message: "Id not found" });
//   else {
//     let index;
//     for (let i = 0; i < tours.length; i++) {
//       if (tours[i].id === req.params.id * 1) {
//         index = i;
//       }
//     }
//     tours.splice(index, 1);
//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       (err) => {
//         res.status(201).json({
//           status: "success",
//           message: "tour deleted",
//         });
//       }
//     );
//   }
// };

// app.route("/api/v1/tours").get(getAllTours).post(postTour);
// app.route('/api/v1/tours/:id').get(getTourById).patch(updateTour).delete(deleteTour);

// const port = 3000;

// app.listen(port, () => {
//   console.log("App running on port");
// });

//-------------------------------------Code with error handling-----------------------------------------------

const express = require("express");
const morgan=require("morgan");
const rateLimit = require('express-rate-limit');
const helmet = require ("helmet");
const mongoSanitize =require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp=require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter=require("./routes/tourRoutes");
const userRouter=require("./routes/userRoutes")
const app = express();
//1) GLOBAL Middlewares

//Set security HTTP header
app.use(helmet());

//development logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour' 
})

app.use('/api',limiter);

//Body parser, reading data from body into req.body
app.use(express.json());

//Data sanitization against NoSql query injection

app.use(mongoSanitize());

//Data sanitzation against XSS

app.use(xss());


//simple middleware
app.use((req,res,next)=>{
    next();
})

//Prevent Parameter pollution

app.use(hpp());

//test middleware
app.use((req,res,next)=>{
   req.requestTime = new Date().toISOString();
   next();
})

//3) Routes

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter); 

app.all('*',(req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`,404));
})

app.use(globalErrorHandler)
module.exports=app;


// const [backgroundUrl , setBackgroundUrl] = useState(""); //initially default value dal dena jo chahiye

// const imageName =()=>{
//     switch(location.pathname){
//         case '/sign-in': setBackgroundUrl("url(/img/.........)")
//     }
// }

// useEffect(()=>{
// imageName();
// },[location])

// <div style = {{background : backgroundUrl}}>......</>