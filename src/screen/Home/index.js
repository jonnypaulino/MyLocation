
import {View} from 'react-native';
import TopBar from '../../components/TopBar';
import Status from './Status';
import IsAtive from './IsAtive';
import Times from './TImes';
import color from '../../style/colors';
import TopBarHome from '../../components/TopBar';


const Home  = () => {
  return (
    <View>
      <TopBarHome name={'Olá, bem vindo'} />
      <Status />
      <View style={{height: 2, backgroundColor: color.grayClear, width: '100%'}} />
      <IsAtive />
      <Times />
    </View>
  );
}

export default Home;
