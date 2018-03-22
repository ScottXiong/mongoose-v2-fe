var express=require('express')
var app=express()
var mongoose=require('mongoose')
const uri='mongodb://45.32.73.24:27017/scott'
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(uri, options);

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var MyModel = mongoose.model('Test', schema);
app.get('/',(req,res,next)=>{

// Works
MyModel.create({ size: 'small' }, function (err, small) {
  if (err) return  new Error('something is wrong');
  // saved!
})
MyModel.findOne(function(error, result) { console.log('haha'+1) });
	res.send('hello world')
})
app.listen('9999',()=>{
	console.log('serving is runing at 127.0.0.1:9999')
})