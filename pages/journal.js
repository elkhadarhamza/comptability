import Journal from "./components/Journal"
import Menu from "./components/Menu"
import AppContextProvider from "./components/AppContext"

export default function journal() {
    return (                
            <AppContextProvider>
            <Menu />           
                <Journal/>
            </AppContextProvider>        
    );
}