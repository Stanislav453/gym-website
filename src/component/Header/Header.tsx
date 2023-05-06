import "./Header.scss"
import { Navigation } from '../Navigation/Navigation'
import { SlideShow } from "../SlideShow/SlideShow";

export const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header-banner">
        <div className="text-container">
          <div className="text">
            <h1 className="hight-text">adela završanová</h1>
            <p className="under-hight-text">Personal & online coach</p>
            <div className="under-banner">
              <div className="photo-container">
                <SlideShow />
              </div>
              <div className="quote-container">
                <p className="quote-text">
                  Byť zdravý a fit pre mňa neznamená mať len pekné telo. Ale sa
                  aj dobre cítiť v akomkoľvek období života.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
