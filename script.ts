async function generateCode() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
  
    if (input.trim() === '') {
      output.textContent = 'Please enter a description.';
      return;
    }
  
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: input,
        max_tokens: 150,
      }),
    });
  
    const data = await response.json();
    if (data.choices && data.choices[0].text) {
      output.textContent = data.choices[0].text.trim();
    } else {
      output.textContent = 'Error generating code. Try again!';
    }
  }
  