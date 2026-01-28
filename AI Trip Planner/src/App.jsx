// all the imports 
//lib imports 
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// file functions (coustome made)
import {getAIResponse} from './theresponse.js'
import MakeCards from './templateCard'; 
 
// these are the assests for images , sources and the SVG's
let asset = {
  logo_url : './logo.png',
  scene : './scene.png',
  defaultplace : './default.png'
}



// hamburger function 

function HamburgerMenu() {
  // State to handle open/close toggle
  const [isOpen, setIsOpen] = useState(false);

  // Fake data for the menu
  const menuItems = [
    { id: 1, label: 'Home', link: '#' },
    { id: 2, label: 'My Trips', link: '#' },
    { id: 3, label: 'Saved Places', link: '#' },
    { id: 4, label: 'Settings', link: '#' },
  ];

  return (
    <div className="relative">
      {/* The Trigger Button (The 3 lines) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className='w-[35px] h-[35px] cursor-pointer ml-[10px] flex flex-col items-center justify-center gap-[4px] border-2 border-red-600 rounded-md'
      >
        <span className='w-[20px] h-[2px] bg-black block'></span>
        <span className='w-[20px] h-[2px] bg-black block'></span>
        <span className='w-[20px] h-[2px] bg-black block'></span>
      </div>

      {/* The Actual Menu - Only shows when isOpen is true */}
      {isOpen && (
        <ul className='absolute left-2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col p-2'>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.link} 
                className="block p-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// navbar 

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          T
        </div>
        <span className="text-xl font-extrabold tracking-tight text-gray-800">
          Trip<span className="text-blue-600">AI</span>
        </span>
      </div>

      {/* 2. DESKTOP LINKS (Hidden on mobile) */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Explore</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
      </ul>

      {/* 3. MOBILE MENU & BUTTONS */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95">
          Sign In
        </button>
        
        {/* Your Hamburger Component */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>

    </nav>
  );
}

// the main function to rentder the whole page 
function Hello() {
  // 1. State for Form
  let [formdata, setform] = useState({
    destination: "",
    duriation: "", 
    budget: "moderate",
    people: "",
    vibe: "history",
    desc: ""
  });

  // 2. State for Results (This holds the JSON from AI)
  const [tripResult, setTripResult] = useState(null);
  const [loading, setLoading] = useState(false); // thsi is the loadsing part 

  // 3. submit part - [prevent loading the page , make prompt , fetch reasult  ]  (Logic ONLY)
  let Handel_the_submit = async function (e) {
    e.preventDefault();
     // Start the loading animation 
    setLoading(true);

    // Construct the prompt
    let aiprompt = `you are a tool for a trip planner , your work is to find the place for trip over givven information ,The data you provide should be in json format , the destination for the trip is in ${formdata.destination} for ${formdata.duriation} days,with the budget under ${formdata.budget} and with the number of people is ${formdata.people} and the type& vibe should be ${formdata.vibe} and the context for the place is : ${formdata.desc},give me 5 things , the destination name ,  destinaion location in a string , detination approx budget , the ecaxt enviroment and its desc, image url(images.unsplash.com) of the place and the star reviews ,   make sure the data is in json format`;

    // Fetch from AI
    try {
      let result = await getAIResponse(aiprompt);
      // filter data andf make that in JSON form 
      const cleanJsonString = result.replace(/```json|```/g, "").trim();
      const parsedData = JSON.parse(cleanJsonString);
     console.log(parsedData);
     
      //  CRITICAL FIX: Save data to state (Triggers re-render)
      // this part is important , the data is generated by ai so there are might chances it change the array or data name , 
      // these are the mostly occors names 
     if(parsedData.trip_destination_suggestions || parsedData.recommended_places || parsedData.trip_plan || parsedData.trip_destinations) {
    setTripResult(parsedData.trip_destination_suggestions);
  } else if (Array.isArray(parsedData)) {
    // If the response IS the array
    setTripResult(parsedData);
  } else {
    // If the data is nested differently, we might need to look at it
    console.log("Check the structure:", parsedData);
  }
    } catch (error) {
      console.error("Error parsing AI result:", error);
    } finally {
      // Stop the loading animation 
      setLoading(false); 
    }
  };

  // changes - change data in form in real time 
  let change_happned = (e) => {
    setform({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
// templating and deginng starts from here

    <div className="w-screen h-screen overflow-x-hidden font-sans">

      {/* navbar - hamburger - logo and nav options  */}
     <Navbar/>

      {/* Main Content */}
      <div className='flex flex-col items-center w-screen min-h-[60vh] relative'>
        
        {/* Background Image */}
        <img src={asset.scene} className='absolute top-[220px] left-1/2 -translate-x-1/2 w-200 h-auto -z-10' alt='imag' />

        {/* The Form Box */}
        <div className='relative flex flex-col items-center justify-around w-[70%] h-[200px] border-2 border-[#4747ed] rounded-[12px] bg-white/80 backdrop-blur-sm mb-10 mt-20'>
          
          {/* Inputs */}
          <div className='w-[99%] flex justify-center gap-4 items-center flex-wrap p-2'>
            <input type='text' name='destination' placeholder='Destination' onChange={change_happned} className='p-1 border border-gray-600 rounded-md' />
            <input type='number' name='duriation' placeholder='Days' onChange={change_happned} className='w-20 p-1 border border-gray-600 rounded-md' />
            <input type='text' name='budget' placeholder='Budget' onChange={change_happned} className='p-1 border border-gray-600 rounded-md' />
            <input type='text' name='people' placeholder='People' onChange={change_happned} className='p-1 border border-gray-600 rounded-md' />
            
            <select name='vibe' onChange={change_happned} className='p-2 border border-gray-600 rounded-md'>
              <option value="history">History</option>
              <option value="modern">Modern</option>
            </select>
          </div>

          {/* Text Area */}
          <textarea
            className='w-[99%] h-[33%] p-4 bg-transparent border-none outline-none resize-none'
            placeholder='Describe your trip...' name='desc' onChange={change_happned}
          ></textarea>

          {/* Submit Button */}
          <button 
             onClick={Handel_the_submit} // 
             className='absolute bottom-4 right-4 w-10 h-10 bg-[#4747ed] rounded-full flex justify-center items-center cursor-pointer'>
             <FontAwesomeIcon icon={faPaperPlane} className='text-white rotate-45' />
          </button>
        </div>

        {/* RESULT SECTION (This replaces the <Handel_the_submit/> tag) */}
        {/* If tripResult has data, show the card. Otherwise, show nothing. */}
        <div className="w-[70%] mb-10">
            {loading && <p className="text-center">Planning your trip...</p>}
            
            {/* Remove the empty 'shell' card and use this instead */}
          <div className="results-list mt-8">
             {tripResult && tripResult.map((item, index) => (
               <MakeCards key={index} data={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hello;