import bcrypt from 'bcryptjs';
import connectDB from '../lib/mongodb';
import User from '../models/User';
import Section from '../models/Section';
import Product from '../models/Product';
export async function seed() {
  try {
    await connectDB();

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await User.findOneAndUpdate(
      { email: 'admin@shubharambhevents.co.in' },
      {
        email: 'admin@shubharambhevents.co.in',
        password: hashedPassword,
        isAdmin: true,
      },
      { upsert: true }
    );


  } catch (error : any) {
    console.error('Error seeding database:', error);
  }
}

seed();