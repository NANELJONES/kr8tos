/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      animation:{

        "spin-slow":"spin 12s linear infinite",
      },
      fontFamily:{

        Montserrat : ["Montserrat"],
        Garamond: ["Garamond"],
        Playfair:["Playfair Display"],
      },


      keyframes:{
        wiggle1: {
          '0%, 100%': { 
            transform: 'translateX(30px)',
           
            
          },
          '50%': { 
            transform: 'translateX(4px)',
         
            
          },
        },

                wiggle: {
          '0%, 100%': { 
            transform: 'translateX(10px)',
            transform: 'translateY(30px)'
            
          },
          '50%': { 
            transform: 'translateX(3px)',
            transform: 'translateY(15px)',
            
          },
        }











      },

      boxShadow:{
        "3xl":"0 50px 70px -30px rgba(45,91,253,1)",
      }





     


    },
    
    fontSize:{
      resp: "3vw",
      resp2: "1.5vw"
    },


  

    colors:{
      background:"#1F1F1F",
      white:"#FFFFFF",
      pink:"#D82C5F",
      black:"#0000",
      s_red:"#FF725E",
      k_red:"#D82C5F",
      k_blue:"#573967",
      socials_bg:"rgba(255, 255 , 250 ,0.1)",

      marketing_outline:" linear-gradient(160.4deg, #4E6CF6 13.13%, #EA2382 116.14%);"

    }
  },
  plugins: [],
}
