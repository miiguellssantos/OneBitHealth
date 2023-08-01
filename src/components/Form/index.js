import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc == null) {
      setErrorMessage("Campo obrigatório!");
      Vibration.vibrate();
    }
  }

  function validation() {
    if (weight != null && height != null) {
      imcCalculator();
      setWeight(null);
      setHeight(null);
      setMessageImc("Seu Imc é igual a:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura");
    }
  }

  return (
    <ScrollView
      style={styles.scrollView}
      automaticallyAdjustKeyboardInsets={true}
    >
      <View style={styles.formContext}>
        {imc == null ? (
          <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex. 1.75"
              keyboardType="numeric"
              onChangeText={setHeight}
              value={height}
            />
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex. 75.375"
              keyboardType="numeric"
              onChangeText={setWeight}
              value={weight}
            />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validation()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <View style={styles.exhibitionResult}>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validation()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        )}
        <FlatList
        showsVerticalScrollIndicator={false}
          style={styles.listImc}
          data={imcList.reverse()}
          renderItem={({item}) => {
            return(
                <Text style={styles.resultImcItem}>
                  <Text style={styles.textResultItem}>Resultado IMC =</Text>
                  {item.imc}
                </Text>
                
            )
          }}
          keyExtractor={(item) => {
            item.id
          }}
        />

      </View>
    </ScrollView>
  );
}
