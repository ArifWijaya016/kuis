function startQuiz() {
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
  
    if (nama && jabatan) {
      localStorage.setItem('nama', nama);
      localStorage.setItem('jabatan', jabatan);
      window.location.href = 'quiz.html';
    } else {
      alert('Mohon isi nama dan jabatan terlebih dahulu.');
    }
  }
  

  // Function to calculate the score and redirect to result.html
  function calculateScore() {
    let score = 0;
  
    // Loop through the dropdowns for each question
    for (let i = 1; i <= 10; i++) {
      const selectedOption = document.getElementById(`jawaban${i}`);
      
      // If an option is selected, add its value to the score
      if (selectedOption) {
        score += parseInt(selectedOption.value);
      }
    }
  
    // Store the score in localStorage
    localStorage.setItem('score', score);
  
    // Redirect to result.html
    window.location.href = 'result.html';
  }
  
  // Function to start the quiz and store name and position in localStorage
  function startQuiz() {
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
  
    if (nama && jabatan) {
      localStorage.setItem('nama', nama);
      localStorage.setItem('jabatan', jabatan);
      window.location.href = 'OJ.html';
    } else {
      alert('Mohon isi nama dan jabatan terlebih dahulu.');
    }
  }
  