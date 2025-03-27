import React from 'react'
import Button from './Button'
import { View, Text } from 'react-native'
import { Styles } from '../styles/GlobalStyles'
import { myColors } from '../styles/Colors'

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<number|null>(null);

    // Modificamos la lógica de handleNumberPress
    const handleNumberPress = (buttonValue: string) => {
        // Si hay un resultado previo, reiniciar todo
        if (result !== null) {
            setFirstNumber(buttonValue);
            setResult(null);
            return;
        }
        // Límite de 10 dígitos
        if (firstNumber.length < 10) {
            // Manejo especial para el primer dígito
            setFirstNumber(prev => 
                prev === "0" ? buttonValue : prev + buttonValue
            );
        }
    };
    //Funcion para manejar la operación
    const handleOperationPress = (buttonValue: string) => {
        // Si hay un resultado previo, usarlo como primer número
        if (result !== null) {
            setSecondNumber(result.toString());
            setFirstNumber("");
            setOperation(buttonValue);
            setResult(null);
            return;
        }
        // Si ya hay un primer número
        if (firstNumber) {
            // Si ya hay una operación previa y un segundo número, calcula el resultado
            if (operation && secondNumber) {
                calculateResult();
            }   
            // Establece la nueva operación
            setOperation(buttonValue);
            
            // Mueve el primer número al segundo número
            setSecondNumber(firstNumber);
            
            // Limpia el primer número para nueva entrada
            setFirstNumber("");
        }
    };
    //funcion para limpiar el teclado y la pantalla
    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };
    //Funcion para empoecer la operación y realizar los calculos 
    const calculateResult = () => {
        const num1 = Number(secondNumber);
        const num2 = Number(firstNumber);
        let calculatedResult: number;

        switch(operation) {
            case "+":
                calculatedResult = num1 + num2;
                break;
            case "-":
                calculatedResult = num1 - num2;
                break;
            case "×":
                calculatedResult = num1 * num2;
                break;
            case "÷":
                calculatedResult = num2 !== 0 ? num1 / num2 : 0;
                break;
            default:
                calculatedResult = 0;
        }

        const roundedResult = Number(calculatedResult.toFixed(10));
        
        setResult(roundedResult);
        setFirstNumber(roundedResult.toString());
        setSecondNumber("");
        setOperation("");
    };
    //funcion para obtener el resultado
    const getResult = () => {
        if (firstNumber && secondNumber && operation) {
            calculateResult();
        }
    };

    const firstNumberDisplay = () => {
        // Muestra el resultado si existe
        if (result !== null) {
            return <Text style={result < 99999 ? 
                [Styles.screenFirstNumber, {color: myColors.result}] : 
                [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>
                {result?.toString()}
            </Text>; 
        }
        
        // Muestra el primer número con diferentes estilos según su longitud
        if (firstNumber) {
            return <Text style={
                firstNumber.length < 6 ? Styles.screenFirstNumber : 
                firstNumber.length < 8 ? 
                [Styles.screenFirstNumber, { fontSize: 70 }] : 
                [Styles.screenFirstNumber, { fontSize: 50 }]
            }>
                {firstNumber}
            </Text>;
        }
        // Muestra 0 por defecto
        return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    };
    
    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: '98%',
                    justifyContent: "flex-end",
                    alignSelf: 'center',
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            
            <View style={Styles.row}>
                <Button title="C" isGray onPress={() => clear()} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="÷" isBlue onPress={() => handleOperationPress("÷")} />
            </View>
        
            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="×" isBlue onPress={() => handleOperationPress("×")} />
            </View>
        
            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
        
            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
        
            <View style={Styles.row}>
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="⌫" onPress={() => setFirstNumber(prev => prev.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    );      
}