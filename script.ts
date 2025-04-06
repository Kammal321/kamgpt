function generateCode() {
    const input = document.getElementById('input').value.toLowerCase();
    const output = document.getElementById('output');
  
    let code = "Sorry, I can't generate that yet.";
  
    if (input.includes("hello world")) {
      code = `print("Hello, World!")`;
    } else if (input.includes("factorial")) {
      code = `def factorial(n):\n  return 1 if n == 0 else n * factorial(n - 1)\n\nprint(factorial(5))`;
    } else if (input.includes("fibonacci")) {
      code = `def fibonacci(n):\n  a, b = 0, 1\n  for _ in range(n):\n    print(a, end=" ")\n    a, b = b, a + b\n\nfibonacci(10)`;
    } else if (input.includes("calculator")) {
      code = `def add(x, y): return x + y\nprint("Sum:", add(2, 3))`;
    } else if (input.includes("even odd")) {
      code = `num = int(input("Enter number: "))\nif num % 2 == 0:\n  print("Even")\nelse:\n  print("Odd")`;
    }
  
    output.textContent = code;
  }
  