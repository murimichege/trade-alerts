import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
   
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    textInputStyle: {
        borderColor: 'transparent',
        height: 40,
        width: 150,
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: 'lightgrey',
        padding: 4,
        justifyContent: "center",
        paddingBottom: 4,
        borderRadius: 5

    
    },
    messageStyle: {
        borderColor: 'transparent',
        height: 100,
        width: 200,
        justifyContent: "center",
        paddingLeft: 15,
        backgroundColor: 'lightgrey',
        padding: 2,
        borderRadius: 5

    },
      modal: {
          alignItems: "center"
      },
      inputWrap : {
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10
      },
      instrument: {
        flex:1,
       // maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        justifyContent: 'center',
        alignItems:'center',    
        margin:5
      }

    
})
