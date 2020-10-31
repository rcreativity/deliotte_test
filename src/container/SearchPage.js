import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import Logo from '../components/logo'
import Button from '../components/button'
import Input from '../components/input'
import Li from '../components/list'

export default function SearchPage() {
  const [state, _setstate] = useState({
    logo:{
      link: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      altText: 'logo'
    },
    languages: ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"],
    results: ["Videos", "HD WallPapers", "News", "Cool Photos", "Nature Songs", "when is new movie get released"]
  })

  const [showSearch, setShowSearch] = useState(false)

  const showSearcList = () =>{
    setShowSearch(true)
  }

  const hideSearcList = () =>{
    setShowSearch(false)
  }
   

  return (
    <div className="container">
        <Logo link={state.logo.link} alt={state.logo.link}/>
        <div className="search">
          <div className="search-icon">
           <Input 
            onFocus={showSearcList} 
            onBlur={hideSearcList} 
            />
            <div className="search">
             <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="microphone">
             <FontAwesomeIcon icon={faMicrophone} />
            </div>
            {showSearch && (
              <div className="search-list-container">
              <ul className="search-list-group">
                <Li value="TRY SEARCHING FOR" />
                {
                  state.results.map((value, index)=>{
                    return <Li value={value} index={index} icon />
                  })
                }
              </ul>
              <div className="button-group">
                <Button name="Google Search" />
                <Button name="I'm Feeling lucky" />
              </div>
            </div>
            )}
            

          </div>

        </div>
        <div className="button-group">
          <Button name="Google Search" />
          <Button name="I'm Feeling lucky" />
        </div>
        <div className="languages-list">
          <Li value="Google offered in:" />
          {
            state.languages.map((value, index)=>{
              return <Li value={value} index={index} />
            })
          }
        </div>
      </div>
  )
}
