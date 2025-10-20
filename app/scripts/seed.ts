import { MongoClient } from 'mongodb';
import { users, invoices, customers, revenue } from '../lib/placeholder-data';

const uri = 'mongodb+srv://broaju52_db_user:LgzEC9NIyeZdIPOO@clusterdashboard.crakmu3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDashboard'

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Add TLS options to fix the SSL error
const client = new MongoClient(uri);

async function seedDatabase(): Promise<void> {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');
    
    const db = client.db();
    
    // Create collections and insert data
    await db.collection('users').insertMany(users);
    await db.collection('invoices').insertMany(invoices);
    await db.collection('customers').insertMany(customers);
    await db.collection('revenue').insertMany(revenue);
    
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);