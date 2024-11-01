import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Signup() {
  const particlesInit = async (main) => {
    // You can customize particles further if desired
    await loadFull(main);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#f0f0f0" } },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 5, random: true },
            size: { value: 3 },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "out" },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Sign-up Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
































































































// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
        
//         <form className="space-y-6">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="w-full border rounded px-3 py-2 mt-1" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input type="password" className="w-full border rounded px-3 py-2 mt-1" />
//           </div>
//           <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default App
