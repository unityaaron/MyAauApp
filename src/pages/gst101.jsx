import React from 'react';
import {useState} from 'react';

const GST101Page  = () => {
  // Sample one question
  const question = {
    text: "What is the full meaning of GST?",
    options: {
      A: "General Studies",
      B: "Government School Training",
      C: "Global Standard Test",
      D: "General Student Test",
    },
    correctAnswer: "A",
  };

  // State to store user's selected answer
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to check if user clicked the correct answer
  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="content">
      <h2>Practice Question</h2>
      <p><strong>Q:</strong> {question.text}</p>

      {/* Show all answer options */}
      {Object.entries(question.options).map(([key, value]) => {
        // Decide the background color after user clicks
        let bgColor = '';
        if (selectedOption) {
          if (key === question.correctAnswer) {
            bgColor = 'lightgreen'; // correct one
          } else if (key === selectedOption) {
            bgColor = 'salmon'; // wrong one
          }
        }

        return (
          <div
            key={key}
            onClick={() => setSelectedOption(key)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px 0',
              cursor: 'pointer',
              backgroundColor: bgColor,
            }}
          >
            <strong>{key}:</strong> {value}
          </div>
        );
      })}

      {/* Show result if user clicked an answer */}
      {selectedOption && (
        <p style={{ marginTop: '15px' }}>
          {isCorrect ? "✅ Correct!" : "❌ Wrong Answer"}
        </p>
      )}
    </div>
  );
};

export default GST101Page

