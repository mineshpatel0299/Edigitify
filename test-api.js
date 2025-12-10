// Test the Next.js API endpoint directly
async function testAPI() {
  console.log('🧪 Testing Contact API Endpoint...\n');

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    message: 'This is a test message from the API test script.',
  };

  try {
    console.log('📤 Sending request to API...');
    console.log('Data:', testData);

    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('\n📥 Response Status:', response.status);
    const data = await response.json();
    console.log('Response Data:', data);

    if (response.ok) {
      console.log('\n✅ API test successful!');
      console.log('Check info@edigitify.com for the test email.');
    } else {
      console.log('\n❌ API test failed!');
      console.log('Error:', data.error);
      if (data.details) {
        console.log('Details:', data.details);
      }
    }
  } catch (error) {
    console.error('\n❌ Request failed:', error.message);
    console.log('\nMake sure your Next.js dev server is running on port 3000');
    console.log('Run: npm run dev');
  }
}

testAPI();
