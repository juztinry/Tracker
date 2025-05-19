const { createClient } = require('@supabase/supabase-js');

// Supabase credentials
const supabaseUrl = 'https://aclysbcubdevqwkkrmrp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbHlzYmN1YmRldnF3a2tybXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYxMjksImV4cCI6MjA2MzIxMjEyOX0.tRm1LJD8aHpCC4r2Ekd4BsfMulK-1fHCOIWsEAiy_QU';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// User credentials - you can change these
const email = 'testuser@gmail.com';
const password = 'Password123!';
const name = 'Test User';

async function createUser() {
  try {
    console.log(`Creating user with email: ${email}`);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      console.error('Error creating user:', error.message);
      return;
    }

    console.log('User created successfully!');
    console.log('User ID:', data.user.id);
    console.log('Email:', data.user.email);
    console.log('Name:', data.user.user_metadata.name);

    // Check if email confirmation is required
    if (data.user.identities && data.user.identities.length === 0) {
      console.log('Email confirmation is required. Please check your email inbox.');
    } else {
      console.log('User is ready to log in.');
    }

  } catch (error) {
    console.error('Unexpected error:', error.message);
  }
}

// Run the function
createUser();
