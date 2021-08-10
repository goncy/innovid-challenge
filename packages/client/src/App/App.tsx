import * as React from "react";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className="window" style={{width: 320, margin: "auto"}}>
        <div className="title-bar">
          <div className="title-bar-text">Innovid challenge</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          <p>Lets get this party started!</p>
        </div>
      </div>
    </main>
  );
};

export default App;
