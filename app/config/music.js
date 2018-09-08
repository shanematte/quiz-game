
import Sound from 'react-native-sound'

const musicAmbient = new Sound('november.mp3', Sound.MAIN_BUNDLE, (error) => {
  	if (error) {
    	console.log('failed to load the sound', error)
    	return
  	}
})

const tap = new Sound('tap.wav', Sound.MAIN_BUNDLE, (error) => {
  	if (error) {
    	console.log('failed to load the sound', error)
    	return
  	}
})

const packSounds = {
	tap,
	musicAmbient
}

export default packSounds