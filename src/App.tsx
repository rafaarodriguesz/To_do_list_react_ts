import React, {} from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

// CSS
import styles from './App.module.css'


function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform btnText="Criar tarefa"/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <Tasklist />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
