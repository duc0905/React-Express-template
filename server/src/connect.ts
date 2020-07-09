import mongoose from 'mongoose';

type TInput = {
  db: string;
  test?: boolean;
}

export default ({
  db,
  test = false
}: TInput) => {
  const connect = () => {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
  connect();

  mongoose.connection.once('open', () => {
    if (!test) {
      console.log('Connected to MongoDB');
    }
  });

  return disconnect;
}

const disconnect = async () => {
  await mongoose.connection.close();
}