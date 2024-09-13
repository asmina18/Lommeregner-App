import { useState } from "react"; 
import { Button } from "./Button"; 
import styles from "../styles/Calculator.module.scss"; 

export const Calculator = () => {
  // Definerer to tilstande: 'input' til at gemme brugerens input og 'result' til at gemme beregningens resultat
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(null); 

  // Funktion til at opdatere input, når en knap trykkes
  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value); // Opdaterer 'input' ved at tilføje den nye værdi til den eksisterende streng
  };

  // Funktion til at nulstille input og resultat
  const clearInput = () => {
    setInput(""); // Nulstil brugerinput
    setResult(0); // Nulstil resultatet
  };

  // Funktion til at beregne resultatet af det aktuelle input
  const calculateResult = () => {
    try {
      console.log("Current input:", input); // Tilføj denne linje til debugging
      const evalResult = Function("return " + input)();
      setResult(evalResult);
      console.log("Calculated result:", evalResult); //det beregnede resultat
    } catch (error) {
      setResult("fjel");
      // console.log("Error calculating result:", error);
    }
  };

  // Array, der indeholder alle knapperne for lommeregneren
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"];


  return (
    <div className={styles.calculator}>
      <div className={styles.input}>
        {/* Input-felt til visning af det nuværende brugerinput */}
        <input type="text" value={input} readOnly placeholder="0" />
      </div>
      <div className={styles.buttons}>
        {/* Knappen "C" til at rydde input og resultat*/}
        <button className={styles['button-clear']} onClick={clearInput}>C</button>
        {/* Generering af tal og operator-knapper baseret på 'buttons' arrayet */}
        {buttons.map((buttonText) => (
          <Button key={buttonText} label={buttonText} onClick={() => handleInput(buttonText)} />
        ))}
        {/* Knappen "=" for at beregne resultatet, */}
        <button className={styles['button-equal']} onClick={calculateResult}>=</button>
      </div>
      <div className={styles.result}>
        {/* Viser resultatet, hvis det ikke er null */}
        {result !== null && <span>Result: {result}</span>}
      </div>
    </div>
  );
};
