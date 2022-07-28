import { Container, Content, Footer, Header } from 'rsuite';
import './App.css';
import PrincipalFooter from './components/footers/principalFooter';
import PrincipalHeader from './components/headers/principalHeader';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Container>
        <Header>
          <PrincipalHeader />
        </Header>
        <Content className='principal-page'>
          <Home />
        </Content>
        <Footer className='principal-footer'>
          <PrincipalFooter />
        </Footer>
      </Container>
    </>
  );
}

export default App;
