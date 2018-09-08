import { AppRegistry } from 'react-native'
import Root from './app/index'

console.disableYellowBox = true
console.ignoredYellowBox = ['Setting a timer']

AppRegistry.registerComponent('app', () => Root)
