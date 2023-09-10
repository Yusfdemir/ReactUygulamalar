import Home from './Home';
import {SiteContext,AuthContext} from './context'


function App() {
  // Bu şekilde Auth provider Site providerdaki değerlere ulaşabilir ama SiteProvide AuthProviderdaki değerlere ulaşamaz ondan dolayı sarmala işlemini doğru sırada yapmamız lazım
  return (
    <SiteContext >
      <AuthContext>
        <Home/>
      </AuthContext>
    </SiteContext>
  );
}

export default App;
