import React, { useRef } from 'react';

export default function FeedbackForm() {
  const nameRef = useRef();
  const courseRef = useRef();
  const msgRef = useRef();
  const ratingRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = `
      Name: ${nameRef.current.value}
      Course: ${courseRef.current.value}
      Message: ${msgRef.current.value}
      Rating: ${ratingRef.current.value}
    `;

    alert(data);
    e.target.reset(); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Course Feedback</h2>
      <input ref={nameRef} placeholder="Student Name" required /><br/>
      <input ref={courseRef} placeholder="Course Name" required /><br/>
      <textarea ref={msgRef} placeholder="Feedback Message" required /><br/>
      <input ref={ratingRef} type="number" min="1" max="5" placeholder="Rating (1-5)" required /><br/>
      
      <button type="submit">Submit Feedback</button>
    </form>
  );
}