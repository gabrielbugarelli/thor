import Header from "../Header";
import './style.css'

const Layout = ({children}) => {
  return (
    <div className='container'>
      <Header className='header' name="Thor"/>
      
      <div className='children'>
        {children}
      </div>
      
    </div>
  )
}

export default Layout;