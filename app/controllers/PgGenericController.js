const   
  jwt = require('jsonwebtoken'),
  { promisify } = require('util'),
  User = require('./../models/UserModel'),
  catchAsync = require('../utils/CatchAsync'),
  config = require('../utils/CustomRest');
  
//get all 
exports.getAll = (Model, filter) => catchAsync(async(req, res) => {

  let docs = await Model.find(filter);
  res.json(config.rest.createResponse(200, true, docs));
  
});  

//get all byId
exports.getAllById = (Model, filter) => catchAsync(async(req, res) => {

  // Get currentUserId
  const token = req.cookies.jwt;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  currentUser = await User.findById(decoded.id);
  const iduser = currentUser.iduser
  
  // const doc = await Model.create({iduser, ...req.body});

  let docs = await Model.findAllById(iduser);
  res.json(config.rest.createResponse(200, true, docs));
  
});  

// get one by id
exports.getOneById = (Model, populateOpts) => catchAsync(async (req, res) => { 

  let query = await Model.findById(req.params.id);
  if(populateOpts) query = query.populate(populateOpts).execPopulate(); 

  const doc = await query; 
  res.json(config.rest.createResponse(200, true, doc));
  
});
 
// get one (generic)
exports.getOne = (Model, populateOpts) => catchAsync(async (req, res) => {

  console.log(req.body);
  let query = await Model.findOne(req.body);
  if(populateOpts) query = query.populate(populateOpts).execPopulate(); 

  const doc = await query;
  res.json(config.rest.createResponse(200, true, doc));
  
});

// get many (generic)
exports.find = (Model, populate, opts) => catchAsync(async(req, res) => {

  let docs; 
  let popOpts = { _id: 0 };

  if(opts) {
      popOpts = JSON.parse(opts);
  }

  if(populate) {
      docs = await Model.find(req.body).populate(populate, popOpts); 
  } else {
      docs = await Model.find(req.body);
  }
  res.json(config.rest.createResponse(200, true, docs));
    
});


// create one
exports.create = (Model) => catchAsync(async(req, res) => { 

  // Get currentUserId
  const token = req.cookies.jwt;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  currentUser = await User.findById(decoded.id);
  const iduser = currentUser.iduser    

  // Add data with user id
  const doc = await Model.create({iduser, ...req.body});
  res.json(config.rest.createResponse(201, true, doc));  
   
});

// update one 
exports.updateOne = (Model) => catchAsync(async(req, res) => {
  // Get currentUserId
  const token = req.cookies.jwt;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  currentUser = await User.findById(decoded.id);
  const iduser = currentUser.iduser

  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.json(config.rest.createResponse(200, true, doc));
     
});


// delete one by id 
exports.deleteOne = (Model) => catchAsync(async(req, res) => {

  await Model.findByIdAndDelete(req.params.id);
  res.json(config.rest.createResponse(204, true, 'Success'));
  
});

// upsert one 
// exports.upsert = (Model) => catchAsync(async(req, res) => {
//   const doc = await Model.findOneAndUpdate(
//     req.filter, 
//     req.body, 
//     {
//         upsert: true,
//         new: true
//     });
//     res.json(config.rest.createResponse(201, true, doc)); 
//         
// })
 



// push one 
// exports.pushOne = (Model) => catchAsync(async(req, res) => {
// 
//   const doc = await Model.findByIdAndUpdate(req.params.id, 
//       { $push: req.body }, 
//       {  new: true });
//   res.json(config.rest.createResponse(200, true, doc));
//   
// });
 
// add to set 
// exports.addToSet = (Model) => catchAsync(async(req, res) => {
// 
//   const doc = await Model.findByIdAndUpdate(req.params.id, 
//    { $addToSet: req.body },
//    {  new: true });
// 
//   res.json(config.rest.createResponse(200, true, doc));
//     
// })




// delete all
exports.deleteMany = (Model) => catchAsync(async(req, res) => {

    console.log(req.body);
    await Model.deleteMany(req.body); 
    res.json(config.rest.createResponse(204, true, 'Success'));

});

// paginate
exports.paginate = (Model) => catchAsync(async(req, res) => {

    const docs = await Model.paginate({ house: req.params.houseId, room: req.params.room }, 
                                    { offset: req.query.offset, limit: req.query.limit });
    res.json(config.rest.createResponse(200, true, docs));
    
});

