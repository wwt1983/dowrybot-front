import React from "react";
import "../../App.css";
import { getInstruction } from "./fn";
import "./Instruction.css";
import { WEB_APP } from "./constants";

const Instruction = () => {
  return (
    <div className="instruction-container">
      <h4
        className="heading"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Пример раздачи
      </h4>
      <div className="instruction-list">
        {getInstruction().map((x, index) => (
          <div className="instruction-item" key={index}>
            {x.text && (
              <div
                className="instruction-text"
                style={{ whiteSpace: "pre-wrap", textAlign: "left" }}
              >
                {x.text} <br />
              </div>
            )}

            {x.img && Array.isArray(x.img) && (
              <div className="instruction-images">
                {x.img.map((imgSrc, imgIndex) => (
                  <div className="instruction-image" key={imgIndex}>
                    <img
                      src={WEB_APP + imgSrc}
                      alt={`Шаг ${index + 1}, Изображение ${imgIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instruction;
