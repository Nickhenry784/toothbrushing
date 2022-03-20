import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  appBar: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  shoppingButton: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  shoppingImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  textBack: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textClock: {
    fontSize: 120,
    color: 'black',
    fontWeight: 'bold',
  },

  clockStyle: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  minuteView: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  startImage: {
    width: 120,
    height: 40,
  },

  teethImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },

  viewCenter: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  clockMockup: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
});

export const musicsStyle = StyleSheet.create({
  musicWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
  },
  musicButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
  musicButtonTitle: {
    color: 'green',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
