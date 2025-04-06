async function generateCode() {
    console.log('Generate Code button clicked!');  // Debugging line to check if the function is being called
  
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    const loading = document.getElementById('loading');
    
    if (input.trim() === '') {
      output.textContent = 'Please enter a description.';
      return;
    }
  
    loading.style.display = 'block';  // Show loading spinner
  
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,  // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          model: 'text-davinci-003',  // You can use other models like 'gpt-4' as well
          prompt: input,
          max_tokens: 150,
        }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      loading.style.display = 'none';  // Hide loading spinner
  
      if (data.choices && data.choices[0].text) {
        output.textContent = data.choices[0].text.trim();
      } else {
        output.textContent = 'Error generating code. Try again!';
      }
    } catch (error) {
      loading.style.display = 'none';  // Hide loading spinner
      output.textContent = `Error: ${error.message}`;
    }
  }
  
  function clearInput() {
    document.getElementById('input').value = '';  // Clear input field
    document.getElementById('output').textContent = '';  // Clear output field
  }
  