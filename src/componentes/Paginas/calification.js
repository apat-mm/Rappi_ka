import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#eb5e1c",
  grey: "#a9a9a9",
  white: "#fff"

};

export const Calification = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <h2 style={styles.title}> Califícanos </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={32}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{ marginRight: 10, cursor: "pointer" }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Dejános un comentario para conocer tu experiencia"
        style={styles.textarea} />

      <button style={styles.button}>Enviar</button>

    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  background_c: {
    background: "white",
    margin: "30px 0",
    padding: "10px",
    minHeight: 100,
    width: 350,
    justify_content: "center",
  },
  title: {
    text_align: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 200,
    padding: 10,
    background: "#f08f4e"
  }

};

