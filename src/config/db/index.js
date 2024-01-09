

const mongoose = require('mongoose')
const URL = 'mongodb+srv://tuankiri71:twBgMPZ1xQNsMF8O@kiritokun.giomxzb.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
  try {
    await mongoose.connect(
      URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = { connect };
