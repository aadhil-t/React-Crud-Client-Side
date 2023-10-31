import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Banner() {
const {name} = useSelector(state => state.user)
  return (
    <Carousel className="rounded-xl">
      <div style={{ position: 'relative' }}>
        <img
          src="/images/wallpaperflare.com_wallpaper (1).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for the text
            color: 'white', // Text color
            padding: '10px', // Padding around the text
          }}
        >
          WELCOME {name}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          src="/images/wallpaperflare.com_wallpaper (73).jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for the text
            color: 'white', // Text color
            padding: '10px', // Padding around the text
          }}
        >
           WELCOME {name}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          src="/images/wallpaperflare.com_wallpaper (85).jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for the text
            color: 'white', // Text color
            padding: '10px', // Padding around the text
          }}
        >
           WELCOME {name}
        </div>
      </div>
    </Carousel>
  );
}
