import './App.css';
import { Form, Field } from 'react-final-form'
import React, {useCallback, useState} from "react";

function App() {
    const [res, setRes]=useState(0);
    const calculate = useCallback((values)=>{
        if (values.gender==="М")
        {console.log(typeof (values.age))
        setRes(420+values.age*0.2-(values.time*0.19338+values.pulse*0.56+(values.weight/(values.height**2)*2.6)))}
    else
        setRes(304+values.age*0.4-(values.time*0.1417+values.pulse*0.32+(values.weight/(values.height**2)*1.1)))

    }, []);
  return (
    <div className="App">
      <Form
          onSubmit={calculate}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                  <div>
                    <label>Пол</label>
                      <div>
                          <label>
                              <Field
                                  name="gender"
                                  component="input"
                                  type="radio"
                                  value="М"
                              />{' '}
                              М
                          </label>
                          <label>
                              <Field
                                  name="gender"
                                  component="input"
                                  type="radio"
                                  value="Ж"
                              />{' '}
                              Ж
                          </label>
                      </div>
                  </div>
                <div>
                  <label>Возраст</label>
                  <Field
                      name="age"
                      component="input"
                      type="number"
                      min="1" max="100"
                      required
                  />
                </div>
                  <div>
                      <label>Время прохождения 2 км в секундах</label>
                      <Field
                          name="time"
                          component="input"
                          type="number"
                          min="300" max="3000"
                          required
                      />
                  </div>
                  <div>
                      <label>Частота сердечных сокращений сразу после завершения дистанции</label>
                      <Field
                          name="pulse"
                          component="input"
                          type="number"
                          min="50" max="220"
                          required
                      />
                  </div>
                  <div>
                      <label>Вес тела в кг</label>
                      <Field
                          name="weight"
                          component="input"
                          type="number"
                          min="30" max="200"
                          required
                      />
                  </div>
                  <div>
                      <label>Рост</label>
                      <Field
                          name="height"
                          component="input"
                          type="number"
                          min="100" max="300"
                          required
                      />
                  </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting || pristine}>
                    посчитать
                  </button>
                  <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                  >
                    очистить
                  </button>
                </div>
                {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                  {res ? <div className="res">{res} <img src="/res.png" alt="table" /> </div> : <></>}
              </form>
          )}
      />
    </div>
  );
}

export default App;
