import React, { useState } from 'react';

const App = () => {
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);

  // Array of playful follow-up messages for the 'No' button
  const noPhrases = [
    "No",
    "Are you sure, Peach?",
    "Really sure?",
    "Think about it again!",
    "Don't do this to me!",
    "I'm gonna cry...",
    "You're breaking my heart 💔",
    "Please say yes!",
    "Okay, I'm officially begging 🥺",
    "Just click Yes already! 😂"
  ];

  // The 5-page story array. Edit each string to be a part of your 5-page journey!
  const storyPages = [
    "From the very first moment we met, everything just clicked. Every laugh we've shared, every late-night conversation, and every little moment has meant the absolute world to me.",
    "I still remember the first day we met at Moscow Villa 😂. That night was honestly one of the best nights I've ever experienced. Oh, you forgot it was at night? Well, I didn't, because that night is something I can never forget. ❤️",
    "The day you trusted me with something so precious to you, it touched my heart deeply. It reminded me of how special you are and made me fall in love with you🥺.",
    "We've built such an amazing connection, and I cherish every memory we've made. I truly appreciate you more than words can express.❤️",
    "It's taken me a little while to gather the courage, but I finally realized I can't wait another day to ask you something important...🥺"
  ];

  // The 'Yes' button grows every time she clicks 'No'
  const yesButtonSize = noCount * 20 + 16;

  const handleNext = () => setStep(step + 1);
  const handleNo = () => setNoCount(noCount + 1);

  // DATING DATE LOGIC:
  // It grabs today's date dynamically. Once she says yes, replace `Date.now()` 
  // with a hardcoded string like `"2026-06-05"` so it stays locked forever!
  const datingDate = new Date(Date.now()).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 selection:bg-pink-300">
      <div className="max-w-2xl p-8 text-center bg-white shadow-2xl rounded-3xl mx-4 border border-pink-100">
        
        {/* SLIDE 0: Welcome */}
        {step === 0 && (
          <div className="space-y-8 animate-fade-in">
            {/* Replace this link with your own image link */}
            <img 
              src="https://res.cloudinary.com/ddnxhqqkq/image/upload/v1780696093/WhatsApp_Image_2026-06-05_at_9.41.25_PM_wcetph.jpg" 
              alt="Welcome" 
              className="w-40 h-40 object-cover mx-auto rounded-full border-4 border-pink-200 shadow-md"
            />
            <h1 className="text-5xl font-extrabold text-pink-500 tracking-tight">
              Welcome, Tess 🍑✨
            </h1>
            <p className="text-gray-500 text-lg">I made a little something for you...</p>
            <button
              onClick={handleNext}
              className="mt-8 px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-500/30"
            >
              Let's Go &rarr;
            </button>
          </div>
        )}

        {/* SLIDES 1 to 5: The Romantic Story */}
        {step >= 1 && step <= 5 && (
          <div className="space-y-6 animate-fade-in text-left">
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 border-pink-100 flex justify-between items-center">
              <span>Our Journey ❤️</span>
              <span className="text-sm font-normal text-pink-400">Part {step} of 5</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed min-h-[120px]">
              <p>{storyPages[step - 1]}</p>
            </div>
            <div className="text-center pt-4">
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-500/30"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 6: The Question */}
        {step === 6 && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800">
              Will you be my girlfriend? 🥺
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10 min-h-[120px]">
              <button
                className="bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
                style={{ fontSize: yesButtonSize, padding: '10px 20px' }}
                onClick={handleNext}
              >
                Yes!
              </button>
              
              <button
                className="bg-red-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/30 absolute"
                style={{ 
                    position: noCount > 0 ? 'relative' : 'static',
                    zIndex: 10
                }}
                onClick={handleNo}
              >
                {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 7: The Success Message */}
        {step === 7 && (
          <div className="space-y-1 animate-fade-in">
            {/* The Two Images inside a big love emoji */}
            <div className="relative inline-block pb-4">
              <div className="text-[200px] drop-shadow-xl leading-none">❤️</div>
              
              <div className="absolute inset-0 flex items-center justify-center gap-1 pb-4">
                <img 
                  src="https://res.cloudinary.com/ddnxhqqkq/image/upload/v1780696094/WhatsApp_Image_2026-06-05_at_9.43.40_PM_t4lxgl.jpg" 
                  alt="You" 
                  className="w-24 h-24 rounded-full border-2 border-white object-cover shadow-sm z-10 -mr-3"
                />
                <img 
                  src="https://res.cloudinary.com/ddnxhqqkq/image/upload/v1780696093/WhatsApp_Image_2026-06-05_at_9.41.25_PM_1_mb4aru.jpg" 
                  alt="Me" 
                  className="w-24 h-24 rounded-full border-2 border-white object-cover shadow-sm z-10"
                />
              </div>

              {/* The TessMaleeq Badge */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
                <span className="bg-white/95 text-pink-500 font-extrabold px-6 py-1.5 rounded-full shadow-lg border border-pink-100 tracking-wide">
                  TessMaleeq ✨
                </span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-pink-500 mt-2">
              YES!!! 
            </h1>
            
            {/* The Record Date */}
            <div className="bg-pink-100 text-pink-600 py-2 px-4 rounded-full inline-block font-semibold shadow-inner mt-2">
              Official since: {datingDate}
            </div>

            <p className="text-xl text-gray-600 font-medium mt-4">
              You just made me the happiest guy in the world! ❤️
            </p>
            <p className="text-gray-500">
              I promise to keep making you smile, to keep building beautiful memories with you, and to cherish you every single day. I love you, Tess❤️
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;