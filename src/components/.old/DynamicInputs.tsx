// // src/DynamicInputs.js
// import React, { useState } from 'react';
// import { Button, Box } from '@mui/material';
// import Counter from './Counter'; // Import the Counter component

// const DynamicInputs = () => {
//   const [counters, setCounters] = useState([{ count: 0 }]);

//   const handleAddCounter = () => {
//     setCounters([...counters, { count: 0 }]);
//   };

//   const handleIncrement = (index) => {
//     const newCounters = counters.map((counter, i) => {
//       if (i === index) {
//         return { ...counter, count: counter.count + 1 };
//       }
//       return counter;
//     });
//     setCounters(newCounters);
//   };

//   const handleDecrement = (index) => {
//     const newCounters = counters.map((counter, i) => {
//       if (i === index) {
//         return { ...counter, count: counter.count - 1 };
//       }
//       return counter;
//     });
//     setCounters(newCounters);
//   };

//   const handleSave = () => {
//     // Handle save logic here
//     console.log('Counters:', counters);
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       {counters.map((counter, index) => (
//         <Counter
//           key={index}
//           count={counter.count}
//           onIncrement={() => handleIncrement(index)}
//           onDecrement={() => handleDecrement(index)}
//         />
//       ))}
//       <Button variant="contained" color="primary" onClick={handleAddCounter}>
//         Add Counter
//       </Button>
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={handleSave}
//         sx={{ ml: 2 }}
//       >
//         Save
//       </Button>
//     </Box>
//   );
// };

// export default DynamicInputs;